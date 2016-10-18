
import {Link} from 'react-router';

class List extends React.Component {
	render() {
		//todo 改成读数据操作
		var data = this.props.list;
		var catData = {
			JS: [
				{
					title: 'A Javauildices | React',
					date: '2016-9-9',
					cat: 'JS',
					num: 1
				},
				{
					title: 'A Javauilding user inte',
					date: '2016-9-9',
					cat: 'JS',
					num: 1
				},
				{
					title: 'A Javauilding user interfeact',
					date: '2016-9-9',
					cat: 'JS',
					num: 1
				},
			],
			CSS: [
				{
					title: 'Ading user interfaces | React',
					date: '2016-9-9',
					cat: 'CSS',
					num: 1
				},
				{
					title: 'A Javauilding userct',
					date: '2016-9-9',
					cat: 'CSS',
					num: 1
				},
			],
			HTML: [

				{
					title: 'A Javauilding user interfaces | React user interfaces | Re user interfaces | Re',
					date: '2016-9-9',
					cat: 'HTML',
					num: 1

				},
				{
					title: 'A Javauilding user interfReact',
					date: '2016-9-9',
					cat: 'HTML',
					num: 1
				},
			],
			NODE: [
				{
					title: 'Ading user interfaces | React',
					date: '2016-9-9',
					cat: 'NODE',
					num: 1
				},
				{
					title: 'A Javauilding userct',
					date: '2016-9-9',
					cat: 'NODE',
					num: 1
				},
				{
					title: 'A Javauilding user interfaces | React user interfaces | Re user interfaces | Re',
					date: '2016-9-9',
					cat: 'NODE',
					num: 1
				},
				{
					title: 'A Javauilding user interfReact',
					date: '2016-9-9',
					cat: 'NODE',
					num: 1
				},
			]
		};
		let tmpl = '';

		if(this.props.listType == "all"){
			tmpl = (
					<div className="article_list_wrap">
						<p className="title">全部</p>
						{ data.map((item) => <p><Link to={`/page/${item.num}`}>{item.title}</Link><span>{item.date}</span></p>) }
					</div>
				);
		}else if(this.props.listType == "cat"){
			tmpl = (
					<div className="article_list_wrap">
						<p className="title">JS</p>
						{ catData.JS.map((item) => <p><Link to={`/page/${item.num}`}>{item.title}</Link><span>{item.date}</span></p>) }
						<p className="title">CSS</p>
						{ catData.CSS.map((item) => <p><Link to={`/page/${item.num}`}>{item.title}</Link><span>{item.date}</span></p>) }
						<p className="title">HTML</p>
						{ catData.HTML.map((item) => <p><Link to={`/page/${item.num}`}>{item.title}</Link><span>{item.date}</span></p>) }
						<p className="title">NODE</p>
						{ catData.NODE.map((item) => <p><Link to={`/page/${item.num}`}>{item.title}</Link><span>{item.date}</span></p>) }
					</div>
				);
		}
		return tmpl;
	}
}

export default List;




