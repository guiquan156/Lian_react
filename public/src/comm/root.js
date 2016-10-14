//depend
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

//component
import ArticleList from './list/list.component.js';
import App from './app/app.component.js';
import Home from './home/home.component.js';
import Page from './page/page.component.js';
import Test from './test/test.component.js';

class Root extends React.Component {
	render() {
		return (
			<div>
				<Router history={hashHistory}>
					<Route path='/' component={App}>
						<IndexRoute component={Home}/>
						<Route path='/ArticleList/:listType' component={ArticleList} />
						<Route path='/page/:num' component={Page} />
						<Route path='/test' component={Test} />
					</Route>
				</Router>
			</div>
		);
	}
}

export default Root;

