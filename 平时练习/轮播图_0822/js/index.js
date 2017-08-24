require(['jquery', 'carousel'], function ($, Carousel) {
    var setting1 = {
        selector: "#container1",
        imgArr: ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"],
        speed: 1000,
        btnStyle: "square",//circle
        arrowPos: "bottom"//center
    };
    var carouse = new Carousel;
    carouse.init();



});