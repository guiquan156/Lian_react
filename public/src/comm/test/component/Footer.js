
class Footer extends React.Component {
	render(){
		return(
			<div>
				<button onClick={() => 
					this.props.onFilterClick('SHOW_ALL')}>全部</button>
				<button onClick={() =>
					this.props.onFilterClick('SHOW_COMPLETED')}>已完成</button>
				<button onClick={() =>
					this.props.onFilterClick('SHOW_NO_COMPLETED')}>未完成</button>
			</div>
		);
	}
} 



export default Footer;
