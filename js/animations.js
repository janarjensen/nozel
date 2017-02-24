// set equal heights to all divs in row
$(function() {
    $('.fadeCard').matchHeight();
});

$(function() {
    $('.demoCard').matchHeight();
});

$(function() {
    $('.cloudCard').matchHeight();
});

$(function() {
    $('.contactCard').matchHeight();
});

$(function() {
    $('.introCard').matchHeight();
});

// toggle class of statNav
$(".loenzEye").click(function(){
  $("#statNav").toggleClass("clicked unClicked");
});

// // toggle class of statNav
// $(".loenzEye").on("click", function(){
//   $("#statNav").toggleClass("clicked unClicked");
// });
