require.config(requireConfig)
require(['jquery', 'hdb', 'utils', 'bootstrap', 'jquery.metisMenu', 'jquery.slimscroll', 'layer', 'hplus', 'contabs', 'pace'], function ($, Handlebars, Utils) {
    $("#captcha").attr('src', 'http://39.106.139.151:8080/exam-admin/captcha.jpg?uuid='+Utils.randomString(5))
    $(".captchaIcon").on('click',function(){
        $("#captcha").attr('src', 'http://39.106.139.151:8080/exam-admin/captcha.jpg?uuid='+Utils.randomString(5))
    })
    Utils.postJson('http://39.106.139.151:8080/exam-admin/sys/login', JSON.stringify({
        "username": "admin",
        "password": "admin",
        "captcha": "1234",
        "uuid": "12"
    })).then(function (res) {
        console.log(res.token)
        if (res.code == "0") {
            Utils.setCookie("token", res.token)
        }
    })
})