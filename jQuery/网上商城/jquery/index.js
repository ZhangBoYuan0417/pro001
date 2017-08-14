/**
 * Created by Administrator on 2017/8/13 0013.
 */
$(function () {
    var nowIndexMiddle = 0;
    var timerMiddle;
    var nowIndexShose = 0;
    $('#top .top-nav li').on('mouseover', function () {
        $(this).find('.brand').slideDown('slow')
    })
    $('#top .top-nav li').on('mouseleave', function () {
        $(this).find('.brand').slideUp('slow')
    });
    $('#main .ads li').on('mouseover', function () {
        nowIndexMiddle = $(this).index();
        changImgMiddle();
    });
    playMiddle();
    $('.middle').hover(function () {
        clearInterval(timerMiddle);
    }, function () {
        playMiddle();
    });
    $('#main .numbers li').on('click', function () {
        nowIndexShose = $(this).index();
        $('#main .numbers li').eq(nowIndexShose).addClass('selected').siblings().removeClass('selected')
        $('#main .change div').eq(nowIndexShose).addClass('selected').siblings().removeClass('selected')
    });
    function playMiddle(_) {
        timerMiddle = setInterval(function () {
            nowIndexMiddle++;
            if (nowIndexMiddle == 6) {
                nowIndexMiddle = 0;
            }
            changImgMiddle();
        }, 1000)
    };
    function changImgMiddle() {
        $('#main .ads li').eq(nowIndexMiddle).addClass('selected1').siblings().removeClass('selected1');
        $('#main .middle img').css('display', 'none');
        $('#main .middle img').eq(nowIndexMiddle).fadeIn(1000, function () {
            $('#main .middle img').eq(nowIndexMiddle).addClass('selected2')
        });
    };

        if($.cookie("skin")){
            changeSkin($.cookie("skin"));
        }

        $("#top .button li").on("click", function(){
            var skin = $(this).attr("id");
            $.cookie("skin", skin, {expires: 30});
            changeSkin(skin);
        });

        function changeSkin(skin){
            $("#cssfile").attr("href", "css/"+ skin + ".css");
            $("#" + skin).addClass("selected").siblings().removeClass("selected");
        }



});