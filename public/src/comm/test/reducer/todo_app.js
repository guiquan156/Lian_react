
import {combineReducers} from 'redux';

import todo from './todo.js';
import todoFilter from './todo_filter.js';

const todoApp = combineReducers({
	todos: todo, 
	filter: todoFilter
});

export default todoApp;
