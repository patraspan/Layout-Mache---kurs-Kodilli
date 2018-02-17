/*
var xxx = 3; //zmienna globalna, dostęp wszędzie

function name() {
	alert(123);

	var bbb = 4; //zmienna lokalna, dostęp wewnątrz tej funkcji i jej dzieci

	function abc() {
		console.log(bbb); // 4
	}
}

name();

console.log(bbb); //undefined

///////

var ccc; //= null;

function name2() {
	ccc = 4; //zmienna lokalna, dostęp wewnątrz tej funkcji i jej dzieci
}

name2();

console.log(ccc); //4

///////

var zmienna = function (a, b, c) { //alternatywna deklaracja funkcji
	alert(a + b + c);

	return 0;
};

(function () {
	//funkcja anonimowa

	var xyz = 3;
	//bezpieczny zasięg zmiennej 
})();

////////

//referencja vs zmienna

var nazwaZmiennej = 3;

var nazwaObiektu = {
	x: 1,
	y: 2
}

var zmienna2 = nazwaZmiennej;
zmienna2++;

console.log(nazwaZmiennej); // 3
console.log(zmienna2); // 4

var obiekt2 = nazwaObiektu;
obiekt2.x++;

console.log(nazwaObiektu.x); // 2
console.log(obiekt2.x); // 2





// console.log(nazwaObiektu.x);
// console.log(nazwaObiektu['y']);

*/


//scrolling effect
//1. scroll on click on navbar
//2.navbar change color on 
$(document).ready(function () {
	$('.hero a').click(function (e) {
		e.preventDefault();

		// var href = $(this).attr('href'); //attr to seter i geter
		// var sectionPosition = $(href).offset().top-60;

		$("html, body").stop().animate({ scrollTop: $(this.hash).offset().top-60 }, 1000);
	});
    
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $("nav").addClass("fixed");
        } else {
            $("nav").removeClass("fixed");
        }

        $('.hidden-on-start').each(function () {
			var elementOffsetTop = $(this).offset().top - 600;

			// var f = function () {};

			// $(this).click(f);
			// this.addEventListener('click', f, true);

			if (scroll > elementOffsetTop) {
				$(this).addClass('visible');
			}
		});
    });

    
    
    var imagesArray = $('.tab-image img').toArray();
    function showImage(number) {
		var url = $(imagesArray[number]).attr('src');

    	$('#modal').fadeIn('slow', function(){
		$(this).show();
		})
    	$('#modal-image').attr('src', url);
    	if (number >= imagesArray.length-1) {
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

	$('#modal-close').click(function(){
		$('#modal').fadeOut('slow', function(){
			$(this).hide();
		})
	})
	$('.tab-image').click(function (event) {
		event.preventDefault(); //to zapobiega przeniesienu na początek strony przy kliknieciu w lupe
		var clickedNumber = $(this).closest('.updates-tab').index();
		showImage(clickedNumber);
	});

	$('#seeMoreBtn').click(function(event){
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

// 	$('#seeMoreBtn').click(function(event){
// 		event.preventDefault();
// 				$('#grid-to-show').slideToggle(500).css('display', 'grid');

		



});








