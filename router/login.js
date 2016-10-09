// router login.js

module.exports = function login (req, res){
	if(req.query.action == 'login'){
		if(req.body.userId == 'guiquan156' && req.body.psw == 'lianguiquan'){
			//todo set cookies
			// res.header('set-cookie', )
			//简单处理cookie问题
			var timeStamp = +new Date()
			  , cookie = timeStamp + 'guiquan156';
			COOKIES['guiquan156'] = cookie; //设置cookie
			res.cookie('guiquan156', COOKIES['guiquan156'], {domain: '.lian.com'});
			res.json({code: 200, result: '', msg: 'success'});
		}
		else{
			res.json({code: 2002, result: '用户名或密码错误！', msg: 'error'});
		}
	}else{
		var data = {};
		data.static_path = INDEX_PATH;
		res.render('login/login.html', data);
	}
}

