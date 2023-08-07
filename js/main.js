const navLink = document.querySelector(".nav-link");
function toggleNavbar() {
    navLink.classList.toggle('mobile-menu');
};
$(".question").click(function () {
    $(".questions .answer").hide();
    $(this).siblings().fadeIn();
});


var swiper = new Swiper('.room .mySwiper', {

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        680: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 10,
        }
    }
})

var swiper = new Swiper('.gallery .mySwiper1', {
    slidesPerView: 1.1,
    spaceBetween: 10,
    breakpoints: {
        500: {
            slidesPerView: 2.2,
            spaceBetween: 10,
        },
        720: {
            slidesPerView: 2.2,
            spaceBetween: 10,
        },
        1000: {
            slidesPerView: 3.2,
            spaceBetween: 10,
        },

        1200: {
            slidesPerView: 4.3,
            spaceBetween: 10,
        }
    }
})

