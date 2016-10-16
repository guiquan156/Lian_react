//计数器应用 简单Redux


import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';




function reducer(previousState, action){
	if(action.type == 'INC'){
		return { counter: ++previousState.counter };
	}
	return previousState;
}

const store = createStore(reducer, {counter: 0});


class Test extends React.Component {

	render(){
		return (
			<div>
				<p>{this.props.counter}</p>
				<button onClick={(e)=>this.incHandler(e)}>+</button>
			</div>
		);
	}

	incHandler(e){

	}


}

// Test.propTypes = {
// 	onIncClick: React.PropTypes.func.isRequired
// }

class TestApp extends React.Component {
	render(){
		const {dispatch} = this.props;
		return (
			<div>
				<Test counter={this.props.counter} />
			</div>
		);
	}
}

//把state的改变引导到props 传入的参数是state和ownProps 	返回一个props对象（键就是props的名字）
function mapStateToProps(state, ownProps){
	//这里面可以做一些过滤 暂时不做
	return {counter: state.counter}
}
//把props的改变绑定到dispatch 改变 store的state
function mapDispatchToProps(dispath, ownProps){
	return {
		onClick: function(){
			dispath({ type: 'INC' });
		}
	}
}

//todo
const TestContainer = connect(
	mapStateToProps, //把state的改变引导到props 传入的参数是state 	返回一个props对象（键就是props的名字）
	mapDispatchToProps //把props的改变绑定到dispatch 改变 store的state
)(TestApp);


class TestProvider extends React.Component {
	render(){
		return (
			<Provider store={store}>
				<TestContainer />
			</Provider>
		);
	}
}

export default TestProvider;
