$(function() {
//	one
var dom = document.getElementById("shape-one");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    title : {
        text: '按学院分布',
        subtext: '共3100人次',
        x:'left'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'right',
        data: ['水利工程学院1000人/次','机电学院700人/次','应用电子学院1200/次','计算机学院200人/次']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '50%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'水利工程学院1000人/次'},
                {value:310, name:'机电学院700人/次'},
                {value:234, name:'应用电子学院1200/次'},
                {value:135, name:'计算机学院200人/次'}
                // {value:1548, name:'搜索引擎'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 1)'
                }
            }
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}	
	
//two
var dom = document.getElementById("shape-two");
var myChart = echarts.init(dom);
var app = {};
option = null;
var dataMap = {};
function dataFormatter(obj) {
    var pList = [''];
    var temp;
    for (var year = 2002; year <= 2011; year++) {
        var max = 0;
        var sum = 0;
        temp = obj[year];
        for (var i = 0, l = temp.lengt; i < l; i++) {
            max = Math.max(max, temp[i]);
            sum += temp[i];
            obj[year][i] = {
                name : pList[i],
                value : temp[i]
            }
        }
        obj[year + 'max'] = Math.floor(max / 100) * 100;
        obj[year + 'sum'] = sum;
    }
    return obj;
}

dataMap.dataGDP = dataFormatter({
    //max : 60000,
    2011:[200,300,500,220,190,256,450],
    2010:[400,200,100,140,190,186,150],
    2009:[200,300,300,120,190,256,450],
    2008:[300,200,90,620,190,256,350],
    2007:[200,450,100,160,190,306,150],
    2006:[260,200,200,120,190,350,350],
    2005:[460,300,100,200,190,136,180],
    2004:[320,200,400,180,190,556,190],
    2003:[220,600,100,140,190,600,550],
    2002:[150,200,300,120,190,406,140]
});

dataMap.dataPI = dataFormatter({
    //max : 4000,
    2011:[200,300,300,520,390,456,350],
    2010:[400,220,200,350,100,226,300],
    2009:[500,500,500,320,490,456,150],
    2008:[300,255,390,220,390,396,550],
    2007:[480,560,200,500,100,396,180],
    2006:[260,450,230,520,190,150,150],
    2005:[360,520,400,100,490,336,190],
    2004:[390,210,300,280,590,356,650],
    2003:[200,640,100,340,690,500,500],
    2002:[150,290,300,220,290,306,240]
});

dataMap.dataSI = dataFormatter({
    //max : 26600,
    2011:[200,300,500,220,190,256,450],
    2010:[400,200,100,340,190,186,150],
    2009:[200,300,300,120,190,256,450],
    2008:[300,200,190,620,190,256,350],
    2007:[200,450,100,160,190,306,150],
    2006:[390,200,290,120,190,350,350],
    2005:[460,300,100,200,190,136,180],
    2004:[320,280,400,180,190,556,190],
    2003:[220,600,100,140,190,600,550],
    2002:[150,200,300,120,190,406,140]
});

dataMap.dataTI = dataFormatter({
    //max : 25000,
     2011:[200,300,350,520,200,450,350],
    2010:[400,220,200,350,100,226,300],
    2009:[500,500,500,320,290,456,150],
    2008:[300,255,390,220,390,396,550],
    2007:[480,500,280,500,100,396,180],
    2006:[260,450,230,220,190,150,150],
    2005:[360,520,400,100,490,336,190],
    2004:[390,210,300,280,590,356,650],
    2003:[200,440,300,340,600,500,300],
    2002:[150,290,300,220,290,306,240]
});

dataMap.dataEstate = dataFormatter({
    //max : 3600,
     2011:[200,300,570,220,190,256,450],
    2010:[400,200,100,140,190,186,150],
    2009:[200,300,300,120,190,256,450],
    2008:[300,200,290,620,190,256,350],
    2007:[200,450,100,180,190,306,150],
    2006:[260,210,200,120,190,350,250],
    2005:[460,300,100,600,190,136,180],
    2004:[320,200,440,180,190,556,190],
    2003:[220,600,100,140,190,600,350],
    2002:[150,200,300,120,190,406,440]
});

dataMap.dataFinancial = dataFormatter({
    //max : 3200,
     2011:[200,300,300,520,390,456,350],
    2010:[400,220,200,350,100,226,300],
    2009:[200,500,500,320,490,456,150],
    2008:[300,255,390,220,390,396,550],
    2007:[480,160,200,580,100,396,180],
    2006:[260,450,230,520,190,150,150],
    2005:[360,320,410,100,490,336,190],
    2004:[300,210,300,280,590,356,650],
    2003:[200,340,100,340,490,300,200],
    2002:[150,290,300,220,290,306,290]
});
dataMap.dataNC = dataFormatter({
    //max : 3600,
       2011:[200,300,500,220,190,256,450],
    2010:[400,200,100,140,190,186,150],
    2009:[200,300,300,120,420,256,450],
    2008:[300,200,690,620,190,256,350],
    2007:[200,450,100,160,190,306,150],
    2006:[260,200,260,120,110,350,350],
    2005:[460,300,190,200,190,136,180],
    2004:[320,200,400,180,600,556,190],
    2003:[220,400,100,140,190,200,550],
    2002:[150,200,300,120,190,406,400]
});

option = {
    baseOption: {
        timeline: {
            // y: 0,
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 1000,
            // controlStyle: {
            //     position: 'left'
            // },
            data: [
                '2002-01-01','2003-01-01','2004-01-01',
                {
                    value: '2005-01-01',
                    tooltip: {
                        formatter: '{b} GDP达到一个高度'
                    },
                    symbol: 'diamond',
                    symbolSize: 16
                },
                '2006-01-01', '2007-01-01','2008-01-01','2009-01-01','2010-01-01',
                {
                    value: '2011-01-01',
                    tooltip: {
                        formatter: function (params) {
                            return params.name + 'GDP达到又一个高度';
                        }
                    },
                    symbol: 'diamond',
                    symbolSize: 18
                },
            ],
            label: {
                formatter : function(s) {
                    return (new Date(s)).getFullYear();
                }
            }
        },
        title: {
            subtext: '数据来自教务处'
        },
        tooltip: {
        },
//      legend: {
//          orient: 'vertical',
//          left: 'right',
//          data: ['计算机基础', '水工建筑物', '模拟电路基础', '数字电路基础', '应用电子技术', '水利分析与计算'],
//          // selected: {
//          //     'GDP': false, '金融': false, '房地产': false
//          // }
//      },
        calculable : true,
        grid: {
            top: 230,
            bottom: 80,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    label: {
                        show: true,
                        formatter: function (params) {
                            return params.value.replace('\n', '');
                        }
                    }
                }
            }
        },
        xAxis: [
            {
                'type':'category',
                'axisLabel':{'interval':1},
                 'data':[
                     ''
             ],
                splitLine: {show: false}
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '人次'
            }
        ],
        series: [
            {name: '计算机基础', type: 'bar'},
            {name: '水工建筑物', type: 'bar'},
            {name: '模拟电路基础', type: 'bar'},
            {name: '数字电路基础', type: 'bar'},
            {name: '应用电子技术', type: 'bar'},
            {name: '水利分析与计算', type: 'bar'},
            {name: '数控机床', type: 'bar'},
            {
                name: 'GDP占比',
                type: 'pie',
                center: ['50%', '25%'],
                radius: '28%',
                z: 100
            }
        ]
    },
    options: [
        {
            title: {text: '2002按课程考试人次分布'},
            series: [
                {data: dataMap.dataGDP['2002']},
                {data: dataMap.dataFinancial['2002']},
                {data: dataMap.dataEstate['2002']},
                {data: dataMap.dataPI['2002']},
                {data: dataMap.dataSI['2002']},
                {data: dataMap.dataTI['2002']},
                {data: dataMap.dataNC['2002']},
                
                {data: [
                    {name: '计算机基础', value: dataMap.dataGDP['2002sum']},
                    {name: '水工建筑物', value: dataMap.dataFinancial['2002sum']},
                    {name: '模拟电路基础', value: dataMap.dataEstate['2002sum']},
                    {name: '数字电路基础', value: dataMap.dataPI['2002sum']},
                    {name: '应用电子技术', value: dataMap.dataSI['2002sum']},
                    {name: '水利分析与计算', value: dataMap.dataTI['2002sum']},
                     {name: '数控机床', value: dataMap.dataNC['2002sum']},
                ]}
            ]
        },
        {
            title : {text: '2003按课程考试人次分布'},
            series :[
                {data: dataMap.dataGDP['2003']},
                {data: dataMap.dataFinancial['2003']},
                {data: dataMap.dataEstate['2003']},
                {data: dataMap.dataPI['2003']},
                {data: dataMap.dataSI['2003']},
                {data: dataMap.dataTI['2003']},
                {data: dataMap.dataNC['2003']},
                
                {data: [
                    {name: '计算机基础', value: dataMap.dataGDP['2003sum']},
                    {name: '水工建筑物', value: dataMap.dataFinancial['2003sum']},
                    {name: '模拟电路基础', value: dataMap.dataEstate['2003sum']},
                    {name: '数字电路基础', value: dataMap.dataPI['2003sum']},
                    {name: '应用电子技术', value: dataMap.dataSI['2003sum']},
                    {name: '水利分析与计算', value: dataMap.dataTI['2003sum']},
                     {name: '数控机床', value: dataMap.dataNC['2003sum']},
                ]}
            ]
        },
        {
            title : {text: '2004按课程考试人次分布'},
            series : [
                {data: dataMap.dataGDP['2004']},
                {data: dataMap.dataFinancial['2004']},
                {data: dataMap.dataEstate['2004']},
                {data: dataMap.dataPI['2004']},
                {data: dataMap.dataSI['2004']},
                {data: dataMap.dataTI['2004']},
                {data: dataMap.dataNC['2004']},
                
                {data: [
                    {name: '计算机基础', value: dataMap.dataGDP['2004sum']},
                    {name: '水工建筑物', value: dataMap.dataFinancial['2004sum']},
                    {name: '模拟电路基础', value: dataMap.dataEstate['2004sum']},
                    {name: '数字电路基础', value: dataMap.dataPI['2004sum']},
                    {name: '应用电子技术', value: dataMap.dataSI['2004sum']},
                    {name: '水利分析与计算', value: dataMap.dataTI['2004sum']},
                     {name: '数控机床', value: dataMap.dataNC['2004sum']},
                ]}
            ]
        },
        {
            title : {text: '2005按课程考试人次分布'},
            series : [
                {data: dataMap.dataGDP['2005']},
                {data: dataMap.dataFinancial['2005']},
                {data: dataMap.dataEstate['2005']},
                {data: dataMap.dataPI['2005']},
                {data: dataMap.dataSI['2005']},
                {data: dataMap.dataTI['2005']},
                {data: dataMap.dataNC['2005']},
                
                {data: [
                    {name: '计算机基础', value: dataMap.dataGDP['2005sum']},
                    {name: '水工建筑物', value: dataMap.dataFinancial['2005sum']},
                    {name: '模拟电路基础', value: dataMap.dataEstate['2005sum']},
                    {name: '数字电路基础', value: dataMap.dataPI['2005sum']},
                    {name: '应用电子技术', value: dataMap.dataSI['2005sum']},
                    {name: '水利分析与计算', value: dataMap.dataTI['2005sum']},
                     {name: '数控机床', value: dataMap.dataNC['2005sum']},
                ]}
            ]
        },
        {
            title : {text: '2006按课程考试人次分布'},
            series : [
                {data: dataMap.dataGDP['2006']},
                {data: dataMap.dataFinancial['2006']},
                {data: dataMap.dataEstate['2006']},
                {data: dataMap.dataPI['2006']},
                {data: dataMap.dataSI['2006']},
                {data: dataMap.dataTI['2006']},
                {data: dataMap.dataNC['2006']},
                
                {data: [
                    {name: '计算机基础', value: dataMap.dataGDP['2006sum']},
                    {name: '水工建筑物', value: dataMap.dataFinancial['2006sum']},
                    {name: '模拟电路基础', value: dataMap.dataEstate['2006sum']},
                    {name: '数字电路基础', value: dataMap.dataPI['2006sum']},
                    {name: '应用电子技术', value: dataMap.dataSI['2006sum']},
                    {name: '水利分析与计算', value: dataMap.dataTI['2006sum']},
                     {name: '数控机床', value: dataMap.dataNC['2006sum']},
                ]}
            ]
        },
        {
            title : {text: '2007按课程考试人次分布'},
            series : [
                {data: dataMap.dataGDP['2007']},
                {data: dataMap.dataFinancial['2007']},
                {data: dataMap.dataEstate['2007']},
                {data: dataMap.dataPI['2007']},
                {data: dataMap.dataSI['2007']},
                {data: dataMap.dataTI['2007']},
                {data: dataMap.dataNC['2007']},
                
                {data: [
                    {name: '计算机基础', value: dataMap.dataGDP['2007sum']},
                    {name: '水工建筑物', value: dataMap.dataFinancial['2007sum']},
                    {name: '模拟电路基础', value: dataMap.dataEstate['2007sum']},
                    {name: '数字电路基础', value: dataMap.dataPI['2007sum']},
                    {name: '应用电子技术', value: dataMap.dataSI['2007sum']},
                    {name: '水利分析与计算', value: dataMap.dataTI['2007sum']},
                     {name: '数控机床', value: dataMap.dataNC['2007sum']},
                ]}
            ]
        },
        {
            title : {text: '2007按课程考试人次分布'},
            series : [
                {data: dataMap.dataGDP['2008']},
                {data: dataMap.dataFinancial['2008']},
                {data: dataMap.dataEstate['2008']},
                {data: dataMap.dataPI['2008']},
                {data: dataMap.dataSI['2008']},
                {data: dataMap.dataTI['2008']},
                {data: dataMap.dataNC['2008']},
                
                {data: [
                    {name: '计算机基础', value: dataMap.dataGDP['2008sum']},
                    {name: '水工建筑物', value: dataMap.dataFinancial['2008sum']},
                    {name: '模拟电路基础', value: dataMap.dataEstate['2008sum']},
                    {name: '数字电路基础', value: dataMap.dataPI['2008sum']},
                    {name: '应用电子技术', value: dataMap.dataSI['2008sum']},
                    {name: '水利分析与计算', value: dataMap.dataTI['2008sum']},
                     {name: '数控机床', value: dataMap.dataNC['2008sum']},
                ]}
            ]
        },
        {
            title : {text: '2009按课程考试人次分布'},
            series : [
                {data: dataMap.dataGDP['2009']},
                {data: dataMap.dataFinancial['2009']},
                {data: dataMap.dataEstate['2009']},
                {data: dataMap.dataPI['2009']},
                {data: dataMap.dataSI['2009']},
                {data: dataMap.dataTI['2009']},
                {data: dataMap.dataNC['2009']},
                
                {data: [
                    {name: '计算机基础', value: dataMap.dataGDP['2009sum']},
                    {name: '水工建筑物', value: dataMap.dataFinancial['2009sum']},
                    {name: '模拟电路基础', value: dataMap.dataEstate['2009sum']},
                    {name: '数字电路基础', value: dataMap.dataPI['2009sum']},
                    {name: '应用电子技术', value: dataMap.dataSI['2009sum']},
                    {name: '水利分析与计算', value: dataMap.dataTI['2009sum']},
                     {name: '数控机床', value: dataMap.dataNC['2009sum']},
                ]}
            ]
        },
        {
            title : {text: '2010按课程考试人次分布'},
            series : [
                {data: dataMap.dataGDP['2010']},
                {data: dataMap.dataFinancial['2010']},
                {data: dataMap.dataEstate['2010']},
                {data: dataMap.dataPI['2010']},
                {data: dataMap.dataSI['2010']},
                {data: dataMap.dataTI['2010']},
                {data: dataMap.dataNC['2010']},
                
                {data: [
                    {name: '计算机基础', value: dataMap.dataGDP['2010sum']},
                    {name: '水工建筑物', value: dataMap.dataFinancial['2010sum']},
                    {name: '模拟电路基础', value: dataMap.dataEstate['2010sum']},
                    {name: '数字电路基础', value: dataMap.dataPI['2010sum']},
                    {name: '应用电子技术', value: dataMap.dataSI['2010sum']},
                    {name: '水利分析与计算', value: dataMap.dataTI['2010sum']},
                     {name: '数控机床', value: dataMap.dataNC['2010sum']},
                ]}
            ]
        },
        {
            title : {text: '2011按课程考试人次分布'},
            series : [
                {data: dataMap.dataGDP['2011']},
                {data: dataMap.dataFinancial['2011']},
                {data: dataMap.dataEstate['2011']},
                {data: dataMap.dataPI['2011']},
                {data: dataMap.dataSI['2011']},
                {data: dataMap.dataTI['2011']},
                {data: dataMap.dataNC['2011']},
                
                {data: [
                    {name: '计算机基础', value: dataMap.dataGDP['2011sum']},
                    {name: '水工建筑物', value: dataMap.dataFinancial['2011sum']},
                    {name: '模拟电路基础', value: dataMap.dataEstate['2011sum']},
                    {name: '数字电路基础', value: dataMap.dataPI['2011sum']},
                    {name: '应用电子技术', value: dataMap.dataSI['2011sum']},
                    {name: '水利分析与计算', value: dataMap.dataTI['2011sum']},
                     {name: '数控机床', value: dataMap.dataNC['2011sum']},
                ]}
            ]
        }
    ]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

//three
var dom = document.getElementById("shape-three");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '多 Y 轴示例';

var colors = ['#5793f3', '#d14a61', '#675bba'];

option = {
	 title : {
        text: '成绩分布',
//      subtext: '共3100人次',
        x:'left'
    },
    color: colors,

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        right: '20%'
    },
    toolbox: {
        feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    legend: {
        data:['百分比','人数','分数']
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: ['不及格','及格','中等','良好','优秀']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '百分比',
            min: 0,
            max: 100,
            position: 'right',
            axisLine: {
                lineStyle: {
                    color: colors[0]
                }
            },
            axisLabel: {
                formatter: '{value}%'
            }
        },
        {
            type: 'value',
            name: '人数',
            min: 0,
            max: 1350,
            position: 'right',
            offset: 60,
            axisLine: {
                lineStyle: {
                    color: colors[1]
                }
            },
            axisLabel: {
                formatter: '{value}人'
            }
        },
        {
            type: 'value',
            name: '分数',
            min: 0,
            max: 100,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: colors[2]
                }
            },
            axisLabel: {
                formatter: '{value}分'
            }
        }
    ],
    series: [
        {
            name:'百分比（%）',
            type:'bar',
            data:[10, 50, 20, 15, 5,]
        },
        {
            name:'人数',
            type:'bar',
            yAxisIndex: 1,
            data:[50, 200, 700, 300, 100]
        },
        {
            name:'分数',
            type:'line',
            yAxisIndex: 2,
            data:[59, 60, 70, 80, 90]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
//four
var dom = document.getElementById("shape-four");
var myChart = echarts.init(dom);
var app = {};
option = null;

app.title = '坐标轴刻度与标签对齐';
option = {
	 title : {
        text: '及格率',
//      subtext: '共3100人次',
        x:'left'
    },
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['计算机', '水工建筑物', '模拟电路', '数字电路', '应用电子', '水利分析', '数控机床'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            name : '及格率(%)',
            type : 'value',
             max : 100
        }
    ],
    series : [
        {
            name:'及格率',
            type:'bar',
            barWidth: '60%',
            data:[90, 66, 92, 94, 96, 95, 98]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
//five

var dom = document.getElementById("shape-five");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    title: {
       text: '历年及格率趋势图'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
    	
        data:['2014年秋','2015年春','2015年秋','2016年春','2016年秋','2017年春']
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
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
             data: ['计算机基础','水工建筑物','模拟电路基础','数字电路基础','应用电子技术','水利分析与计算','数控机床']
    },
    ],
    yAxis : [
        {
        	name:'及格人数',
            type : 'value',
            max : 500
        }
    ],
    series : [
        {
            name:'2014年秋及格率',
            type:'line',
            stack: '及格率',
            areaStyle: {normal: {}},
           data:[80, 86, 90, 97, 90, 92, 88]
        },
        {
            name:'2015年春及格率',
            type:'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data:[86, 82, 91, 96, 99, 98, 92]
        },
        {
            name:'2015年秋及格率',
            type:'line',
            stack: '及格率',
            areaStyle: {normal: {}},
            data:[90, 82, 91, 84, 90, 90, 92]
        },
        {
            name:'2016年春及格率',
            type:'line',
            stack: '及格率',
            areaStyle: {normal: {}},
            data:[78, 85, 90, 79, 80, 89, 87]
        },
        {
            name:'2016年秋及格率',
            type:'line',
            stack: '及格率',
            areaStyle: {normal: {}},
             data:[80, 93, 91, 94, 88, 93, 98]
        },
        {
            name:'2017年春及格率',
            type:'line',
            stack: '及格率',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {normal: {}},
            data:[82, 92, 91, 94, 90, 88, 96]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

//six
var dom = document.getElementById("shape-six");
var myChart = echarts.init(dom);
var app = {};
option = null;

//var weatherIcons = {
//   
//};

var seriesLabel = {
    normal: {
        show: true,
        textBorderColor: '#333',
        textBorderWidth: 2
    }
}

option = {
    title: {
        text: '题库分析'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
    	orient: 'vertical',
        left: 'right',
        data: ['出错次数', '出题次数', '试题总数']
    },
    grid: {
        left: 100
    },
    toolbox: {
        show: true,
        feature: {
            // saveAsImage: {}
        }
    },
    xAxis: {
        type: 'value',
        name: '次数',
        axisLabel: {
        formatter: '{value}'
        }
    },
    yAxis: {
        type: 'category',
        inverse: true,
        data: ['数控机床', '水利分析与计算', '应用电子技术', '数字电路基础', '模拟电路基础', '水工建筑物', '计算机基础'],
        axisLabel: {
            // formatter: function (value) {
            //     return '{' + value + '| }\n{value|' + value + '}';
            // },
            margin: 20,
            rich: {
                value: {
                    lineHeight: 30,
                    align: 'center'
                },
                Sunny: {
                    height: 40,
                    align: 'center',
                    backgroundColor: {
                        // image: weatherIcons.Sunny
                    }
                },
                Cloudy: {
                    height: 40,
                    align: 'center',
                    backgroundColor: {
                        // image: weatherIcons.Cloudy
                    }
                },
                Showers: {
                    height: 40,
                    align: 'center',
                    backgroundColor: {
                        // image: weatherIcons.Showers
                    }
                }
            }
        }
    },
    series: [
        {
            name: '出错次数',
            type: 'bar',
            data: [165, 170, 30, 170, 30,60,90],
            label: seriesLabel,
            markPoint: {
                symbolSize: 1,
                symbolOffset: [0, '50%'],
                label: {
                   normal: {
                        formatter: '{a|{a}\n}{b|{b} }{c|{c}}',
                        backgroundColor: 'rgb(242,242,242)',
                        borderColor: '#aaa',
                        borderWidth: 1,
                        borderRadius: 4,
                        padding: [4, 10],
                        lineHeight: 26,
                        // shadowBlur: 5,
                        // shadowColor: '#000',
                        // shadowOffsetX: 0,
                        // shadowOffsetY: 1,
                        position: 'right',
                        distance: 20,
                        rich: {
                            a: {
                                align: 'center',
                                color: '#fff',
                                fontSize: 18,
                                textShadowBlur: 2,
                                textShadowColor: '#000',
                                textShadowOffsetX: 0,
                                textShadowOffsetY: 1,
                                textBorderColor: '#333',
                                textBorderWidth: 2
                            },
                            b: {
                                 color: '#333'
                            },
                            c: {
                                color: '#ff8811',
                                textBorderColor: '#000',
                                textBorderWidth: 1,
                                fontSize: 22
                            }
                        }
                   }
                },
                data: [
                    {type: 'max', name: 'max days: '},
                    {type: 'min', name: 'min days: '}
                ]
            }
        },
        {
            name: '出题次数',
            type: 'bar',
            label: seriesLabel,
            data: [150, 105, 110, 105, 110,80,77]
        },
        {
            name: '试题总数',
            type: 'bar',
            label: seriesLabel,
            data: [220, 82, 63, 155, 108,70,90]
        }
    ]
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
app.title = '堆叠条形图';

option = {
	
	 title: {
       text: '错题率'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    // legend: {
    //     data: ['数控机床', '邮件营销','联盟广告','视频广告','搜索引擎']
    // },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
//  	 name: '次数',
        type: 'value',
         axisLabel: {
                formatter: '{value}% '
            }
        
    },
    yAxis: {
        type: 'category',
        data: ['数控机床','水利分析与计算','应用电子技术','数字电路基础','模拟电路基础','水工建筑物','计算机基础']
    },
    series: [
//      {
//          name: '直接访问',
//          type: 'bar',
//          stack: '总量',
//          label: {
//              normal: {
//                  show: true,
//                  position: 'insideRight'
//              }
//          },
//          data: []
//      },
//      {
//          name: '邮件营销',
//          type: 'bar',
//          stack: '总量',
//          label: {
//              normal: {
//                  show: true,
//                  position: 'insideRight'
//              }
//          },
//          data: []
//      },
//      {
//          name: '联盟广告',
//          type: 'bar',
//          stack: '总量',
//          label: {
//              normal: {
//                  show: true,
//                  position: 'insideRight'
//              }
//          },
//          data: []
//      },
//      {
//          name: '视频广告',
//          type: 'bar',
//          stack: '总量',
//          label: {
//              normal: {
//                  show: true,
//                  position: 'insideRight'
//              }
//          },
//          data: []
//      },
        {
            name: '错题率',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [20, 32, 9, 34, 20, 13, 32]
        }
    ]
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}











})