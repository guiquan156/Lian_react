//less
import './index.less';

//modules
import {Provider} from 'react-redux';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

//components
import App from './component/app.js';
import Home from './component/home';
// import Page from './component/page';

//container
import Test from './container/test.js';
import List from './container/List.js';
import Artical from './container/Artical.js';

//reducer
import reducer from './reducer/reducer.js';

//中间件测试
const logger = store => next => action => {
	console.log('dispatching', action);
	let result = next(action);
	console.log('next state', store.getState());
	return result;
}

let createStoreWithMiddleware = applyMiddleware(logger, thunk)(createStore);//加入异步中间件
let store = createStoreWithMiddleware(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()); //使用redux开发工具

//渲染
ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={Home}/>
				<Route path='/list/:listType' component={List} />
				<Route path='/page/:id' component={Artical} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);
