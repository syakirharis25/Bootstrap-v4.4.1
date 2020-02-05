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