
requirejs.config({
    paths: {
        jquery: 'jquery-3.2.1.min'
    }
});

define(['jquery'],function ($) {
    var bodySize = function () {
        var $nHeight = document.documentElement.clientHeight;
        var $nWidth =document.documentElement.clientWidth;
        $('.begin_img').css('height', $nHeight);
        $('.begin_img').css('width', $nWidth);
    };
    return bodySize;
});
