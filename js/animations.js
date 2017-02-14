// set equal heights to all divs in row
$(function() {
    $('.fadeCard').matchHeight();
});
// toggle class of statNav
$(".loenzEye").on("click", function(){
  $("#statNav").toggleClass("clicked unClicked");
});
