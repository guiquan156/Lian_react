import AddTodo from '../component/test/AddTodo';
import TodoList from '../component/test/TodoList';

import { connect } from 'react-redux';

//action
function todoAddAction(text){
	var result = {
		type: 'ADD_TODO',
		text
	}
	return result;
}

function completeTodo(index){
	var result = {
		type: 'COMPLETE_TODO',
		index
	}
	return result;
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
			</div>
		);
	}
}

function aaa(state){
	return {
		todos: state.todos,
	}
}


export default connect(aaa)(Test);

