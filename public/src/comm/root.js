//depend
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

//component
import ArticleList from '../comm/list/list.component.js';
import App from '../comm/app/app.component.js';
import Home from '../comm/home/home.component.js';
import Page from '../comm/page/page.component.js';


class Root extends React.Component {
	render() {
		return (
			<div>
				<Router history={hashHistory}>
					<Route path='/' component={App}>
						<IndexRoute component={Home}/>
						<Route path='/ArticleList/:listType' component={ArticleList} />
						<Route path='/page/:num' component={Page} />
					</Route>
				</Router>
			</div>
		);
	}
}


export default Root;

