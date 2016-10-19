//js
import 'core-js/fn/promise'; //promise polyfill
import 'fetch-detector'; //test wether fetch() is useful;
import 'fetch-ie8'; //polyfill for fetch in ie8+

//get list action
//export action type 
export const UPDATE_LIST = 'UPDATE_LIST';
export const UPDATE_LIST_CAT = 'UPDATE_LIST_CAT';

function getListAction(result){
	return {
		type: UPDATE_LIST,
		list: result
	}
}

function getListCatAction(result){
	return {
		type: UPDATE_LIST_CAT,
		listCat: result
	}
}

function getListActionAsync(isAll){
	return (dispatch) => {
		fetch('getList?isAll=' + isAll)
			.then(res => res.json())
			.then(data => {
				if(data.code==200){
					if(isAll==1)
						dispatch(getListAction(data.result));
					else
						dispatch(getListCatAction(data.result));
				}else{
					alert(data.result);
				}
			}).catch((err) => {
				throw err;
				alert('网络异常!');
			});
	}
}



//get artical action

export const ADD_ARTICAL = 'ADD_ARTICAL';

function getArtical(result){
	return {
		type: ADD_ARTICAL,
		result : result 
	}
}

function getArticalAsync(articalId){
	console.log('getArticalAsync');
	return (dispatch) => {
		fetch('getArtical?articalId=' + articalId)
			.then(res => res.json())
			.then(data => {
				if(data.code==200) dispatch(getArtical(data.result));
				else alert(data.result);
			}).catch((err) => {
				throw err;
				alert('网络异常!');
			});
	}
}

export { getListActionAsync, getArticalAsync };