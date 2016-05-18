$(document).ready(function() {
	$(".about").animate({
			top: "10vh"
		}, 1000, function() {});
	$(".work").animate({
			bottom: "10vh"
		}, 1000, function() {});
	if($(window).width() > 768){
		$(".titleOne").animate({
			opacity: 1,
			right: "40vw"
		}, 1000, function() {});
		$(".slash").animate({
			opacity: 1
		}, 1000, function() {});
		$(".titleTwo").animate({
			opacity: 1,
			right: "40vw"
		}, 1000, function() {});
	}
	if($(window).width() <=768 && $(window).width() > 425){
		$(".titleOne").animate({
			opacity: 1,
			right: "31vw"
		}, 1000, function() {});
		$(".slash").animate({
			opacity: 1
		}, 1000, function() {});
		$(".titleTwo").animate({
			opacity: 1,
			right: "31vw"
		}, 1000, function() {});
	}
	if($(window).width() <= 425 && $(window).width() > 375){
		$(".titleOne").animate({
			opacity: 1,
			right: "19vw"
		}, 1000, function() {});
		$(".slash").animate({
			opacity: 1
		}, 1000, function() {});
		$(".titleTwo").animate({
			opacity: 1,
			right: "19vw"
		}, 1000, function() {});
	}
	if($(window).width() <= 375 && $(window).width() > 320){
		$(".titleOne").animate({
			opacity: 1,
			right: "28vw"
		}, 1000, function() {});
		$(".slash").animate({
			opacity: 1
		}, 1000, function() {});
		$(".titleTwo").animate({
			opacity: 1,
			right: "28vw"
		}, 1000, function() {});
	}
	if($(window).width() <=320){
		$(".titleOne").animate({
			opacity: 1,
			right: "28vw"
		}, 1000, function() {});
		$(".slash").animate({
			opacity: 1
		}, 1000, function() {});
		$(".titleTwo").animate({
			opacity: 1,
			right: "28vw"
		}, 1000, function() {});
	}
});