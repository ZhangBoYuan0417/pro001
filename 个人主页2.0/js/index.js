requirejs.config({
    paths: {
        jquery: 'jquery-1.12.4.min.js'
    }
});
//第一次页面加载时的照片
window.addEventListener("load", function () {
    var wrapper = document.getElementById("wrapper");
    document.body.removeChild(wrapper);
});
//滚动条判断
var oAboutMe = document.getElementById('about_me');
var oPictures = document.getElementById("my_pictures");
var oBlog = document.getElementById("my_blog");
var oSkills = document.getElementById("my_skills");
var oContact = document.getElementById("contact");
var oNav = document.getElementById("navTop");
var oLis = oNav.getElementsByTagName('li');
var oSkill = document.getElementById("skills");
$(window).scroll(function () {
    if ($(document).scrollTop() <= oAboutMe.offsetTop) {
        if ($("#goTop").css("opacity", "1")) {
            $("#gotop").removeClass("fadeIn").addClass("fadeOut");
        }

    } else {
        if ($("#goTop").css("opacity", "0")) {
            $("#gotop").removeClass("fadeOut").addClass("fadeIn");
        }

    }
    if ($(document).scrollTop() <= oBlog.offsetTop - 81 && $(document).scrollTop() >= oSkill.offsetTop - 500) {
        $(".profession-my1").css("width", "100%");
        $(".profession-my2").css("width", "80%");
        $(".profession-my3").css("width", "73%");
        $(".profession-my4").css("width", "70%");
    }
    //页面处于开始照片
    if ($(document).scrollTop() <= oAboutMe.offsetTop - 81) {
        for (var i = 0; i < 5; i++) {
            oLis[i].className = '';
        }
        oLis[0].className = 'active';

//页面处于自我介绍
    } else if ($(document).scrollTop() > oAboutMe.offsetTop - 81 && $(document).scrollTop() <= oSkills.offsetTop - 81) {
        for (var i = 0; i < 5; i++) {
            oLis[i].className = '';
        }
        oLis[1].className = 'active';
        //页面处于技能
    } else if ($(document).scrollTop() > oSkills.offsetTop - 81 && $(document).scrollTop() <= oBlog.offsetTop - 81) {
        for (var i = 0; i < 5; i++) {
            oLis[i].className = '';
        }
        oLis[2].className = 'active';
        //页面处于音乐
    } else if ($(document).scrollTop() > oBlog.offsetTop - 81 && $(document).scrollTop() <= oContact.offsetTop - 81) {
        for (var i = 0; i < 5; i++) {
            oLis[i].className = '';
        }
        oLis[3].className = 'active';
        //联系
    } else {
        for (var i = 0; i < 5; i++) {
            oLis[i].className = '';
        }
        oLis[4].className = 'active';
    }
});
//引入stellar.js
require(["jquery.stellar.min"], function (x) {
    $(function () {
        $.stellar();//$(window).stellar()
    });
});
//滚动条滚动
require(["scrollToo"], function (scrollToo) {
    var oGotop = document.getElementById("gotop");
    var oNav = document.getElementById("navTop");
    var oLis = oNav.getElementsByTagName("li");
    var oAboutMe = document.getElementById("about_me");
    var oPictures = document.getElementById("my_pictures");
    var oBlog = document.getElementById("my_blog");
    var oContact = document.getElementById("contact");
    var oSkills = document.getElementById("my_skills");
    oGotop.onclick = function () {
        scrollToo(0);
    };
    for (var i = 0; i < 5; i++) {
        oLis[i].index = i;
        oLis[i].onclick = function () {
            for (var j = 0; j < 5; j++) {
                oLis[j].className = '';
            }
            this.className = 'active';
            switch (this.index) {
                case 0:
                    scrollToo(0);
                    break;
                case 1:
                    scrollToo(oAboutMe.offsetTop);
                    break;
                case 2:
                    scrollToo(oSkills.offsetTop);
                    break;
                case 3:
                    scrollToo(oBlog.offsetTop);
                    break;
                case 4:
                    scrollToo(oContact.offsetTop);
                    break;
            }
        };
    }
    $('#hereMe').on("click", function () {
        scrollToo(oAboutMe.offsetTop);
    })

});
//开始图片
require(["typed"], function (typed) {
    $(function () {
        var element = $(".element");
        $(function () {
            element.typed({
                strings: ["I'm Designer.", "I am Creative."],
                typeSpeed: 100,
                loop: true

            });
        });
    });

})
//轮播图

    var nowIndex = 0;
    var timer;
    $(".num>li").on("click", function () {
        nowIndex = $(this).index();
        changImg();
    });
    $(".comer>li").eq(0).on("click", function () {
        nowIndex = nowIndex - 1;
        if (nowIndex == -1) {
            nowIndex = 3;
        }
        changImg();
    });
    $(".comer>li").eq(1).on("click", function () {
        nowIndex = nowIndex + 1;
        if (nowIndex == 4) {
            nowIndex = 0;
        }
        changImg();
    });



//弹出层

    $("#my_blog .row>div").on("click", function () {
        nowIndex = $(this).index();
        $(".mask").css("display", "block");
        $(".blog_big").css("display", "block");
        changImg();
        $('html,body').addClass("hiddenScroll");


    });
    $(".mask").on("click", function () {
        $(".mask").css("display", "none");
        $(".blog_big").css("display", "none");
        $("html,body").removeClass("hiddenScroll")
    });
function changImg() {
    $(".num li").eq(nowIndex).addClass("blog_select").siblings().removeClass("blog_select");
    $('.blog_big div').eq(nowIndex).addClass("blog_select").siblings().removeClass("blog_select")
}

//照片墙
var ROW = 2, COL = 3, NUM = ROW * COL, BIG_W = 780, BIG_H = 613, THUMB_W = 260, THUMB_H = 306;
var oContainer = document.getElementById("pictures_wall");
var oPrev = document.getElementById("prev");
var oNext = document.getElementById("next");
var count = 0;//计数器，记录当前图片加载成功的数量
var aImg;
var fGapCol;
var fGapRow;
var iImgWidth;
var iImgHeight;
//图片预加载
for (var i = 0; i < NUM; i++) {
    var oBigImg = new Image();
    oBigImg.onload = function () {
        count++;
        if (count == NUM * 2) {
            loadSuccess();
        }
    };
    oBigImg.src = "img/pictures_wall/" + (i + 1) + ".png";

    var oThumbImg = new Image();
    oThumbImg.onload = function () {
        count++;
        if (count == NUM * 2) {
            loadSuccess();
        }
    };
    oThumbImg.src = "img/pictures_wall/thumbs/" + (i + 1) + ".png";
}

var index = 0;//1~24
//图片预加载成功以后执行的函数
function loadSuccess() {
    //创建24个div,并把设置背景图片
    for (var i = 0; i < ROW; i++) {
        for (var j = 0; j < COL; j++) {
            index++;
            var oDiv = document.createElement("div");
            oDiv.className = "img";
            oDiv.style.backgroundImage = "url(img/pictures_wall/thumbs/" + index + ".png)";
            //给div对象自定义属性pos，保存坐标
            oDiv.pos = {
                col: j,
                row: i
            };
            oDiv.index = index;
            oDiv.innerHTML = "<span></span>";
            oContainer.appendChild(oDiv);
        }
    }
    //计算每个div的位置
    aImg = oContainer.getElementsByTagName("div");
    iImgWidth = aImg[0].offsetWidth;
    iImgHeight = aImg[0].offsetHeight;
    fGapCol = (oContainer.offsetWidth - iImgWidth * COL) / (COL + 1);
    fGapRow = (oContainer.offsetHeight - iImgHeight * ROW) / (ROW + 1);
    for (var i = 0; i < NUM; i++) {
        aImg[i].style.left = (fGapCol + iImgWidth) * aImg[i].pos.col + fGapCol + "px";
        aImg[i].style.top = (fGapRow + iImgHeight) * aImg[i].pos.row + fGapRow + "px";
        aImg[i].style.transitionDelay = (NUM - i) * 100 + "ms";
    }
}

//定义标志位，表示当前是散开还是合并，true表示散开要合并，false表示合并要散开
var bFlag = true;
var fBigGapCol = (oContainer.offsetWidth - BIG_W) / 2;
var fBigGapRow = (oContainer.offsetHeight - BIG_H) / 2;

//利用事件委托，把子元素事件委托给container绑定
oContainer.onclick = function (e) {
    //e.target => container/span/div
    if (this != e.target) {
        if (bFlag) {//当前是散开的，要合并
            for (var i = 0; i < aImg.length; i++) {
                aImg[i].style.top = fBigGapRow + THUMB_H * aImg[i].pos.row + "px";
                aImg[i].style.left = fBigGapCol + THUMB_W * aImg[i].pos.col + "px";
                aImg[i].style.borderWidth = "1px";
                aImg[i].style.transitionDelay = "0ms";
                var oSpan = aImg[i].getElementsByTagName("span")[0];
                oSpan.style.opacity = 1;
                if (e.target.className == "img") {//div
                    index = e.target.index;
                } else {//span
                    index = e.target.parentNode.index;
                }
                oSpan.style.backgroundImage = "url(img/pictures_wall/" + index + ".png)";
                oSpan.style.backgroundPosition = -THUMB_W * aImg[i].pos.col + "px " + (-THUMB_H * aImg[i].pos.row) + "px";
            }
            oPrev.style.display = oNext.style.display = "block";
        } else {//当前是合并的，要散开
            for (var i = 0; i < aImg.length; i++) {
                aImg[i].style.left = (fGapCol + iImgWidth) * aImg[i].pos.col + fGapCol + "px";
                aImg[i].style.top = (fGapRow + iImgHeight) * aImg[i].pos.row + fGapRow + "px";
                aImg[i].style.borderWidth = "5px";
                var oSpan = aImg[i].getElementsByTagName("span")[0];
                oSpan.style.opacity = 0;
                oSpan.style.transitionDelay = "0ms";
            }
            oPrev.style.display = oNext.style.display = "none";
        }
        bFlag = !bFlag;
    }
};

oPrev.onclick = oNext.onclick = function () {
    if (this === oPrev) {
        index--;
        if (index == 0) {
            index = NUM;
        }
    } else {
        index++;
        if (index == NUM + 1) {
            index = 1;
        }
    }

    var arr = [];
    for (var i = 0; i < NUM; i++) {
        arr.push(i);
    }
    arr.sort(function () {
        return Math.random() - 0.5;
    });

    for (var i = 0; i < aImg.length; i++) {
        var oSpan = aImg[arr[i]].getElementsByTagName("span")[0];
        oSpan.style.backgroundImage = "url(img/pictures_wall/" + index + ".png)";
        oSpan.style.transitionDelay = (i + 2) * 50 + "ms";
    }
};


