requirejs.config({
    paths: {
        jquery: 'jquery-3.2.1.min'
    }
});
define([],function () {
    var nav_changeColor = function () {
        var $navLine=$('.nav_line>.line');
        $('.nav_line').hover(function () {
            $navLine.css('background-color', '#ffc815')
        }, function () {
            $navLine.css('background-color', '#fff')
        });
    };
    return nav_changeColor;
});

