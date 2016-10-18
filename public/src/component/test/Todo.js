
class Todo extends React.Component {
	render() {
		return(
			<li
				onClick={this.props.onClick}
				style={{
					textDecoration: this.props.isCompleted ? 'line-through' : 'none',
	          		cursor: this.props.isCompleted ? 'default' : 'pointer'
				}}
			>
				{this.props.text}
			</li>
		);
	}
}

//设置组件属性 类型
Todo.propTypes = {
	onClick: React.PropTypes.func.isRequired,	//点击的事件
	text: React.PropTypes.string.isRequired,	//事件名称
	completed: React.PropTypes.bool.isRequired	//是否完成
}

export default Todo;
