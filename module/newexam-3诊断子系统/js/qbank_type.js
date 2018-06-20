require.config(requireConfig)
require(['jquery', 'laydate', 'echarts', 'layer', 'mySelect', 'bootstrap', 'content'], function ($, laydate, echarts, layui, mySelect) {
	//储存用户选择后
	var data_param = {}
	// 模拟数据，从后台返回的数据，
	var data_echarts = {
		data001: [ //图表所需数据； 课程类型分析 -- 学院
			{
				name: '学院1',
				key: 'xy1',
				value: [{
					name: '专业课',
					value: '83.1'
				}, {
					name: '基础课',
					value: '83.1'
				}, {
					name: '选修课',
					value: '83.1'
				}]
			}, {
				name: '学院2',
				key: 'xy2',
				value: [{
					name: '专业课',
					value: '83.1'
				}, {
					name: '基础课',
					value: '83.1'
				}, {
					name: '选修课',
					value: '83.1'
				}]
			}, {
				name: '学院4',
				key: 'xy2',
				value: [{
					name: '专业课',
					value: '83.1'
				}, {
					name: '基础课',
					value: '83.1'
				}, {
					name: '选修课',
					value: '83.1'
				}]
			}, {
				name: '学院3',
				key: 'xy3',
				value: [{
					name: '专业课',
					value: '83.1'
				}, {
					name: '基础课',
					value: '83.1'
				}, {
					name: '选修课',
					value: '83.1'
				}]
			}
		],
		data002: [  //图表所需数据；课程类型分析 -- 题型
			{
				name: '单选题',
				key: 'xy1',
				value: [{
					name: '简单',
					value: '83.1'
				}, {
					name: '一般',
					value: '83.1'
				}, {
					name: '困难',
					value: '83.1'
				}]
			}, {
				name: '多选题',
				key: 'xy2',
				value: [{
					name: '简单',
					value: '83.1'
				}, {
					name: '一般',
					value: '83.1'
				}, {
					name: '困难',
					value: '83.1'
				}]
			}, {
				name: '判断',
				key: 'xy2',
				value: [{
					name: '简单',
					value: '83.1'
				}, {
					name: '一般',
					value: '83.1'
				}, {
					name: '困难',
					value: '83.1'
				}]
			}, {
				name: '填空',
				key: 'xy3',
				value: [{
					name: '简单',
					value: '83.1'
				}, {
					name: '一般',
					value: '83.1'
				}, {
					name: '困难',
					value: '83.1'
				}]
			}
		],
		data003: [ //图表所需数据； 教师群体分析 
			{
				name: '中青年教师',
				key: 'xy1',
				value: [{
					name: '倾向专业课',
					value: '341'
				}, {
					name: '倾向基础课',
					value: '212'
				}, {
					name: '倾向选修课',
					value: '56'
				}]
			}, {
				name: '教授',
				key: 'xy2',
				value: [{
					name: '倾向专业课',
					value: '83'
				}, {
					name: '倾向基础课',
					value: '185'
				}, {
					name: '倾向选修课',
					value: '481'
				}]
			}, {
				name: '讲师',
				key: 'xy2',
				value: [{
					name: '倾向专业课',
					value: '321'
				}, {
					name: '倾向基础课',
					value: '121'
				}, {
					name: '倾向选修课',
					value: '431'
				}]
			}, {
				name: '教护年龄10年教师',
				key: 'xy3',
				value: [{
					name: '倾向专业课',
					value: '81'
				}, {
					name: '倾向基础课',
					value: '14'
				}, {
					name: '倾向选修课',
					value: '161'
				}]
			}
		],
		data004:{
			x:['中青年教师', '教授', '讲师', '教护龄10年教师', '入校3年以内教师'],
			y1:[380, 86, 190, 97, 90],
			y2:[86, 282, 91, 296, 99],
			y3:[190, 282, 151, 84, 90]

		},
		data_college: [ //select所需数据；课程类型分析 -- 学院
			{
				name: '学院1',
				key: 'xy1',//学院标识
				value: [{
					name: '专业1',
					key: 'zx1',
					value: null
				}, {
					name: '专业2',
					key: 'zx2',
					value: null
				}]
			}, {
				name: '学院2',
				key: 'xy2',
				value: [{
					name: '专业3',
					key: 'zx3',
					value: null
				}, {
					name: '专业4',
					key: 'zx4',
					value: null
				}]
			}, {
				name: '学院3',
				key: 'xy3',
				value: [{
					name: '专业5',
					key: 'zx5',
					value: null
				}, {
					name: '专业6',
					key: 'zx6',
					value: null
				}]
			}
		],
		data_teacher: [//select所需数据；课程类型分析 -- 题型
			{
				name: '学院1',
				key: 'xy1',//学院标识
				value: [{
					name: '专业1',
					key: 'zx1',
					value: null
				}, {
					name: '专业2',
					key: 'zx2',
					value: null
				}]
			}, {
				name: '学院2',
				key: 'xy2',
				value: [{
					name: '专业3',
					key: 'zx3',
					value: null
				}, {
					name: '专业4',
					key: 'zx4',
					value: null
				}]
			}, {
				name: '学院3',
				key: 'xy3',
				value: [{
					name: '专业5',
					key: 'zx5',
					value: null
				}, {
					name: '专业6',
					key: 'zx6',
					value: null
				}]
			}
		]
	}
	// 课程类型分析
	var analyze001 = function () {
		//时间选择器
		laydate.render({
			elem: '#start',
			type: 'datetime',
			theme: '#3ca2e0',
			done: function (value, date, endDate) {
				console.log(value); //得到日期生成的值，如：2017-08-18
				console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
				console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
				data_param.start_college = value;
			}
		});
		laydate.render({
			elem: '#end',
			type: 'datetime',
			theme: '#3ca2e0',
			done: function (value, date, endDate) {
				data_param.end_college = value;
				// ajax请求到的数据,暂时用模拟数据代替
				var data = data_echarts.echarts001;
				console.log(data_param)//用户选择的数据，用于调用接口时的参数；
				var data = data_echarts.data001//后台获取的数据，暂且使用模拟数据代替
				randerEcharts001(data)
			}
		});
		laydate.render({
			elem: '#time1',
			type: 'datetime',
			theme: '#3ca2e0',
			done: function (value, date, endDate) {
				data_param.start_teacher = value;
			}
		});
		laydate.render({
			elem: '#time2',
			type: 'datetime',
			theme: '#3ca2e0',
			done: function (value, data, endDate) {
				data_param.end_teacher = value;
				console.log(data_param)
				var data = data_echarts.data002
				randerEcharts002(data)
			}
		});
		var myChart001 = echarts.init($('#shape-one')[0]);
		var myChart002 = echarts.init($('#shape-one-b')[0]);

		var randerEcharts001 = function (data) {
			var data = data || {};
			var source = [];
			for (var i = 0; i < data.length; i++) {
				var item = data[i]
				source.push({
					product: item.name,
					'专业课': item.value[0].value,
					'基础课': item.value[1].value,
					'选修课': item.value[2].value
				})
			}
			myChart001.setOption({
				legend: {
					x: "center"
				},
				tooltip: {},
				dataset: {
					dimensions: ['product', '专业课', '基础课', '选修课'],
					source: source.length ? source : [{}]
				},
				xAxis: {
					type: 'category'
				},
				yAxis: [{
					type: 'value',
					name: '错误率',
					min: 0,
					max: 100,
					interval: 10,
					axisLabel: {
						formatter: '{value} %'
					}
				},
				{
					type: 'value',
					name: '试题数量',
					min: 0,
					max: 1000,
					interval: 50,
					axisLabel: {
						formatter: '{value}'
					}
				}
				],
				series: [{
					type: 'bar'
				}, {
					type: 'bar'
				}, {
					type: 'bar'
				}]
			}, true);
		}
		var randerEcharts002 = function (data) {
			var data = data || {};
			var source = [];
			for (var i = 0; i < data.length; i++) {
				var item = data[i]
				source.push({
					product: item.name,
					'简单': item.value[0].value,
					'一般': item.value[1].value,
					'困难': item.value[2].value
				})
			}
			myChart002.setOption({
				legend: {
					x: "center"
				},
				tooltip: {},
				dataset: {
					dimensions: ['product', '简单', '一般', '困难'],
					source: source.length ? source : [{}]
				},
				xAxis: {
					type: 'category'
				},
				yAxis: [{
					type: 'value',
					name: '错误率',
					min: 0,
					max: 100,
					interval: 10,
					axisLabel: {
						formatter: '{value} %'
					}
				},
				{
					type: 'value',
					name: '试题数量',
					min: 0,
					max: 1000,
					interval: 50,
					axisLabel: {
						formatter: '{value}'
					}
				}
				],
				series: [{
					type: 'bar'
				}, {
					type: 'bar'
				}, {
					type: 'bar'
				}]
			}, true);
		}
		randerEcharts001();
		randerEcharts002();
		//绑定select事件
		//select 001
		var mySelect001 = mySelect(data_echarts.data_college);
		var select_two = $('select#shape-one-select-two');
		$('select#shape-one-select-one').append(mySelect001).on('change', function (e) {
			var index = e.target.selectedIndex;
			console.log(this.options[index].text)
			console.log(this.options[index].value)
			data_param.college = this.options[index].value
			var tpl = '<option value="0">请选择专业</option>' + mySelect(data_echarts.data_college[index - 1].value)
			select_two.empty().append(tpl)
		})
		select_two.on('change', function (e) {
			var index = e.target.selectedIndex;
			data_param.specialty = this.options[index].value
		})
		//select 002
		var mySelect002 = mySelect(data_echarts.data_teacher);
		var select_b_two = $('select#shape-one-b-select-two');
		$('select#shape-one-b-select-one').append(mySelect002).on('change', function (e) {
			var index = e.target.selectedIndex;
			data_param.teacher = this.options[index].value
			var tpl = '<option value="0">请选择专业</option>' + mySelect(data_echarts.data_teacher[index - 1].value)
			select_b_two.empty().append(tpl)
		})
		select_b_two.on('change', function (e) {
			var index = e.target.selectedIndex;
			data_param.specialty = this.options[index].value
		})
	}
	//同比分析
	var analyze002 = function () {
		laydate.render({
			elem: '#time3',
			type: 'datetime',
			theme: '#3ca2e0'
		});
		laydate.render({
			elem: '#time4',
			type: 'datetime',
			theme: '#3ca2e0'
		});
		laydate.render({
			elem: '#time5',
			type: 'datetime',
			theme: '#3ca2e0'
		});
		laydate.render({
			elem: '#time6',
			type: 'datetime',
			theme: '#3ca2e0'
		});
		var myChart003 = echarts.init($('#shape-two')[0]);
		var myChart004 = echarts.init($('#shape-two-b')[0]);
		var randerEcharts003 = function (data) {
			var data = data || {};
			var source = [];
			for (var i = 0; i < data.length; i++) {
				var item = data[i]
				source.push({
					product: item.name,
					'专业课': item.value[0].value,
					'基础课': item.value[1].value,
					'选修课': item.value[2].value
				})
			}
			myChart003.setOption({
			}, true);
		}
		var randerEcharts004 = function (data) {
			var data = data || {};
			var source = [];
			for (var i = 0; i < data.length; i++) {
				var item = data[i]
				source.push({
					product: item.name,
					'专业课': item.value[0].value,
					'基础课': item.value[1].value,
					'选修课': item.value[2].value
				})
			}
			myChart004.setOption({
			}, true);
		}
	}
	// 教师群体分析
	var analyze003 = function () {
		laydate.render({
			elem: '#time7',
			type: 'datetime',
			theme: '#3ca2e0'
		});
		laydate.render({
			elem: '#time8',
			type: 'datetime',
			theme: '#3ca2e0',
			done: function (value, data, endDate) {
				data_param.end_teacher = value;
				console.log(data_param)
				var data = data_echarts.data003
				randerEcharts005(data)
			}
		});
		var myChart005 = echarts.init($('#shape-three')[0]);
		var randerEcharts005 = function (data) {
			console.log(data)
			var data = data || {};
			var xAxis_data = [];
			var series_data001 = [];
			var series_data002 = [];
			var series_data003 = [];
			for (var i = 0; i < data.length; i++) {
				var item = data[i]
				console.log()
				xAxis_data.push(item.name);
				series_data001.push(item[0].value.value)
				series_data002.push(item[1].value.value)
				series_data003.push(item[2].value.value)

			}
			console.log(xAxis_data)
			console.log(series_data001)
			console.log(series_data002)
			console.log(series_data003)
			myChart005.setOption({
				title: {
					text: ''
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross',
						label: {
							backgroundColor: '#6a7985'
						}
					}
				},
				legend: {
		
					data: ['倾向专业课', '倾向基础课', '倾向选修课']
				},
				toolbox: {
					feature: {
						//          saveAsImage: {}  //保存为图片按钮
					}
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: [{
					type: 'category',
					boundaryGap: false,
					data: xAxis_data
				},],
				yAxis: [{
					name: '试题数',
					type: 'value',
					//			max: 500
				}],
				series: [{
					name: '倾向专业课',
					type: 'line',
					stack: '及格率',
					//          areaStyle: {normal: {}},
					data: series_data001
				}, {
					name: '倾向基础课',
					type: 'line',
					stack: '总量',
					//          areaStyle: {normal: {}},
					data: series_data002
				}, {
					name: '倾向选修课',
					type: 'line',
					stack: '及格率',
					//          areaStyle: {normal: {}},
					data: series_data003
				},]
			}, true);
		}
		randerEcharts005(data_echarts.data003)
	}
	analyze001();	// 课程类型分析
	analyze002();	//同比分析
	// analyze003();	// 教师群体分析

	$(".swphoto").click(function () {
		$(this).children("img").toggle();
	});

	$(".zk-ss-btn").click(function () {
		$(this).parent(".shou").toggleClass("zhan");
	});

	$(".filter dl dd a").click(function () {
		$(this).siblings("a").removeClass("on");
		$(this).addClass("on");
	});
});