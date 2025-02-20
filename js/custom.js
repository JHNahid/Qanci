$(document).ready(function($){

    // menu ====
    $(".menu").sticky({topSpacing:0});

    // Logo smooth infinite scrolling ====
    const track = document.querySelector('.logo-track');
    const logos = track.innerHTML;
    track.innerHTML += logos;

    // Work slider =====
    $('.work-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoWidth:true,
        dots: false,
        autoplay:true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        navText: ["<i class='bi bi-caret-left-fill'>", "<i class='bi bi-caret-right-fill'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
});




	