$(function () {
    $('#header .nav').hover(function () {
        $('#header .line').css('background-color', '#ffc815')
    }, function () {
        $('#header .line').css('background-color', '#fff')
    });
    var oNav2 = document.getElementById('nav2');
    var oLi = oNav2.getElementsByTagName('li');
    for (var i = 0; i < 5; i++) {
        oLi[i].index = i;
        oLi[i].onclick = function () {
            for (var i = 0; i < 5; i++) {
                oLi[i].className = '';
                oLi[i].style.color = '#fff'
            }
            this.className = 'selected';
            switch (this.index) {
                case 0:
                    scrollToo(750);
                    break;
                case 1:
                    scrollToo(1600);
                    break;
                case 2:
                    scrollToo(2380)
            }
            $('#content #nav2 li').hover(function () {
                $(this).css('color', '#ffc815')
            }, function () {
                $(this).css('color', '#fff')
            });
            $('#content #nav2 .selected').hover(function () {
                $(this).css('color', '#fff')
            }, function () {
                $(this).css('color', '#000')
            });

        };

    }
    var $nHeight = screen.availHeight;
    var $nWidth = screen.availWidth;
    $('#img').css('height', $nHeight);
    $('.overlay').css('height', $nHeight);
    var oP = document.createElement("p");
    var oWords = document.getElementById('words');
    oP.innerHTML = "ABOUT <br>ME <span id='small_line'></span>"
    oWords.appendChild(oP);
    $('#content #nav2 li').hover(function () {
        $(this).css('color', '#ffc815')
    }, function () {
        $(this).css('color', '#fff')
    });
    $('#content #nav2 .selected').hover(function () {
        $(this).css('color', '#fff')
    }, function () {
        $(this).css('color', '#000')
    });
    var $scrollTop;
    window.onscroll = function () {
        $scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        if ($scrollTop >= 735) {
            $('#nav2').css({
                'position': 'fixed',
                'top': 0
            });
        } else {
            $('#nav2').css({
                'position': 'static'

            })
        }
    };
    $('#name a').on('click', function () {
        scrollToo(800);
    });
    var clickNum = 0;
    $('#resume .myBio_title').on('click', function () {

        if (clickNum++ % 2 == 0) {
            $(this).next().css('height', 'auto');
            $(this).next().removeClass('bounceOutRight');
            $(this).next().addClass('bounceInRight');
            $(this).next().css('display', 'block');
        } else {
            $(this).next().removeClass('bounceInRight');
            $(this).next().addClass('bounceOutRight');
            $(this).next().css('height', 0);
        }

    });
//照片墙
    var ROW = 2, COL = 2, NUM = ROW * COL, BIG_W = 750, BIG_H = 500, THUMB_W =375 , THUMB_H = 250;
    var oContainer = document.getElementById("my_pictures");
    var index = 0;
    var count = 0;
    var aImags;
    var iImgWidth;
    var iImgHeight;
    var fGapCol;
    var fGapRow;
    var oNext = document.getElementById('next');
    var oPrev = document.getElementById('prev');
    for (var i = 0; i < NUM; i++) {
        var oBigImg = new Image();
        oBigImg.onload = function () {
            count++;
            if (count == NUM * 2) {
                console.log('预加载成功');
                loadSuccess();
            }
        };
        oBigImg.src = 'img/' + (i + 1) + '.jpg';
        var oThumbs = new Image();
        oThumbs.onload = function () {
            count++;
            if (count == NUM * 2) {
                console.log('预加载成功');
                loadSuccess();
            }
        };
        oThumbs.src = 'img/thumbs/' + (i + 1) + '.png'
    }
    function loadSuccess() {
        for (var i = 0; i < ROW; i++) {
            for (var j = 0; j < COL; j++) {
                index++;
                var oDiv = document.createElement('div');
                oDiv.className = 'img';
                oDiv.style.backgroundImage = 'url(img/thumbs/' + index + '.png)';
                oDiv.pos = {
                    col: j,
                    row: i,
                }
                oDiv.index = index;
                oDiv.innerHTML = "<span></span>";
                oContainer.appendChild(oDiv);
            }
        }
        aImags = oContainer.getElementsByTagName('div');
        iImgWidth = aImags[0].offsetWidth;
        iImgHeight = aImags[0].offsetHeight;
        fGapCol = (oContainer.offsetWidth - iImgWidth * COL) / (COL + 1);
        fGapRow = (oContainer.offsetHeight - iImgHeight * ROW) / (ROW + 1);
        for (var i = 0; i < aImags.length; i++) {
            aImags[i].style.left = (iImgWidth + fGapCol) * aImags[i].pos.col + fGapCol + 'px';
            aImags[i].style.top = (iImgHeight + fGapRow) * aImags[i].pos.row + fGapRow + 'px';
            aImags[i].style.transform = 'rotate( ' + (Math.random() * 40 - 20) + 'deg)';
            aImags[i].style.transitionDelay = (NUM - i) * 100 + 'ms';
        }
    };
    var bFlag = true;
    var fBigGapCol = (oContainer.offsetWidth - BIG_W) / 2;
    var fBigGapRow = (oContainer.offsetHeight - BIG_H) / 2;
    oContainer.onclick = function (e) {
        if (this != e.target) {
            if (bFlag) {
                for (var i = 0; i < aImags.length; i++) {
                    aImags[i].style.top = fBigGapRow + THUMB_H * aImags[i].pos.row + 'px';
                    aImags[i].style.left = fBigGapCol + THUMB_W * aImags[i].pos.col + 'px';
                    aImags[i].style.border = '1px';
                    aImags[i].style.transform = 'rotate(0deg)';
                    aImags[i].style.transitionDelay = '0ms';
                    var oSpan = aImags[i].getElementsByTagName('span')[0];
                    oSpan.style.opacity = 1;
                    if (e.target.className == 'img') {
                        index = e.target.index;
                    }
                    else {
                        index = e.target.parentNode.index;
                    }
                    oSpan.style.backgroundImage = 'url(img/' + index + '.jpg)';
                    oSpan.style.backgroundPosition = -THUMB_W * aImags[i].pos.col + 'px ' + (-THUMB_H * aImags[i].pos.row) + 'px';
                }
                oNext.style.display = oPrev.style.display = 'block';
            }
            else {
                for (var i = 0; i < aImags.length; i++) {
                    aImags[i].style.left = (iImgWidth + fGapCol) * aImags[i].pos.col + fGapCol + 'px';
                    aImags[i].style.top = (iImgHeight + fGapRow) * aImags[i].pos.row + fGapRow + 'px';
                    aImags[i].style.transform = 'rotate( ' + (Math.random() * 40 - 20) + 'deg)';
                    aImags[i].style.borderWidth = "5px";
                    var oSpan = aImags[i].getElementsByTagName("span")[0];
                    oSpan.style.opacity = 0;
                    oSpan.style.transitionDelay = "0ms";
                }
                oNext.style.display=oPrev.style.display='none';
            }
            bFlag = !bFlag;
        }
    };
    oNext.onclick = oPrev.onclick = function () {
        if (this === oPrev){
            index --;
            if (index ==0){
                index = NUM;
            }
        } else{
            index ++ ;
            if (index == NUM + 1){
                index =1;
            }
        }
        var arr = [];
        for(var i=0; i<NUM; i++){
            arr.push(i);
        }
        arr.sort(function(){
            return Math.random() - 0.5;
        });

        for(var i=0; i<aImags.length; i++){
            var oSpan = aImags[arr[i]].getElementsByTagName("span")[0];
            oSpan.style.backgroundImage = "url(img/"+ index +".jpg)";
            oSpan.style.transitionDelay = (i + 2) * 150 + "ms";
        }
    };
// 封装滚动条函数
    function scrollToo(x) {
        var scrollToop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollToop < x) {
            var timer = setInterval(function () {
                window.scrollTo(0, scrollToop += 10);
                if (scrollToop >= x) {
                    clearInterval(timer)
                }
            }, 10)
        }else{
            var timer = setInterval(function () {
                window.scrollTo(0, scrollToop -= 10);
                if (scrollToop <= x) {
                    clearInterval(timer)
                }
            }, 10)
        }

    }


});