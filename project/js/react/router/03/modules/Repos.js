import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
    render(){
        return (
            <div>
                <h2>Repos</h2>
                <ul>
                    <li><NavLink to="/repos/reactjs/react-router">Router</NavLink></li>
                    <li><NavLink to="/repos/facebook/react">react</NavLink></li>
                </ul>
            </div>
        )
    }
})