(function ($) {
	var $window = $(window), $body = $('body'), settings = { parallax: !0, parallaxFactor: 10 }; breakpoints({ wide: ['1081px', '1680px'], normal: ['841px', '1080px'], narrow: ['737px', '840px'], mobile: [null, '736px'] }); if (browser.mobile)
		$body.addClass('is-scroll'); window.setTimeout(function () { $body.removeClass('is-preload') }, 100); $('.scrolly-middle').scrolly({ speed: 1000, anchor: 'middle' }); $('.scrolly').scrolly({ speed: 1000, offset: function () { return (breakpoints.active('<=mobile') ? 70 : 190) } }); $('.gallery').poptrox({ useBodyOverflow: !1, usePopupEasyClose: !1, overlayColor: '#0a1919', overlayOpacity: 0.75, usePopupDefaultStyling: !1, usePopupCaption: !0, popupLoaderText: 'Loading...', windowMargin: 10, usePopupNav: !0, popupWidth: '20em' })
})(jQuery)