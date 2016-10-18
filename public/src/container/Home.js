import Home from '../component/home/';

import { connect } from 'react-redux';

// import { todoAddAction, completeTodo } from '../action/todoApp.js';

//action
//js
import 'core-js/fn/promise'; //promise polyfill
import 'fetch-detector'; //test wether fetch() is useful;
import 'fetch-ie8'; //polyfill for fetch in ie8+

function getListAction(result){
	return {
		type: 'UPDATE_LIST',
		list: result
	}
}

function getListActionAsync(){
	return (dispatch) => {
		console.log('ahahah');
		fetch('getList')
			.then(res => res.json())
			.then(data => {
				if(data.code==200){
					dispatch(getListAction(data.result));
				}else{
					alert(data.result);
				}
			}).catch((err) => {
				throw err;
				alert('网络异常!');
			});
	}
}

class HomeContainer extends React.Component {
	render(){
		let  {dispatch} = this.props;
		return (
			<div>
				<Home onAllClick={() =>
					dispatch(getListActionAsync())
				}/>
			</div>
		);
	}
}

function aaa(state){
	return {
		list: state.list
	}
}

export default connect(aaa)(HomeContainer);