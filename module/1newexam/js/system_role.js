require.config(requireConfig)
require(['jquery', 'hdb', 'utils', 'layer', 'bootstrap', 'jquery.metisMenu', 'jquery.slimscroll', 'hplus', 'contabs','content', 'pace', 'validate','bootstrap-table','bootstrap-table-zh-CN'],function($, Handlebars, Utils, layer){
var tablerowData;
function getAddroleprams() {
    var formData = {
        "hrRoleName": "",
        "hrRoleDescribe": "",
        "roleConfig": {
            "systemmanagement": [],
            "teachingTeam": [],
            "teachingDiagnosis": []
        }
    }
    formData.hrRoleName = $(".addroleName").val()
    formData.hrRoleDescribe = $(".addroleDes").val();
    $(".addsystem[type=checkbox]:checked").each(function (i, e) {
        formData.roleConfig.systemmanagement.push($(this).val())
    })
    $(".addtecherTeam[type=checkbox]:checked").each(function (i, e) {
        formData.roleConfig.teachingTeam.push($(this).val())
    })
    $(".addDiagnosis[type=checkbox]:checked").each(function (i, e) {
        formData.roleConfig.teachingDiagnosis.push($(this).val())
    })
    return formData
}
function geteditroleprams() {
    var formData = {
        "hrRoleName": "",
        "hrRoleDescribe": "",
        "roleConfig": {
            "systemmanagement": [],
            "teachingTeam": [],
            "teachingDiagnosis": []
        }
    }
    formData.hrRoleName = $(".editrolName").val()
    formData.hrRoleDescribe = $(".editDes").val();
    $(".systemmanagement[type=checkbox]:checked").each(function (i, e) {
        formData.roleConfig.systemmanagement.push($(this).val())
    })
    $(".teachingTeam[type=checkbox]:checked").each(function (i, e) {
        formData.roleConfig.teachingTeam.push($(this).val())
    })
    $(".teachingDiagnosis[type=checkbox]:checked").each(function (i, e) {
        formData.roleConfig.teachingDiagnosis.push($(this).val())
    })
    return formData
}
function clearAddroleprams() {
    $(".addroleName").val("")
    $(".addroleDes").val("")
    $(".addsystem:checkbox").prop('checked', false)
    $(".addtecherTeam:checkbox").prop('checked', false)
    $(".addDiagnosis:checkbox").prop('checked', false)
}
//搜索
$("#serch").click(function(){
    var dataSerch = $("#serchInput").val()
    console.log(dataSerch)
    return false
})
//添加保存
$('#addrole').click(function () {
    var fromData = getAddroleprams()
    console.log(fromData)
    layer.closeAll();
})
//编辑保存
$("#editKeep").click(function () {
    var fromData = geteditroleprams()
    console.log(fromData)
    layer.closeAll();
})
//删除
$(".delete").click(function(){
    console.log(tablerowData)
    layer.closeAll()
})
$('.addrole').click(function () {
    layer.open({
        title: '添加角色',
        type: 1,
        skin: 'layui-layer-rim', //加上边框
        area: ['auto', 'auto'], //宽高
        content: $('.table-addcon'),
        end: function () {
            clearAddroleprams()
        }
    });
});
$('#exampleTableToolbar').on('click', '.edit', function () {
    layer.open({
        title: '编辑',
        type: 1,
        skin: 'layui-layer-rim', //加上边框
        area: ['auto', 'auto'], //宽高
        content: $('.edit-role')
    });
    $('.editrolName').val(tablerowData.roleName);
    $('.editDes').val(tablerowData.roleDescription)
    $('.systemmanagement:checkbox').prop('checked', false)
    $('.teachingTeam:checkbox').prop('checked', false)
    $('.teachingDiagnosis:checkbox').prop('checked', false)
    $(".systemmanagement").each(function (i, e) {
        if ($.inArray(e.value, tablerowData.roleConfig.systemmanagement) > -1) {
            $(this).prop('checked', true)
        }
    })
    $(".teachingTeam").each(function (i, e) {
        if ($.inArray(e.value, tablerowData.roleConfig.teachingTeam) > -1) {
            $(this).prop('checked', true)
        }
    })
    $(".teachingDiagnosis").each(function (i, e) {
        if ($.inArray(e.value, tablerowData.roleConfig.teachingDiagnosis) > -1) {
            $(this).prop('checked', true)
        }
    })
})
$('#exampleTableToolbar').on('click', '.del', function () {
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
    "total": 10,
    "rows": [
        {
            "id": 1, "roleName": "校管理员", "roleDescription": '学校管理员', "dataScope": "所有数据",
            "roleConfig": {
                "systemmanagement": ["2", "4", "6"],
                "teachingTeam": ["1", "3", "5"],
                "teachingDiagnosis": ["1", "3"]
            }
        },
        {
            "id": 2, "roleName": "院管理员", "roleDescription": '学院管理员', "dataScope": "部分数据",
            "roleConfig": {
                "systemmanagement": ["1", "2", "3"],
                "teachingTeam": ["3", "5"],
                "teachingDiagnosis": ["3"]
            }
        },
        {
            "id": 3, "roleName": "考场管理员", "roleDescription": '管理考场相关功能', "dataScope": "部分数据",
            "roleConfig": {
                "systemmanagement": ["2", "4", "6"],
                "teachingTeam": ["3", "5"],
                "teachingDiagnosis": ["1"]
            }
        },
        {
            "id": 4, "roleName": "校管理员1", "roleDescription": '学校管理员12', "dataScope": "部分数据",
            "roleConfig": {
                "systemmanagement": ["2", "4", "6"],
                "teachingTeam": ["1", "3", "5"],
                "teachingDiagnosis": ["1", "3"]
            }
        },
        {
            "id": 5, "roleName": "校管理员2", "roleDescription": '学校管理员22', "dataScope": "所有数据",
            "roleConfig": {
                "systemmanagement": ["2", "4", "6"],
                "teachingTeam": ["1", "3", "5"],
                "teachingDiagnosis": ["1", "3"]
            }
        },
        {
            "id": 6, "roleName": "校管理员", "roleDescription": '学校管理员123', "dataScope": "所有数据",
            "roleConfig": {
                "systemmanagement": ["2", "4", "6"],
                "teachingTeam": ["1", "3", "5"],
                "teachingDiagnosis": ["1", "3"]
            }
        },
        {
            "id": 7, "roleName": "院管理员", "roleDescription": '学院管理员312321', "dataScope": "部分数据",
            "roleConfig": {
                "systemmanagement": ["2", "4", "6"],
                "teachingTeam": ["1", "3", "5"],
                "teachingDiagnosis": ["1", "3"]
            }
        },
        {
            "id": 8, "roleName": "考场管理员", "roleDescription": '管理考场相关功能123ewq', "dataScope": "部分数据",
            "roleConfig": {
                "systemmanagement": ["2", "4", "6"],
                "teachingTeam": ["1", "3", "5"],
                "teachingDiagnosis": ["1", "3"]
            }
        },
        {
            "id": 9, "roleName": "校管理员1", "roleDescription": '学校管理员12wewq', "dataScope": "部分数据",
            "roleConfig": {
                "systemmanagement": ["2", "4", "6"],
                "teachingTeam": ["1", "3", "5"],
                "teachingDiagnosis": ["1", "3"]
            }
        },
        {
            "id": 10, "roleName": "校管理员2", "roleDescription": '学校管理员22', "dataScope": "所有数据",
            "roleConfig": {
                "systemmanagement": ["2", "4", "6"],
                "teachingTeam": ["1", "3", "5"],
                "teachingDiagnosis": ["1", "3"]
            }
        }]
}
function table(data) {
    $("#exampleTableToolbar").bootstrapTable({
        data: data,
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
        // queryParams: function (params) {// 请求服务器数据时发送的参数，可以在这里添加额外的查询参数，返回false则终止请求
        //     console.log(params)
        //     return {
        //         offset: params.offset,  //页码
        //         limit: params.limit,   //页面大小
        //         search: params.search, //搜索
        //         order: params.order, //排序
        //         ordername: params.sort, //排序
        //     };
        // },
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
                return '<div class="btn-group" role="group">' +
                    '<button type="button" class="edit btn btn-info">编辑 </button>' +
                    '<button type="button" class="del btn btn-danger">删除</button>' +
                    '</div>'
            }
        }],
        onClickRow: function (row, element) {
            console.log(row, element)
            tablerowData = row
        }
    })
}
table(tableData.rows)
})