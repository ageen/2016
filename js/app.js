//<![CDATA[
	$(window).load(function() { // makes sure the whole site is loaded
		$('#status').fadeOut(); // will first fade out the loading animation
		$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
		$('body').delay(350).css({'overflow':'visible'});
		$('#container').fadeIn();
		// variables
		// animate init
		var motion = new jsAnimManager();

		// Cookies
		var setCookie = function(name, value, days) {
		    var expires;
		    if (days) {
		        var date = new Date();
		        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		        expires = "; expires=" + date.toGMTString();
		    }
		    else {
		        expires = "";
		    }
		    document.cookie = name + "=" + value + expires + "; path=/";
		}
		var getCookie = function(name) {
		    if (document.cookie.length > 0) {
		        c_start = document.cookie.indexOf(name + "=");
		        if (c_start != -1) {
		            c_start = c_start + name.length + 1;
		            c_end = document.cookie.indexOf(";", c_start);
		            if (c_end == -1) {
		                c_end = document.cookie.length;
		            }
		            return unescape(document.cookie.substring(c_start, c_end));
		        }else{
		            return false;
		        }
		    }else{
		        return false;
		    }
		}
		var setSessionStorage = function(name, value){
		    sessionStorage.setItem(name, value);
		}
		var setLocalStorage = function(name, value){
		    localStorage.setItem(name, value);
		}
		var getGlobalVal = function(name){
		    if(getCookie(name)){
		        return getCookie(name);
		    }else if(sessionStorage.getItem(name)){
		        return sessionStorage.getItem(name);
		    }else if(localStorage.getItem(name)){
		        return localStorage.getItem(name);
		    }else{
		        return false;
		    }
		}

		// IE Version
		var getBrowserVersion = function(){
			var userAgent = navigator.userAgent.toLowerCase();
			if(userAgent.match(/msie ([\d.]+)/)!=null){
				//ie6--ie9
				uaMatch = userAgent.match(/msie ([\d.]+)/);
				return 'IE'+uaMatch[1];
			}else if(userAgent.match(/(trident)\/([\w.]+)/)){
				uaMatch = userAgent.match(/trident\/([\w.]+)/);
				switch (uaMatch[1]){
					case "4.0": return "IE8" ;break;
					case "5.0": return "IE9" ;break;
					case "6.0": return "IE10";break;
					case "7.0": return "IE11";break;
					default:return "undefined";
				}
			}
			return "undefined";
		}
		var isLessIENine = function(){
			if(getBrowserVersion() == "IE9.0"||getBrowserVersion() == "IE9"||getBrowserVersion() == "IE10.0"||getBrowserVersion() == "IE10"||getBrowserVersion() == "IE11"||getBrowserVersion() === "undefined"){
				return false;
			}else{
				return true;
			}
		}

		// text animate
		var text_animate = function(){
			srkl_object = document.getElementById("srkl");
			var srkl_anim = motion.createAnimObject("srkl");
			$(".srkl").fadeIn();
			srkl_anim.add({property: Prop.dimension, to: new Dim(376,80), duration:2000, 
				onComplete:function(){
					$('.lx').fadeIn();
					$('#srkl').jrumble({
						x: 0,
						y: 0,
						rotation: 5
					});
					$("#srkl").trigger('startRumble');
					setTimeout('$("#srkl").trigger("stopRumble")',1000)
					$('#lx').hover(function(){
						$("#srkl").trigger('startRumble');
					}, function(){
						$("#srkl").trigger('stopRumble');
					});
					$("#rainbow>div").animate({width:'561px'},1000, function(){
						$("#logo").fadeIn();
						$("#logo>img").animate({width:'288px'},1000);
					});
					$("#lx").click(function(){
						pistillAnimate();
						meteorAnimate();
						$("#blink_small").fadeIn(1000, function(){
							$("#almond_superman_right").fadeIn(function(){
								$("#almond_superman_right>img").hover(function(){
									$("#chat_right").fadeIn();
								},function(){
									$("#chat_right").fadeOut();	
								});
							});
							$("#almond_superman_left").fadeIn(function(){
								$("#almond_superman_left>img").hover(function(){
									$("#chat_left").fadeIn();
								},function(){
									$("#chat_left").fadeOut();	
								});
							});
							$("#blink_small").click(function(){
								blinkAnimate();
							});
							cloudAnimate();
						});
						if(isLessIENine()){
							return false;
						}
						leavesFloat();
					});
				}
			});	
		}

		// pistill animate
		var pistillAnimate = function(){
			// pistill animate
			$('#pistill').jrumble({
				x: 0,
				y: 0,
				rotation: 360,
				speed: 200
			});
			$("#pistill").trigger('startRumble');
			setTimeout('$("#pistill").trigger("stopRumble")',3000)
			pistill_object = document.getElementById("pistill");
			var pistill_anim = motion.createAnimObject("pistill");
			pistill_anim.add({property: Prop.dimension, to: new Dim(58,56), duration:2000})
		}

		// star animate
		var starAnimate = function(){
			// pistill animate
			$('#star').jrumble({
				x: 0,
				y: 0,
				rotation: 360,
				speed: 1000
			});
			$("#star").trigger('startRumble');
			$('#star').fadeOut();
			setTimeout("$('#star').fadeIn()",300);	
		}

		// meteor animate
		var meteorAnimate = function(){
			$("#meteor").fadeIn();
			meteor_object = document.getElementById("meteor");
			motion.registerPosition("meteor");
			meteor_object.setPosition(-600,0);
			var meteor_anim = motion.createAnimObject("meteor");
			meteor_anim.add({property: Prop.position, to: new Pos(550,500), duration:2000, 
				onComplete:function(){
					$("#meteor").fadeOut();
					starAnimate();
				}
			});
		}

		// blink amimate
		var blinkAnimate = function(){
			$("#shadow_cloak").fadeIn();
			blink_large_object = document.getElementById("blink_large");
			var blink_large_anim = motion.createAnimObject("blink_large");
			$(".blink_large").fadeIn();
			blink_large_anim.add({property: Prop.dimension, to: new Dim(244,309), duration:1000});
			$("#shadow_cloak").click(function(){
				$("#blink_large").fadeOut();
				$("#shadow_cloak").fadeOut();
			});
			$(document).keyup(function(e){
			    if (e.keyCode == 27){
			        $("#blink_large").fadeOut();
					$("#shadow_cloak").fadeOut();
			    }
			})
		}

		// cloud animate
		var cloudAnimate = function(){
			$("#cloud_right").fadeIn(2000);
			$("#cloud_left").fadeIn(2000);
			cloud_left_object = document.getElementById("cloud_left");
			cloud_right_object = document.getElementById("cloud_right");
			// cloud motion register
			motion.registerPosition("cloud_left");
			motion.registerPosition("cloud_right");
			// cloud set position
			cloud_left_object.setPosition(-280,190);
			cloud_right_object.setPosition(280,190);
			// cloud animate object
			var cloud_left_anim = motion.createAnimObject("cloud_left");
			var cloud_right_anim = motion.createAnimObject("cloud_right");
			// cloud animate apply
			cloud_left_anim.add({property: Prop.position, to: new Pos(-290,190), duration:2000, loop:-1, ease: jsAnimEase.bounceSmooth});
			cloud_right_anim.add({property: Prop.position, to: new Pos(270,190), duration:2000, loop:-1, ease: jsAnimEase.bounceSmooth});			
		}

		// leafs float
		var leavesFloat = function(){
			$.AutomLeafStart({
				leafsfolder:"images/leafs/",
				howmanyimgsare:11,
				initialleafs:11,
				maxYposition:-10,
				multiplyclick:true,
				multiplynumber:2,
				infinite:true,
				fallingsequence:5000
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
		cloud3_object = document.getElementById("cloud3");
		cloud4_object = document.getElementById("cloud4");
		cloud5_object = document.getElementById("cloud5");
		cloud6_object = document.getElementById("cloud6");
		cloud7_object = document.getElementById("cloud7");
		// cloud motion register
		motion.registerPosition("cloud1");
		motion.registerPosition("cloud2");
		motion.registerPosition("cloud3");
		motion.registerPosition("cloud4");
		motion.registerPosition("cloud5");
		motion.registerPosition("cloud6");
		motion.registerPosition("cloud7");
		// cloud set position
		cloud1_object.setPosition(-290,-20);
		cloud2_object.setPosition(-270,-25);
		cloud3_object.setPosition(-290,-50);
		cloud4_object.setPosition(-310,-34);
		cloud5_object.setPosition(-120,-24);
		cloud6_object.setPosition(-75,-54);
		cloud7_object.setPosition(-60,-65);
		// cloud animate object
		var cloud1_anim = motion.createAnimObject("cloud1");
		var cloud2_anim = motion.createAnimObject("cloud2");
		var cloud3_anim = motion.createAnimObject("cloud3");
		var cloud4_anim = motion.createAnimObject("cloud4");
		var cloud5_anim = motion.createAnimObject("cloud5");
		var cloud6_anim = motion.createAnimObject("cloud6");
		var cloud7_anim = motion.createAnimObject("cloud7");
		// cloud animate apply
		cloud1_anim.add({property: Prop.position, to: new Pos(-285,-20), duration:6000, loop:-1, ease: jsAnimEase.bounceSmooth});
		cloud2_anim.add({ property: Prop.position, to: new Pos(-270,-35), duration: 8000, loop:-1, ease: jsAnimEase.bounceSmooth});
		cloud3_anim.add({ property: Prop.position, to: new Pos(-270,-50), duration: 5000, loop:-1, ease: jsAnimEase.bounceSmooth});
		cloud4_anim.add({ property: Prop.position, to: new Pos(-300,-34), duration: 4000, loop:-1, ease: jsAnimEase.bounceSmooth});
		cloud5_anim.add({ property: Prop.position, to: new Pos(-130,-24), duration: 4000, loop:-1, ease: jsAnimEase.bounceSmooth});
		cloud6_anim.add({ property: Prop.position, to: new Pos(-85,-54), duration: 5000, loop:-1, ease: jsAnimEase.bounceSmooth});
		cloud7_anim.add({ property: Prop.position, to: new Pos(10,-65), duration: 12000, loop:-1, ease: jsAnimEase.bounceSmooth});
		// cloud8
		$("#cloud8").clouds({
			fps: 30,
	        speed: 0.4,
	        dir: "left"
	    });
	    // balloon object
	    balloon1_object = document.getElementById("balloon1");
		balloon2_object = document.getElementById("balloon2");
		balloon3_object = document.getElementById("balloon3");
		balloon4_object = document.getElementById("balloon4");	    
	    // balloon motion register
		motion.registerPosition("balloon1");
		motion.registerPosition("balloon2");
		motion.registerPosition("balloon3");
		motion.registerPosition("balloon4");
		if(!getGlobalVal('visited')){
			// balloon set position
			balloon1_object.setPosition(0,500);
			balloon2_object.setPosition(0,600);
			balloon3_object.setPosition(0,700);
			balloon4_object.setPosition(0,800);
		}else{
			// balloon set position
			balloon1_object.setPosition(-20,60);
			balloon2_object.setPosition(30,40);
			balloon3_object.setPosition(0,40);
			balloon4_object.setPosition(-20,40);			
		}
		// balloon animate object
		var balloon1_anim = motion.createAnimObject("balloon1");
		var balloon2_anim = motion.createAnimObject("balloon2");
		var balloon3_anim = motion.createAnimObject("balloon3");
		var balloon4_anim = motion.createAnimObject("balloon4");
		if(!getGlobalVal('visited')){
			// balloon animate apply
			balloon1_anim.add({property: Prop.position, to: new Pos(-20,60), duration:10000});
			balloon2_anim.add({property: Prop.position, to: new Pos(30,40), duration:11000});
			balloon3_anim.add({property: Prop.position, to: new Pos(0,40), duration:12000});
			balloon4_anim.add({property: Prop.position, to: new Pos(-20,40), duration:13000, 
				onComplete: function(){
					setSessionStorage('visited', 1);
					text_animate();
				}
			});
		}else{
			text_animate();	
		}
		balloon1_anim.add({property: Prop.positionSemicircle(true), to: new Pos(-25,60), loop: -1, duration:3000, ease: jsAnimEase.bounceSmooth});
		balloon2_anim.add({property: Prop.positionSemicircle(true), to: new Pos(25,40), loop: -1, duration:3000, ease: jsAnimEase.bounceSmooth});
		balloon3_anim.add({property: Prop.positionSemicircle(true), to: new Pos(5,40), loop: -1, duration:3000, ease: jsAnimEase.bounceSmooth});		
		balloon4_anim.add({property: Prop.positionSemicircle(true), to: new Pos(-25,40), loop: -1, duration:3000, ease: jsAnimEase.bounceSmooth});
	});
//]]>