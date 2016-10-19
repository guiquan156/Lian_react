var Prism = require('prismjs');

//获取文本
module.exports = function (req, res) {
	//todo 改为数据库读取数据
	var html = `
		<h1 className="artical_title tc">HTML5中可以省略的标签</h1>
		<h6 className="artical_time tc">2019-8-10</h6>
		<p>整理了一下可以省略结束标签的元素</p>
		<p>1.空元素语法的元素：area、base、br、col、command、embed、hr、img、input、keygen、link、mata、param、source、wbr</p>
		<p>2.可以省略结束标签的元素：colgroup、dt、dd、li、optgroup、p、rt、rp、thread、tbody、tfoot、tr、td、th</p>
		<p>3.可以全部省略标签的元素：html、head、body、tbody</p>
	`;

	var code = `
	var Prism = require('prismjs');
	// The code snippet you want to highlight, as a string
	var code = "var data = 1;";
	// Returns a highlighted HTML string
	var html = Prism.highlight(code, Prism.languages.javascript);
	`;

	//todo 这个拼接 应该在编辑页面做
	html += '<pre><code class="language-javascript">'
	html += Prism.highlight(code, Prism.languages.javascript)
	html += '</code></pre>'
	var data = {
		code: 200,
		result: {
			id: 1,
			content: html
		}
	}
	res.json(data);
}