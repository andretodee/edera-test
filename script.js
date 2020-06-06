// FUNCTION FOR SLIDER USING SLICKJS
function slider(){
    $('.slider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  appendArrows: $('.carosel-arrow'),
  prevArrow:"<i class='fas fa-long-arrow-alt-left slick-arrow'></i>",
  nextArrow:"<i class='fas fa-long-arrow-alt-right slick-arrow active'></i>",
  responsive: [
    {
      breakpoint: 680,
      settings: {
        // arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
};

// FUNCTION FOR SLIDER USING SLICKJS
function sliderTwo(){
    $('.slider-two').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  appendArrows: $('.carosel-arrow-two'),
  prevArrow:"<i class='fas fa-long-arrow-alt-left slick-arrow'></i>",
  nextArrow:"<i class='fas fa-long-arrow-alt-right slick-arrow active'></i>",
  responsive: [
    {
      breakpoint: 680,
      settings: {
        // arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
};

// FUNCTION TO CHANGE THE ARROW AFTER SCROLL
function arrowScroll(){
  $(window).on('scroll', function(e) {
        st = $(this).scrollTop();
        if (st > 100) {
            $('.q-arrow').removeClass('active');
            $('.fa-long-arrow-alt-down').addClass('active');
        } else {
            $('.q-arrow').removeClass('active');
            $('.fa-long-arrow-alt-up').addClass('active');
        }
  });
};

// FUNCTION TO CHANGE THE ACTIVE CLASS ON CLICK
function tabActive(){
    $('.menu-it').click(function(){
        var selectedTab = $(this);
        $('.menu-it').removeClass('active');
        selectedTab.addClass('active');
    });
};

// FUNCTION TO CHANGE THE ACTIVE CLASS ON CLICK
function arrowActive(){
    $('.slick-arrow').click(function(){
        var selectedArrow = $(this);
        $('.slick-arrow').removeClass('active');
        selectedArrow.addClass('active');
    });
};

// FUNCTION TO OPEN AND CLOSE THE MENU FOR MOBILE
function desktopMenu(){
  $('.mat').click(function(){
      $('.drop-menu-desktop-wrapper').slideToggle();
  });
};

// FUNCTION TO CHANGE THE OPEN CLASS ON CLICK
function hamburgerOpen(){
    $('.hamburger-menu').click(function(){
        $('.h-line-one').toggleClass('open');
        $('.h-line-two').toggleClass('open');
        $('.h-line-three').toggleClass('open');
    });
};

// FUNCTION TO VIEW DROP-DOWN-MENU-MOBILE
function viewDropDownMain(){
    $('.hamburger-menu').click(function(){
        $('main,footer').toggle();
        $('.drop-down-menu-mobile').toggle();
    });
};

// FUNCTION TO VIEW DROP-DOWN-MATTRESS
function viewDropDownMattress(){
    $('.open-mat').click(function(){
        $('.drop-menu-mattress').toggle();
        $('.open-mat').toggleClass('opened');
    });
};

// FUNCTION THAT CALLS ALL OTHERS FUNCTIONS
function init(){
    slider();
    sliderTwo();
    desktopMenu();
    arrowScroll();
    tabActive();
    arrowActive();
    hamburgerOpen();
    viewDropDownMain();
    viewDropDownMattress();
};

// INIT FUNCTION CALLED INTO LOADED DOM
$(document).ready(init);
