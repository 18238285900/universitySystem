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
			dimensions: ['product', '最高成绩', '最低成绩', '平均成绩'],
			source: [{
				product: '12-01',
				'最高成绩': 93.3,
				'最低成绩': 15.8,
				'平均成绩': 23.7
			}, {
				product: '12-02',
				'最高成绩': 83.1,
				'最低成绩': 3.4,
				'平均成绩': 15.1
			}, {
				product: '12-03',
				'最高成绩': 86.4,
				'最低成绩': 15.2,
				'平均成绩': 52.5
			}, {
				product: '12-04',
				'最高成绩': 82.4,
				'最低成绩': 23.9,
				'平均成绩': 39.1
			}, {
				product: '12-05',
				'最高成绩': 98.3,
				'最低成绩': 15.8,
				'平均成绩': 53.7
			}, {
				product: '12-06',
				'最高成绩': 83.1,
				'最低成绩': 23.4,
				'平均成绩': 35.1
			}, {
				product: '12-07',
				'最高成绩': 88.4,
				'最低成绩': 5.2,
				'平均成绩': 62.5
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
            name: '占比率',
            min: 0,
            max: 100,
            interval: 10,
            axisLabel: {
                formatter: '{value} %'
            }
        },
//      {
//          type: 'value',
//          name: '试题数量',
//          min: 0,
//          max: 1000,
//          interval: 50,
//          axisLabel: {
//              formatter: '{value}'
//          }
//      }
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

			data: ['均方差', '中位', '方差']
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
			data: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30']
		}, ],
		yAxis: [{
//			name: '试题数',
			type: 'value',
//			max: 500
		}],
		series: [{
			name: '均方差',
			type: 'line',
			stack: '及格率',
			//          areaStyle: {normal: {}},
			data: [380, 86, 190, 97, 90, 92, 188,380, 86, 190, 97, 90, 92]
		}, {
			name: '中位',
			type: 'line',
			stack: '总量',
			//          areaStyle: {normal: {}},
			data: [86, 282, 91, 296, 99, 98, 192,86, 282, 91, 296, 99, 98]
		}, {
			name: '方差',
			type: 'line',
			stack: '及格率',
			//          areaStyle: {normal: {}},
			data: [190, 282, 151, 84, 90, 290, 92, 282, 151, 84, 90, 290, 92]
		}, ]
	};;
	if(option && typeof option === "object") {
		myChart.setOption(option, true);
	}
	

})