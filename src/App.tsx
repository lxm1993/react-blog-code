import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Layout, Result, List } from 'antd';
import PageHeader from './components/PageHeader'
import UserInfo from './components/UserInfo'
const { Content, Sider } = Layout;

interface routeInterface {
  name: string;
  path: string;
  key: string;
  component: any;
  hidden?: boolean;
  routes?: routeInterface[];
}

const OtherInfos = [
  {
    label: "创建时间",
    value: "20210729",
  },
  {
    label: "多久更新",
    value: "平均一两周吧",
  },
  {
    label: "分享什么",
    value: "技术、生活喽",
  }
]

/** 404页面 */
export const NotFond = () => {
  return <Result status="404" title="404" subTitle="Sorry, the page you visited does not exist." />
}

export const routes: routeInterface[] = [
  {
    name: '技术',
    key: '',
    path: "/", component: require('./pages/home/index').default,
  },
  {
    name: '杂谈',
    key: 'gossip',
    path: "/gossip", component: require('./pages/gossip/index').default
  },
  {
    name: '关于我',
    key: 'me',
    path: "/me", component: require('./pages/me/index').default
  },
  {
    name: '文章详情',
    key: '',
    hidden: true,
    path: "/article/:repo/:id", component: require('./pages/article/index').default
  }
]


const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <PageHeader index={0} />
        <Layout>
          <Content className="page-content">
            <Switch>
              {routes.map((route, i) => (
                <Route
                  exact
                  key={i}
                  path={route.path}
                  render={props => (<route.component {...props} routes={route.routes} />)} />
              ))}
              <Route component={NotFond} />
            </Switch>
          </Content>
          <Sider className="page-sider-wraper">
            <UserInfo />
            <List
              dataSource={OtherInfos}
              renderItem={item => (
                <List.Item>
                  <p className="other-info-item">
                    <span>{item.label}</span>
                    <span>{item.value}</span>
                  </p>
                </List.Item>
              )}
            />
          </Sider>
        </Layout>
      </Layout>
    </HashRouter>

  );
};

export default App;



