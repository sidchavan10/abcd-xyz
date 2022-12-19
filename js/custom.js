$(document).ready(function(){

    //Hero Banner
    var swiper = new Swiper("#heroSlider", {
        // loop: true,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: true,
        // },
        navigation: {
            nextEl: ".hero_btn_next",
            prevEl: ".hero_btn_prev",
        },
    });

    //DCB Cards Slider
    var swiper = new Swiper("#dcbCardSlider", {
        // slidesPerView: 4,
        spaceBetween: 40,
        loop: true,
        navigation: {
            nextEl: ".dcb_card_next",
            prevEl: ".dcb_card_prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        },
    });

    if (window.matchMedia("(max-width: 991px)").matches){
        $(".footer_links h5").click(function() {
            $(this).next().slideToggle();
            $(this).toggleClass("rotate");
        });
    }

});