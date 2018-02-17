$(document).ready(function () {
	var scrollLink = $('.hero a');
	scrollLink.click(function (e) {
		e.preventDefault();
		$("html, body").stop().animate({
			scrollTop: $(this.hash).offset().top - 60
		}, 1000);
	});

	$(window).scroll(function () {
		//fixed navbar
		var scroll = $(window).scrollTop();
		if (scroll >= 50) {
			$("nav").addClass("fixed");
		} else {
			$("nav").removeClass("fixed");
		}
		//animated gallery -fade in on scroll
		$('.hidden-on-start').each(function () {
			var elementOffsetTop = $(this).offset().top - 600;
			if (scroll > elementOffsetTop) {
				$(this).addClass('visible');
			}
		});
		//active watching on navbar links
		var scrollbarLocation = $(this).scrollTop();
		scrollLink.each(function () {
			var sectionOffset = $(this.hash).offset().top - 60;
			if (sectionOffset <= scrollbarLocation) {
				$(this).parent().addClass('active');
				$(this).parent().siblings().removeClass('active');
			}
		});
	});




	var imagesArray = $('.tab-image img').toArray();

	function showImage(number) {
		var url = $(imagesArray[number]).attr('src');

		$('#modal').fadeIn('slow', function () {
			$(this).show();
		})
		$('#modal-image').attr('src', url);
		if (number >= imagesArray.length - 1) {
			$('#modal-next').hide();
		} else {
			$('#modal-next').data('toNumber', number + 1).show();
		}
		if (number <= 0) {
			$('#modal-prev').hide();
		} else {
			$('#modal-prev').data('toNumber', number - 1).show();
		}
	}

	$('#modal-next').click(function () {
		showImage($(this).data('toNumber'));
	});

	$('#modal-prev').click(function () {
		showImage($(this).data('toNumber'));
	});

	$('#modal-close').click(function () {
		$('#modal').fadeOut('slow', function () {
			$(this).hide();
		})
	})
	$('.tab-image').click(function (event) {
		event.preventDefault(); //to zapobiega przeniesienu na początek strony przy kliknieciu w lupe
		var clickedNumber = $(this).closest('.updates-tab').index();
		showImage(clickedNumber);
	});

	$('#seeMoreBtn').click(function (event) {
		event.preventDefault();
		$('#grid-to-show').toggleClass('displayed-grid');
		$('.js-parent-grid').slideToggle(500);

		var seeMore = $('#seeMoreBtn');

		if ($('#grid-to-show').hasClass('displayed-grid')) {
			seeMore.text('see less');
			$('.fa-angle-down').addClass('rotation');
		} else {
			seeMore.text('see more');
			$('.fa-angle-down').removeClass('rotation');
		}

	});
	//----otwarcie jednego z faq---------
	$('.faq-button, .faq-name').click(function (event) {
		event.preventDefault();
		var thisFaq = $(this).closest('.faq-item');
		
		if (thisFaq.hasClass('active')) {
			
			$('.faq-answer', thisFaq).slideToggle(function () {
				thisFaq.removeClass('active');

			});
		} else {
			
			thisFaq.addClass('active');
			$('.faq-answer', thisFaq).slideToggle();
		}
	});
});