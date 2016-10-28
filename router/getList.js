var GithubResource = require('../resource/GithubResource.js');
var _gr = new GithubResource();
var config = require('../config').githubApi;


//todo 考虑抽离model层 暂时逻辑比较简单 写在一起算了。。。

//缓存
var resultStroge = null;
var allResultStroge = null;
var catResultStroge = null;

//处理githubApi返回的数据
function _simplifyResult(result) {
	var sResult = [];
	for(var i=0,len=result.length; i<len; i++){
		var obj = {}
		obj.id = result[i].number;
		obj.title = result[i].title;
		obj.date = (result[i].updated_at ? result[i].updated_at : result[i].created_at).split('T').shift();
		sResult[i] = obj;
	}
	return sResult;
}

//把数据分类
function _catSimplifiedResult(result){
	var cResult = {};

	for(var i=0,len=result.length; i<len; i++){
		//没有分类的过滤掉先
		if(!result[i].labels || result[i].labels.length == 0) continue;
		var obj = {}
		obj.id = result[i].number;
		obj.title = result[i].title;
		obj.date = (result[i].updated_at ? result[i].updated_at : result[i].created_at).split('T').shift();
		obj.cat = result[i].labels[0].name;
		cResult[obj.cat] ? cResult[obj.cat].push(obj) : (cResult[obj.cat] = [obj]);
	}

	return cResult;

}

module.exports = function(req, res){
	var data = {};
	data.code = 200;//默认成功
	if(resultStroge){ //存在缓存直接干
		if(req.query.isAll == 1)
			data.result = allResultStroge = allResultStroge ? allResultStroge : _simplifyResult(resultStroge);
		else
			data.result = catResultStroge = catResultStroge ? catResultStroge : _catSimplifiedResult(resultStroge);
		res.json(data);
	}else{ //不存在 先刚gitApi一波
		_gr.getIssuesAll(config.userName, config.repo, function(error, result){
			//存一下
			resultStroge = result;
			if(req.query.isAll == 1)
				data.result = allResultStroge = _simplifyResult(resultStroge);
			else
				data.result = catResultStroge = _catSimplifiedResult(resultStroge);
			res.json(data);
		});
	}

}

