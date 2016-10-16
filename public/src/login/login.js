//the easy component of login used react!!
// require('./login.less')

//less
import './login.less';

//js
import 'core-js/fn/promise'; //promise polyfill
import 'fetch-detector'; //test wether fetch() is useful;
import 'fetch-ie8'; //polyfill for fetch in ie8+


class Login extends React.Component {

	constructor(){
		super();
		this.loginHandler = this.loginHandler.bind(this);
		this.resetHandler = this.resetHandler.bind(this);
	}

	loginHandler(){
		var data = {
			userId: this.refs.userId.value.trim(),
			psw: this.refs.pwd.value.trim()
		};
		if( data.userId == '')
			alert('用户名不能为空');
		else if( data.psw == '')
			alert('用户密码不能为空');
		else 
			fetch('?action=login', {
				method: 'post',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			}).then(res => res.json()).then(data => {
				if(data.code==200){
					window.location.href = '../index';
				}else{
					alert(data.result);
				}
			}).catch((err) => {
				throw err;
				alert('网络异常!');
			});
	}

	resetHandler(){
		this.refs.userId.value = '';
		this.refs.pwd.value = '';
	}

	render(){
		return  (
			<div className="login_wrap">
				<h4>user id:</h4><input type="text" className="form-control user-id" ref="userId" />
				<h4>password: </h4><input type="password" className="form-control" ref="pwd"/>
				<div className="text-center button_row"><button className="btn btn-success" onClick={this.loginHandler}>login</button><button className="btn btn-danger" onClick={this.resetHandler}>reset</button></div>
			</div>
		);
	}

}

ReactDOM.render(
	<Login />,
	document.getElementById('login')//todo
);
