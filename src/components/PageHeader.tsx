import React from 'react';
import { Layout, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { routes } from '../App'

const { Header } = Layout;

interface Props {
    index: number
}

const PageHeader = (props: Props) => {
    return (
        < Header >
            <Row className="header-wraper">
                <Col span={7} className="header-left">
                    <span className="header-title">xiaomin‘s Blog</span>
                    <span className="header-des">welcome!</span>
                </Col>
                <Col span={17} className="header-right">
                    {
                        routes.map((item: any, i) => {
                            return !item.hidden
                                ? (
                                    <div className={`header-menu ${i === props.index ? 'menu-active' : ''}`}>
                                        <Link to={item.path}>{item.name}</Link>
                                    </div>
                                )
                                : null;
                        })
                    }
                </Col>
            </Row>
        </Header >
    )
};


export default PageHeader;