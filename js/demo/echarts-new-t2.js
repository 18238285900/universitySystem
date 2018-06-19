$(function() {
//-----------------------班级分析\院系分析\课程分析 公用部分------------------------------
	//two
	var dom = document.getElementById("shape-seven");
//	var dom = document.getElementsByClassName("shape-seven");
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

			data: ['不合格人数', '缺考人数', '作弊人数', '黑名单人数']
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
			data: ['班级一', '班级二', '班级三', '班级四', '班级五', '班级六', '班级七']
		}, ],
		yAxis: [{
			name: '人数',
			type: 'value',
//			max: 500
		}],
		series: [{
			name: '不合格人数',
			type: 'line',
			stack: '及格率',
			//          areaStyle: {normal: {}},
			data: [380, 86, 190, 97, 90, 92, 188]
		}, {
			name: '缺考人数',
			type: 'line',
			stack: '总量',
			//          areaStyle: {normal: {}},
			data: [86, 282, 91, 296, 99, 98, 192]
		}, {
			name: '作弊人数',
			type: 'line',
			stack: '及格率',
			//          areaStyle: {normal: {}},
			data: [190, 282, 151, 84, 90, 290, 92]
		}, {
			name: '黑名单人数',
			type: 'line',
			stack: '及格率',
			//          areaStyle: {normal: {}},
			data: [278, 185, 90, 279, 80, 189, 87]
		}]
	};;
	if(option && typeof option === "object") {
		myChart.setOption(option, true);
	}
	
	//two
 	var dom = document.getElementById("shape-eight");
//var dom = document.getElementsByClassName("shape-eight");
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

			data: ['不合格人数', '缺考人数', '作弊人数', '黑名单人数']
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
			data: ['班级一', '班级二', '班级三', '班级四', '班级五', '班级六', '班级七']
		}, ],
		yAxis: [{
			name: '人00000数',
			type: 'value',
//			max: 500
		}],
		series: [{
			name: '不合格人数',
			type: 'line',
			stack: '及格率',
			//          areaStyle: {normal: {}},
			data: [380, 86, 190, 97, 90, 92, 188]
		}, {
			name: '缺考人数',
			type: 'line',
			stack: '总量',
			//          areaStyle: {normal: {}},
			data: [86, 282, 91, 296, 99, 98, 192]
		}, {
			name: '作弊人数',
			type: 'line',
			stack: '及格率',
			//          areaStyle: {normal: {}},
			data: [190, 282, 151, 84, 90, 290, 92]
		}, {
			name: '黑名单人数',
			type: 'line',
			stack: '及格率',
			//          areaStyle: {normal: {}},
			data: [278, 185, 90, 279, 80, 189, 87]
		}]
	};;
	if(option && typeof option === "object") {
		myChart.setOption(option, true);
	}
	
	
	//two
	var dom = document.getElementById("shape-nine");
//var dom = document.getElementsByClassName("shape-nine");
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

			data: ['不合格人数', '缺考人数', '作弊人数', '黑名单人数']
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
			data: ['班级一', '班级二', '班级三', '班级四', '班级五', '班级六', '班级七']
		}, ],
		yAxis: [{
			name: '人111111数',
			type: 'value',
//			max: 500
		}],
		series: [{
			name: '不合格人数',
			type: 'line',
			stack: '及格率',
			//          areaStyle: {normal: {}},
			data: [380, 86, 190, 97, 90, 92, 188]
		}, {
			name: '缺考人数',
			type: 'line',
			stack: '总量',
			//          areaStyle: {normal: {}},
			data: [86, 282, 91, 296, 99, 98, 192]
		}, {
			name: '作弊人数',
			type: 'line',
			stack: '及格率',
			//          areaStyle: {normal: {}},
			data: [190, 282, 151, 84, 90, 290, 92]
		}, {
			name: '黑名单人数',
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