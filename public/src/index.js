//less
import './index.less';

//modules
import {Provider} from 'react-redux';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

//components
import App from './component/app.js';
// import List from './component/list/';// 直接写不行 卧槽！！！！
// import Home from './component/home';
import Page from './component/page';

//container
import Test from './container/test.js';
import List from './container/List.js';
import Home from './container/Home.js';

//reducer
// import todoApp from './reducer/todoApp.js';
import reducer from './reducer/reducer.js';

//中间件测试
const logger = store => next => action => {
	console.log('dispatching', action);
	let result = next(action);
	console.log('next state', store.getState());
	return result;
}

let createStoreWithMiddleware = applyMiddleware(logger, thunk)(createStore);
let store = createStoreWithMiddleware(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// let store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); 

//渲染
ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={Home}/>
				<Route path='/list/:listType' component={List} />
				<Route path='/page/:num' component={Page} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);



