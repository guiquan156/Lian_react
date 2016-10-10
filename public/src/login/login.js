//the easy component of login used react!!

const React = require('react');
const ReactDOM = require('react-dom');
require('./login.less')

class Login extends React.Component {

	constructor(){
		super();
		this.loginHandler = this.loginHandler.bind(this);
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
			$.ajax({
				url: '?action=login',
				data: data,
				type: 'post',
				dataType: 'json',
				success: function(data){
					if(data.code == 200)
						window.location.href = 'index';
					else
						alert(data.result);
				},
				error: function(){
					alert('网络出现异常，请刷新再试！')
				}
			});
	}

	render(){
		return  (
			<div className="login_wrap">
				<h4>user id:</h4><input type="text" className="form-control user-id" ref="userId" />
				<h4>password: </h4><input type="password" className="form-control" ref="pwd"/>
				<div className="text-center button_row"><button className="btn btn-success" onClick={this.loginHandler}>login</button><button className="btn btn-danger">reset</button></div>
			</div>
		);
	}
	
}

ReactDOM.render(
	<Login />,
	document.getElementById('login')//todo
);

