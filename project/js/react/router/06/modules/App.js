import React from 'react'
import Home from './Home'
import NavLink from './NavLink'
import {IndexLink} from 'react-router'

export default React.createClass({
    render(){
        return (
            <div>
                <h1>Router</h1>
                <ul>
                    <li><IndexLink to="/" activeClassName="active">home</IndexLink></li>                
                    <li><NavLink to="/about">about</NavLink></li>
                    <li><NavLink to="/repos">repos</NavLink></li>
                </ul>
                {this.props.children || <Home/>}
            </div>
        )
    }
})