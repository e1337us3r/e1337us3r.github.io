
(function ($) {

	var $body = $('body');

	// Breakpoints.
	breakpoints({
		wide: ['1081px', '1680px'],
		normal: ['841px', '1080px'],
		narrow: ['737px', '840px'],
		mobile: [null, '736px']
	});

	// Mobile?
	if (browser.mobile)
		$body.addClass('is-scroll');


	// Scrolly.
	$('.scrolly-middle').scrolly({
		speed: 1000,
		anchor: 'middle'
	});

	$('.scrolly').scrolly({
		speed: 1000,
		offset: function () { return (breakpoints.active('<=mobile') ? 70 : 190); }
	});


	// Poptrox.
	$('.gallery').poptrox({
		useBodyOverflow: false,
		usePopupEasyClose: false,
		overlayColor: '#0a1919',
		overlayOpacity: 0.75,
		usePopupDefaultStyling: false,
		usePopupCaption: true,
		popupLoaderText: 'Loading...',
		windowMargin: 10,
		usePopupNav: true,
		popupWidth: '20em'
	});

})(jQuery);