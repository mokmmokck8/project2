$(document).ready(function () {
    //click -> scroll
    scrollTo('#toPD', '.product-description');
    scrollTo('#toPP', '.paid-plan');
    scrollTo('#toDR', '.designer-road');
});

//click for scrolling
var scrollTo = function (selector, destination) {
    $(selector).click(function () {
        $('html,body').animate({ scrollTop: $(destination).offset().top }, 500);
    });
};
