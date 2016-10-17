import AddTodo from '../component/AddTodo';
import TodoList from '../component/TodoList';
import Footer from '../component/Footer';

import { connect } from 'react-redux';

//action
function todoAddAction(text){
	let result = {
		type: 'ADD_TODO',
		text
	}
	return result;
}

function completeTodo(index){
	let result = {
		type: 'COMPLETE_TODO',
		index
	}
	return result;
}

function filterAction(type){
	return {type};
}

class App extends React.Component {
	render(){
		let  {dispatch} = this.props;
		return (
			<div>
				<AddTodo
					onAddClick={(text) =>
						dispatch(todoAddAction(text))
					}/>
				<Footer
					onFilterClick={(type) =>
						dispatch(filterAction(type))
					}/>
				<TodoList
					todos={this.props.todos}
					filter={this.props.filter}
					onTodoClick={(index) =>
						dispatch(completeTodo(index))
					}/>
			</div>
		);
	}
}

function aaa(state){
	return {
		filter: state.filter,
		todos: state.todos,
	}
}


export default connect(aaa)(App);

