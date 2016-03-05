/**
 * Created by xu on 2016/2/25.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,IndexRoute} from 'react-router';
import createHistory from 'history/lib/createHashHistory';

import App from "./pages/App";
import Detail from "./pages/Detail";
import List from "./pages/List";

ReactDOM.render(
    <Router history={createHistory({queryKey: false})}
        onUpdate={() => window.scrollTo(0, 0)} >
        <Route path="/" component={App}>
            <IndexRoute component={List}/>
            <Route path="detail/:repo" component={Detail}/>
        </Route>
    </Router>,
    document.getElementById('app')
);









