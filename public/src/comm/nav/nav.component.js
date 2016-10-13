
import './nav.less';
import {Link} from 'react-router';

//todo 
class TopNav extends React.Component {
	render() {
		return (
			<div className="nav_top">
				<Link to="/" className="nav_home_link">guiquan156</Link>
			</div>
		);
	}
}

export default TopNav;

