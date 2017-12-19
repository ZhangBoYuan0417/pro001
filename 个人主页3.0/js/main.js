/*********************************************************************
***********************************************************************
    Template Name: Mutant Portfolio Template
    Template URI:
    Description: Personal Portfolio Template
    Author: Ashiqur Rahman Tusher
    Author URI: 
    Version: 1
************************************************************************
************************************************************************/
/*-----------------------------------------------------------------------
    TABLE OF CONTENTS
-------------------------------------------------------------------------
    1. Start Preloader Animation
    2. Start Smooth Scrolling
    3. Start Header
    4. Start Menu
    5. Start About Me
    6. Start Portfolio
    7. Start Testimonials
    8. Start Code for Mobile Devices
    9. Others
============================================================================
============================================================================*/

$(function() {
	"use strict";

    /*--------------------------------
      1. Start Preloader Animation
    ----------------------------------*/
    $(window).on("load", function() {
        $(".loader").fadeOut();
        $("#preloader").delay(350).fadeOut("slow");
        $("body").delay(350).css({ "overflow": "visible" });
        $(".all-container").css({ "opacity": "1" });
    });
     /*--------------------------------
      1.  End Preloader Animation
    ----------------------------------*/

    /*--------------------------------
      2. Start Smooth Scrolling
    ----------------------------------*/
    function smoothScroll() {
        // Select all links with hashes
        $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .on("click",function(event) {
            // On-page links
            if (
              location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && 
              location.hostname == this.hostname
            ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000,"easeInOutExpo", function() {
                  // Callback after animation
                  // Must change focus!
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                  } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                  }
                });
              }
            }
        });
        jQuery.extend( jQuery.easing,{
            easeInOutExpo: function (x, t, b, c, d) {
                if (t==0) return b;
                if (t==d) return b+c;
                if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
                return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
            }
        });
    }
    // Applying Smooth Scroll When The Browser Is Not Opera Mini Or UC Browser
    if (navigator.userAgent.indexOf('Opera Mini') == -1 || navigator.userAgent.indexOf('UCBrowser') != -1){
        smoothScroll();
    }
    /*--------------------------------
        2. End Smooth Scrolling
    ----------------------------------*/

    /*--------------------------------
  	 3. Start Header
    ----------------------------------*/
    // Initiating Background Slider
    var backgroundSlide = $('#background-slide');
    backgroundSlide.owlCarousel({
        loop:true,
        items:1,
        dots: false,
        autoplay:true,
        autoplayTimeout:5000,
        animateOut: 'fadeOut'
    });
    $('.slider-prev-button').on("click",function(){
        backgroundSlide.trigger('prev.owl.carousel');
    });
    $('.slider-next-button').on("click",function(){
        backgroundSlide.trigger('next.owl.carousel');
    });
    // Setting Up Background Images
    function SliderBackground() {
        if ($(".owl-full-width .slider").length) {
            $(".owl-full-width .slider").each(function() {
                var $this = $(this);
                var img = $this.children(img);
                var imgSrc = img.attr("src");
                $this.css({
                    backgroundImage: "url("+ imgSrc +")",
                    backgroundSize: "cover",
                    backgroundPosition: "center center"
                });
            });
        }
    }
    // Initializing Background Setting Function
    SliderBackground();
    // Toggle Fullscreen Navigation
    $('#burger').on("click",function(){
        $(".fullscreen-nav-container").slideToggle(300);
    });
    $(".fullscreen-nav-holder a, .turn-home").on("click",function(){
        $("#burger").trigger("click");
    });
    /*--------------------------------
        3. End Header
    ----------------------------------*/

    /*--------------------------------
  		4. Start Menu
    ----------------------------------*/
    // Highlighting Menu on Scroll Through Sections
    $(window).on('scroll', function() {
        $('.section').each(function() {
            if($(window).scrollTop()+50 >= $(this).offset().top) {
                var id = $(this).attr('id');
                $('.menu-item').removeClass('active');
                $(".menu-item." + id).addClass("active");
                $(".mobile-menu-item").removeClass("active");
                $(".mobile-menu-item." + id).addClass("active");
            }
        });
    });
    
    // Styling Menu on Scroll
    $('.about-me').waypoint({
      handler: function(direction) {
        // Fixing Menu after leaving Header Section
        $(".menu").toggleClass("menu-fix");
        // Changing Menu background after leaving Header Section
        $(".menu-container").toggleClass("menu-normal");
        $(".menu-item").toggleClass("menu-item-transparent");
        $(".desktop-menu .hvr-underline-from-left").toggleClass("dark");
        // Toggling Mobile Menu Visibility
        $(".mobile-menu").toggleClass("mobile-menu-fix");
        // Auto-Collapsing Mobile Menu When Left Open
        var a = $(".menu-link").attr("class");
        if (direction == "up" && a == "menu-link active"){
            $(".menu-link").trigger("click");
        }
      }
    });

    // Toggle Mobile Menu
    $('.mobile-menu a').on("click",function(){
        $(".menu-link").toggleClass("active");
        $(".menu-slider").slideToggle(500);
    });
    /*--------------------------------
  		4. End Menu
    ----------------------------------*/

    /*--------------------------------
        5. Start About Me
    ----------------------------------*/
    // Initializing Skillbar Animation
    $('.skill h3').waypoint({
      handler: function(direction) {
        if (direction == "up") {
            $('.skillbar').each(function(){
                $(this).find('.skillbar-bar').css("width","0");
            });
        }
        else if(direction == "down"){
            $('.skillbar').each(function(){
                $(this).find('.skillbar-bar').animate({
                    width:jQuery(this).attr('data-percent')
                },2000);
            });
        }       
      },
      offset: 'bottom-in-view'
    });
    /*--------------------------------
        5. End About Me
    ----------------------------------*/

    /*--------------------------------
        6. Start Portfolio
    ----------------------------------*/
    // Initialize filterizr Plugin
    var filterizd = $('.filtr-container').filterizr();

    // Styling of Filter Controls
    $(".portfolio-navigation li").on("click",function(){
        $(".portfolio-navigation li").removeClass("active");
        $(this).addClass("active");
    });

    // Initialize MagnificPopup Plugin
    $('.filtr-container').magnificPopup({
        type:'image',
        delegate: 'a',
        gallery:{enabled:true},
        zoom:{
            enabled:true,
            duration: 300,
            easing: 'ease-in-out'
        }
    });

    // Galley Shuffle When Scrolled Down
    $('.services').waypoint({
      handler: function(direction) {
        if (direction == "down") {
            filterizd.filterizr('shuffle');
        }
      },
      offset: "bottom-in-view"
    });
    /*--------------------------------
        6. End Portfolio
    ----------------------------------*/

    /*--------------------------------
        7. Start Testimonials
    ----------------------------------*/
    // Configure and Initialize Owl Carousel
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        dots:true,
        autoplay:true,
        autoplayTimeout:3000
    });

    // Configuring Fun-Facts Counter
    var work = new CountUp('work', 0, 120, 0, 4);
    var happyClient = new CountUp('happy-client', 0, 320, 0, 4);
    var projects = new CountUp('projects', 0, 510, 0, 4);
    var coffee = new CountUp('coffee', 0, 720, 0, 4);

    // Initializing Fun-Fact Counter
    $('.fun-facts').waypoint({
      handler: function(direction) {
        work.start();
        happyClient.start();
        projects.start();
        coffee.start();
      },
      offset: "bottom-in-view"
    });
    /*--------------------------------
        7. End Testimonials
    ----------------------------------*/

    /*--------------------------------
        8. Start Code for Mobile Devices
    ----------------------------------*/
    // Code for Opera Mini
    var vh = $(window).height();
    if (navigator.userAgent.indexOf('Opera Mini') != -1){
        // Setting Fun Facts Value Immediately 
        work.start();
        happyClient.start();
        projects.start();
        coffee.start();
        // Setting Skillbar Value Immediately
        $('.skillbar').each(function(){
            $(this).find('.skillbar-bar').animate({
                width:jQuery(this).attr('data-percent')
            },0);
        });
        // Removing Bootstrap Class and Re-Style Input
        $("input").removeClass("form-control");
        $("input").css({
            "width":"100%",
            "height":"50px",
            "background":"#fff"
        });
        // Removing Full-Screen Nav
        $(".navigation-icon").css("display","none");
    }

    // Code For UC Browser
    if (navigator.userAgent.indexOf('UCBrowser') != -1){
        // Removing Full-Screen Nav
        $(".navigation-icon").css("display","none");
        $(".fun-facts").css({
            "display":"table",
            "margin":"auto"
        });
        // Setting Fun Facts Value Immediately 
        work.start();
        happyClient.start();
        projects.start();
        coffee.start();
        // Setting Skillbar Value Immediately
        $('.skillbar').each(function(){
            $(this).find('.skillbar-bar').animate({
                width:jQuery(this).attr('data-percent')
            },0);
        });
    }
    /*--------------------------------
        8. End Code for Mobile Devices
    ----------------------------------*/

    /*--------------------------------
        9. Others
    ----------------------------------*/
    // Code for Internet Explorer
    if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1)){
        $(".header, .fullscreen-nav-container, .like-me, .contact").css("background-attachment","scroll");
        $(".fullscreen-nav-holder").css("width","100vw");
    }

    // Wow Plugin Initialization
    var wow = new WOW({
        animateClass: 'animated',
        offset: 70,
        mobile: false
    });
    wow.init();

    // Toggling Visibility of Scroll Up Button
    $(".about-me-image").waypoint({
        handler: function(direction){
            $(".scroll-up").toggleClass("scroll-up-show");
        },
        offset: "bottom-in-view"
    });
    $(".sub-button").waypoint({
        handler: function(direction){
            $(".scroll-up").toggleClass("scroll-up-show");
        },
        offset: "bottom-in-view"
    });
    /*--------------------------------
        9. Others
    ----------------------------------*/
}(jQuery));