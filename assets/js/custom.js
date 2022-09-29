$(document).ready(function(){
	$('.box1').circleProgress({
		value: .90,
		size: 120,
		fill: "#000"
	});
	$('.box2').circleProgress({
		value: .75,
		size: 120,
		fill: "#014d2c"
	});
	$('.box3').circleProgress({
		value: .80,
		size: 120,
		fill: "blue"
	});
	$('.box4').circleProgress({
		value: .65,
		size: 120,
		fill: "red"
	});

	$('h3').counterUp({
		delay: 50,
    	time: 1000
	});

	$('body').materialScrollTop();

	 new WOW().init();

	 $('nav').slicknav({
	 	"prependTo":"nav"
	 });
});