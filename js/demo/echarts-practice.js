$(function() {
	//one
	var dom = document.getElementById("shape-one");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	option = {
		legend: {
			x:"center"
		},

		tooltip: {},
		dataset: {
			dimensions: ['product', '练习频度', '知识点覆盖度','平均答题时长', '练习平均成绩'],
			source: [{
				product: '学院一',
				'练习频度': 93.3,
				'知识点覆盖度': 15.8,
				'平均答题时长': 93.3,
				'练习平均成绩': 45.8,
			}, {
				product: '学院二',
				'练习频度': 93.3,
				'知识点覆盖度': 15.8,
				'平均答题时长': 93.3,
				'练习平均成绩': 45.8,
			}, {
				product: '学院三',
				'练习频度': 93.3,
				'知识点覆盖度': 15.8,
				'平均答题时长': 93.3,
				'练习平均成绩': 45.8,
			}, {
				product: '学院四',
				'练习频度': 93.3,
				'知识点覆盖度': 15.8,
				'平均答题时长': 93.3,
				'练习平均成绩': 45.8,
			}, {
				product: '学院五',
				'练习频度': 93.3,
				'知识点覆盖度': 15.8,
				'平均答题时长': 93.3,
				'练习平均成绩': 45.8,
			}, {
				product: '学院六',
				'练习频度': 93.3,
				'知识点覆盖度': 15.8,
				'平均答题时长': 93.3,
				'练习平均成绩': 45.8,
			}, {
				product: '……',
				'练习频度': 93.3,
				'知识点覆盖度': 15.8,
				'平均答题时长': 93.3,
				'练习平均成绩': 45.8,
			}, ],

		},
		xAxis: {
			type: 'category'
		},

yAxis:[{
            type: 'value',
            name: '%',
            min: 0,
            max: 100,
            interval: 10,
            axisLabel: {
                formatter: '{value} %'
            }
        },
      {
          type: 'value',
          name: '分值',
          min: 0,
         max: 100,
          interval: 10,
          axisLabel: {
              formatter: '{value}' }
      }
    ],

		// Declare several bar series, each will be mapped
		// to a column of dataset.source by default.
		series: [{
			type: 'bar'
		}, {
			type: 'bar'
		}, {
			type: 'bar'
		}, {
			type: 'bar'
		}, {
			type: 'bar'
		}
		]
	};;
	if(option && typeof option === "object") {
		myChart.setOption(option, true);
	}
	
	//two
	var dom = document.getElementById("shape-one-b");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	option = {
		legend: {
			x:"center"
		},

		tooltip: {},
		dataset: {
			dimensions: ['product', '简单', '一般', '困难'],
			source: [{
				product: '单选题',
				'简单': 93.3,
				'一般': 95.8,
				'困难': 23.7
			}, {
				product: '多选题',
				'简单': 53.1,
				'一般': 93.4,
				'困难': 15.1
			}, {
				product: '判断',
				'简单': 86.4,
				'一般': 15.2,
				'困难': 52.5
			}, {
				product: '填空',
				'简单': 82.4,
				'一般': 23.9,
				'困难': 39.1
			}, {
				product: '简答',
				'简单': 98.3,
				'一般': 15.8,
				'困难': 53.7
			}, {
				product: '组合题',
				'简单': 83.1,
				'一般': 23.4,
				'困难': 35.1
			}, {
				product: '……',
				'简单': 88.4,
				'一般': 5.2,
				'困难': 62.5
			}, ],

		},
		xAxis: {
			type: 'category'
		},
//		yAxis: {
//			name: '单位(%)',
//			type: 'value',
//			max: 100
//		},

yAxis:[{
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

		// Declare several bar series, each will be mapped
		// to a column of dataset.source by default.
		series: [{
			type: 'bar'
		}, {
			type: 'bar'
		}, {
			type: 'bar'
		}]
	};;
	if(option && typeof option === "object") {
		myChart.setOption(option, true);
	}
	
	//four
	var dom = document.getElementById("shape-three");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	option = {
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

			data: ['练习频度', '知识点覆盖度', '平均答题时长', '练习平均成绩']
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
			data: ['中青年教师', '教授', '讲师', '教护龄10年教师', '入校3年以内教师']
		}, ],
		yAxis: [{
			name: '完整度',
			type: 'value',
//			max: 500
		}],
		series: [{
			name: '练习频度',
			type: 'line',
			stack: '及格率',
			//          areaStyle: {normal: {}},
			data: [88, 76, 10, 97, 90, 92, 88]
		}, {
			name: '知识点覆盖度',
			type: 'line',
			stack: '总量',
			//          areaStyle: {normal: {}},
			data: [86, 52, 91, 26, 79, 98, 19]
		},{
			name: '平均答题时长',
			type: 'line',
			stack: '总量',
			//          areaStyle: {normal: {}},
			data: [81, 72, 81, 26, 69, 98, 19]
		},{
			name: '练习平均成绩',
			type: 'line',
			stack: '总量',
			//          areaStyle: {normal: {}},
			data: [6, 80, 91, 46, 91, 68, 19]
		}
		
		
		]
	};;
	if(option && typeof option === "object") {
		myChart.setOption(option, true);
	}
	

})