/**
 * Created by xu on 2016/3/22.
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TodoConstants = require('../constants/TodoConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _todos = {};

// Create a TODO item
function create(text){
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    _todos[id] = {
        id : id,
        complete : false,
        text : text
    }
}
// 根据Id更新
function update(id,updates){
    _todoss[id] = assign({},_todos[id],updates);
}
// 更新全部
function updateAll(updates){
    for(var id in _todoss){
        update(id,updates);
    }
}
// 删除
function destroy(id){
    delete _todos[id];
}
// 删除全部
function destroyCompleted(){
    for(var id in _todos){
        if(_todos[id].complete){
            destroy(id);
        }
    }
}

var  TodoStore = assign({},EventEmitter.prototype,{
    areAllComplete:function(){
        for(var id in _todos){
            if(!_todos[id].complete){
                return false;
            }
        }
        return true;
    },
    getAll:function(){
        return _todos;
    },
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
        case TodoConstants.TODO_TOGGLE_COMPLETE_ALL:
            if(TodoStore.areAllComplete()){
                updateAll({complete:false});
            }else{
                updateAll({complete:true});
            }
            TodoStore.emitChange();
            break;
        case TodoConstants.TODO_UNDO_COMPLETE:
            update(action.id,{complete:false});
            TodoStore.emitChange();
            break;
        case TodoConstants.TODO_COMPLETE:
            update(action.id,{complete:true});
            TodoStore.emitChange();
            break;
        case TodoConstants.TODO_UPDATE_TEXT:
            text= action.text.trim();
            if(text !== ''){
                update(action.id,{text:text});
                TodoStore.emitChange();
            }
            break;
        case TodoConstants.TODO_DESTROY:
            destroy(action.id);
            TodoStore.emitChange();
            break;
        case TodoConstants.TODO_DESTROY_COMPLETED:
            destroyCompleted();
            TodoStore.emitChange();
        default:
    }
});

module.exports = TodoStore;




