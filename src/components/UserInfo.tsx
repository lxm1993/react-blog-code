import React from 'react';
import { Row, Col, Avatar } from 'antd';
import { config } from "../config";
import avatar from "../assets/images/icon.png";

interface Props {
}

const UserInfo = (props: Props) => {
    return (
        <div className="page-user-info">
            <Row>
                <Col flex="110px"><Avatar size={90} src={avatar} /></Col>
                <Col flex="1">
                    <div className="autor-name">前端小小min</div>
                    <p className="autor-des">前端开发工程师</p>
                </Col>
            </Row>
            <div className="author-site">
                {
                    config.thirdPartySites.map((item: any) => {
                        return (
                            <div
                                key={item.title}
                                className="site-item"
                                onClick={() => {
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