/*
Name:           scripts.js
Written by:     Derek Guzman
Version:        1.0
*/

$(window).load(function() {
    $(".loader").fadeOut(0.5+"s");
});
$("html, body").animate({
    scrollTop: $("#home").offset().top
}, 1);
$(document).ready(function() {
    $(".about").animate({
        top: "105vh"
    }, 500, function() {});
    $(".work").animate({
        top: "185vh"
    }, 500, function() {});
    if ($(window).width() > 768) {
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
    if ($(window).width() <= 768 && $(window).width() > 425) {
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
    if ($(window).width() <= 425 && $(window).width() > 375) {
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
    if ($(window).width() <= 375 && $(window).width() > 320) {
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
    if ($(window).width() <= 320) {
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
    $(".homeOne").click(function() {
        $("html, body").animate({
            scrollTop: $('#home').offset().top
        }, 500);
    });
    $(".about").click(function() {
        $("html, body").animate({
            scrollTop: $('#about').offset().top
        }, 500);
    });
    $(".work").click(function() {
        $("html, body").animate({
            scrollTop: $('#work').offset().top
        }, 500);
    });
    $(".homeTwo").click(function() {
        $("html, body").animate({
            scrollTop: $('#home').offset().top
        }, 500);
    });
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
    $("#contactForm").validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                maxlength: 1000
            }
        },
        messages: {
            name: {
                required: "Don't forget your name"
            },
            email: {
                required: "Don't forget your email"
            },
            message: {
                required: "Actions are not stronger than words on the internet",
                maxlength: jQuery.format("I can't accept that novel")
            },
        },
        submitHandler: function(form) {
            $form = $(form);
            $container = $form.parent();
            w = $form.outerWidth();
            h = $form.outerHeight();
            $form.hide();
            $('#submitting', $container).width(w).height(h).fadeIn(500);
            $.ajax({
                type: "POST",
                url: $form.attr('action'),
                data: $form.serialize(),
                success: function(data) {
                    $('#submitting', $container).hide();
                    if(data == 'success'){
                        $('#submitted', $container).width(w).height(h).fadeIn(500);
                    }
                    else{
                        $('#errors', $container).html(data).show();
                        $form.show();
                    }
                }
            });
            return false;
        }
    });
});