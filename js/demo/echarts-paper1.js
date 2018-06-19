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
			dimensions: ['product', '答错率', '利用率', '练习频度'],
			source: [{
				product: '学院一',
				'答错率': 93.3,
				'利用率': 15.8,
				'练习频度': 23.7
			}, {
				product: '学院二',
				'答错率': 83.1,
				'利用率': 3.4,
				'练习频度': 15.1
			}, {
				product: '学院三',
				'答错率': 86.4,
				'利用率': 15.2,
				'练习频度': 52.5
			}, {
				product: '学院四',
				'答错率': 82.4,
				'利用率': 23.9,
				'练习频度': 39.1
			}, {
				product: '学院五',
				'答错率': 98.3,
				'利用率': 15.8,
				'练习频度': 53.7
			}, {
				product: '学院六',
				'答错率': 83.1,
				'利用率': 23.4,
				'练习频度': 35.1
			}, {
				product: '……',
				'答错率': 88.4,
				'利用率': 5.2,
				'练习频度': 62.5
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
})