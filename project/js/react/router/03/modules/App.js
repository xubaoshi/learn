import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
    render(){
        return (
            <div>
                <h1>React Router Tutorial</h1>
                <ul role="nav">
                    <li><NavLink to="/about">about</NavLink></li>
                    <li><NavLink to="/repos">repos</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
})
