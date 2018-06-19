define('mySelect',[],function(){
    return function (data) {
        var html = '';
        for (var i = 0; i < data.length; i++) {
            html += '<option value="' + data[i].key + '">' + data[i].name + '</option>'
        }
        return html
    }
})