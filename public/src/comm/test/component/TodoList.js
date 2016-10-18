
import Todo from './Todo';

class TodoList extends React.Component {
	render() {
		return (
			<ul>{this.todoFilter()}</ul>
		);
	}

	todoFilter() {
		const props = this.props;
		let key = 0;

		switch(props.filter){
			case 'SHOW_ALL':
				return props.todos.map((todo, index) =>
					<Todo
						key={index}
						{...todo}
						onClick={()=>props.onTodoClick(index)}/>);

			case 'SHOW_COMPLETED':
				return props.todos.map((todo, index) => {
							console.log(index);
							if(todo.isCompleted){
								console.log(todo);
								return (<Todo
											key={key++}
											{...todo}
											onClick={()=>props.onTodoClick(index)}/>);
							}
						}
					);

			case 'SHOW_NO_COMPLETED':
				return props.todos.map((todo, index) => {
							if(!todo.isCompleted){
								return (<Todo
											key={key++}
											{...todo}
											onClick={()=>props.onTodoClick(index)}/>)
							}
						}
					);
		}
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