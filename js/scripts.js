/*
Name:			scripts.js
Written by:		Derek Guzman
Version:		1.0
*/

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
});