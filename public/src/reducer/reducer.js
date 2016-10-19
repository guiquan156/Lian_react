
import { combineReducers } from 'redux';
import {UPDATE_LIST, UPDATE_LIST_CAT, ADD_ARTICAL} from '../action/action.js';
import 'core-js/fn/object/assign';

function getList(state=[], action){
	switch(action.type){
		case UPDATE_LIST:
			return action.list;
		default:
			return state;
	}
}

function getListCat(state={}, action){
	switch(action.type){
		case UPDATE_LIST_CAT:
			return action.listCat;
		default: 
			return state;
	}
}

function addArtical(state={}, action){
	switch(action.type){
		case ADD_ARTICAL: 
			return Object.assign({}, state, {
				[action.result.id]: action.result.content
			});
		default:
			return state;
	}
}

export default combineReducers({
	list: getList,
	listCat: getListCat,
	articals: addArtical
});

