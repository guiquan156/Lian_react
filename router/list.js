module.exports = function list (req, res) {
	var data = {};
	data.static_path = INDEX_PATH;
	// if(checkLogin(req))
	// 	res.render('index', data);
	// else
	// 	res.redirect('login');
	res.render('list/list.html', data);
}