/*
Name:			scripts.js
Written by:		Derek Guzman
Version:		1.0
*/

$body = $("body");

$(document).on({
	ajaxStart: function() {$body.addClass("loading");},
	ajaxStop: function() {$body.removeClass("loading");}
});

$("html, body").animate({scrollTop: $("#home").offset().top}, 1);
$(document).ready(function() {
	$(".about").animate({
			top: "110vh"
		}, 500, function() {});
	$(".work").animate({
			top: "185vh"
		}, 500, function() {});
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
	$(".homeOne").click(function(){
		$("html, body").animate({
			scrollTop: $('#home').offset().top
		}, 1000);
	});
	$(".about").click(function(){
		$("html, body").animate({
			scrollTop: $('#about').offset().top
		}, 1000);
	});
	$(".work").click(function(){
		$("html, body").animate({
			scrollTop: $('#work').offset().top
		}, 1000);
	});
	$(".homeTwo").click(function(){
		$("html, body").animate({
			scrollTop: $('#home').offset().top
		}, 1000);
	});
	$(".button:nth-child(1)").click(function(){
		$(".slide").queue(function(){
			$(".slide").animate({right:"90vw"}).dequeue();
		});
		$(".slide:nth-child(1)").animate({right:"0"});
	});
	$(".button:nth-child(2)").click(function(){
		$(".slide").queue(function(){
			$(".slide").animate({right:"90vw"}).dequeue();
		});
		$(".slide:nth-child(2)").animate({right:"0"});
	});
	$(".button:nth-child(3)").click(function(){
		$(".slide").queue(function(){
			$(".slide").animate({right:"90vw"}).dequeue();
		});
		$(".slide:nth-child(3)").animate({right:"0"});
	});
	$(".button:nth-child(4)").click(function(){
		$(".slide").queue(function(){
			$(".slide").animate({right:"90vw"}).dequeue();
		});
		$(".slide:nth-child(4)").animate({right:"0"});
	});
});