$(function() {

//-------------------------考生分析--------------------	

	//one
var dom = document.getElementById("shape-four");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    // backgroundColor: '#2c343c',

    title: {
        text: '课程分析',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#333'
        }
    },

    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 0,
        max: 150,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '55%',
            center: ['50%', '50%'],
            data:[
                {value:55, name:'高等数学'},
                {value:90, name:'高等数学'},
                {value:64, name:'高等数学'},
                {value:75, name:'高等数学'},
                {value:80, name:'高等数学'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        // color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        // color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#3ca2e0',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
//two
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
            name: '得分',
            min: 0,
            max: 100,
            interval: 5,
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