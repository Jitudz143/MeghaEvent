$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 4,
        margin: 10,
        loop: true,
        nav: true,
        navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
        autoplay: true,
        autoplayTimeout: 3500,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                autoplayTimeout: 4000,
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    // hover effect on owl cauousel item
    $(".item-hover").hover(function () {
        $(this).css({
            'transform': 'translateY(-10px)',
            'transition': 'all .5s ease',
            'cursor': 'pointer',
            'box-shadow': '0 0 8px 1px rgb(213, 213, 213)'
        });
    },
        function () {
            $(this).css({
                'transform': '',
                'transition': 'all .5s ease',
                'box-shadow': ''
            });
        });

});
