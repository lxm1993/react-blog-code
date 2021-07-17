import React from 'react';
import { Layout, List } from 'antd';
import PageHeader from '../../components/PageHeader'
import PageSider from '../../components/PageSider'

const { Content } = Layout;

const Home = () => (
    <Layout>
        <PageHeader index={1}/>
        <Layout>
            <PageSider />
            <Content className="page-content">开发中</Content>
        </Layout>
    </Layout>
);


export default Home;