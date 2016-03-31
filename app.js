
$(document).ready(function(){
//initial pageload
	var picture = document.getElementById("kerebel");
	//var boxHeight = window.getComputedStyle(document.getElementById("txtImgLogoBox")).getPropertyValue('height')
  //console.log(boxHeight);
  TweenLite.from(picture, 2, {"opacity": 0});




//dribble
	$('#dribble').click(function(){

		var mainBox = document.getElementById("mainBox");
		var kerebel = document.getElementById('kerebel');
		
		$("#bodyText").fadeOut(function() {
	  	$(this).text("Pork prosciutto ball tip kielbasa, capicola cow flank beef turkey tail. Short loin turkey capicola t-bone, chicken alcatra picanha cupim kielbasa spare ribs shankle cow swine. Tri-tip shoulder kevin leberkas. Ham frankfurter swine salami t-bone pork ground round short ribs hamburger boudin chicken shank.").fadeIn();
		});


		

		TweenLite.to(kerebel, 2, {
			"opacity": 0,
		})

		TweenLite.to(kerebel, 2, {
			"opacity": 1,
			onComplete: setTimeout(function() {
				$("#kerebel").attr("src", "./styles/images/metrics.gif")
			}, 2000)
		}).delay(2)
	});








})

