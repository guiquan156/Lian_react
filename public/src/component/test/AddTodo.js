
class AddTodo extends React.Component {
	render() {
		return (
			<div>
				<input type="text" ref="input" />
				<button onClick={()=>this.props.onAddClick(this.refs.input.value.trim())}>Add</button>
			</div>
		);
	}
}

export default AddTodo;