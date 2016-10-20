//请求github api
//用github来代替数据库 暂时这么玩 哈哈哈
var request = require('request');
var config = require('../config').githubApi;

//构造函数
function GithubResource () {}

/**
 * 获得单个issue
 * @param  {string}   owner 库拥有者
 * @param  {string}   repo  库名
 * @param  {number}   num   issue number
 * @param  {Function} cb    callback
 */
GithubResource.prototype.getIssuesById = function getIssuesById (owner, repo, num, cb) {
	// var url = 'https://api.github.com/repos/' + owner + '/' + repo + '/issues';
	var options = {
		"url": 'https://api.github.com/repos/' + owner + '/' + repo + '/issues/' + num,
		headers: config.headers
	};
	var that = this;
	request(options, function(error, response, body){
		//todo 改善资源类型的使用接口
		var result = JSON.parse(body);
		cb.call(that, error, result);
	});
}

GithubResource.prototype.getIssuesAll = function getIssuesAll (owner, repo, cb){
	var options = {
		"url": 'https://api.github.com/repos/' + owner + '/' + repo + '/issues?filter=created',
		headers: config.headers
	};
	var that = this;
	request(options, function(error, response, body){
		//todo 改善资源类型的使用接口
		var result = JSON.parse(body);
		cb.call(that, error, result);
	});
}

module.exports = GithubResource;



