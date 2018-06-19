$(function() {
//-----------------------试题统计------------------------------
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

			data: ['教师评价', '综合评价', '积分排名指数']
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
			data: ['2016年春', '2016年秋', '2017年春']
		}, ],
		yAxis: [{
			name: '指数',
			type: 'value',
//			max: 100
		}],
		series: [{
			name: '教师评价',
			type: 'line',
			stack: '及格率',
			//          areaStyle: {normal: {}},
			data: [30, 86, 90]
		}, {
			name: '综合评价',
			type: 'line',
			stack: '总量',
			//          areaStyle: {normal: {}},
			data: [86, 82, 91]
		}, {
			name: '积分排名指数',
			type: 'line',
			stack: '及格率',
			//          areaStyle: {normal: {}},
			data: [13, 22, 51]
		}, ]
	};;
	if(option && typeof option === "object") {
		myChart.setOption(option, true);
	}
	
})