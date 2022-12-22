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
        if($(this).hasClass("active"))
        {
            $(this).removeClass("active");
        }
        else
        {
            $(".menu_accordion li span").removeClass("active");
            $(this).addClass("active");
        }
    });

    if (window.matchMedia("(max-width: 991px)").matches) {

        $('#topHeaderLinks').clone().appendTo('#mobileTopHeaderLinks');
        
        $('.menu_wrapper').on('click', function() {
            $(this).toggleClass('active');
            $('.hamburger_menu').toggleClass('animate');
            $("#secondaryNav").slideToggle();
        });

        $('.sub_nav .m_nav_arrow').on('click', function() {
            $(this).toggleClass('active');
            $(this).next().slideToggle();
        });

        $('#loginDD').clone().appendTo('#mobileLoginBox');

        $('.m_user a').on('click', function() {
            $(this).toggleClass('active');
            $('#mobileLoginBox .login_nav_dd').slideToggle();
        })

        $('#searchDD').clone().appendTo('#mobileSearchBox');

        $('.m_search a').on('click', function() {
            $(this).toggleClass('active');
            $('#mobileSearchBox .search_container').slideToggle();
        });

    }

});