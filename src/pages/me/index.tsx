import React from 'react';
import { Row, Col, Card, Divider } from 'antd';
import { aboutMySelf, favoritePoems } from './config';
import './index.scss';

const Me = () => {
    return (
        <div className="my-wraper">
            <div className="one-item">
                <h1>关于我</h1>
                <Divider />
                <div className="about-me" dangerouslySetInnerHTML={{ __html: aboutMySelf }} />
            </div>
            <div className="one-item">
                <h1>最喜欢的诗</h1>
                <Divider />
                <Row>
                    {favoritePoems.map((item: any) => (
                        <Col key={item.title} span={12}>
                            <Card hoverable title={item.title} className="favorite-peom">
                                <div dangerouslySetInnerHTML={{ __html: item.content }} />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}


export default Me;