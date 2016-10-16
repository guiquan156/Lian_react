
import Todo from './Todo';

class TodoList extends React.Component {
	render() {
		return (
			<ul>
				{this.props.todos.map(
					(todo, index) =>
						<Todo
							key={index}
							{...todo}
							onClick={()=>this.props.onTodoClick(index)}/>
				)}
			</ul>
		);
	}
}

TodoList.propTypes = {
	onTodoClick: React.PropTypes.func.isRequired,
	todos: React.PropTypes.arrayOf(React.PropTypes.shape({
		text: React.PropTypes.string.isRequired,
		isCompleted: React.PropTypes.bool.isRequired
	}))
}

export default TodoList;