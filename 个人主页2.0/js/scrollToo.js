//滚动条函数
define(function () {
    function scrollToo(x) {
        x = x-80;
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
                window.scrollTo(0, scrollToop -=2);
                if (scrollToop <= x) {
                    clearInterval(timer)
                }
            }, 1)
        }

    }
    return scrollToo;
});
