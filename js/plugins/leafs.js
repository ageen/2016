(function(c){function b(c,b){return Math.floor(Math.random()*(b-c+1)+c)}var r="";c("body");var u=c(window).height(),q=c(window).width(),f=0,v=!1,w=0,x=10;c(window).resize(function(){u=c(window).height();q=c(window).width()});c.AutomLeafStart=function(h){function p(d){d=c("#"+d);var a=0,a=0<d.getRotateAngle()?720:-720;d.rotate({animateTo:a,duration:2E4})}function e(d,a){var k=c("#"+d);k.removeClass("AutomLeaf").addClass("AutomLeaffalling");k.animate({top:"+="+(u+150)},5E3,function(){k.clearQueue().animate({opacity:0},
300,function(){k.remove();if(1==h.infinite)switch(g=1+Math.floor(2*Math.random()),g){case 1:0==a&&l("left");break;case 2:0==a&&l("right")}})});var t=k.getRotateAngle(),e=0,e=0<t?120:-120;if(1==a){var e=b(200,600),e=0<t?420+e:-420-e,t=b(5,300),f=b(5,300),p=b(1E4,15E3);k.rotate({animateTo:e,center:[t+"%",f+"%"],duration:p})}else k.rotate({animateTo:e,duration:1E4})}function l(a){var n="";f+=1;n='<img id="lf'+f+'" class="AutomLeaf x'+(1+Math.floor(4*Math.random()))+'" src="'+r+(1+Math.floor(Math.random()*
h.howmanyimgsare))+'.png"/>';c("body").append(n);var n=c("#lf"+f),k=q/2;"right"==a?(a=b(k,q),k=b(0,50)):(a=b(-50,k),k=b(0,-50));var e=b(500,8E3);n.rotate({animateTo:k,duration:e,center:["10%","110%"]});n.animate({opacity:1},e-400);k=b(-100,h.maxYposition);n.css({left:a+"px",top:k+"px"})}h=c.extend({initialleafs:50,maxYposition:100,infinite:!0,fallingsequence:3E3,multiplyclick:!0,multiplynumber:1,leafsfolder:"static/AutomLeafs/",howmanyimgsare:8},h);if(1==v)return 0;v=!0;r=h.leafsfolder;w=h.howmanyimgsare;
x=h.maxYposition;for(var g=0,m=0;m<h.initialleafs;m++)switch(g=1+Math.floor(2*Math.random()),g){case 1:l("left");break;case 2:l("right")}c("body").on("click",".AutomLeaf",function(){var a=c(this).attr("ID");e(a)});c("body").on("click",".AutomLeaffalling",function(){var a=c(this).attr("ID");p(a)});if(1==h.multiplyclick)c("body").on("click",".AutomLeaffalling",function(){for(var a=c(this).attr("ID"),a=c("#"+a),n=a.position().top,k=a.position().left,b="",g=0;g<=h.multiplynumber;g++){f+=1;var b=1+Math.floor(Math.random()*
h.howmanyimgsare),l=a.attr("class").replace("AutomLeaffalling",""),b='<img id="lf'+f+'" class="AutomLeaf '+l+'" src="'+r+b+'.png"/>';c("body").append(b);b=c("#lf"+f);b.css({top:n+"px",left:k+"px"}).animate({opacity:1},300);e("lf"+f,!0);p("lf"+f)}});var a=setInterval(function(){var d=b(0,c(".AutomLeaf").length),d=c(".AutomLeaf").eq(d).attr("id");e(d,!1);0==c(".AutomLeaf").length&&clearInterval(a)},h.fallingsequence)};c.AutomLeafAdd=function(h){h=c.extend({leafsfolder:"static/AutomLeafs/",add:1},h);
for(var p=0;p<h.add;p++){var e="";f+=1;e='<img id="lf'+f+'" class="AutomLeaf x'+(1+Math.floor(4*Math.random()))+'" src="'+r+(1+Math.floor(Math.random()*w))+'.png"/>';c("body").append(e);var e=c("#lf"+f),l=q/2;if(2==b(1,2))var l=b(l,q),g=b(0,50);else l=b(-50,l),g=b(0,-50);var m=b(500,8E3);e.rotate({animateTo:g,duration:m,center:["10%","110%"]});e.animate({opacity:1},m-400);g=b(-100,x);e.css({left:l+"px",top:g+"px"})}};(function(c){for(var b,e,f=document.getElementsByTagName("head")[0].style,g=["transformProperty",
"WebkitTransform","OTransform","msTransform","MozTransform"],m=0;m<g.length;m++)void 0!==f[g[m]]&&(b=g[m]);b&&(e=b.replace(/[tT]ransform/,"TransformOrigin"),"T"==e[0]&&(e[0]="t"));eval('IE = "v"=="\v"');jQuery.fn.extend({rotate:function(a){if(0!==this.length&&"undefined"!=typeof a){"number"==typeof a&&(a={angle:a});for(var d=[],b=0,e=this.length;b<e;b++){var f=this.get(b);if(f.Wilq32&&f.Wilq32.PhotoEffect)f.Wilq32.PhotoEffect._handleRotation(a);else{var g=c.extend(!0,{},a),f=(new Wilq32.PhotoEffect(f,
g))._rootObj;d.push(c(f))}}return d}},getRotateAngle:function(){for(var a=[],d=0,b=this.length;d<b;d++){var c=this.get(d);c.Wilq32&&c.Wilq32.PhotoEffect&&(a[d]=c.Wilq32.PhotoEffect._angle)}return a},stopRotate:function(){for(var a=0,d=this.length;a<d;a++){var b=this.get(a);b.Wilq32&&b.Wilq32.PhotoEffect&&clearTimeout(b.Wilq32.PhotoEffect._timer)}}});Wilq32=window.Wilq32||{};Wilq32.PhotoEffect=function(){return b?function(a,d){a.Wilq32={PhotoEffect:this};this._img=this._rootObj=this._eventObj=a;this._handleRotation(d)}:
function(a,d){this._img=a;this._onLoadDelegate=[d];this._rootObj=document.createElement("span");this._rootObj.style.display="inline-block";this._rootObj.Wilq32={PhotoEffect:this};a.parentNode.insertBefore(this._rootObj,a);if(a.complete)this._Loader();else{var b=this;jQuery(this._img).bind("load",function(){b._Loader()})}}}();Wilq32.PhotoEffect.prototype={_setupParameters:function(a){this._parameters=this._parameters||{};"number"!==typeof this._angle&&(this._angle=0);"number"===typeof a.angle&&(this._angle=
a.angle);this._parameters.animateTo="number"===typeof a.animateTo?a.animateTo:this._angle;this._parameters.step=a.step||this._parameters.step||null;this._parameters.easing=a.easing||this._parameters.easing||this._defaultEasing;this._parameters.duration=a.duration||this._parameters.duration||1E3;this._parameters.callback=a.callback||this._parameters.callback||this._emptyFunction;this._parameters.center=a.center||this._parameters.center||["50%","50%"];this._rotationCenterX="string"==typeof this._parameters.center[0]?
parseInt(this._parameters.center[0],10)/100*this._imgWidth*this._aspectW:this._parameters.center[0];this._rotationCenterY="string"==typeof this._parameters.center[1]?parseInt(this._parameters.center[1],10)/100*this._imgHeight*this._aspectH:this._parameters.center[1];a.bind&&a.bind!=this._parameters.bind&&this._BindEvents(a.bind)},_emptyFunction:function(){},_defaultEasing:function(a,d,b,c,e){return-c*((d=d/e-1)*d*d*d-1)+b},_handleRotation:function(a,d){b||this._img.complete||d?(this._setupParameters(a),
this._angle==this._parameters.animateTo?this._rotate(this._angle):this._animateStart()):this._onLoadDelegate.push(a)},_BindEvents:function(a){if(a&&this._eventObj){if(this._parameters.bind){var d=this._parameters.bind,b;for(b in d)d.hasOwnProperty(b)&&jQuery(this._eventObj).unbind(b,d[b])}this._parameters.bind=a;for(b in a)a.hasOwnProperty(b)&&jQuery(this._eventObj).bind(b,a[b])}},_Loader:function(){return IE?function(){var a=this._img.width,b=this._img.height;this._imgWidth=a;this._imgHeight=b;this._img.parentNode.removeChild(this._img);
this._vimage=this.createVMLNode("image");this._vimage.src=this._img.src;this._vimage.style.height=b+"px";this._vimage.style.width=a+"px";this._vimage.style.position="absolute";this._vimage.style.top="0px";this._vimage.style.left="0px";this._aspectW=this._aspectH=1;this._container=this.createVMLNode("group");this._container.style.width=a;this._container.style.height=b;this._container.style.position="absolute";this._container.style.top="0px";this._container.style.left="0px";this._container.setAttribute("coordsize",
a-1+","+(b-1));this._container.appendChild(this._vimage);this._rootObj.appendChild(this._container);this._rootObj.style.position="relative";this._rootObj.style.width=a+"px";this._rootObj.style.height=b+"px";this._rootObj.setAttribute("id",this._img.getAttribute("id"));this._rootObj.className=this._img.className;for(this._eventObj=this._rootObj;a=this._onLoadDelegate.shift();)this._handleRotation(a,!0)}:function(){this._rootObj.setAttribute("id",this._img.getAttribute("id"));this._rootObj.className=
this._img.className;this._imgWidth=this._img.naturalWidth;this._imgHeight=this._img.naturalHeight;var a=Math.sqrt(this._imgHeight*this._imgHeight+this._imgWidth*this._imgWidth);this._width=3*a;this._height=3*a;this._aspectW=this._img.offsetWidth/this._img.naturalWidth;this._aspectH=this._img.offsetHeight/this._img.naturalHeight;this._img.parentNode.removeChild(this._img);this._canvas=document.createElement("canvas");this._canvas.setAttribute("width",this._width);this._canvas.style.position="relative";
this._canvas.style.left=-this._img.height*this._aspectW+"px";this._canvas.style.top=-this._img.width*this._aspectH+"px";this._canvas.Wilq32=this._rootObj.Wilq32;this._rootObj.appendChild(this._canvas);this._rootObj.style.width=this._img.width*this._aspectW+"px";this._rootObj.style.height=this._img.height*this._aspectH+"px";this._eventObj=this._canvas;for(this._cnv=this._canvas.getContext("2d");a=this._onLoadDelegate.shift();)this._handleRotation(a,!0)}}(),_animateStart:function(){this._timer&&clearTimeout(this._timer);
this._animateStartTime=+new Date;this._animateStartAngle=this._angle;this._animate()},_animate:function(){var a=+new Date,b=a-this._animateStartTime>this._parameters.duration;if(b&&!this._parameters.animatedGif)clearTimeout(this._timer);else{if(this._canvas||this._vimage||this._img)a=this._parameters.easing(0,a-this._animateStartTime,this._animateStartAngle,this._parameters.animateTo-this._animateStartAngle,this._parameters.duration),this._rotate(~~(10*a)/10);this._parameters.step&&this._parameters.step(this._angle);
var c=this;this._timer=setTimeout(function(){c._animate.call(c)},10)}this._parameters.callback&&b&&(this._angle=this._parameters.animateTo,this._rotate(this._angle),this._parameters.callback.call(this._rootObj))},_rotate:function(){var a=Math.PI/180;return IE?function(a){this._angle=a;this._container.style.rotation=a%360+"deg";this._vimage.style.top=-(this._rotationCenterY-this._imgHeight/2)+"px";this._vimage.style.left=-(this._rotationCenterX-this._imgWidth/2)+"px";this._container.style.top=this._rotationCenterY-
this._imgHeight/2+"px";this._container.style.left=this._rotationCenterX-this._imgWidth/2+"px"}:b?function(a){this._angle=a;this._img.style[b]="rotate("+a%360+"deg)";this._img.style[e]=this._parameters.center.join(" ")}:function(b){this._angle=b;b=b%360*a;this._canvas.width=this._width;this._canvas.height=this._height;this._cnv.translate(this._imgWidth*this._aspectW,this._imgHeight*this._aspectH);this._cnv.translate(this._rotationCenterX,this._rotationCenterY);this._cnv.rotate(b);this._cnv.translate(-this._rotationCenterX,
-this._rotationCenterY);this._cnv.scale(this._aspectW,this._aspectH);this._cnv.drawImage(this._img,0,0)}}()};IE&&(Wilq32.PhotoEffect.prototype.createVMLNode=function(){document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{return!document.namespaces.rvml&&document.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),function(a){return document.createElement("<rvml:"+a+' class="rvml">')}}catch(a){return function(a){return document.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}}())})(jQuery)})(jQuery);