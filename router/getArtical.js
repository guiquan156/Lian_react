var GithubResource = require('../resource/GithubResource.js');
var _gr = new GithubResource();
var config = require('../config').githubApi;

//获取文本
module.exports = function (req, res) {
	//todo 改num
	var id = req.query.articalId;
	_gr.getIssuesById(config.userName, config.repo, id, function(error, result){
		res.json({code:200, result: result});
	});
}