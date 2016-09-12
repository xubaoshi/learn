import React, {Component, PropsTypes} from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.todos.map((todo, index) =>
                    <Todo {...todo}
                        key={index}
                        onClick={() => this.props.onTodoClick(index) }/>
                ) }
            </ul>
        )
    }
}

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropsTypes.arrayOf(PropsTypes.shape({
        text: PropsTypes.string.isRequired,
        completed: PropsTypes.bool.isRequired
    }).isRequired).isRequired
}