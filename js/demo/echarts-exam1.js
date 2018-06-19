$(function() {
//-----------------------试题统计------------------------------
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
			dimensions: ['product', '专业课', '基础课', '选修课'],
			source: [{
				product: '学院一',
				'专业课': 93.3,
				'基础课': 15.8,
				'选修课': 23.7
			}, {
				product: '学院二',
				'专业课': 83.1,
				'基础课': 3.4,
				'选修课': 15.1
			}, {
				product: '学院三',
				'专业课': 86.4,
				'基础课': 15.2,
				'选修课': 52.5
			}, {
				product: '学院四',
				'专业课': 82.4,
				'基础课': 23.9,
				'选修课': 39.1
			}, {
				product: '学院五',
				'专业课': 98.3,
				'基础课': 15.8,
				'选修课': 53.7
			}, {
				product: '学院六',
				'专业课': 83.1,
				'基础课': 23.4,
				'选修课': 35.1
			}, {
				product: '……',
				'专业课': 88.4,
				'基础课': 5.2,
				'选修课': 62.5
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
            name: '人数',
            min: 0,
            max: 100,
            interval: 10,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '分值',
            min: 0,
            max: 100,
            interval: 10,
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
			dimensions: ['product', '专业课', '基础课', '选修课'],
			source: [{
				product: '学院一',
				'专业课': 63.3,
				'基础课': 75.8,
				'选修课': 23.7
			}, {
				product: '学院二',
				'专业课': 83.1,
				'基础课': 63.4,
				'选修课': 15.1
			}, {
				product: '学院三',
				'专业课': 76.4,
				'基础课': 55.2,
				'选修课': 52.5
			}, {
				product: '学院四',
				'专业课': 62.4,
				'基础课': 93.9,
				'选修课': 39.1
			}, {
				product: '学院五',
				'专业课': 98.3,
				'基础课': 15.8,
				'选修课': 53.7
			}, {
				product: '学院六',
				'专业课': 53.1,
				'基础课': 23.4,
				'选修课': 35.1
			}, {
				product: '……',
				'专业课': 88.4,
				'基础课': 5.2,
				'选修课': 62.5
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
            name: '人数',
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

			data: ['从未预约考生人数', '预约但未考试的学生人数', '预约且考试的学生人数']
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
			name: '人数',
			type: 'value',
//			max: 500
		}],
		series: [{
			name: '从未预约考生人数',
			type: 'line',
			stack: '及格率',
			//          areaStyle: {normal: {}},
			data: [380, 86, 190, 97, 90, 92, 188]
		}, {
			name: '预约但未考试的学生人数',
			type: 'line',
			stack: '总量',
			//          areaStyle: {normal: {}},
			data: [86, 282, 91, 296, 99, 98, 192]
		}, {
			name: '预约且考试的学生人数',
			type: 'line',
			stack: '及格率',
			//          areaStyle: {normal: {}},
			data: [190, 282, 151, 84, 90, 290, 92]
		}, ]
	};;
	if(option && typeof option === "object") {
		myChart.setOption(option, true);
	}
	

})