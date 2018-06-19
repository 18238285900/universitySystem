$(function() {
	//-----------------------试题统计------------------------------
//four
	var dom = document.getElementById("shape-one");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '世界人口总量 - 条形图';

option = {
    // title: {
    //     text: '世界人口总量',
    //     subtext: '数据来自网络'
    // },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['试题难度（%）']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '23%',
        containLabel: true
    },
    xAxis: {
  
        type: 'value',
        boundaryGap: [0, 0.1]
    },
    yAxis: {
        type: 'category',
        data: ['专业一','专业二','专业三','专业四','专业五','专业六']
    },
    series: [
        {
            name: '试题难度（%）',
            type: 'bar',
            data: [63, 29, 34, 70, 44, 30]
        },
       
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

var dom = document.getElementById("shape-one-b");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '世界人口总量 - 条形图';

option = {
    // title: {
    //     text: '世界人口总量',
    //     subtext: '数据来自网络'
    // },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['试题难度（%）']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '23%',
        containLabel: true
    },
    xAxis: {
  
        type: 'value',
        boundaryGap: [0, 0.1]
    },
    yAxis: {
        type: 'category',
        data: ['专业一','专业二','专业三','专业四','专业五','专业六']
    },
    series: [
        {
            name: '试题难度（%）',
            type: 'bar',
            data: [63, 29, 34, 70, 44, 30]
        },
       
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

})