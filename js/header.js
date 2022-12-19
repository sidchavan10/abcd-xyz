$(document).ready(function(){

    var prevScrollpos = window.pageYOffset;

    var headerDiv = document.querySelector("header");
    var headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;

    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos  || currentScrollPos < headerBottom){  
            headerDiv.style.top = "0";
        }
        else{
            headerDiv.style.top = "-230px";
        } 

        prevScrollpos = currentScrollPos;
    }

    $(".search_box input").focus(function() {
        $(".search_container").show();
    });

    $(".search_box input").focusout(function(e) {
        $(".search_container").hide();
    });

    $('.menu_accordion li span').click(function(){
        $(this).next(".menu_accordion_content").slideToggle();
        $(this).closest("li").siblings().find('.menu_accordion_content').slideUp();
    });

});