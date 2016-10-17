//less
import './index.less';

//modules
import {Provider} from 'react-redux';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import {createStore} from 'redux';

//components
import App from './component/app.js';
import List from './component/list/';// 直接写不行 卧槽！！！！
import Home from './component/home';
import Page from './component/page';

//container
import Test from './container/test.js';

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


//渲染
ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={Home}/>
				<Route path='/list/:listType' component={List} />
				<Route path='/page/:num' component={Page} />
				<Route path='/test' component={Test} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);



