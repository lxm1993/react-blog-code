import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Result } from 'antd';
import { Layout } from 'antd';
import PageHeader from './components/PageHeader'
import PageSider from './components/PageSider'
const { Content } = Layout;

interface routeInterface {
  name: string;
  path: string;
  key: string;
  component: any;
  hidden?: boolean;
  routes?: routeInterface[];
}
/** 404页面 */
const NotFond = () => {
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
          <PageSider />
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
        </Layout>
      </Layout>
    </HashRouter>

  );
};

export default App;



