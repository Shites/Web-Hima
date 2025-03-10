// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});

var swiper = new Swiper (".s1", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: { slidesPerView: 1, },
        520: { slidesPerView: 2 },
        950: { slidesPerView: 3 },
    },
});


var $content = $('.menu-content');

function showContent(type) {
  $content.hide().filter('.' + type).show();
  $content.filter(':visible').fadeOut(0, function() 
  {
  $content.filter('.' + type).fadeIn(600);
  });
}

$('.menu').on('click', '.menu-btn', function(e) {
  showContent(e.currentTarget.hash.slice(1));
  e.preventDefault();
}); 

// show struktur
showContent('pengurus');


//stay struktur
var header = document.getElementById("kgt-nav");
var btns = header.getElementsByClassName("agt-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("stay");
  current[0].className = current[0].className.replace(" stay", "");
  this.className += " stay";
  });
}

// show ks

var $contentKs = $('.menu-content-ks');

function showContentKs(type) {
  $contentKs.hide().filter('.' + type).show();
  $contentKs.filter(':visible').fadeOut(0, function() 
  {
  $contentKs.filter('.' + type).fadeIn(600);
  });
}

$('.menu-ks').on('click', '.menu-btn-ks', function(e) {
  showContentKs(e.currentTarget.hash.slice(1));
  e.preventDefault();
}); 

// show 'about' content only on page load (if you want)
showContentKs('ksp');



// stay ks
var header = document.getElementById("ks-nav");
var btns = header.getElementsByClassName("ks-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("stayKs");
  current[0].className = current[0].className.replace(" stayKs", "");
  this.className += " stayKs";
  });
}


var swiper = new Swiper (".s2", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    fade: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-paginationKs",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        
    },
});

var swiper = new Swiper (".s3", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    fade: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-paginationKsl",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        
    },
});

var swiper = new Swiper (".s4", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    fade: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-paginationKsui",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        
    },
});