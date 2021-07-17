import React from 'react';
import { Layout, Tag } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

interface Label {
    color: string;
    name: string;
}
interface Props {
    postItem: {
        title: string;
        id: number;
        date: string;
        labels: Label[];
    };
}

const PageHeader = (props: Props) => {
    const { postItem } = props;
    return (
        <div className="post-item-content">
            <Link className="post-item-title" to={`/article/${postItem.id}`}>{`${postItem.title}`}</Link>
            <div className="post-item-des">
                <span className="post-time">{postItem.date}</span>
                {
                    postItem.labels.map((label: Label) => {
                        return <Tag
                            className="post-item-tag"
                            color="red"
                        >
                            {label.name}</Tag>
                    })
                }
            </div>
        </div>
    )
};


export default PageHeader;