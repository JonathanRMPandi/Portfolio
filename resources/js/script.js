$(document).ready(function(){
    $('.menu-icon').click(function(){
        $('.mobile-nav ul').slideDown();
    });
    $('.menu-close-icon, .mobile-nav ul a').click(function(){
        $('.mobile-nav ul').slideUp();
    });
});