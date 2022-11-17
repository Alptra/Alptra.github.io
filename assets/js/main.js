/*
	Strongly Typed by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {
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

</script>
// Fonction de défilement horizontal
// el est l'élément HTML qui contiendra le contenu défilant
// src est un tableau comprenant le chemin des images à faire défiler
// pas est le pas d'incrémentation du défilement (défaut 1px)
// tps est le temps entre deux incrémentations  (défaut 50ms)
function defilImgHrz(el,srcs,pas,tps) {
  if(typeof el=="string") { el = document.getElementById(el); }
  var tps = tps || 50;
  var pas = pas || 1;
  var imgs = [];
  var offset = 0;
  for(var i=0,l=srcs.length;i<l;i++) {
    var img = new Image();
    img.src = srcs[i];
    imgs.push(img);
    img.style.height=el.offsetHeight+"px";
    img.style.position = "absolute";
    img.style.left = offset+"px";
    el.appendChild(img);
    offset += img.offsetWidth;
  }
  var first = 0;
  var last = imgs.length-1;
  (function d() {
    for(var i=0,l=imgs.length;i<l;i++) {
      var left = parseInt(imgs[i].style.left,10);
      imgs[i].style.left = (left-pas)+"px";
      if(i==first && (left-pas+imgs[i].offsetWidth)<0) {
        imgs[i].style.left = 
        (parseInt(imgs[last].style.left,10)+imgs[last].offsetWidth-(i==0?pas:0))+"px";
	last = first++;
        if(first>imgs.length-1) { first = 0; }
      }
    }
    setTimeout(d,tps);
  })();
}
// Appel des deux fonctions de défilement au chargement de ma page .
  defilImgHrz('bandeau_horizontal',[
    "photos/partenaire/1.jpg",
    "photos/partenaire/1.jpg",
    "photos/partenaire/1.jpg"
  ]);
};
</script>
