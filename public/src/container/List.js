import List from '../component/list/';
import { connect } from 'react-redux';
import {getListActionAsync} from '../action/action.js';

class ListContainer extends React.Component {
	render(){
		let  {dispatch, list, listCat} = this.props;
		return (
			<div>
				<List listType={this.props.params.listType} list={list} listCat={listCat}/>
			</div>
		);
	}
	componentWillMount(){
		let {dispatch} = this.props;
		if(this.props.params.listType == 'all')
			dispatch(getListActionAsync(1));
		else
			dispatch(getListActionAsync(0));
	}
}

function aaa(state){
	return {
		list: state.list,
		listCat: state.listCat
	}
}

export default connect(aaa)(ListContainer);