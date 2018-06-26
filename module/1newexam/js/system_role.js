// require.config(requireConfig)
// require(['jquery', 'hdb', 'utils', 'layer', 'bootstrap', 'jquery.metisMenu', 'jquery.slimscroll', 'hplus', 'contabs','content', 'pace', 'validate','bootstrap-table','bootstrap-table-mobile','bootstrap-table-zh-CN','bootstrap-table-demo'],function($, Handlebars, Utils, layer){
$('.addrole').click(function () {
    layer.open({
        title: '添加角色',
        type: 1,
        skin: 'layui-layer-rim', //加上边框
        area: ['auto', 'auto'], //宽高
        content: $('.table-addcon')
    });
});
$('#exampleTableToolbar').on('click','.edit',function(){
    layer.open({
        title: '编辑',
        type: 1,
        skin: 'layui-layer-rim', //加上边框
        area: ['auto', 'auto'], //宽高
        content: $('.edit-role')
    });
})
$('.del').click(function () {
    layer.open({
        title: '信息',
        type: 1,
        skin: 'layui-layer-rim', //加上边框
        area: ['auto', 'auto'], //宽高
        content: $('.delcon')
    });
});

$('.close-layer').click(function () {
    layer.closeAll();
})

var tableData = {
    "total": 20,
    "rows": [
        { "id": 1, "roleName": "校管理员", "roleDescription": '学校管理员', "dataScope": "所有数据" },
        { "id": 2, "roleName": "院管理员", "roleDescription": '学院管理员', "dataScope": "部分数据" },
        { "id": 3, "roleName": "考场管理员", "roleDescription": '管理考场相关功能', "dataScope": "部分数据" },
        { "id": 4, "roleName": "校管理员1", "roleDescription": '学校管理员12', "dataScope": "部分数据" },
        { "id": 5, "roleName": "校管理员2", "roleDescription": '学校管理员22', "dataScope": "所有数据" },
        { "id": 6, "roleName": "校管理员", "roleDescription": '学校管理员', "dataScope": "所有数据" },
        { "id": 7, "roleName": "院管理员", "roleDescription": '学院管理员', "dataScope": "部分数据" },
        { "id": 8, "roleName": "考场管理员", "roleDescription": '管理考场相关功能', "dataScope": "部分数据" },
        { "id": 9, "roleName": "校管理员1", "roleDescription": '学校管理员12', "dataScope": "部分数据" },
        { "id": 10, "roleName": "校管理员2", "roleDescription": '学校管理员22', "dataScope": "所有数据" },
        { "id": 11, "roleName": "校管理员", "roleDescription": '学校管理员', "dataScope": "所有数据" },
        { "id": 12, "roleName": "院管理员", "roleDescription": '学院管理员', "dataScope": "部分数据" },
        { "id": 13, "roleName": "考场管理员", "roleDescription": '管理考场相关功能', "dataScope": "部分数据" },
        { "id": 14, "roleName": "校管理员1", "roleDescription": '学校管理员12', "dataScope": "部分数据" },
        { "id": 15, "roleName": "校管理员2", "roleDescription": '学校管理员22', "dataScope": "所有数据" }]
}

$("#exampleTableToolbar").bootstrapTable({
    data: tableData.rows,
    // url: 'json/data.json',         //请求后台的URL（*）
    // method: 'get',                      //请求方式（*）
    // toolbar: '#toolbar',                //工具按钮用哪个容器
    // onLoadSuccess: function (data) { //数据二次处理
    //     //通过对data判断
    //     console.log(data)
    //     $("#exampleTableToolbar").bootstrapTable("load", data.rows)
    // },
    striped: true,                      //是否显示行间隔色
    cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
    sortable: false,                     //是否启用排序
    sortOrder: "asc",                   //排序方式
    // queryParams: oTableInit.queryParams,//传递参数（*）
    queryParams: function (params) {// 请求服务器数据时发送的参数，可以在这里添加额外的查询参数，返回false则终止请求
        console.log(params)
        return {
            offset: params.offset,  //页码
            limit: params.limit,   //页面大小
            search: params.search, //搜索
            order: params.order, //排序
            ordername: params.sort, //排序
        };
    },
    pagination: true,                   //是否显示分页（*）
    sidePagination: "client",           //分页方式：client客户端分页，server服务端分页（*）
    pageNumber: 1,                       //初始化加载第一页，默认第一页
    pageSize: 5,                       //每页的记录行数（*）
    pageList: [5, 10, 15, 20],        //可供选择的每页的行数（*）
    search: true,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
    strictSearch: true,
    showColumns: true,                  //是否显示所有的列
    showRefresh: true,                  //是否显示刷新按钮
    minimumCountColumns: 2,             //最少允许的列数
    clickToSelect: true,                //是否启用点击选中行
    // height: 500,                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
    uniqueId: "id",                     //每一行的唯一标识，一般为主键列
    showToggle: true,                    //是否显示详细视图和列表视图的切换按钮
    cardView: false,                    //是否显示详细视图
    detailView: false,                   //是否显示父子表
    columns: [{
        title: '序号',
        formatter: function (value, row, index) {
            return index + 1;
        }
    }, {
        field: 'roleName',
        title: '角色名称'
    }, {
        field: 'roleDescription',
        title: '角色描述'
    }, {
        field: 'dataScope',
        title: '管理数据范围'
    }, {
        title: '操作',
        formatter: function (value, row, index) {
            console.log(value, row, index)
            return '<div class="btn-group" role="group">' +
                '<button type="button" class="edit btn btn-info ">编辑 </button>' +
                '<button type="button" class="del btn btn-danger">删除</button>' +
                '</div>'
        }
    }],
    // onClickRow: function (e) {
    //     console.log(e)
    // }
})
// })