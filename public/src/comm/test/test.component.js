//todo 列表

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './containers/App';//app container

// import todoApp from './reducers';//reducers

//reducer
function todoApp(state, action){
	switch(action.type){
		case 'ADD_TODO':  //增加
			//放回一个新的state
			console.log('todos', state.todos);
			console.log('action', action);
			return {
				counter: ++state.counter, //数量加一
				todos: [...state.todos, {text: action.text, isCompleted: false}] //push一个todo
			};
		case 'COMPLETE_TODO': //完成！
			let nextState = {
				counter: state.counter,
				todos: [...state.todos]
			}
			nextState.todos[action.index].isCompleted = true;
			return nextState;
		default: return state; //reducer一定要放回state无论如何！！！
	}
}

let store = createStore(todoApp, {counter: 0, todos: []}); //一开始为空的！！

class Test extends React.Component {
	render(){
		return (
			<Provider store={store}>
				<App />
			</Provider>
		);
	}
}

export default Test;



