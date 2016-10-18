import AddTodo from '../component/test/AddTodo';
import TodoList from '../component/test/TodoList';

import { connect } from 'react-redux';

import { todoAddAction, completeTodo } from '../action/todoApp.js';



function incAction(){
	return {
		type: 'INC'
	}
}

function incActionAsync(){
	return dispatch => {
		setTimeout(()=>dispatch(incAction()), 1000);
	}
}

class Test extends React.Component {
	render(){
		let  {dispatch} = this.props;
		// console.log(this.props);
		return (
			<div>
				<AddTodo 
					onAddClick={(text) => 
						dispatch(todoAddAction(text))
					}/>
				<TodoList
					todos={this.props.todos}
					onTodoClick={(index) => 
						dispatch(completeTodo(index))
					}/>
				<button onClick={() => 
					dispatch(incActionAsync())
				}>++++</button>
			</div>
		);
	}
}

function aaa(state){
	return {
		todos: state.todos,
		filter: state.filter,
		counter: state.counter
	}
}


export default connect(aaa)(Test);

