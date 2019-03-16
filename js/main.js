var HEIGHT = getWindowHeight();
var SLIDE = document.querySelector(".slide");
function getWindowHeight(){
	return window.innerHeight;
}

function watchScroll(direction){
	if(direction == "bottom"){
		SLIDE.style.height = "0";
		document.body.style.overflow = "visible";
	}
	else{
		SLIDE.style.height = HEIGHT + "px";
		document.body.style.overflow = "hidden";
	}
}

function init(){
	SLIDE.style.height = HEIGHT + "px";
}

document.onwheel = function(e){
	if(e.deltaY > 0 && window.pageYOffset == 0){
		watchScroll("bottom");
	}
	else if(e.deltaY < 0 && window.pageYOffset == 0){
		watchScroll("top");
	}
}

document.onkeydown = function(e){
	var code = e.which || e.keyCode
	if(code == 40 && window.pageYOffset == 0){
		watchScroll("bottom");
	}
	else if(code == 38 && window.pageYOffset == 0){
		watchScroll("top");
	}
}

window.onload = function(){
	if(window.pageYOffset == 0){
		document.body.style.overflow = "hidden";
		init();
	}
}
window.onresize = init;