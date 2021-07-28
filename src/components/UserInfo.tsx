import React from 'react';
import { Layout, Avatar} from 'antd';
import { config } from "../config";
import avatar from "../assets/images/icon.png";

const { Sider } = Layout;

interface Props {
}

const UserInfo = (props: Props) => {
    return (
        <div className="page-user-info">
            <Avatar size={64} src={avatar} />
            <div className="autor-name">xiaomin</div>
            <p className="autor-des">one@前端开发工程师</p>
            <div className="author-site">
                {
                    config.thirdPartySites.map((item : any) => {
                        return (
                            <div 
                                key={item.title}
                                className="site-item"
                                onClick={()=>{
                                    window.open(item.href);
                                }}>
                                {item.title}
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
};


export default UserInfo;