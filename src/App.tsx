import React from 'react';
import { Result } from 'antd';
import { HashRouter, Switch, Route } from 'react-router-dom';

interface routeInterface {
    name: string;
    path: string;
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
        name: '首页',
        path: "/", component: require('./pages/home/index').default,
    },
    {
        name: '分类',
        path: "/category", component: require('./pages/category/index').default
    },
    {
        name: '我的',
        path: "/me", component: require('./pages/me/index').default
    },
    {
      name: '文章详情',
      hidden: true,
      path: "/article/:id", component: require('./pages/article/index').default
  }
]

const App: React.FC = () => {
    return (
        <HashRouter>
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
        </HashRouter>
    );
};
export default App;



