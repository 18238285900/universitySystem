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
			dimensions: ['product', '预约人数', '缺考人数', '实考人数'],
			source: [{
				product: '考场一',
				'预约人数': 93.3,
				'缺考人数': 15.8,
				'实考人数': 23.7
			}, {
				product: '考场二',
				'预约人数': 83.1,
				'缺考人数': 3.4,
				'实考人数': 15.1
			}, {
				product: '考场三',
				'预约人数': 86.4,
				'缺考人数': 15.2,
				'实考人数': 52.5
			}, {
				product: '考场四',
				'预约人数': 82.4,
				'缺考人数': 23.9,
				'实考人数': 39.1
			}, {
				product: '考场五',
				'预约人数': 98.3,
				'缺考人数': 15.8,
				'实考人数': 53.7
			}, {
				product: '考场六',
				'预约人数': 83.1,
				'缺考人数': 23.4,
				'实考人数': 35.1
			}, {
				product: '……',
				'预约人数': 88.4,
				'缺考人数': 5.2,
				'实考人数': 62.5
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
			dimensions: ['product', '预约人数', '缺考人数', '实考人数'],
			source: [{
				product: '考场一',
				'预约人数': 53.3,
				'缺考人数': 95.8,
				'实考人数': 23.7
			}, {
				product: '考场二',
				'预约人数': 43.1,
				'缺考人数': 63.4,
				'实考人数': 15.1
			}, {
				product: '考场三',
				'预约人数': 66.4,
				'缺考人数': 35.2,
				'实考人数': 52.5
			}, {
				product: '考场四',
				'预约人数': 82.4,
				'缺考人数': 63.9,
				'实考人数': 39.1
			}, {
				product: '考场五',
				'预约人数': 68.3,
				'缺考人数': 45.8,
				'实考人数': 53.7
			}, {
				product: '考场六',
				'预约人数': 53.1,
				'缺考人数': 23.4,
				'实考人数': 35.1
			}, {
				product: '……',
				'预约人数': 68.4,
				'缺考人数': 5.2,
				'实考人数': 62.5
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
	
})