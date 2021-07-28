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
        hashChange();
        window.onhashchange = () => { hashChange() }

    })

    const hashChange = () => {
        const hash = window.location.hash.split('/')[1];
        if(hash === 'article'){
            const pathParts = window.location.href.split("/");
            const pathPartsLen = pathParts.length;
            const repo = pathParts[pathPartsLen-2];
            setHash(repo === 'gossip-blogs' ? 'gossip' : '');
            return;
        }
        setHash(hash);
    }
    return (
        < Header >
            <Row className="header-wraper">
                <Col flex="260px" className="header-left">
                    <span className="header-title">xiaomin‘s Blog</span>
                </Col>
                <Col flex={1} className="header-center">
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
                <Col flex="260px" className="header-right">
                    希望你的心里永远充满阳光～
                </Col>
            </Row>
        </Header >
    )
};


export default PageHeader;