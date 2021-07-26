import React from 'react';

interface Props {
    changeRoute: Function;
    directorys: {
        level: number;
        title: string;
    }[];
}

const PageHeader = (props: Props) => {
    return (
        <aside className="article-asider-wraper">
            <h1>目录</h1>
            {props.directorys.map(({ level, title }, index) => (
                <a
                    style={{ marginLeft: ((level - 1) * 5) }}
                    key={index}
                    className={"h" + level}
                    onClick={() => {
                        props.changeRoute(title);
                    }}>
                    {title}
                </a>
            ))}
        </aside>
    )
};


export default PageHeader;