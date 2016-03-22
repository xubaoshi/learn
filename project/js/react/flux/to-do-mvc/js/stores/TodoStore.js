/**
 * Created by xu on 2016/3/22.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TodoConstants = require('../constants/TodoConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _todo = {};

// Create a TODO item
function create(text){
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    _todo[id] = {
        id : id,
        complete : false,
        text : text
    }
}

var  TodoStore = assign({},EventEmitter.prototype,{
    emitChange:function(){
        this.emit(CHANGE_EVENT);
    },
    addChangeListener:function(callback){
        this.on(CHANGE_EVENT,callback);
    },
    removeChangeListener:function(){
        this.removeListener(CHANGE_EVENT,callback);
    }
})

AppDispatcher.register(function(action){
    var text;
    switch(action.actionType){
        case TodoConstants.TODO_CREATE:
            text = action.text.trim();
            if(text !== ''){
                console.log(text);
                create(text);
                TodoStore.emitChange();
            }
            break;
        default:
    }
});

module.exports = TodoStore;




