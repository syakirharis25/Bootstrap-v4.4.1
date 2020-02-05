/** Sticky Navigation */

let navbar = $(".navbar");

$(window).scroll(function () {
    let oTop = $(".section-2").offset().top - window.innerHeight;
    console.log(oTop);
    if ($(window).scrollTop() > oTop) {
        navbar.addClass("sticky")
    } else {
        navbar.removeClass("sticky");
    }
});

// Conunter Animation

let nCount = function (selector) {
    $(selector).each(function () {

        $(this).animate({
            Counter: $(this).text()
        }, {
            duration: 4000
        })

    });
};