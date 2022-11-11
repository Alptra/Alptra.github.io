/*
	Strongly Typed by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {
	
	// Fade and friction settings below

var $window = $(window);
var scrollFade = function ($element, friction, offset) {
  friction  = (friction  === undefined)? 0.5 : friction;
  offset = (offset === undefined)? 100 : offset;

  var parentHeight = $element.parent().outerHeight() * 0.5;
  var previousOpacity = Infinity;

  $window.scroll(function() {
    var scrollTop = Math.max(0, $window.scrollTop())
      , yOffset   = ($element.outerHeight() * -0.5) + scrollTop * friction
      , opacity   = 1 - (scrollTop / parentHeight - (parentHeight * offset))

    if (opacity < 0 && previousOpacity < 0) return;

    $element.css({
      transform: 'translate3d(0px,'+ yOffset +'px, 0)',
      opacity: opacity
    });

    previousOpacity = opacity;
  });
}

scrollFade($('.fade-scroll')
  , 0.5  // Friction (0 ~ 1): lower = none
  , 0    // Fade duration (0 ~ 1): lower = longer
);
	
const callback = function (entries) {
  entries.forEach((entry) => {
    console.log(entry);

    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fadeIn");
    } else {
      entry.target.classList.remove("animate-fadeIn");
    }
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".js-show-on-scroll");
targets.forEach(function (target) {
  target.classList.add("opacity-0");
  observer.observe(target);
});	
	
	var	$window = $(window),
		$body = $('body');

	// Wrap every letter in a span
	var textWrapper = document.querySelector('.ml6 .letters');
	textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

	anime.timeline({loop: true})
  		.add({
    			targets: '.ml6 .letter',
    			translateY: ["1.1em", 0],
    			translateZ: 0,
    			duration: 750,
    			delay: (el, i) => 50 * i
  		}).add({
    			targets: '.ml6',
    			opacity: 0,
    			duration: 0,
    			easing: "",
    			delay: 1000
  		});
	
	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			hoverDelay: 150,
			hideDelay: 350
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);
