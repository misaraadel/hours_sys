$(document).ready(function () {
    window.addEventListener("load", function () {
        const loader = document.querySelector(".loader");
        loader.className += " hidden";
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".scroll-top-button").fadeIn();
        } else {
            $(".scroll-top-button").fadeOut();
        }
    });

    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar-fixed-top");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });

    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });

    if (window.matchMedia('(min-width: 1000px)').matches)
    {
        $('.toggler').click(function(){
            $('.toggler').toggleClass('active');
            $('.side-nav').toggleClass('acitve-nav');
            $('.navbar').toggleClass('active-navbar');
            $('.main-content').toggleClass('active-main');
            $('.side-nav .navbar-nav .nav-item .collapse').removeClass('show');
            $('.side-nav .navbar-nav .nav-item .nav-link').attr('aria-expanded', 'false')
        });

        $('.side-nav .navbar-nav .nav-item').click(function(){
            $('.toggler').removeClass('active');
            $('.side-nav').removeClass('acitve-nav');
            $('.navbar').removeClass('active-navbar');
            $('.main-content').removeClass('active-main');
        });
    }

    if (window.matchMedia('(max-width: 999px)').matches)
    {
        $('.toggler').click(function(){
            $('.toggler').toggleClass('active');
            $('.side-nav').toggleClass('acitve-nav');
            $('body').toggleClass('overflowNone');
        });
    }

    $('.owl-header').owlCarousel({
        rtl: true,
        loop:true,
        margin: 20,
        nav:false,
        dots: true,
        autoplay: true,
        touchDrag  :false,
		mouseDrag  : false,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 2000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        items:1
    });

    $('.owl-partner').owlCarousel({
        rtl: true,
        loop:false,
        margin: 20,
        nav:false,
        dots: true,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
    });

    $('.filter').click(function(){
        $('.filter-contain').toggleClass('active-filter');
    });
});