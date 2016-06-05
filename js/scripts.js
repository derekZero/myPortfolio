/*
Name:           scripts.js
Written by:     Derek Guzman
Version:        1.0
*/

$(window).load(function() {
	$("html, body").queue(function() {
		$("html, body").animate({
			scrollTop: $("#home").offset().top
		}, 1).dequeue();
	});
	$("#submitting").hide();
	$("#submitted").hide();
	$(".loader").fadeOut(0.5+"s");
});
$(document).ready(function() {
	particlesJS ({
	"particles": {
		"number": {
			"value": 80,
			"density": {
				"enable": true,
				"value_area": 800
			}
		},
		"color": {
			"value": "#00129d"
		},
		"shape": {
			"type": "circle",
			"stroke": {
				"width": 0,
				"color": "#000000"
			},
			"polygon": {
				"nb_sides": 5
			},
			"image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			}
		},
		"opacity": {
			"value": 0.5,
			"random": false,
			"anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
			}
		},
		"size": {
			"value": 3,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			}
		},
		"line_linked": {
			"enable": true,
			"distance": 150,
			"color": "#6b7cff",
			"opacity": 0.4,
			"width": 1
		},
		"move": {
			"enable": true,
			"speed": 6,
			"direction": "none",
			"random": false,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"detect_on": "window",
		"events": {
			"onhover": {
				"enable": true,
				"mode": "repulse"
			},
			"onclick": {
				"enable": true,
				"mode": "push"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 400,
				"line_linked": {
					"opacity": 1
				}
			},
			"bubble": {
				"distance": 400,
				"size": 40,
				"duration": 2,
				"opacity": 8,
				"speed": 3
			},
			"repulse": {
				"distance": 200,
				"duration": 0.4
			},
			"push": {
				"particles_nb": 4
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
});
	function intro () {
		$(".about").addClass("aboutDone");
		$(".work").addClass("workDone");
		$(".titleOne").addClass("titleOneIntro");
		$(".slash").addClass("slashIntro");
		$(".titleTwo").addClass("titleTwoIntro");
	}
	intro();
	$(".contact").click(function() {
		$(".contactForm").addClass("contactPop");
	});
	$(".contactForm p").click(function() {
		$(".contactForm").removeClass("contactPop");
	});
	/*$(".button").click(function() {
		$(".slide").queue(function() {
			$(".slide").animate({
				right: "90vw"
			}).dequeue();
		});
		var a = document.getElementsByClass("slide");
		var b = document.getElementsByClass("button").this();
		var target;
		for (var i = 0; i < a.length; i++) {
			if (a.indexOf(b[i]) !== -1 && a.indexOf(b[i]) === a[0]) {
				target = a[0].innterHTML;
				break;
			} else if (a.indexOf(b[i]) !== -1 && a.indexOf(b[i]) === a[1]) {
				target = a[1].innerHTML;
				break;
			} else if (a.indexOf(b[i]) !== -1 && a.indexOf(b[i]) === a[2]) {
				target = a[2].innerHTML;
				break;
			} else if (a.indexOf(b[i]) !== -1 && a.indexOf(b[i]) === a[3]) {
				target = a[3].innerHTML;
				break;
			}
		}
		target.animate({right: "0"});
	});*/
	/*function workSlide (slides, buttons) {
		$(".slide").queue(function() {
			$(".slide").animate({
				right: "90vw"
				}).dequeue();
			});
		var slides = document.getElementByClass("slide");
		var buttons = document.getElementByClass("button");
		if (slides.indexOf([0]) === buttons.indexOf(this)) {
			$(".slide:nth-child(1)").animate({
				right: "0"
			});
		}
	$(".button").click(function workSlide(slides, buttons));*/
	$(".button:nth-child(1)").click(function() {
		$(".slide").queue(function() {
			$(".slide").animate({
				right: "90vw"
			}).dequeue();
		});
		$(".slide:nth-child(1)").animate({
			right: "0"
		});
	});
	$(".button:nth-child(2)").click(function() {
		$(".slide").queue(function() {
			$(".slide").animate({
				right: "90vw"
			}).dequeue();
		});
		$(".slide:nth-child(2)").animate({
			right: "0"
		});
	});
	$(".button:nth-child(3)").click(function() {
		$(".slide").queue(function() {
			$(".slide").animate({
				right: "90vw"
			}).dequeue();
		});
		$(".slide:nth-child(3)").animate({
			right: "0"
		});
	});
	$(".button:nth-child(4)").click(function() {
		$(".slide").queue(function() {
			$(".slide").animate({
				right: "90vw"
			}).dequeue();
		});
		$(".slide:nth-child(4)").animate({
			right: "0"
		});
	});
	
	var colors = new Array(
		[62,35,255],
		[60,255,60],
		[255,35,98],
		[45,175,230],
		[255,0,255],
		[255,128,0]);

	var step = 0;
	//color table indices for: 
	// current color left
	// next color left
	// current color right
	// next color right
	var colorIndices = [0,1,2,3];

	//transition speed
	var gradientSpeed = 0.002;

	function updateGradient()
	{
		if ( $===undefined ) return;
  
	var c0_0 = colors[colorIndices[0]];
	var c0_1 = colors[colorIndices[1]];
	var c1_0 = colors[colorIndices[2]];
	var c1_1 = colors[colorIndices[3]];

	var istep = 1 - step;
	var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
	var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
	var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
	var color1 = "rgb("+r1+","+g1+","+b1+")";

	var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
	var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
	var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
	var color2 = "rgb("+r2+","+g2+","+b2+")";

	$('.slide:nth-child(2)').css({
		background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
		background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

		step += gradientSpeed;
		if ( step >= 1 )
		{
			step %= 1;
			colorIndices[0] = colorIndices[1];
			colorIndices[2] = colorIndices[3];
			
			//pick two new target color indices
			//do not pick the same as the current one
			colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
			colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
		}
	}
	setInterval(updateGradient,10);
	$(".hubClick:nth-child(1)").click(function() {
		$(".hub").children().queue(function() {
			$(this).animate({
				top: "80vh"
			}).dequeue();
		});
		$(".html").animate({
			top: "15vh"
		});
	});
	$(".hubClick:nth-child(2)").click(function() {
		$(".hub").children().queue(function() {
			$(this).animate({
				top: "80vh"
			}).dequeue();
		});
		$(".css").animate({
			top: "15vh"
		});
	});
	$(".hubClick:nth-child(3)").click(function() {
		$(".hub").children().queue(function() {
			$(this).animate({
				top: "80vh"
			}).dequeue();
		});
		$(".js").animate({
			top: "15vh"
		});
	});
	$('a[href*=#]').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
			if ($target.length) {
				var targetOffset = $target.offset().top;
				$('html,body')
				.animate({scrollTop: targetOffset}, 500);
				return false;
			}
		}
	});
	$("#contactForm").validate({
			rules:{
				name:"required",
				email:{
					required: true,
					email: true
				}
			} ,
			messages:{
				name:"Don't forget your name.",
				email:"Don't forget your email."
			}
		});
	$("form").submit(function() {
		this.validate({
			rules:{
				name:"required",
				email:{
					required: true,
					email: true
				}
			} ,
			messages:{
				name:"Don't forget your name.",
				email:"Don't forget your email."
			}
		}).ajax({
			method: "POST",
			url: "../php/sendEmail.php",
			dataType: "php",
			data: {name:"", email:"",phone:"",skype:"",message:""}
		}).ajaxStart(function() {
			$('#submitting').css('opacity', '1');
		}).done(function() {
			$(".submit").css({"color":"rgba(255, 255, 255, 0"}, 300);
			$('#submitted').css('opacity', '1');
		}).error(function() {
			$("#submitted").css({"opacity":"0"}, 300);
			$('#contactForm label.error').css('opacity', '1');
		}).post($(this).attr("action"), $(this).serialize());
	});
	/*function send() {
		$.ajax({
			url:'',
			complete: function (response) {
				$(".submit").css.queue({"color":"rgba(255, 255, 255, 0"}, 300).dequeue();
				$('#submitted').css('opacity', '1');
			},
			error: function () {
				$("#submitted").css.queue({"opacity":"0"}, 300).dequeue();
				$('#contactForm label.error').css('opacity', '1');
			}
		});
		return false;
	}
	if ($("#contactForm").validate() === true && $(".submit").click() === true) {
		send();
	} else {
		return false;
	}*/
	/*validate: function() {
		rules:{
			name:"required",
			email:{
				required: true,
				email: true
			}
		} ,
		messages:{
			name:"Please enter your first name.",
			email:"Please enter a valid email address."
		}
	}*/
	/*var send = {
		submitMethod: function() {
			form.ajax({
				validate: function() {
					rules:{
						name:"required",
						email:{
							required: true,
							email: true
						}
					} ,
					messages:{
						name:"Please enter your first name.",
						email:"Please enter a valid email address."
					}
				}
				type: "POST",
				url:'emailForm.php',
				serialize: function () {},
				start: function () {
					$('#submitting').css('opacity', '1');
				},
				success: function (response) {
					$('#submitted').css('opacity', '1');
				},
				error: function () {
					$('#errors').html('Woops! Let\'s try that again.' );
				}
			});
		}
	}
	$(".submit").click(function() {
		form.send();
	});*/

	/*function emailForm(form) {
		emailForm.prototype.send = function() {
			form.serialize.queue();
			form.validate({
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
			}).dequeue();
			form.ajax({
				type: "POST",
				url:'emailForm.php',
				start: function () {
					$('#submitting').css('opacity', '1');
				},
				success: function (response) {
					$('#submitted').css('opacity', '1');
				},
				error: function () {
					$('#errors').html('Woops! Let\'s try that again.' );
				}
			});
		}
	}*/

	/*var send = {
		submitForm: function() {
			form = function(form) {
			this.form = form;
		}
		form.serialize.queue();
		form.validate({
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
		}).dequeue();
		form.ajax({
			type: "POST",
			url:'emailForm.php',
			start: function () {
				$('#submitting').css('opacity', '1');
			},
			success: function (response) {
				$('#submitted').css('opacity', '1');
			},
			error: function () {
				$('#errors').html('Woops! Let\'s try that again.' );
			}
		});
		}
	}*/
	/*var form = $("form");
	var form.submitMethod() {
		submitMethod: function() {
			this.validate.queue();
			this.ajax().dequeue();
		}
	}
	submitMethod: function () {
		$form.validate({
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
		$form.ajax ({
			type: "POST",
			url:'myAjax.php',
			data: $form.serialize(),
			start: function () {
				$('#submitting').css('opacity', '1');
			},
			success: function (response) {
				$('#submitted').css('opacity', '1');
			},
			error: function () {
				$('#errors').html('Woops! Let\'s try that again.' );
			}
		});
		return false;
	}
	$(".submit").click(function() {
		form.submitMethod();
	});*/
});