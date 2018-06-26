require.config(requireConfig)
require(['jquery', 'hdb', 'utils', 'layer', 'bootstrap', 'jquery.metisMenu', 'jquery.slimscroll', 'hplus', 'contabs', 'pace', 'validate'],function($, Handlebars, Utils, layer){
    var remindData = {
        testarrange:'3',
        testtoexamine:'23',
        readingPaper:'5'
    }
    $(".testarrange").html(remindData.testarrange);
    $(".testtoexamine").html(remindData.testtoexamine);
    $(".readingPaper").html(remindData.readingPaper);
})