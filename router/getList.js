
module.exports = function(req, res){
	//todo 用数据库来搞
	if(req.query.isAll == 1){
		var data = {
			code: 200,
			result: [
				{
					title: 'A Javauildices | React',
					date: '2016-9-9',
					cat: 'JS',
					id: 1
				},
				{
					title: 'A Javauilding user inte',
					date: '2016-9-9',
					cat: 'JS',
					id: 1
				},
				{
					title: 'A Javauilding user interfeact',
					date: '2016-9-9',
					cat: 'JS',
					id: 1
				},
				{
					title: 'Ading user interfaces | React',
					date: '2016-9-9',
					cat: 'CSS',
					id: 1
				},
				{
					title: 'A Javauilding userct',
					date: '2016-9-9',
					cat: 'CSS',
					id: 1
				},
				{
					title: 'A Javauilding user interfaces | React user interfaces | Re user interfaces | Re',
					date: '2016-9-9',
					cat: 'HTML',
					id: 1

				},
				{
					title: 'A Javauilding user interfReact',
					date: '2016-9-9',
					cat: 'HTML',
					id: 1
				},
				{
					title: 'Ading user interfaces | React',
					date: '2016-9-9',
					cat: 'NODE',
					id: 1
				},
				{
					title: 'A Javauilding userct',
					date: '2016-9-9',
					cat: 'NODE',
					id: 1
				},
				{
					title: 'A Javauilding user interfaces | React user interfaces | Re user interfaces | Re',
					date: '2016-9-9',
					cat: 'NODE',
					id: 1
				},
				{
					title: 'A Javauilding user interfReact',
					date: '2016-9-9',
					cat: 'NODE',
					id: 1
				}
			]
		}		
	}else{
		var data = {
			code: 200,
			result: {
				JS: [
					{
						title: 'A Javauildices | React',
						date: '2016-9-9',
						cat: 'JS',
						id: 1
					},
					{
						title: 'A Javauilding user inte',
						date: '2016-9-9',
						cat: 'JS',
						id: 1
					},
					{
						title: 'A Javauilding user interfeact',
						date: '2016-9-9',
						cat: 'JS',
						id: 1
					},
				],
				CSS: [
					{
						title: 'Ading user interfaces | React',
						date: '2016-9-9',
						cat: 'CSS',
						id: 1
					},
					{
						title: 'A Javauilding userct',
						date: '2016-9-9',
						cat: 'CSS',
						id: 1
					},
				],
				HTML: [

					{
						title: 'A Javauilding user interfaces | React user interfaces | Re user interfaces | Re',
						date: '2016-9-9',
						cat: 'HTML',
						id: 1

					},
					{
						title: 'A Javauilding user interfReact',
						date: '2016-9-9',
						cat: 'HTML',
						id: 1
					},
				],
				NODE: [
					{
						title: 'Ading user interfaces | React',
						date: '2016-9-9',
						cat: 'NODE',
						id: 1
					},
					{
						title: 'A Javauilding userct',
						date: '2016-9-9',
						cat: 'NODE',
						id: 1
					},
					{
						title: 'A Javauilding user interfaces | React user interfaces | Re user interfaces | Re',
						date: '2016-9-9',
						cat: 'NODE',
						id: 1
					},
					{
						title: 'A Javauilding user interfReact',
						date: '2016-9-9',
						cat: 'NODE',
						id: 1
					},
				]
			}
		};
	}
	res.json(data);
}

