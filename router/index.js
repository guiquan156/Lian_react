// router index.js

//todo 简单处理用户登录问题
function checkLogin(req){
	//记录用户是否登录
	var isLogin = 0;
	for (key in req.cookies) {
		if(COOKIES[key] == req.cookies[key]){
			isLogin = 1;
			break;
		}
	}
	return isLogin;
}


module.exports = function index (req, res) {
	var data = {};
	data.static_path = INDEX_PATH;
	// if(checkLogin(req))
	// 	res.render('index', data);
	// else
	// 	res.redirect('login');
	res.render('index/index.html', data);
}
