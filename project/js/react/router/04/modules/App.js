import React from 'react'
import NavLink from './NavLink'
import Home from './Home'
import {Link} from 'react-router'
// import {IndexLink} from 'react-router'
// <li><IndexLink to="/" activeClassName="active">home</IndexLink></li>

export default React.createClass({
    render() {
        return (
            <div>
                <h1>Router</h1>
                <ul>
                    <li><Link to="/" activeClassName="active" onlyActiveOnIndex={true}> home</Link></li>
                    <li><NavLink to="/about">about</NavLink></li>
                    <li><NavLink to="/repos">repos</NavLink></li>
                </ul>
                {this.props.children || <Home/>}
            </div>
        ) 
    }
})