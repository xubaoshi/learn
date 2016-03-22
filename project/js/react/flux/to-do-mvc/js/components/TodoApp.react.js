/**
 * Created by xu on 2016/3/22.
 */
var Header = require('./Header.react');
var React = require('react');
var TodoStore = require('../stores/TodoStore');

var TodoApp = React.createClass({
    //getInitialState:function(){
    //
    //},
    //componentDidMount:function(){
    //    TodoStore.addChangeListener(this._onChange);
    //},
    //componentWillUnmount:function(){
    //    TodoStore.removeChangeListener(this._onChange);
    //} ,
    render:function(){
        return (
            <div>
                <Header/>
            </div>
        )
    }
    //_onChange:function(){
    //    this.setState(getTodoState());
    //}

});

module.exports = TodoApp;