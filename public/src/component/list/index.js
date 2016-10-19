
import {Link} from 'react-router';

class List extends React.Component {
	render() {
		//todo 改成读数据操作
		let data = this.props.list;
		let dataCat = this.props.listCat;
		let tmpl = '';

		if(this.props.listType == "all"){
			tmpl = (
					<div className="article_list_wrap">
						<p className="title">全部</p>
						{ data.map((item) => <p><Link to={`/page/${item.id}`}>{item.title}</Link><span>{item.date}</span></p>) }
					</div>
				);
		}else if(this.props.listType == "cat"){
			if(Object.keys(dataCat).length == 0)
				tmpl = <div className="article_list_wrap"></div>;
			else
				tmpl = (
						<div className="article_list_wrap">
							<p className="title">JS</p>
							{ dataCat.JS.map((item) => <p><Link to={`/page/${item.id}`}>{item.title}</Link><span>{item.date}</span></p>) }
							<p className="title">CSS</p>
							{ dataCat.CSS.map((item) => <p><Link to={`/page/${item.id}`}>{item.title}</Link><span>{item.date}</span></p>) }
							<p className="title">HTML</p>
							{ dataCat.HTML.map((item) => <p><Link to={`/page/${item.id}`}>{item.title}</Link><span>{item.date}</span></p>) }
							<p className="title">NODE</p>
							{ dataCat.NODE.map((item) => <p><Link to={`/page/${item.id}`}>{item.title}</Link><span>{item.date}</span></p>) }
						</div>
					);
		}
		return tmpl;
	}
}

export default List;




