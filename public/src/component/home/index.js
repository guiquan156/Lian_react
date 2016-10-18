
import {Link} from 'react-router';


//Home
class Home extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div className="content_wrap">
				<a href="#"><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1637785195,4139586512&fm=111&gp=0.jpg" className="photo"/></a>
				<p>guiquan156</p>
				<div className="main_entry">
					<Link to="/list/all" onClick={() => this.props.onAllClick()}>全部</Link>
					<Link to="/list/cat">分类</Link>
					<Link to="/test">test</Link>
				</div>
			</div>
		);
	}
}


export default Home;