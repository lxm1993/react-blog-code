import React from 'react';
import { Link } from 'react-router-dom';
import TagList, { Label } from './TagList';
import './index.scss';

interface Props {
    githubRepo: string;
    postItem: {
        title: string;
        id: number;
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
                <span className="post-time">{postItem.date}</span>
                <TagList labels={postItem.labels}/>
            </div>
        </div>
    )
};

export default PostItem;