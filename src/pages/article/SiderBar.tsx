import React from 'react';

interface Props {
    changeRoute: Function;
    curAnchorname: string;
    directorys: {
        level: number;
        title: string;
    }[];
}

const PageHeader = (props: Props) => {
    const { curAnchorname, changeRoute } = props;
    return (
        <aside className="article-asider-wraper">
            <h1>目录</h1>
            {props.directorys.map(({ level, title }, index) => (
                <a
                    style={{ marginLeft: ((level - 1) * 5) }}
                    key={index}
                    className={`h${level} ${title === curAnchorname ? 'h-active' : ''}`}
                    onClick={() => {
                        changeRoute(title);
                    }}>
                    {title}
                </a>
            ))}
        </aside>
    )
};


export default PageHeader;