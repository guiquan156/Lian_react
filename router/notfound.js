module.exports = function(req, res){
	//todo error handle
	var data = {
		code: 404,
		msg: 'not found!'
	};
	res.render('error', data);
}