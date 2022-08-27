$(function () {

	// HEADER

	let header = $("#header");
	let inner = $("#inner");
	let innerH = inner.innerHeight();
	let scrollPos = $(window).scrollTop();

	checkScroll(scrollPos, innerH);

	$(window).on("scroll load resize", function() {
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, innerH);
	});

	function checkScroll() {
		if (scrollPos > innerH) {
			header.addClass("fixed");

		} else {
			header.removeClass("fixed");

		}
	}

	// SMOOTH SCROLL

	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elementId = $(this).data('scroll');
		let elementOffset = $(elementId).offset().top;
		console.log(elementOffset);

		$("html, body").animate({
			scrollTop: elementOffset - 70
		}, 700);
	});  


});