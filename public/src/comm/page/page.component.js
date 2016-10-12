
import './page.less';
import {Link} from 'react-router';

class Page extends React.Component {
	render() {
		return (
				<div className="page_wrap">
					<p className="page_title">page</p>
					<p className="sub_title">xixi</p>
					<p>整理了一下可以省略结束标签的元素</p>
					<p>1.空元素语法的元素：area、base、br、col、command、embed、hr、img、input、keygen、link、mata、param、source、wbr</p>
					<p>2.可以省略结束标签的元素：colgroup、dt、dd、li、optgroup、p、rt、rp、thread、tbody、tfoot、tr、td、th</p>
					<p>3.可以全部省略标签的元素：html、head、body、tbody</p>
				</div>
			);
	}
}

export default Page;




