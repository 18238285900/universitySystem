$(function() {
	//-----------------------试题统计------------------------------
	//one
	var dom = document.getElementById("shape-one");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	app.title = '坐标轴刻度与标签对齐';

	option = {
		color: ['#3398DB'],
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
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
			data: ['学院一', '学院二', '学院三', '学院四', '学院五', '学院六', '……'],
			axisTick: {
				alignWithLabel: true
			}
		}],
		yAxis: [{
			name: '完成度%',
			type: 'value'
		}],
		series: [{
			name: '完整度',
			type: 'bar',
			barWidth: '30%',
			data: [10, 52, 20, 34, 70, 90, 20]
		}]
	};;
	if(option && typeof option === "object") {
		myChart.setOption(option, true);
	}

	var dom = document.getElementById("shape-one-b");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	app.title = '坐标轴刻度与标签对齐';

	option = {
		color: ['#3398DB'],
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
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
			data: ['学院一', '学院二', '学院三', '学院四', '学院五', '学院六', '……'],
			axisTick: {
				alignWithLabel: true
			}
		}],
		yAxis: [{
			name: '完成度%',
			type: 'value'
		}],
		series: [{
			name: '完整度',
			type: 'bar',
			barWidth: '30%',
			data: [10, 52, 20, 34, 70, 90, 20]
		}]
	};;
	if(option && typeof option === "object") {
		myChart.setOption(option, true);
	}
//two
var dom = document.getElementById("shape-two");
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
        data:['学院一','学院二','学院三']
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
			data: ['学期2018', '学期2017', '学期2016', '学期2015', '学期2014']
		}, ],
		yAxis: [{
			name: '知识点完整度',
			type: 'value',
			//			max: 500
		}],
		series: [{
			name: '学院一',
			type: 'line',
			stack: '及格率',
			//          areaStyle: {normal: {}},
			data: [90, 56, 70, 97, 95, 92, 38]
		} ,
		{
			name: '学院二',
			type: 'line',
			stack: '及格率',
			//          areaStyle: {normal: {}},
			data: [80, 86, 90, 97, 90, 92, 18]
		} ,
		{
			name: '学院三',
			type: 'line',
			stack: '及格率',
			//          areaStyle: {normal: {}},
			data: [38, 46, 19, 95, 50, 78, 88]
		}
		
		]
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

			data: ['倾向专业课']
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
			name: '完整度',
			type: 'line',
			stack: '及格率',
			//          areaStyle: {normal: {}},
			data: [380, 86, 190, 97, 90, 92, 188]
		} ]
	};;
	if(option && typeof option === "object") {
		myChart.setOption(option, true);
	}

})