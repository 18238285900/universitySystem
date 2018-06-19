$(function() {
	//	one
	var dom = document.getElementById("shape-one");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	option = {
		title: {
			text: '关注课程分析',
			subtext: '',
			x: 'left'
		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			x: 'center',
			y: 'bottom',
			data: ['其他', '课程一', '课程二', '课程三', '课程四']
		},
		series: [{
			name: '',
			type: 'pie',
			radius: '43%',
			center: ['45%', '40%'],
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
				value: 123,
				name: '其他'
			}, {
				value: 310,
				name: '课程一'
			}, {
				value: 234,
				name: '课程二'
			}, {
				value: 135,
				name: '课程三'
			}, {
				value: 1548,
				name: '课程四'
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
})