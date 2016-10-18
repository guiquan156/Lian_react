import List from '../component/list/';

import { connect } from 'react-redux';

// import { todoAddAction, completeTodo } from '../action/todoApp.js';



class ListContainer extends React.Component {
	render(){
		let  {dispatch, list} = this.props;
		// console.log(this.props);
		return (
			<div>
				<List listType={this.props.params.listType} list={list}/>
			</div>
		);
	}
}

function aaa(state){
	return {
		list: state.list
	}
}

export default connect(aaa)(ListContainer);