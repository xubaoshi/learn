import React from 'react'
import NavLink from './NavLink'
import Home from './Home'

export default React.createClass({
    render() {
        return (
            <div>
                <h1>Router</h1>
                <ul>
                    <li><NavLink to="/about">about</NavLink></li>
                    <li><NavLink to="/repos">repos</NavLink></li>
                </ul>
                {this.props.children || <Home/>}
            </div>
        ) 
    }
})