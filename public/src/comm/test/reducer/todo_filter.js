/**
 * reducer todoFilter
 *
 * action.type
 * 
 * 'SHOW_ALL' 显示全部
 * 'SHOW_COMPLETE' 显示已经完成
 * 'SHOW_NO_COMPLETE' 未完成
 * 
 */

function todoFilter(state='SHOW_ALL', action){
	var nextState;
	switch(action.type){
		case 'SHOW_ALL': 
			console.log('reducer', 'SHOW_ALL');
			return 'SHOW_ALL';

		case 'SHOW_COMPLETED': 
			console.log('reducer', 'SHOW_COMPLETED');
			return 'SHOW_COMPLETED';

		case 'SHOW_NO_COMPLETED': 
			console.log('reducer', 'SHOW_NO_COMPLETED');
			return 'SHOW_NO_COMPLETED';

		default: 
			return state;
	}
}

export default todoFilter;