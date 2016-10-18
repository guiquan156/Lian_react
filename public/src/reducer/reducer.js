
import { combineReducers } from 'redux';


export const UPDATE_LIST = 'UPDATE_LIST'; 

function getList(state=[], action){
	switch(action.type){
		case UPDATE_LIST:
			return action.list;
		default:
			return state;
	}
}

export default combineReducers({
	list: getList
});

