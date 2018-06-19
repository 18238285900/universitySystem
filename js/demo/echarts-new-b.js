$(function() {
	//	one
	var dom = document.getElementById("shape-one");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	app.title = '嵌套环形图';

	option = {
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		legend: {
			//      orient: 'vertical',
			//      x: 'left',
			x: 'center',
			y: 'top',
			data: ['学院一', '学院二', '学院三', '学院四', '学院五']
		},
		series: [{
			name: '访问来源',
			type: 'pie',
			selectedMode: 'single',
			radius: [0, '30%'],

			label: {
				normal: {
					position: 'inner'
				}
			},
			labelLine: {
				normal: {
					show: false
				}
			},
			// data:[
			//     {value:335, name:'直达', selected:true},
			//     {value:679, name:'营销广告'},
			//     {value:1548, name:'搜索引擎'}
			// ]
		}, {
			name: '',
			type: 'pie',
			radius: ['30%', '40%'],
			label: {
				normal: {
					formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
					//                  backgroundColor: '#eee',
					//                  borderColor: '#aaa',
					//                  borderWidth: 1,
					//                  borderRadius: 4,
					// shadowBlur:3,
					// shadowOffsetX: 2,
					// shadowOffsetY: 2,
					// shadowColor: '#999',
					// padding: [0, 7],
					rich: {
						a: {
							color: '#999',
							lineHeight: 20,
							align: 'center'
						},
						// abg: {
						//     backgroundColor: '#333',
						//     width: '100%',
						//     align: 'right',
						//     height: 22,
						//     borderRadius: [4, 4, 0, 0]
						// },
						hr: {
							//                          borderColor: '#aaa',
							//                          width: '100%',
							//                          borderWidth: 0.5,
							//                          height: 0
						},
						b: {
							fontSize: 14,
							lineHeight: 10
						},
						per: {
							color: '#eee',
							backgroundColor: '#334455',
							padding: [2, 4],
							borderRadius: 2
						}
					}
				}
			},
			data: [{
				value: 335,
				name: '学院一'
			}, {
				value: 310,
				name: '学院二'
			}, {
				value: 234,
				name: '学院三'
			}, {
				value: 135,
				name: '学院四'
			}, {
				value: 1048,
				name: '学院五'
			}]
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
			text: '',
			subtext: '',
			x: 'center'
		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			x: 'center',
			y: 'top',
			data: ['其他', '模拟电路基础', '计算机基础', '数字电路基础', '水利家建筑物']
		},
		series: [{
			name: '',
			type: 'pie',
			radius: '38%',
			center: ['50%', '50%'],
			label: {
				normal: {
					formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
					rich: {
						a: {
							color: '#999',
							lineHeight: -10,
							align: 'center'
						},

						b: {
							fontSize: 14,
							lineHeight: 13
						},
						per: {
							color: '#eee',
							backgroundColor: '#334455',
							padding: [2, 4],
							borderRadius: 2
						}
					}
				}
			},
			data: [{
				value: 335,
				name: '其他'
			}, {
				value: 310,
				name: '模拟电路基础'
			}, {
				value: 234,
				name: '计算机基础'
			}, {
				value: 135,
				name: '数字电路基础'
			}, {
				value: 1548,
				name: '水利家建筑物'
			}],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		}]
	};;
	if(option && typeof option === "object") {
		myChart.setOption(option, true);
	}

	//three
	var dom = document.getElementById("shape-three");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	option = {
		title: {
			text: '',
			subtext: '',
			x: 'center'
		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			x: 'center',
			y: 'top',
			data: ['中等', '及格', '不及格', '良好', '优秀', '缺考', '作弊', '黑名单']
		},
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: '65%',
			center: ['50%', '60%'],
			data: [{
				value: 335,
				name: '中等'
			}, {
				value: 310,
				name: '及格'
			}, {
				value: 234,
				name: '不及格'
			}, {
				value: 135,
				name: '良好'
			}, {
				value: 1548,
				name: '优秀'
			}, {
				value: 234,
				name: '缺考'
			}, {
				value: 1,
				name: '作弊'
			}, {
				value: 12,
				name: '黑名单'
			}],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		}]
	};;
	if(option && typeof option === "object") {
		myChart.setOption(option, true);
	}
	//four
	var dom = document.getElementById("shape-four");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;

	app.title = '坐标轴刻度与标签对齐';
	option = {
		title: {
			text: '',
			//      subtext: '共3100人次',
			x: 'left'
		},
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
			data: ['计算机', '水工建筑物', '模拟电路', '数字电路', '应用电子', '水利分析', '数控机床'],
			axisTick: {
				alignWithLabel: true
			}
		}],
		yAxis: [{
			name: '及格率(%)',
			type: 'value',
			max: 100
		}],
		series: [{
			name: '及格率',
			type: 'bar',
			barWidth: '60%',
			data: [90, 66, 92, 94, 96, 95, 98]
		}]
	};;
	if(option && typeof option === "object") {
		myChart.setOption(option, true);
	}
	//five

	var dom = document.getElementById("shape-five");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	option = {
		legend: {},

		tooltip: {},
		dataset: {
			dimensions: ['product', '及格', '不及格', '优秀'],
			source: [{
				product: '2014',
				'及格': 93.3,
				'不及格': 15.8,
				'优秀': 23.7
			}, {
				product: '2015',
				'及格': 83.1,
				'不及格': 3.4,
				'优秀': 15.1
			}, {
				product: '2016',
				'及格': 86.4,
				'不及格': 15.2,
				'优秀': 52.5
			}, {
				product: '2017',
				'及格': 82.4,
				'不及格': 23.9,
				'优秀': 39.1
			}, {
				product: '2018',
				'及格': 98.3,
				'不及格': 15.8,
				'优秀': 53.7
			}, {
				product: '2019',
				'及格': 83.1,
				'不及格': 23.4,
				'优秀': 35.1
			}, {
				product: '2020',
				'及格': 88.4,
				'不及格': 5.2,
				'优秀': 62.5
			}, ],

		},
		xAxis: {
			type: 'category'
		},
		yAxis: {
			name: '单位(%)',
			type: 'value',
			max: 100
		},
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

	//six-a
	var dom = document.getElementById("shape-six-a");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    xAxis: {
        type: 'category',
        // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
   yAxis : [
    {
        axisLabel : {
            formatter: function(){
                  return "";
            }
        }
    }
],
    series: [{
         areaStyle: {normal: {}},
         data: [20, 32, 31, 34, 22, 40, 20],
        type: 'line',
        itemStyle: {
        normal: {
            color: "#2ec7c9",
            lineStyle: {
                color: "#2ec7c9"
            }
        }
    },
        smooth: true
    }]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

//six-b
var dom = document.getElementById("shape-six-b");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    xAxis: {
        type: 'category',
        // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
   yAxis : [
    {
        axisLabel : {
            formatter: function(){
                  return "";
            }
        }
    }
],
    series: [{
         areaStyle: {normal: {}},
         data: [32, 42, 21, 24, 32, 50, 30],
        type: 'line',
        itemStyle: {
        normal: {
            color: "#d48265",
            lineStyle: {
                color: "#d48265"
            }
        }
    },
        smooth: true
    }]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

//six-c
var dom = document.getElementById("shape-six-c");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    xAxis: {
        type: 'category',
        // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
   yAxis : [
    {
        axisLabel : {
            formatter: function(){
                  return "";
            }
        }
    }
],
    series: [{
         areaStyle: {normal: {}},
         data: [25, 39, 45, 28, 12, 20, 33],
        type: 'line',
        itemStyle: {
        normal: {
            color: "#67b9c3",
            lineStyle: {
                color: "#67b9c3"
            }
        }
    },
        smooth: true
    }]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
	//seven
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
			data: ['课程一', '课程二', '课程三', '课程四', '课程五', '课程六', '课程七']
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