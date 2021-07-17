import React, { useEffect, useState } from 'react';
import { Layout, List, Spin } from 'antd';
import PageHeader from '../../components/PageHeader'
import PageSider from '../../components/PageSider'
import PostItem from '../../components/PostItem'
import { config } from "../../config";



const { Content } = Layout;

const Home = () => {
    const [artList, setArtList] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        const url = `https://api.github.com/repos/${config.githubUserName}/${config.githubRepo}/issues`;
        fetch(url)
            .then((resp) => {
                setLoading(false);
                return resp.json();
            })
            .then((data) => {
                setLoading(false);
                if(!Array.isArray(data)){
                    setArtList([]);
                    return;
                }
                const posts = data
                    .filter((item: any) => item.state === "open")
                    .map((item: any) => {
                        return {
                            id: item.number,
                            title: item.title,
                            labels: item.labels,
                            url: item.html_url,
                            date: item.created_at.substring(0, 10),
                        };
                    });
                setArtList(posts);
            });
    }
    return (
        <Layout>
            <PageHeader index={0} />
            <Layout>
                <PageSider />
                <Content className="page-content">
                    {loading && <Spin/>}
                    <List
                        bordered={false}
                        dataSource={artList}
                        locale={{emptyText: "敬请期待哦...."}}
                        renderItem={(postItem: any, i: number) => (
                            <List.Item>
                                <PostItem postItem={postItem}/>
                            </List.Item>
                        )}
                    />
                </Content>
            </Layout>
        </Layout>
    )
};


export default Home;