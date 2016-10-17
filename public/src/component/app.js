import TopNav from './comm/nav.js'; //nav 组件

class App extends React.Component {
	render() {
		return (
			<div>
				<TopNav />
				{this.props.children}
			</div>
		);
	}
}

export default App;
