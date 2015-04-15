$(window).load(function(){
	//стайлер селект
	//$('.bl-location__city, .bl-location__lang').styler();
	
	//слайдер на главной
	$('.bxslider').bxSlider({
		mode: 'horizontal',
		captions: true,
		// auto: true,
		// autoHover: true,
		// autoStart: true,
		pager: true,
		infiniteLoop: true,
		prevText: '',
		nextText: ''
	});
});