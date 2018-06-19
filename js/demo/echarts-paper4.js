$(function() {
	//-----------------------试题统计------------------------------
//four
	var dom = document.getElementById("shape-one");
var myChart = echarts.init(dom);
var app = {};
option = null;
app.title = '正负条形图';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['试题利用率', '知识点覆盖度']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'value'
        }
    ],
    yAxis : [
        {
            type : 'category',
            axisTick : {show: false},
            data : ['艺术系','艺术系','艺术系','专业四','专业三','专业二','专业一']
        }
    ],
    series : [
       
        {
            name:'试题利用率',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true
                }
            },
            data:[200, 302, 341, 374, 390, 450, 420]
        },
        {
            name:'知识点覆盖度',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'left'
                }
            },
            data:[-120, -132, -101, -134, -190, -230, -210]
        }
    ]
};
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
})