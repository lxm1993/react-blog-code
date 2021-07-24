import React, { useEffect, useState } from 'react';
import { Layout, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { routes } from '../App'

const { Header } = Layout;

interface Props {
    index: number
}

const PageHeader = (props: Props) => {
    const [hash, setHash] = useState('')
    useEffect(() => {
        window.onhashchange = () => {
            const hash = window.location.hash.split('/')[1];
            setHash(hash);
        }

    })
    return (
        < Header >
            <Row className="header-wraper">
                <Col span={6} className="header-left">
                    <span className="header-title">xiaomin‘s Blog</span>
                    <span className="header-des">welcome!</span>
                </Col>
                <Col span={12} className="header-center">
                    {routes.map((item: any, i) => {
                        return !item.hidden
                            ? (
                                <div key={item.name} className={`header-menu ${hash === item.key ? 'menu-active' : ''}`}>
                                    <Link to={item.path}>{item.name}</Link>
                                </div>
                            )
                            : null;
                    })}
                </Col>
                <Col span={6} className="header-right">
                    希望你的心里永远充满阳光～
                </Col>
            </Row>
        </Header >
    )
};


export default PageHeader;