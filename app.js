$(document).ready(function(){
			var picture = document.getElementById("kerebel");
			var boxHeight = window.getComputedStyle(document.getElementById("txtImgLogoBox")).getPropertyValue('height')
	    console.log(boxHeight);
	    TweenLite.to(picture, 1, {"height": boxHeight});
  	})