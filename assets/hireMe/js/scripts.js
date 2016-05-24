$('.stupid-proof').hide();
$('.portfolio-wrapper').hide();
$('.blog-drop').hide();
$('.blog-wrapper').hide();
$(document).ready(function(){
	$('.portfolio-page').hide();
	var scrollTop = $(window).scrollTop();
	var navScroll = $('.main-slider').offset().top;
  	var parallaxScroll = $('.parallax').offset.top;
  	var portView = $('.show-box').offset.top;
  	var btTop = $('.show-box').scrollTop();
	$(window).scroll(function(){
		$('.point').each(function(i){
			var objectBottom = $(this).offset().top + $(this).outerHeight();
			var windowBottom = $(window).scrollTop() + $(window).height();
			if ( windowBottom > objectBottom) {
				$(this).animate({"opacity":"1"},300);
			}
		});
		$('.box').each(function(i){
			var objectBottom = $(this).offset().top + 100;
			var windowBottom = $(window).scrollTop() + $(window).height();
			if(windowBottom>objectBottom) {
				$(this).animate({"opacity":"1"},300);
			}
		});

		position = $(this).scrollTop();
		if (position > scrollTop){
			$('.about-me').addClass('about-scroll');
			$('.about-me').css('background-color','white')
			$('.logo').addClass('logo-scroll');
			$('.header-nav').addClass('header-nav-scroll');
			$('.nav-object-button').addClass('nav-object-scroll');
			$('.back-to-top').addClass('back-to-top-fade');
		} else {
			$('.about-me-button').removeClass('about-scroll');
			$('.logo').removeClass('logo-scroll');
			$('.header-nav').removeClass('header-nav-scroll');
			$('.nav-object-button').removeClass('nav-object-scroll');
			$('.back-to-top').removeClass('back-to-top-fade');
		}
		if (position > scrollTop && screen < 375){
			$('.about-me-button').addClass('about-scroll');
			$('.logo').addClass('logo-scroll');
			$('header').addClass('header-nav-scroll');
			$('.nav-object-button').addClass('nav-object-scroll');
			$('.back-to-top').addClass('back-to-top-fade');
		} else if(position < scrollTop && screen < 650) {
			$('.about-me-button').removeClass('about-scroll');
			$('.logo').removeClass('logo-scroll');
			$('.header').removeClass('header-nav-scroll');
			$('.nav-object-button').removeClass('nav-object-scroll');
			$('.back-to-top').removeClass('back-to-top-fade');
		}
	});
	$(function(){
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top - 80
	        }, 500);
	        return false;
	      }
	    }
	  });
	});
	if($(window).width()>376){
		$('.about-me').click(function(){
			$('.side-menu').animate({left: '+=45vh'});
		});
		$('.side-menu-close').click(function() {
			$('.side-menu').animate({left: '-=45vh'});
		});
	}
	$('#portfolio-one').click(function(){
		$('.stupid-proof').fadeIn();
		$('.portfolio-wrapper').slideDown();
	});
	$('.portfolio-close').click(function(){
		$('.stupid-proof').fadeOut();
		$('.portfolio-wrapper').slideUp();
	});
	$('.toggle-off-icon').click(function(){
		$('.toggle-off-icon').hide();
		$('.toggle-on-icon').css('opacity','1');
		$('.port-title').fadeOut();
		$('.portfolio-close').fadeOut();
		$('.description').fadeOut();
		$('.portfolio-prev').fadeOut();
		$('.portfolio-next').fadeOut();
		$('.details').fadeOut();
	});
	$('.toggle-on-icon').click(function(){
		$('.toggle-on-icon').css('opacity','0');
		$('.toggle-off-icon').show();
		$('.port-title').fadeIn();
		$('.portfolio-close').fadeIn();
		$('.description').fadeIn();
		$('.portfolio-prev').fadeIn();
		$('.portfolio-next').fadeIn();
		$('.details').fadeIn();
	});
	$('#blog-one').click(function(){
		$('.blog-drop').fadeIn();
		$('.blog-wrapper').slideDown();
	});
	$('.blog-close').click(function(){
		$('.blog-drop').fadeOut();
		$('.blog-wrapper').slideUp();
	});
	if($(window).width()<376){
		$('.about-me').click(function(){
			$('.side-menu').animate({left: '+=100%'});
		 });
		$('.side-menu-close').click(function() {
			$('.side-menu').animate({left: '-=100%'});
		});
		$('.logo').click(function(){
			$('.header-nav').slideToggle();
			$('header').toggleClass('mobile-header');
		});
	}
	$("#hire-me-form").validate({
		rules:{
			firstName:"required",
			lastName:"required",
			email:{
				required: true,
				email: true
			}
		} ,
		messages:{
			firstName:"Please enter your first name.",
			lastName:"Please enter your last name.",
			email:"Please enter a valid email address."
		}
	});
	function mailMe(form){
		Subject= "Potential Employer"
		location="derek.guzman777@gmail.com"
		document.testform.submit();
	}

});