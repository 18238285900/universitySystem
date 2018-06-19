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
			dimensions: ['product', '薄弱程度', '出错人次'],
			source: [{
				product: '知识点1',
				'薄弱程度': 93.3,
				'出错人次': 15.8,
			}, {
				product: '知识点2',
				'薄弱程度': 83.1,
				'出错人次': 3.4,
			}, {
				product: '知识点3',
				'薄弱程度': 86.4,
				'出错人次': 15.2,
			}, {
				product: '知识点4',
				'薄弱程度': 82.4,
				'出错人次': 23.9,
			}, {
				product: '知识点5',
				'薄弱程度': 98.3,
				'出错人次': 15.8,
			}, {
				product: '知识点6',
				'薄弱程度': 83.1,
				'出错人次': 23.4,
			}, {
				product: '……',
				'薄弱程度': 88.4,
				'出错人次': 5.2,
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
            name: '%',
            min: 0,
            max: 100,
            interval: 10,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '出错人次',
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
})