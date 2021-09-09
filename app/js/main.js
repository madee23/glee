$(function () {
	// Слайдер
	$('.main__slider').slick({
		dots: true,
		arrows: false,
		// fade: true,
		// autoplay: true,
		// autoplaySpeed: 2000
	})
	// Фильтр
	var mixer = mixitup('.products__content', {});
});