var $window=$(window);

$(function(){
	new WOW().init();
});

AOS.init({
    duration: 600
});
    

$(document).ready(function(){
    $('.main-men-ul .nav-item .nav-link').click(function(){
       
        $('.main-men-ul .nav-item .nav-link').removeClass('active');
        $(this).addClass('active');
    })
})

$(document).ready(function(){
  $('.nav-large .nav-item .nav-link').click(function(){
     
      $('.nav-large .nav-item .nav-link').removeClass('active');
      $(this).addClass('active');
  })
})


$window.on('scroll',function(){
    if($window.scrollTop()>100){
        $("#header-menu").addClass('header-sticky');
    }else{
        $("#header-menu").removeClass('header-sticky');
    }
})


jQuery("#home-banner-slider").owlCarousel({
    autoplay: true,
    lazyLoad: true,
    loop: true,
    animateOut: 'fadeOut',
    margin: 20,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    dots: false,
    nav:true,
    navigation : true,
    responsive: {
      0: {
        items: 1,
 
      },
  
      600: {
        items: 1,
        
      },
  
      1024: {
        items: 1,
        
      },
  
      1366: {
        items: 1,   
	      
      }
    },
    navText: ['<span class="fas fa-chevron-left "></span>','<span class="fas fa-chevron-right "></span>'],
});

jQuery(".owl-carousel-tab-1").owlCarousel({
  autoplay: false,
  lazyLoad: true,
  loop: true,
  animateOut: 'fadeOut',
  margin: 20,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  dots: false,
  nav:true,
  navigation : true,
  responsive: {
    0: {
      items: 1,

    },

    600: {
      items: 1,
      
    },

    1024: {
      items: 1,
      
    },

    1366: {
      items: 1,   
      
    }
  },
  navText: ['<span class="fas fa-chevron-left "></span>','<span class="fas fa-chevron-right "></span>'],
});

jQuery("#award-carosuel").owlCarousel({
  autoplay: false,
  lazyLoad: true,
  loop: true,
  animateOut: 'fadeOut',
  margin: 10,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  dots: true,
  nav:false,
  navigation : true,
  responsive: {
    0: {
      items: 1,

    },

    600: {
      items: 2,
      
    },

    1024: {
      items: 3,
      
    },

    1366: {
      items: 3,   
      
    }
  },
  
});
$("#one").click(function(){
  document.getElementById("myText").placeholder = "Search your Products";
  $(this).addClass('active');
  $("#two").removeClass('active');
  $("#three").removeClass('active');
})
$("#two").click(function(){
  document.getElementById("myText").placeholder = "Search your Hospital";
  $(this).addClass('active');
  $("#one").removeClass('active');
  $("#three").removeClass('active');
})
$("#three").click(function(){
  document.getElementById("myText").placeholder = "Search your Branch";
  $(this).addClass('active');
  $("#two").removeClass('active');
  $("#one").removeClass('active');
})


function searchoption(){
  $('.search-trigger').on('click',function(e){
      e.preventDefault();
          $('.search-flyoverlay-area').addClass('is-visible');
  })
  $('.btn-close-search').on('click', function (e) {
      e.preventDefault(),
          $(this).parent('.search-flyoverlay-area').removeClass('is-visible')
  })
}
searchoption();

function hamgerbaroption(){
  $('.hamburger-trigger').on('click',function(e){
      e.preventDefault();
      $('.hamburger-area').addClass('is-visible')
  })
}

hamgerbaroption();

function hamburgerOption(params) {
  $('.hamburger-trigger').on('click', function (e) {
      e.preventDefault(),
          $('.hamburger-area').addClass('is-visible');
          $(this).addClass('open');
          
  })
  $('.btn-close-search').on('click', function (e) {
      e.preventDefault(),
          $(this).parent('.hamburger-area').removeClass('is-visible');
          $('.hamburger-trigger').removeClass('open');
  })
}
hamburgerOption();