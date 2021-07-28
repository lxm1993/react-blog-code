import React, { useEffect, useState } from 'react';
import { Divider, Timeline, Spin } from 'antd';
import PostItem from '../PostItem/index'
import { fetchPostList } from '../../utils/fetch';
import { NotFond } from '../../App';
import './index.scss';

interface artListMap {
    [prop: string]: any;
}

interface Props {
    githubRepo: string;
}


const ArtList = (props: Props) => {
    const [artListMap, setArtListMap] = useState<artListMap>({});
    const [loading, setLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            let articleMap: artListMap = await fetchPostList(props.githubRepo);
            setLoading(false);
            setArtListMap(articleMap);
        } catch (error) {
            setLoading(false);
            setIsError(true);
        }
    }
    return (
        <div className="artlist-wraper">
            {isError ? <NotFond /> : null}
            {loading && <Spin />}
            {
                Object.keys(artListMap).map((label: string) => {
                    const { color, description, artList } = artListMap[label];
                    return (
                        <div key={label}>
                            <h1 className="catagory-title">
                                {label}<span className="catagory-description">{description}</span>
                            </h1>
                            <Divider />
                            <Timeline className="catagory-articles">
                                {
                                    artList.map((postItem: any) => (
                                        <Timeline.Item
                                            key={postItem.id}
                                            color={`#${color}`}>
                                            <PostItem
                                                githubRepo={props.githubRepo}
                                                postItem={postItem} />
                                        </Timeline.Item>
                                    ))
                                }
                            </Timeline>
                        </div>
                    )
                })
            }
        </div>
    )
};


export default ArtList;