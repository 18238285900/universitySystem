require.config(requireConfig)
require(['jquery', 'hdb', 'utils', 'layer', 'bootstrap', 'jquery.metisMenu', 'jquery.slimscroll', 'hplus', 'contabs', 'pace', 'validate'], function ($, Handlebars, Utils, layer) {
    $("#captcha").attr('src', 'http://39.106.139.151:8080/exam-admin/captcha.jpg?uuid=' + Utils.getTime())
    $(".captchaIcon").on('click', function () {
        $("#captcha").attr('src', 'http://39.106.139.151:8080/exam-admin/captcha.jpg?uuid=' + Utils.getTime())
    })

    var loginData = {}
    jQuery.validator.addMethod("regUserName", function (value, element) {
        return this.optional(element) || Utils.regusername.test(value);
    }, "用户名为6-16位字母、数字或字母数字组合");

    jQuery.validator.addMethod("regpassword", function (value, element) {
        return this.optional(element) ||  Utils.regpassword.test(value);
    }, "密码为7-20位至少包括字母数字特殊字符任意2种");

    //登录帐号合法性验证
    jQuery.validator.addMethod("regcaptcha", function (value, element) {
        var length = value.length;
        return this.optional(element) || Utils.regcaptcha.test(value);
    }, "验证码为5位字母和数字组合");
    $("#commentForm").validate({
        rules: {
            username: {
                required: true,
                regUserName: true,
                minlength: 6,
                maxlength: 16
            },
            password: {
                required: true,
                regpassword:true,
                minlength: 7,
                maxlength: 20
            },
            captchaInput: {
                required: true,
                regcaptcha: true,
                maxlength: 5
            }
        },
        messages: {
            username: {
                required: '用户名不能为空',
                minlength: '用户名最少为6位',
                maxlength: '用户名最多为16位'
            },
            password: {
                required: '密码不能为空',
                minlength: '密码最少为7位',
                maxlength: '密码最多为20位'
            },
            captchaInput: {
                required: '验证码不能为空',
                maxlength: '验证码最多为5位'
            }
        },

    })
    
    $('#login').on('click', function () {
        var username = $(".userName").val()
        var password = $(".password").val()
        var captcha = $(".captchaInput").val()
        loginData = {
            "username": username,
            "password": password,
            "captcha": captcha,
            "uuid": Utils.randomString(4)
        }
        console.log(loginData)
        if (Utils.regusername.test(username) && Utils.regpassword.test(password) && Utils.regcaptcha.test(captcha)) {
            Utils.postJson('http://39.106.139.151:8080/exam-admin/sys/login',
                JSON.stringify(loginData)).then(function (res) {
                    console.log(res.token)
                    if (res.code == "0") {
                        Utils.setCookie("token", res.token)
                        window.location.href = "index.html"
                    } else {
                        layer.msg(res.msg, {
                            time: 2000 //2s后自动关闭
                        });
                    }
                })
            return false
        }
    })
    Utils.getJson('http://39.106.139.151:8080/exam-admin/sys/user/info').then((res)=>{
        console.log(res)
    })
    Utils.getJson('http://39.106.139.151:8080/exam-admin/sys/user/list?page=1&limit=2').then((res)=>{
        console.log(res)
    })
    Utils.getJson('http://39.106.139.151:8080/exam-admin/sys/user/info/1').then((res)=>{
        console.log(res)
    })
    Utils.getJson('http://39.106.139.151:8080/exam-admin/sys/role/list?page=1&limit=2').then((res)=>{
        console.log(res)
    })

})