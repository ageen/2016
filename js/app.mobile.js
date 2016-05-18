$(function(){
	if(!flux.browser.supportsTransitions)
		alert("Flux Slider requires a browser that supports CSS3 transitions");
		
	var f = new flux.slider('#slider', {
		pagination: false,
		controls: false,
		transitions: ['explode', 'tiles3d', 'bars3d', 'cube', 'turn'],
		autoplay: false
	});

	$('#slider').click(function(event){
		event.preventDefault();
		f.next();
	});
});
// animate init
var motion = new jsAnimManager();
//<![CDATA[
	$(window).load(function() { // makes sure the whole site is loaded
		$('#status').fadeOut(); // will first fade out the loading animation
		$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(350).css({'overflow':'visible'});
		$('#container').fadeIn();

		// text animate
		var text_animate = function(){
			srkl_object = document.getElementById("srkl");
			var srkl_anim = motion.createAnimObject("srkl");
			$(".srkl").fadeIn();
			srkl_anim.add({property: Prop.dimension, to: new Dim(200,43), duration:2000, 
				onComplete:function(){
					$('.lx').fadeIn();
					$('#srkl').jrumble({
						x: 0,
						y: 0,
						rotation: 5
					});
					$("#srkl").trigger('startRumble');
					setTimeout('$("#srkl").trigger("stopRumble")',1000)
					$("#rainbow>div").animate({width:'200px'},1000, function(){
						$("#logo").fadeIn();
						$("#logo>img").animate({width:'130px'},1000);
					});
					$("#lx").click(function(){
						starAnimate();
						meteorAnimate();
						$("#blink_small").fadeIn(1000);
					});
				}
			});	
		}

		// cloud inital
	    $("#far-clouds").clouds({
			fps: 30,
	        speed: 0.7,
	        dir: "left"
	    });
	    
		$("#near-clouds").clouds({
			fps: 30,
	        speed: 1,
	        dir: "left"
	    });
	    // pxs slider inital
		//var $pxs_container	= $('#pxs_container');
		//$pxs_container.parallaxSlider();
		
		// cloud object
		cloud1_object = document.getElementById("cloud1");
		cloud2_object = document.getElementById("cloud2");
		// cloud motion register
		motion.registerPosition("cloud1");
		motion.registerPosition("cloud2");
		// cloud set position
		cloud1_object.setPosition(-115,-100);
		cloud2_object.setPosition(30,-90);
		// cloud animate object
		var cloud1_anim = motion.createAnimObject("cloud1");
		var cloud2_anim = motion.createAnimObject("cloud2");
		// cloud animate apply
		cloud1_anim.add({property: Prop.position, to: new Pos(-110,-100), duration:6000, loop:-1, ease: jsAnimEase.bounceSmooth});
		cloud2_anim.add({ property: Prop.position, to: new Pos(35,-90), duration: 8000, loop:-1, ease: jsAnimEase.bounceSmooth});
		// cloud8
		$("#cloud8").clouds({
			fps: 30,
	        speed: 0.4,
	        dir: "left"
	    });
	    text_animate();	
	});
//]]>
// star animate
var starAnimate = function(){
	$("#star").fadeOut(3000, function(){
		$("#star").fadeIn(2000);
	})
	setTimeout("starAnimate()",3000);
}
// meteor animate
var meteorAnimate = function(){
	$("#meteor").fadeIn();
	meteor_object = document.getElementById("meteor");
	motion.registerPosition("meteor");
	meteor_object.setPosition(-600,-200);
	var meteor_anim = motion.createAnimObject("meteor");
	meteor_anim.add({property: Prop.position, to: new Pos(400,200), duration:2000, onComplete:function(){
		$("#meteor").fadeOut();	
	}});
}