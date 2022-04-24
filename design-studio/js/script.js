$(".custom-btn").click(function() {
    $(".popups").toggleClass("active");
});

$(".popup__close").click(function() {
    $(".popups").removeClass("active");
});