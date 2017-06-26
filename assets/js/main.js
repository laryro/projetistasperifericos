

$(function () {

	$('.menu-toggle').on('click', function(event) {
		event.preventDefault();

		$('body').toggleClass('open');
	});

	$('.menu-itens a').on('click', function (event) {
		event.preventDefault();
		var hash = $(this).attr('href');

		$('body').removeClass('open');

		$('html, body').stop().animate({
			scrollTop: $(hash).offset().top
		}, 600, function(){
			window.location.hash = hash;
		});
	});
    
    var initialPos = $(window).scrollTop();
    if (initialPos >= $('#projetos').offset().top - 100) {
        $('body').addClass('fixed');
    } else {
        $('body').removeClass('fixed');
    }
    
    setTimeout(function() {
        if (!!location.hash && location.hash !== "") {
            $('html, body').animate({
                scrollTop: $(location.hash).offset().top
            }, 600);
        }
    }, 500);

    $(window).on('scroll', function(event) {
        var scroll = $(window).scrollTop();

        if (scroll >= $('#projetos').offset().top - 100) {
            $('body').addClass('fixed');
        } else {
            $('body').removeClass('fixed');
        }
    });

    // init the validator
    // validator files are included in the download package
    // otherwise download from http://1000hz.github.io/bootstrap-validator

    $('#contact-form').validator();


    // when the form is submitted
    $('#contact-form').on('submit', function (e) {

        // if the validator does not prevent form submit
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            // POST values in the background the the script URL
            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    // data = JSON object that contact.php returns

                    // we recieve the type of the message: success x danger and apply it to the 
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    // let's compose Bootstrap alert box HTML
                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    
                    // If we have messageAlert and messageText
                    if (messageAlert && messageText) {
                        // inject the alert to .messages div in our form
                        $('#contact-form').find('.messages').html(alertBox);
                        // empty the form
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });

    var feed = new Instafeed({ 
		get: 'user', 
		userId: '4204114729', 
		accessToken: '4204114729.1677ed0.1b275ac035254427bcc073596a9f8372',
		sortBy: 'most-recent', 
		limit: '12',
		template: '<div class="col-sm-3 col-xs-6 instagram-image"><a href="{{link}}"><img class="img-responsive" src="{{image}}" /></a></div>',
		resolution: 'standard_resolution'
	}); 
	feed.run();
});