require.config(requireConfig)
require(['jquery', 'hdb', 'utils', 'layer', 'bootstrap', 'jquery.metisMenu', 'jquery.slimscroll', 'hplus', 'contabs', 'content', 'pace', 'validate', 'bootstrap-table', 'bootstrap-table-zh-CN'], function ($, Handlebars, Utils, layer) {
    var tablerowData,imageFile,editimageFile;
    function getaddmenuParms(){
        var menuData = {}
        menuData.superiorMenu = $(".addupmenu").val();
        menuData.menuName = $(".menuName").val();
        menuData.menuLink = $(".menuLink").val();
        menuData.menuTarget = $(".menuTarget").val();
        menuData.menuIcon = $("#menuIcon:checkbox:checked").val()||"0";
        menuData.imageFile = imageFile || "";
        menuData.menuSort = $(".menuSort").val();
        menuData.menuvisual = $(".menuvisual:radio:checked").val();//默认可见 “1”
        menuData.authorityIdentification = $(".authorityIdentification").val();
        menuData.menuRemarks = $(".menuRemarks").val()
        return menuData
    }
    function geteditmenuParms(){
        var menuData = {}
        menuData.superiorMenu = $(".editsuperiorMenu").val();
        menuData.menuName = $(".editmenuName").val();
        menuData.menuLink = $(".editmenuLink").val();
        menuData.menuTarget = $(".editmenuTarget").val();
        menuData.menuIcon = $("#editmenuIcon:checkbox:checked").val()||"0";
        menuData.imageFile = editimageFile || "";
        menuData.menuSort = $(".editmenuSort").val();
        menuData.menuvisual = $(".editmenuvisual:radio:checked").val();//默认可见 “1”
        menuData.authorityIdentification = $(".editauthorityIdentification").val();
        menuData.menuRemarks = $(".editmenuRemarks").val()
        return menuData
    }
    function clearaddmenu(){
        $(".addupmenu").val("");
        $(".menuName").val("");
        $(".menuLink").val("");
        $(".menuTarget").val("");
        $("#menuIcon").prop('checked', false);
        imageFile = "";
        $("#addImage").prop("src", "");
        $(".menuSort").prop("value","");
        // $(".menuvisual:radio").prop('checked',false);
        $(".menuvisual:radio[value='1']").prop('checked',true);
        $(".authorityIdentification").val("");
        $(".menuRemarks").val("")
    }
    //搜索
    $("#serch").click(function(){
        var serchData = $("#serchInput").val()
        console.log(serchData)
        return false
    })
    //勾选图标，是否禁用文件上传
    $("#menuIcon").change(function(){
        if($(this).prop("checked")){
            $("#addFile").attr("disabled",true)
        }else{
            $("#addFile").attr("disabled",false)
        }
    })
    $("#editmenuIcon").change(function(){
        if($(this).prop("checked")){
            $("#editimageFile").attr("disabled",true)
        }else{
            $("#editimageFile").attr("disabled",false)
        }
    })

    //添加菜单-保存
    $("#addmenu").click(function(){
        var menuData = getaddmenuParms();
        console.log(menuData)
        layer.closeAll();
    })
    //编辑菜单-保存
    $("#editmenu").click(function(){
        var editmenuData = geteditmenuParms();
        console.log(editmenuData)
        layer.closeAll();
    })
    //删除
    $(".delete").click(function(){
        console.log(tablerowData);
        layer.closeAll()
    })
    $("#tablefather").on('click','.addrole',function(){
        layer.open({
            title: '添加菜单',
            type: 1,
            skin: 'layui-layer-rim', //加上边框
            area: ['auto', 'auto'], //宽高
            content: $('.table-addcon'),
            end:function(){
                clearaddmenu();
            }
        });
    });
    $("#exampleTableToolbar").on('click','.edit',function(){
        layer.open({
            title: '编辑菜单',
            type: 1,
            skin: 'layui-layer-rim', //加上边框
            area: ['auto', 'auto'], //宽高
            content: $('.edit-role')
        });
        $(".editsuperiorMenu").val(tablerowData.superiorMenu);
        $(".editmenuName").val(tablerowData.menuName);
        $(".editmenuLink").val(tablerowData.menuLink)
        $(".editmenuTarget").val(tablerowData.menuTarget)
        if(tablerowData.menuIcon == "1"){
            $("#editmenuIcon").prop('checked', true);
            $("#editimageFile").attr("disabled",true)
            $("#editImage").prop("src","")
        }else{
            $("#editmenuIcon").prop('checked', false);
            $("#editimageFile").attr("disabled",false)
            $("#editImage").prop("src",tablerowData.imageFile)
        }
        $(".editmenuSort").prop("value",tablerowData.menuSort)
        $(".editmenuvisual:radio[value="+tablerowData.menuvisual+"]").prop('checked',true);
        $(".editauthorityIdentification").val(tablerowData.authorityIdentification);
        $(".editmenuRemarks").val(tablerowData.menuRemarks)
    });
    $("#exampleTableToolbar").on('click','.del',function(){
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

    //图片上传预览-添加
    $("#addFile").on("change", function (e) {
        console.log($(this)[0].files[0])
        imageFile = $(this)[0].files[0];
        var reader = new FileReader()
        reader.readAsDataURL(imageFile)
        reader.onload = function () { //当读取操作成功时调用
            console.log(this.result)
            $("#addImage").prop("src", this.result)
            console.log(new Blob([this.result]))
        }
    })
    //图片上传预览-编辑
    $("#editimageFile").on("change", function (e) {
        console.log($(this)[0].files[0])
        editimageFile = $(this)[0].files[0];
        var reader = new FileReader()
        reader.readAsDataURL(editimageFile)
        reader.onload = function () { //当读取操作成功时调用
            console.log(this.result)
            $("#editImage").prop("src", this.result)
            console.log(new Blob([this.result]))
        }
    })

    var tableData = {
        "total": 10,
        "rows": [
            {
                "id": 1,"superiorMenu":"系统设置", "menuName": "工作台", "menuLink": 'http://localhost:8088/module/1newexam/index.html',
                 "menuTarget":"login.html","menuIcon":"1","menuSort": "1","menuvisual": "1", "authorityIdentification": "student",
                 "imageFile":"../../img/login-logo2.png","menuRemarks":"备注"
            },
            {
                "id": 2,"superiorMenu":"数据总览", "menuName": "数据总览", "menuLink": 'http://localhost:8088/module/1newexam/index.html',
                 "menuTarget":"login.html","menuIcon":"0","menuSort": "0","menuvisual": "0", "authorityIdentification": "teacher",
                 "imageFile":"../../img/login-logo2.png","menuRemarks":"备注1"
            },
            {
                "id": 3,"superiorMenu":"系统设置", "menuName": "系统设置", "menuLink": 'http://localhost:8088/module/1newexam/index.html',
                 "menuTarget":"login.html","menuIcon":"0","menuSort": "1","menuvisual": "0", "authorityIdentification": "teacher",
                 "imageFile":"../../img/login-logo2.png","menuRemarks":"备注2"
            },
            {
                "id": 4,"superiorMenu":"课程管理", "menuName": "课程管理", "menuLink": 'http://localhost:8088/module/1newexam/index.html',
                 "menuTarget":"login.html","menuIcon":"1","menuSort": "1","menuvisual": "1", "authorityIdentification": "teacher",
                 "imageFile":"../../img/login-logo2.png","menuRemarks":"备注3"
            },
            {
                "id": 5,"superiorMenu":"考试计划管理", "menuName": "考试计划管理", "menuLink": 'http://localhost:8088/module/1newexam/index.html',
                 "menuTarget":"login.html","menuIcon":"0","menuSort": "0","menuvisual": "0", "authorityIdentification": "admin",
                 "imageFile":"../../img/login-logo2.png","menuRemarks":"备注4"
            },
            {
                "id": 6,"superiorMenu":"教学团队列表", "menuName": "教学团队列表", "menuLink": 'http://localhost:8088/module/1newexam/index.html',
                 "menuTarget":"login.html","menuIcon":"1","menuSort": "1","menuvisual": "1", "authorityIdentification": "teacher",
                 "imageFile":"../../img/login-logo2.png","menuRemarks":"备注5"
            },
            {
                "id": 7,"superiorMenu":"考试管理", "menuName": "考试管理", "menuLink": 'http://localhost:8088/module/1newexam/index.html',
                 "menuTarget":"login.html","menuIcon":"0","menuSort": "0","menuvisual": "0", "authorityIdentification": "student",
                 "imageFile":"../../img/login-logo2.png","menuRemarks":"备注6"
            },
            {
                "id": 8,"superiorMenu":"学生成绩管理", "menuName": "学生成绩管理", "menuLink": 'http://localhost:8088/module/1newexam/index.html',
                 "menuTarget":"login.html","menuIcon":"1","menuSort": "1","menuvisual": "1", "authorityIdentification": "admin",
                 "imageFile":"../../img/login-logo2.png","menuRemarks":"备注7"
            },
            {
                "id": 9,"superiorMenu":"学生黑名单管理", "menuName": "学生黑名单管理", "menuLink": 'http://localhost:8088/module/1newexam/index.html',
                 "menuTarget":"login.html","menuIcon":"0","menuSort": "0","menuvisual": "1", "authorityIdentification": "admin",
                 "imageFile":"../../img/login-logo2.png","menuRemarks":"备注8"
            },
            {
                "id": 10,"superiorMenu":"系统设置", "menuName": "工作台", "menuLink": 'http://localhost:8088/module/1newexam/index.html',
                 "menuTarget":"login.html","menuIcon":"1","menuSort": "0","menuvisual": "1", "authorityIdentification": "admin",
                 "imageFile":"../../img/login-logo2.png","menuRemarks":"备注9"
            }]
    }
    function table(data) {
        $("#exampleTableToolbar").bootstrapTable({
            data: data,
            striped: true,                      //是否显示行间隔色
            cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            sortable: false,                     //是否启用排序
            sortOrder: "asc",                   //排序方式
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
                field: 'menuName',
                title: '菜单名称'
            }, {
                field: 'menuLink',
                title: '链接'
            }, {
                field: 'menuSort',
                title: '排序',
                formatter:function(value){
                    console.log(value)
                    if(value == "1"){
                        return '升序'
                    }else if(value == "0"){
                        return '降序'
                    }
                }
            }, {
                field: 'menuvisual',
                title: '可见',
                formatter:function(value){
                    console.log(value)
                    if(value == "1"){
                        return '显示'
                    }else if(value == "0"){
                        return '隐藏'
                    }
                }
            }, {
                field: 'authorityIdentification',
                title: '权限标识'
            }, {
                title: '操作',
                formatter: function (value, row, index) {
                    return '<div class="btn-group" role="group">' +
                            '<button type="button" class="edit btn btn-info ">编辑 </button>' +
                            '<button type="button" class="del btn btn-danger">删除</button>' +
                            '<button type="button" class="addrole btn btn-primary ">添加下级菜单 </button>' +
                        '</div>'
                }
            }],
            onClickRow: function (row, element) {
                console.log(row)
                tablerowData = row
            }
        })
    }
    table(tableData.rows)


})