
import './list.less';
import {TopNav} from '../comm/nav/nav.component.js'; //nav 组件


class ArticleList extends React.Component {
	render() {
		//todo 改成读数据操作
		var data = [
			{
				title: 'A Javauildices | React',
				date: '2016-9-9'
			},
			{
				title: 'A Javauilding user inte',
				date: '2016-9-9'
			},
			{
				title: 'A Javauilding user interfeact',
				date: '2016-9-9'
			},
			{
				title: 'Ading user interfaces | React',
				date: '2016-9-9'
			},
			{
				title: 'A Javauilding userct',
				date: '2016-9-9'
			},
			{
				title: 'A Javauilding user interfaces | React user interfaces | Re user interfaces | Re',
				date: '2016-9-9'
			},
			{
				title: 'A Javauilding user interfReact',
				date: '2016-9-9'
			},
		];

		var tmpl = data.map((item) => {
			return <p><a href="#">{item.title}</a><span>{item.date}</span></p>
		});

		return (
			<div className="article_list_wrap">
				<p>列表</p>
				{
					data.map((item) => <p><a href="#">{item.title}</a><span>{item.date}</span></p>)
				}
			</div>
		);
	}
}

class ListWrap extends React.Component {
	render() {
		return (
			<div>	
				<TopNav />
				<ArticleList />
			</div>
		);
	}
}

ReactDOM.render(
	<ListWrap />,
	document.getElementById('app')
);




