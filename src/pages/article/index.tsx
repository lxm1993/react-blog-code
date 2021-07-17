import React, { useState, useEffect } from 'react';
import { Layout, Divider } from 'antd';
import marked from "marked";
import PageHeader from '../../components/PageHeader'
import PageSider from '../../components/PageSider'
import { config } from "../../config";

const { Content } = Layout;

interface Props {
}

const Article = (props: Props) => {
    const path = window.location.href;
    const id = path.split("/").pop();

    const [articleContent, setArticleContent] = useState<any>({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        const url = `https://api.github.com/repos/${config.githubUserName}/${config.githubRepo}/issues/${id}`;
        fetch(url)
            .then((resp) => resp.json())
            .then((issue) => {
                const { htmlContent, tables } = handleAnchor(issue);
                setArticleContent({
                    ...issue,
                    htmlContent,
                    tables
                })
            });
    }

    const handleAnchor = (issue: any) => {
        if (!issue || !issue.body) {
            return { htmlContent: '', tables: [] };
        }
        let htmlContent = marked(issue.body);
        //匹配目录
        const toc = issue.body.match(/#{1,6}\s(.+)/g) || [];
        const tables = toc.map((item: any) => ({
            level: item.split("#").length - 1,
            title: item.replace(/#{1,6}/, "").trim(),
        }));
        //给html中的h加id
        let tocHtml = htmlContent.match(/<(h\d).*?>.*?<\/h\d>/g) || [];
        tocHtml.forEach((item: any, index: number) => {
            const _toc = `<div id='${tables[index].title}'>${item} </div>`;
            htmlContent = htmlContent.replace(item, _toc);
        });
        return { htmlContent, tables };
    }

    if (!articleContent.created_at) {
        return null;
    }
    return (
        <Layout>
            <PageHeader index={0} />
            <Layout>
                <PageSider />
                <Content className="page-content">
                    <article className="article-wraper">
                        <h1 className="article-title">{articleContent.title}</h1>
                        <div className="article-time">{articleContent.created_at && articleContent.created_at.substr(0, 10)}</div>
                        <Divider />
                        <div className="article-content" dangerouslySetInnerHTML={{ __html: articleContent.htmlContent }} />
                    </article>
                    <div className="article-comment" onClick={() => (window.location.href = articleContent.html_url)}>
                        原文地址
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
};


export default Article;