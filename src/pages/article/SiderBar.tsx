import React from 'react';
import UserInfo from '../../components/UserInfo'

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
        <aside>
            <UserInfo />
            <div className="article-catagory">
                <h1>目录</h1>
                <ul>
                    {props.directorys.map(({ level, title }, index) => (
                        <li
                            style={{ marginLeft: ((level - 1) * 30) }}
                            key={index}
                            className={`h${level} ${title === curAnchorname ? 'h-active' : ''}`}
                            onClick={() => {
                                changeRoute(title);
                            }}>
                            {title}
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
};


export default PageHeader;