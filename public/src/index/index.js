//less
import './index.less';


import {createStore} from 'redux';

//todo
//初始state
var iniState = {
	counter: 0
};



//reducer
var reducer = function(state, action){
	var nextState = {
		counter: ++state.counter
	};
	return nextState;
}

//产生store
const store = createStore(reducer, iniState);

const unsubscibe = store.subscribe(function(){
	alert(store.getState().counter);
});

class Test extends React.Component {
	constructor(){
		super();
		this.state = store.getState();
	}
	incHandler() {
		//todo 触发action 改变state
		var action = {
			type: 'INC_COUNTER',
		}

		//触发更新状态
		store.dispatch(action);
	}
	render() {
		return (
			<div>
				<p style={{textAlign: 'center'}}>{this.state.counter}</p>
				<button style={{width: '30px', marginLeft: 'auto', marginRight: 'auto', display: 'block'}} onClick={this.incHandler}>+</button>
			</div>
		);
	}
}



import Root from '../comm/root.js';

ReactDOM.render(
	<Root />,
	document.getElementById('app')
);










