import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
    render() {
        return (
            <div>
                <h1>React Router Tutorial</h1>
                <ul>
                    <li><Link to="/about" activeClassName="active">about</Link></li>
                    <li><Link to="/repos" activeClassName="active">repos</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
})