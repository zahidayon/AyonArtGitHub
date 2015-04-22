$(function(){
var width = 1280;
var animationSpeed = 2000;
var pause = 5000;
var currentSlide=1;

var $slider = $('#slider');
var $slideContainer=$slider.find('.slides');
var $slides = $slideContainer.find('.slide');

var interval;
function startSlider(){
	interval = setInterval(function(){
	$slideContainer.animate({'margin-left':'-='+width},animationSpeed,
		function(){
			currentSlide++;
			if(currentSlide === $slides.length)
			{
				 currentSlide=1;
				 $slideContainer.css('margin-left',0);
			}
	
	});
},pause);
}
function stopSlider(){
	clearInterval(interval);
}
$slider.on('mouseover', stopSlider).on('mouseout', startSlider);
startSlider();
});