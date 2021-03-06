var requireConfig = {
  // baseUrl === 使用requirejs的当前页面路径，baseUrl应当永远指向（common｜components｜lib｜当前页面.html）同目录
  // 如存在多目录页面，请使用绝对路径！比如：http://127.0.0.1:9000/projectName/（common｜components｜lib｜当前页面.html）
  baseUrl: "../../js/",
  map: {
    '*': { 'css': 'requirejs/css.min' }
  },
  paths: {
    /* 公共库 */
    'jquery':'jquery.min',
    'bootstrap':'bootstrap.min',
    'contabs':'contabs.min',
    'content':'content.min',
    'hplus':'hplus.min',
    'jquery-ui':'jquery-ui-1.10.4.min',
    'jquery-ui.custom':'jquery-ui.custom.min',
    'jquery.metisMenu':'plugins/metisMenu/jquery.metisMenu',
    'jquery.slimscroll':'plugins/slimscroll/jquery.slimscroll.min',
    'layer':'plugins/layer/layer',
    'echarts':'demo/echarts.min',
    'laydate':'plugins/laydate/laydate',
    'echarts-type':'demo/echarts-type',
    'mySelect':'mySelect',
    'pace':'plugins/pace/pace.min',
    'hdb' : 'handlebars-v4.0.5',
  },
  shim: {
    'bootstrap': {deps: ['jquery']},
    'jquery-ui.custom': {deps: ['jquery']},
    'jquery.metisMenu': {deps: ['jquery']},
    'jquery.slimscroll': {deps: ['jquery']},
    'hplus': {deps: ['jquery']},
    'hplus': {deps: ['layer']},
    'contabs': {deps: ['jquery']},
    'hdb':{ exports: ['Handlebars'] },
  }
};
