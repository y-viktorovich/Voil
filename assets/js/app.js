$(function() {

    /* Nav Tooggle on mobile
    ===============================*/

    let navToggle = $('#navToggle');
    let nav = $('#nav');

    navToggle.on('click', function(event) {
        event.preventDefault();

        $("body").toggleClass('show-nav');
        $(this).toggleClass('active');
        nav.toggleClass('show');
    });

    $(window).on('resize', function() {
        $("body").removeClass('show-nav');
        navToggle.removeClass('active');
        nav.removeClass('show');
    });

    /* Header class on scroll
    ===============================*/

    let header = $('#header');
    let intro = $('#intro');
    let introH = intro.innerHeight();
    let headerH = header.innerHeight();
    let scrollTop = $(window).scrollTop();

    $(window).on('scroll resize', function() {
        headerScroll();
    });

    function headerScroll() {
        let introH = intro.innerHeight();
        let headerH = header.innerHeight();

        let scrollTop = $(this).scrollTop();

        if( scrollTop >= (introH - headerH) ) {
            header.addClass("header--white");
        } else {
            header.removeClass("header--white");
        }
    }

    /* Smooth Scroll to sections
    ===============================*/

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let scrollEl = $(this).data("scroll");
        let scrollElPos = $(scrollEl).offset().top;

        $("body").removeClass('show-nav');
        navToggle.removeClass('active');
        nav.removeClass('show');

        $("html, body").animate({
            scrollTop: scrollElPos - headerH
        }, 600)
    });

    /* ScrollSpy
    ===============================*/
    let windowH = $(window).height();

    scrollSpy(scrollTop);

    $(window).on("scroll", function() {
        let scrollTop = $(this).scrollTop();

        scrollSpy(scrollTop);
    });

    function scrollSpy(scrollTop) {
        $("[data-scrollspy]").each(function() {
            let $this = $(this);
            let sectionId = $this.data('scrollspy');
            let sectionOffset = $this.offset().top;
            sectionOffset = sectionOffset - (windowH * 0.33333);

            if(scrollTop >= sectionOffset) {
                $('#nav [data-scroll]').removeClass('active');
                $('#nav [data-scroll="' + sectionId + '"]').addClass("active");
            } else {
                $('#nav [data-scroll="' + sectionId + '"]').removeClass("active");
            }

            if(scrollTop == 0) {
                $('#nav [data-scroll]').removeClass('active');
            }
        });
    }

    /* Modal
    ===============================*/
    $('[data-modal]').on('click', function(event) {
        event.preventDefault();

        let modal = $(this).data('modal');

        $('body').addClass('no-scroll');
        $(modal).addClass('show');

         setTimeout(function() {
            $(modal).find('.modal__inner').css({
                transform: 'translateY(0)',
                opacity: '1'
            });
        }, 100);
    });

     $('[data-modal-close]').on('click', function(event) {
        event.preventDefault();
        let modal = $(this).parents('.modal');
        modalClose(modal);
    });

    $('.modal').on('click', function() {
        let modal = $(this);
        modalClose(modal);
    });

    $('.modal__inner').on('click', function(event) {
        event.stopPropagation();
    });

    function modalClose(modal) {
        $(modal).find('.modal__inner').css({
            transform: 'translateY(-40px)',
            opacity: '0'
        });

        setTimeout(function() {
            $('body').removeClass('no-scroll');
            modal.removeClass('show');
        }, 200);
    }

    /* Accordion
    ===============================*/
    $("[data-collapse]").on("click", function(event){
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass('active');
        $(blockId).slideToggle();
    });

    /* Slick slider https://kenwheeler.github.io/slick/
    ====================================*/

    /* Intro Slider */
    let introSlider = $("#introSlider");

    introSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 2000
    });

    /* Intro Slider */
    let productsSlider = $("#productsSlider");

    productsSlider.slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        dots: false,
        fade: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000
    });

    /* Aos.js https://github.com/michalsnik/aos
    ====================================*/

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 80, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


});
