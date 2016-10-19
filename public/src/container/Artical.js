
import {Link} from 'react-router';
import { connect } from 'react-redux';
import {getArticalAsync} from '../action/action.js';
import marked from 'marked';
import hljs from 'highlight.js';

class Artical extends React.Component {

	render() {
		console.log(marked);

		marked.setOptions({
			renderer: new marked.Renderer(),
			gfm: true,
			tables: true,
			breaks: false,
			pedantic: false,
			sanitize: false,
			smartLists: true,
			smartypants: false,
			highlight: function (code) {
				return hljs.highlightAuto(code).value;
			}
		});

		const str = '大学期间我第一次做项目的时候，当时的三个人分别做不同的功能，互不影响。过了一个寒假，大家约好到一个地方把代码整合到一起。那时大家都没有版本控制的概念，经过了一下午的整合，总算是把项目能够完整成功地运行起来了，后来那个项目也一直没有用到版本控制。我的两个同学比我机智，他们合作一起做毕业设计，一个前端，一个后端。亏他们想得出拿云盘来进行协作，开发完的代码就上传到云盘，另一半则同步一下云盘，想想也是醉了。\r\n\r\n后来，我接触过大部分项目都用的是 SVN 来进行版本控制，不知大家跟我一样是否只是用 SVN 来备份代码或协作。是的，在 SVN 的使用中，大部分人都只用到了其中的 trunk，大家都在 trunk 上面修改提交协作。人少项目小时还勉强没什么问题。一旦项目大了人多了，问题也就慢慢地浮现出来。\r\n\r\n项目大了，当你正在 trunk 上开发一个新功能的时候，突然被告知要修复一个紧急 bug，这时怎么办？bug 如果不涉及到现在开发功能的文件还好，改完 bug 的文件直接上线即可。但是如果涉及到正在开发的文件，那么你只能先默默地注释掉新功能的代码，代码如果多且分布广的话真的会吐血。\r\n\r\n参与项目的人数多了，都在 trunk 上开发，今天我开发的功能要上线，可是其他的同事提交了开发一半的代码，代码混在一起就很难放心地上线了。同事之间每天的不断代码提交会增加项目的不稳定性，没有人会在项目不稳定的时候就把它放到线上给用户使用，这不是给自己挖坑吗。但是，我真的经历过，想起那时也真是愉快的时光。那时赶着项目上线，并且没有测试，一声令下就上线。用户就是我们的测试，每天都有许多的用户打电话过来反馈这里有问题那里有问题，不过这段时光总算是过去了。\r\n\r\n以上罗列的种种问题就是为了接下来做铺垫。分支可以解决以上等大部分问题，那么，分支又是什么？创建一条新的分支可以理解为把代码再复制一份，在新分支上面的改动不影响原来代码的运行。并且该分支上的代码，也就是复制的那一份的代码也会被添加到版本库中被管理，还可以进行分支合并的操作将代码们进行合并。比如，你被指派去开发一个功能，这个功能可能得花上一段时间的开发，为了不影响其他同事在原来功能上的开发，你可以拉去一条新的分支进行功能的开发，功能开发完毕便可以合并到原来的主干上。\r\n\r\n大部分用 SVN 进行版本控制的开发者都很少甚至不用 SVN 的分支，有的人说没必要，有的人说不会，有的人说合并很麻烦有很多的冲突，这些都是借口。在稍微有点规模的项目中，只有一条主干的 trunk 是无法保证项目的稳定性，至少得保证 trunk 主干上的代码是稳定的。SVN 创建一条分支是在远程机器上创建的，创建完毕你需要 checkout 到你本地才能使用。SVN 的一切操作都是以远程机器为主，你想进行分支合并的操作时得先将本地的代码提交并更新后才能进行合并操作，最后合并了其他分支上的代码后还需进行提交。\r\n\r\n那么，分支得创建多少，该怎么使用。参考了这篇[「多分支开发策略」](http://blog.csdn.net/crylearner/article/details/18779137)的文章，目前项目中我有四条一直保存着的分支。 master 主干分支也就是 trunk 是默认存在的，然后我从trunk上检出了三条分支，分别是 hotfix、dev、release。hotfix 分支是专门用来应对紧急 bug 的修复，dev 分支是用来新功能的开发，release 分支是用来发布测试版本，master 则是用来发布正式版本。dev 上开发完毕可以合并到 release 上，然后可以继续功能的开发。一旦 release 被测出有 bug，可以直接在 release 上面进行修复。线上的 bug 则可以使用 hotfix 分支进行修复。\r\n\r\n理论方法说得差不多了，接下来就是实战了，知道了那么多，但还是没有具体的操作也是白搭。可以戳这个[「TortoiseSVN中Branching和Merging实践」](http://blog.csdn.net/eggcalm/article/details/6606520)学习如何操作 SVN 分支的合并。需要注意的是，两条分支之间的合并都需要把本地的代码进行提交并更新才能进行 merge 操作，否则，你自己试了就会知道了嘿嘿嘿。';
		console.log(marked(str));
		return (
				<div className="artical wrap" dangerouslySetInnerHTML={{__html: marked(str)}}></div>
			);
	}

	// componentWillMount(){
	// 	let {dispatch, articals} = this.props;
	// 	let id = this.props.params.id;
	// 	if(Object.keys(articals).indexOf(id)>0) return; //存在 直接返回 然后render
	// 	else dispatch(getArticalAsync(id));//不存在向服务器请求数据 更新state 然后render
	// }
}


function aaa(state){
	return {
		articals: state.articals
	}
}

export default connect(aaa)(Artical);

