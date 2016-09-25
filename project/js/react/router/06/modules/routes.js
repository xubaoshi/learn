import React from 'react'
import {Route,IndexRoute} from 'react-router'
import App from './App'
import Home from './Home'
import Repos from './Repos'
import Repo from './Repo'
import About from './About'

module.exports = (
     <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/repos" component={Repos}>
                <Route path="/repos/:username/:repoName" component={Repo}></Route>
            </Route>
            <Route path="/about" component={About}></Route>
        </Route>
)