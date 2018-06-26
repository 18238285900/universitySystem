define('utils', [], function () {
    var utils = {
        setCookie: function (name, value) { //设置cookie
            var Days = 0.5;
            var exp = new Date();
            exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
            document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + exp.toGMTString();
        },
        getCookie: function (name) { //获取cookie
            var coo = document.cookie;
            var arr1 = coo.split('; ');//第一次分解后是数组
            for (var i = 0; i < arr1.length; i++) {//第二次循环拆分数组
                var arr2 = arr1[i].split('=');
                if (arr2[0] == name) {
                    return decodeURIComponent(arr2[1]);
                }
            }
        },
        delCookie: function (name) {//删除cookie
            var exp = new Date();
            exp.setTime(exp.getTime() - 1000);
            var cval = utils.getCookie(name);
            if (cval != null) {
                document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
            }
        },
        baseAjax: function (requestPath, requestData, requestType, succCallback, errorCallback) {
            /*requestPath：请求路径
             requestData：请求参数，默认为空
             requestType：请求方式("POST" 或 "GET")， 默认为 "GET"
             succCallback：请求成功回调函数
             errorCallback：请求失败回调函数 */
            $.ajax({
                url: requestPath,               //请求地址
                type: requestType,              //请求类型
                contentType: "application/json; charset=utf-8",
                data: requestData,              //请求数据
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('token', utils.getCookie("token") || "");             //发送请求之前，加上token”
                },
                success: function (res) {         //请求成功
                    if (succCallback) {
                        succCallback(res)
                    }
                },
                error: function (err) {            //请求错误
                    if (errorCallback) {
                        errorCallback(err)
                    }
                }
            })
        },
        postJson: function (path, data) {
            return new Promise(function (resolve, reject) {
                utils.baseAjax(path, data, 'POST', resolve, reject)
            })
        },
        getJson: function (path) {
            return new Promise(function (resolve, reject) {
                utils.baseAjax(path, {}, 'GET', resolve, reject)
            })
        },
        putJson: function (path, data) {
            return new Promise(function (resolve, reject) {
                utils.baseAjax(path, data, 'PUT', resolve, reject)
            })
        },
        deleteJson: function (path, data) {
            return new Promise(function (resolve, reject) {
                baseAjax(path, data, 'DELETE', resolve, reject)
            })
        },
        randomString: function (len) {
            len = len || 5;
            var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoprstuvwxyz1234567890';   
            var maxPos = chars.length;
            var pwd = '';
            for (i = 0; i < len; i++) {
                pwd += chars.charAt(Math.floor(Math.random() * maxPos));
            }
            return pwd;
        },
        //获取时间戳
        getTime : function(){
            return new Date().getTime()
        },
        //正则规则
        regusername:/^[a-zA-Z0-9]{6,16}$/,
        regpassword:/(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?]{7,20}$/,
        regcaptcha:/^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{5}$/
    }
    return utils
})

