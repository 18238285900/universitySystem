$(function() {
	//-----------------------试题统计------------------------------
//four
var dom = document.getElementById("shape-one");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
   /* title : {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x:'center'
    },*/
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        
        data: ['专业1','专业2','专业3','专业4']
    },
    series : [
        {
            name: '试卷平均分',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'专业1'},
                {value:310, name:'专业2'},
                {value:234, name:'专业3'},
                {value:135, name:'专业4'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
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
option = {
   /* title : {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x:'center'
    },*/
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        
        data: ['专业1','专业2','专业3','专业4']
    },
    series : [
        {
            name: '试卷平均分',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'专业1'},
                {value:310, name:'专业2'},
                {value:234, name:'专业3'},
                {value:135, name:'专业4'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

var dom = document.getElementById("shape-one-c");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
   /* title : {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x:'center'
    },*/
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        
        data: ['专业1','专业2','专业3','专业4']
    },
    series : [
        {
            name: '试卷平均分',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'专业1'},
                {value:310, name:'专业2'},
                {value:234, name:'专业3'},
                {value:135, name:'专业4'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
var dom = document.getElementById("shape-one-d");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
   /* title : {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x:'center'
    },*/
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        
        data: ['专业1','专业2','专业3','专业4']
    },
    series : [
        {
            name: '试卷平均分',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'专业1'},
                {value:310, name:'专业2'},
                {value:234, name:'专业3'},
                {value:135, name:'专业4'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
})