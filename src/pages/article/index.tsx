import React, { useState, useEffect } from 'react';
import { Divider } from 'antd';
import TagList from '../../components/PostItem/TagList';
import marked from "marked";
import { config } from "../../config";
import './index.scss';

interface Props {}

const Article = (props: Props) => {
    const path = window.location.href;
    const pathParts = path.split("/");
    const pathPartsLen = pathParts.length;
    const id = pathParts[pathPartsLen-1];
    const repo = pathParts[pathPartsLen-2];

    const [articleContent, setArticleContent] = useState<any>({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        const url = `https://api.github.com/repos/${config.githubUserName}/${repo}/issues/${id}`;
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
        // 更改pre border 的颜色
        const borderColor = issue.labels && issue.labels[0] && issue.labels[0].color || '#2f845e';
        htmlContent = htmlContent.replace(/<pre>/g, `<pre style="border-top: 6px solid #${borderColor};">`)
        // htmlContent = htmlContent.replace(/<strong>/g, `<strong style="color: #${borderColor};">`)
        //匹配目录
        const toc = issue.body.match(/#{1,6}\s(.+)/g) || [];
        const tables = toc.map((item: any) => ({
            level: item.split("#").length - 1,
            title: item.replace(/#{1,6}/, "").trim(),
        }));
        //给html中的h加id
        let tocHtml = htmlContent.match(/<(h\d).*?>.*?<\/h\d>/g) || [];
        tocHtml.forEach((item: any, index: number) => {
            const _toc = `<div id='${(tables[index] || {}).title}'>${item} </div>`;
            htmlContent = htmlContent.replace(item, _toc);
        });
        return { htmlContent, tables };
    }

    if (!articleContent.created_at) {
        return null;
    }
    return (
        <div>
            <article className="article-wraper">
                <h1 className="article-title">{articleContent.title}</h1>
                <div className="article-time">
                    {articleContent.created_at && articleContent.created_at.substr(0, 10)}
                    <TagList labels={articleContent.labels} />
                </div>
                <Divider />
                <div className="article-content" dangerouslySetInnerHTML={{ __html: articleContent.htmlContent }} />
            </article>
            <div className="article-comment"
                style={{
                    color: `#${articleContent.labels && articleContent.labels[0] && articleContent.labels[0].color}`,
                }}
                onClick={() => {
                    window.open(articleContent.html_url)
                }}>
                原文地址
            </div>
        </div>
    )
};


export default Article;