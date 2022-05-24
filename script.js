$(".start-button").click(function() {
    $(".title").fadeOut(1000);
    $(".firstImage").fadeOut(1000);
    $(".button").fadeOut(1000);
    $(".inside").delay(1000).fadeIn(1000);
    $(".button1").delay(1000).fadeIn(1000);
});
$(".inside").hide();
$(".button1").hide();
$(".room").hide();
$(".curtain").hide();
$(".guard").hide();
$(".winhint").hide();
$(".button4").hide();
$(".button5").hide();
$(".caught").hide();
$(".ucaught").hide();
$(".uwin").hide();
$(".button3").hide();
$(".R").hide();
$(".free").hide();
$(".free2").hide();

$(".button1").click(function() {
    $(".button1").fadeOut(1000);
    $(".room").delay(1000).fadeIn(1000);
    $(".button3").delay(1000).fadeIn(1000);
    $(".inside").fadeOut(1000);
});
$(".button3").click(function() {
    $(".button1").fadeOut(1000);
    $(".room").fadeOut(1000);
    $(".curtain").delay(1000).fadeIn(1000);
    $(".button3").fadeOut(1000);
	$(".winhint").delay(1000).fadeIn(1000);
    $(".button4").delay(1000).fadeIn(1000);
	$(".button5").delay(1000).fadeIn(1000);
});
$(".curtain").mouseenter(function() {
    $(".guard").show();
    $(".curtain").css("opacity", ".3");
});
$(".curtain").mouseleave(function() {
    $(".guard").hide();
    $(".curtain").css("opacity", "1");
});
$(".button4").click(function() {
	$(".caught").delay(1000).fadeIn(1000);
    $(".button4").fadeOut(1000);
	$(".button5").fadeOut(1000);
    $(".ucaught").delay(1000).fadeIn(1000);
    $(".curtain").fadeOut(1000);
    $(".winhint").fadeOut(1000);
    $(".R").delay(1000).fadeIn(1000);
});

$(".caught").dblclick(function() {	
    $(".R").fadeOut(1000);
    $(".caught").fadeOut(1000);
    $(".ucaught").fadeOut(1000);
    $(".free").delay(1000).fadeIn(1000);
    $(".free2").delay(1000).fadeIn(1000);
    $(".R").delay(1000).fadeIn(1000);
});

$(".button5").click(function() {
	$(".uwin").delay(1000).fadeIn(1000);
    $(".button4").fadeOut(1000);
	$(".button5").fadeOut(1000);
    $(".treasure").delay(1000).fadeIn(1000);
    $(".curtain").fadeOut(1000);
    $(".winhint").fadeOut(1000);
    $(".R").delay(1000).fadeIn(1000);
});

$(".R").click(function() {
	$(".button").delay(1000).fadeIn(1000);
    $(".R").fadeOut(1000);
    $(".treasure").fadeOut(1000);
    $(".uwin").fadeOut(1000);
    $(".title").delay(1000).fadeIn(1000);
    $(".firstImage").delay(1000).fadeIn(1000);
    $(".free").fadeOut(1000);
    $(".free2").fadeOut(1000);
});

$(".R").click(function() {
	$(".button").delay(1000).fadeIn(1000);
    $(".R").fadeOut(1000);
    $(".caught").fadeOut(1000);
    $(".ucaught").fadeOut(1000);
    $(".title").delay(1000).fadeIn(1000);
    $(".firstImage").delay(1000).fadeIn(1000);
});
