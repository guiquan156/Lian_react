//reducer

function todo(state=[], action){
	let nextState = [...state];
	
	switch(action.type){
		case 'ADD_TODO':  //增加
			nextState.push({text: action.text, isCompleted: false})	
			return nextState;

		case 'COMPLETE_TODO': //完成！
			nextState[action.index].isCompleted = true;
			return nextState;

		default: 
			return state; //reducer一定要放回state无论如何！！！
	}
}


export default todo;