
$(document).ready(function(){
//initial pageload
	var mainBox = document.getElementById('mainBox');
	var image = document.getElementById('image');
	var bodyText = document.getElementById('bodyText');
	var text = document.getElementsByClassName('text');
	//var boxHeight = window.getComputedStyle(document.getElementById('txtImgLogoBox')).getPropertyValue('height')
  TweenLite.from(image, 2, {'opacity': 0});



//any logo
	$('.logo').click(function(){
		
		console.log(text);
		TweenLite.to(bodyText, 3, {
			color: 'white'
		})

		TweenLite.to(text, 3, {
			color: 'white'
		})


		TweenLite.to(image, 2, {
			opacity: 1,
			onComplete: setTimeout(function() {
				$('.logo').each(function(){
					if(!$(this)[0].src.includes('White')){
						var newSrc = $(this)[0].src.substring(0, $(this)[0].src.length-4) + "White.png";
						$(this).attr('src', newSrc)
					}
				})
					

				$('#largeGraphic')
					.css('justify-content', 'center')
			}, 0)
		})
	})
//dribble
	$('#dribble').click(function(){

		
		
		$('#bodyText').fadeOut(1000,function() {
	  	$(this).text('Pork prosciutto ball tip kielbasa, capicola cow flank beef turkey tail. Short loin turkey capicola t-bone, chicken alcatra picanha cupim kielbasa spare ribs shankle cow swine. Tri-tip shoulder kevin leberkas. Ham frankfurter swine salami t-bone pork ground round short ribs hamburger boudin chicken shank.').fadeIn(2000);
		});


		

		TweenLite.to(image, 1, {
			opacity: 0,
		})

		TweenLite.to(image, 2, {
			opacity: 1,
			onComplete: setTimeout(function() {
				$('#image')
					.attr('src', './styles/images/metrics.gif')
					.css({
						'height': '315px', 
						'width': '402px', 
						'padding-left': '100px',
						'padding-top': '50px'
					})
			}, 1000)
		}).delay(1.5)

		TweenLite.to(mainBox, 3, {
			backgroundColor: '#e54c85'
		})
	});








})

