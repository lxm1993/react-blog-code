import React from 'react';
import { Link } from 'react-router-dom';
import TagList, { Label } from './TagList';
import './index.scss';

interface Props {
    githubRepo: string;
    postItem: {
        title: string;
        id: number;
        body: string;
        date: string;
        labels: Label[];
    };
}

const PostItem = (props: Props) => {
    const { githubRepo, postItem } = props;
    return (
        <div className="post-item-content">
            <Link className="post-item-title" to={`/article/${githubRepo}/${postItem.id}`}>{`${postItem.title}`}</Link>
            <div className="post-item-des">
                <TagList labels={postItem.labels}/>
                <span className="post-time">{postItem.date}</span>
            </div>
            <div className="post-item-body">{postItem.body.slice(0 ,100)}...</div>
        </div>
    )
};

export default PostItem;