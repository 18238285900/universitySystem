$(function() {
//-----------------------试题统计------------------------------
	//one
	var dom = document.getElementById("shape-five");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	option = {
		legend: {
			x:"right"
		},

		tooltip: {},
		dataset: {
			dimensions: ['product', '简单', '一般', '困难'],
			source: [{
				product: '单选题',
				'简单': 93.3,
				'一般': 15.8,
				'困难': 23.7
			}, {
				product: '多选题',
				'简单': 83.1,
				'一般': 3.4,
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
	
	//two
	var dom = document.getElementById("shape-seven");
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

			data: ['出题次数', '出错次数', '试题总数', '出题覆盖率']
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
			data: ['学院一', '学院二', '学院三', '学院四', '学院五', '学院六', '学院七']
		}, ],
		yAxis: [{
			name: '题目数',
			type: 'value',
//			max: 500
		}],
		series: [{
			name: '出题次数',
			type: 'line',
			stack: '及格率',
			//          areaStyle: {normal: {}},
			data: [380, 86, 190, 97, 90, 92, 188]
		}, {
			name: '出错次数',
			type: 'line',
			stack: '总量',
			//          areaStyle: {normal: {}},
			data: [86, 282, 91, 296, 99, 98, 192]
		}, {
			name: '试题总数',
			type: 'line',
			stack: '及格率',
			//          areaStyle: {normal: {}},
			data: [190, 282, 151, 84, 90, 290, 92]
		}, {
			name: '出题覆盖率',
			type: 'line',
			stack: '及格率',
			//          areaStyle: {normal: {}},
			data: [278, 185, 90, 279, 80, 189, 87]
		}]
	};;
	if(option && typeof option === "object") {
		myChart.setOption(option, true);
	}
	

})