define(["jqery"], function ($) {
    function Carousel(settings) {
        this.$container = $('<div class="container"></div>');
        this.$imgs = $('<div class="container-imgs"></div>');
        this.$numbs = $('<ul class="container-numbs"></ul>');
        this.$less = $('<span class="lessThan">&lt;</span>');
        this.$great = $('<span class="greatThan">&gt;</span>');
        this.defaultSettngs = {
            selector: 'window',
            imgArr: [],
            speed: 1000,
            btnStyle: "square",//circle
            arrowPos: "bottom"//center
        }
        $.extend(his.defaultSettngs, settings);
    }

    Carousel.prototype.init = function () {
        this.$container.append(this.$imgs).append(this.$numbs).append(this.$less).append(this.$great);
        for (var i = 0; i < this.defaultSettngs.imgArr.length; i++) {
            var $li = $('<li></li>').html(i + 1);
            this.$numbs.append($li);
            var $img = $('<img />').attr('src', this.defaultSettngs.imgArr[i]);
            this.$imgs.append($img);
        }
        $('li', this.$numbs).eq(0).addClass('selected');
        $('img', this.$imgs).eq(0).addClass('selected');
        this.defaultSettngs.selector.append(this.$container);

    };
    var nowIndex = 0;
    $('li', this.$numbs).on('click', function (e) {

        $('li', this.$numbs) .addClass('selected').siblings().addClass('selected');

    });


});