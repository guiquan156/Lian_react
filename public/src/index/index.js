
import './index.less';
import {TopNav} from '../comm/nav/nav.component.js'; //nav 组件

class ContentWrap extends React.Component {
	render() {
		return (
			<div className="content_wrap">
				<a href="#"><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1637785195,4139586512&fm=111&gp=0.jpg" className="photo"/></a>
				<p>guiquan156</p>
				<div className="main_entry">
					<a href="http://localhost:3333/list">全部</a>
					<a href="http://localhost:3333/list">分类</a>
					<a href="http://localhost:3333/list">讨论</a>
				</div>
			</div>
		);
	}
}

class HomeWrap extends React.Component {
	render() {
		return (
			<div>
				<TopNav />
				<ContentWrap />
			</div>
		);
	}
}

ReactDOM.render(
	<HomeWrap />,
	document.getElementById('app')//todo
);


