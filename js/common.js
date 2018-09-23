$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	jVForms.initialize();

	$('select').niceSelect();


	$(".popup-form").animated("bounceInDown", "fadeInDown");
	$('.tel-input').inputmask('+7(999)999-99-99');
		
	$(".accordeon dd").hide().prev().click(function() {
		$(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
		$(this).next().not(":visible").slideDown().prev().addClass("active");
	});


	$(".tab_item").not(":first").hide();
	$(".wrapper .tab").click(function() {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");
	
	$('.popup-gallery').magnificPopup({
						delegate: 'a',
						type: 'image',
						tLoading: 'Загрузка изображения #%curr%...',
						mainClass: 'mfp-fade mfp-img-mobile',
						gallery: {
							enabled: true,
							navigateByImgClick: true,
							preload: [0,1] // Will preload 0 - before current, and 1 after the current image
						},
						image: {
							tError: '<a href="%url%">Изображение #%curr%</a> не загружено.',
							titleSrc: function(item) {
								return '';
							}
						}
					});

	$(".main_mnu_button").click(function() {
			$("nav > ul").slideToggle();
		});


	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		mainClass: 'mfp-fade',
		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});



	$('.popup').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			fixedContentPos: true,
			mainClass: 'mfp-fade mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
			image: {
				verticalFit: true
			},
			zoom: {
				enabled: true,
				duration: 300 // don't foget to change the duration also in CSS
			}
		});


	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    autoplay:true,
	    nav:true,
	    navText:['<span><i class="fa fa-angle-left" aria-hidden="true"></i></span>','<span><i class="fa fa-angle-right" aria-hidden="true"></i></span>'],
	    autoplayTimeout:6000,
	    animateOut: 'fadeOut',
	    pagination: true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	$('.owl-carousel2').owlCarousel({
	    loop:true,
	    margin:10,
	    autoplay:true,
	    nav:true,
	    navText:['<span><i class="fa fa-angle-left" aria-hidden="true"></i></span>','<span><i class="fa fa-angle-right" aria-hidden="true"></i></span>'],
	    autoplayTimeout:6000,
	    animateOut: 'fadeOut',
	    pagination: true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	$('.owl-carousel3').owlCarousel({
	    loop:true,
	    margin:10,
	    autoplay:true,
	    nav:true,
	    navText:['<span><i class="fa fa-angle-left" aria-hidden="true"></i></span>','<span><i class="fa fa-angle-right" aria-hidden="true"></i></span>'],
	    autoplayTimeout:6000,
	    animateOut: 'fadeOut',
	    pagination: true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})
	
	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});



	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "assets/templates/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".done-w").fadeIn();
			setTimeout(function() {
				// Done Functions
				$(".done-w").fadeOut();
				$.magnificPopup.close();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});



//nav changes color while scrolling
let header = document.getElementsByTagName('header')[0];
function navColorChanger () {
    if (window.pageYOffset != 0 ) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}
navColorChanger();

//scroll menu
$('header a').click(function () {
    $('html, body').animate({scrollTop:$($(this).attr('data-scroll-to')).offset().top}, 1000)
});


let footerWrap = document.getElementsByClassName('footer-wrap')[0];
function getElementTopHeight(elem) {
    let box = elem.getBoundingClientRect();
    return box.top + pageYOffset;
}
function getElementBottomHeight(elem) {
    return getElementTopHeight(elem) + elem.offsetHeight;
}
function isInViewport(elem) {
    return pageYOffset+(document.documentElement.clientHeight*0.9) >= getElementTopHeight(elem);
}

function fadeInCurrent() {
    if(isInViewport(footerWrap)) {
        footerWrap.classList.add('in-bottom');
    }
}
fadeInCurrent();
window.onscroll = function () {fadeInCurrent(), navColorChanger()};