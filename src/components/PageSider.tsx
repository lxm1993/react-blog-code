import React from 'react';
import { Layout, Avatar} from 'antd';
import { config } from "../config";
import avatar from "../assets/images/icon.png";

const { Sider } = Layout;

interface Props {
}

const PageHeader = (props: Props) => {
    return (
        <Sider className="page-sider-wraper">
            <Avatar size={64} src={avatar} />
            <div className="autor-name">刘晓敏</div>
            <p className="autor-des">美团外卖@前端开发工程师</p>
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
        </Sider >
    )
};


export default PageHeader;