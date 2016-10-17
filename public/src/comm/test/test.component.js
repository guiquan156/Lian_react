//todo 列表

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './containers/App';//app container
import todoApp from './reducer/todo_app.js';//reducers

let store = createStore(todoApp, {filter: 'SHOW_ALL', todos: []}); //一开始为空的！！

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



