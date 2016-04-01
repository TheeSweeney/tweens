
$(document).ready(function(){
//if there is time, this file can be broken down into a more 
//modular structure for readability and SoC
//initial pageload
	var mainBox = document.getElementById('mainBox');
	var image = document.getElementById('image');
	var bodyText = document.getElementById('bodyText');
	var text = document.getElementsByClassName('text');
	var state = 0;
	//var boxHeight = window.getComputedStyle(document.getElementById('txtImgLogoBox')).getPropertyValue('height')
  TweenLite.from(image, 2, {'opacity': 0});

  /*
$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$
$$$$$$$$$$$$$$$$$$$
To handle the images snapping in, have them be off screen and hen tween in from right to leff 
while simultaneously applying a separate tween the change the opacitty - remember that page with all the graphs on the different speeds of tweens
use that to figure out something that may work
  */




//any logo
	$('.logo').click(function(){
		
		TweenLite.to(bodyText, 2, {
			color: 'white'
		})

		TweenLite.to(text, 2, {
			color: 'white'
		})


		TweenLite.to(image, 1, {
			opacity: 1,
			onComplete: setTimeout(function() {
				$('.logo').each(function(){
					if(!$(this)[0].src.includes('White')){
						var newSrc = $(this)[0].src.substring(0, $(this)[0].src.length-4) + "White.png";
						$(this).attr('src', newSrc)
					}
				})
					

				$('#largeGraphic')
					.css({
						'justify-content': 'center',
						'align-items': 'center'
					})
			}, 500)
		})
	})
//dribble
	$('#dribble').click(function(){
		if(state !== 1){
			state = 1;

		
		
			$('#bodyText').fadeOut(500,function() {
		  	$(this).text('Pork prosciutto ball tip kielbasa, capicola cow flank beef turkey tail. Short loin turkey capicola t-bone, chicken alcatra picanha cupim kielbasa spare ribs shankle cow swine. Tri-tip shoulder kevin leberkas. Ham frankfurter swine salami t-bone pork ground round short ribs hamburger boudin chicken shank.').fadeIn(1000);
			});

			$('#world').fadeOut(250,function() {
		  	$(this).text('DRIBBLE').fadeIn(500);
			});


			

			TweenLite.to(image, .5, {
				opacity: 0,
			})

			TweenLite.to(image, 1, {
				opacity: 1,
				onComplete: setTimeout(function() {
					$('#image')
						.attr('src', './styles/images/metrics.gif')
						.css({
							'height': '365px', 
							'width': '502px',
							'padding-bottom': '70px',
							'border-radius': '15px 15px 15px 15px'
						})
					$('#largeGraphic')
				}, 500)
			}).delay(.75)

			TweenLite.to(mainBox, 1.5, {
				backgroundColor: '#e54c85'
			})
		}
	});

//Bēhance
	$('#Be').click(function(){
		if(state !== 2){
			state = 2;

		
		
			$('#bodyText').fadeOut(500,function() {
		  	$(this).text('Kevin bacon strip steak tongue, t-bone picanha ham hock doner sausage ball tip beef ribs fatback shoulder. Pork leberkas ball tip tri-tip swine filet mignon kielbasa venison. Leberkas cupim biltong, boudin landjaeger spare ribs kevin frankfurter pig ham pork chop. Pig chicken short loin jerky frankfurter pork chop cupim pork loin rump jowl. Meatloaf alcatra flank short loin boudin t-bone capicola swine tongue andouille pork belly.').fadeIn(1000);
			});

			$('#world').fadeOut(250,function() {
		  	$(this).text('BEHANCE').fadeIn(500);
			});


			

			TweenLite.to(image, .5, {
				opacity: 0,
			})

			TweenLite.to(image, 1, {
				opacity: 1,
				onComplete: setTimeout(function() {
					$('#image')
						.attr('src', './styles/images/phone.gif')
						.css({
							'height': '365px', 
							'width': '502px',
							'padding-bottom': '70px'
						})
				}, 500)
			}).delay(.75)

			TweenLite.to(mainBox, 1.5	, {
				backgroundColor: '#1970F8'
			})
		}
	});


//Instagram
	$('#instagram').click(function(){
		if(state !== 3){
			state = 3;

		
		
			$('#bodyText').fadeOut(500,function() {
		  	$(this).text('Brisket turkey pancetta jerky, biltong meatloaf chicken capicola fatback sirloin drumstick tail cow strip steak frankfurter. Ground round ball tip turducken, rump t-bone salami landjaeger sirloin turkey. Cow pork loin picanha leberkas turkey sirloin filet mignon chicken shank turducken short ribs sausage. Pancetta porchetta venison tri-tip jowl t-bone flank doner short ribs brisket strip steak cupim swine sausage pork chop.').fadeIn(1000);
			});

			$('#world').fadeOut(250,function() {
		  	$(this).text('INSTAGRAM').fadeIn(500);
			});
			

			TweenLite.to(image, .5, {
				opacity: 0,
			})

			TweenLite.to(image, 1, {
				opacity: 1,
				onComplete: setTimeout(function() {
					$('#image')
						.attr('src', './styles/images/slideshow.gif')
						.css({
							'height': '365px', 
							'width': '552px',
							'padding-bottom': '70px',
							'padding-right': '5px',
							'border-radius': '15px'
						})
				}, 500)
			}).delay(.75)

			TweenLite.to(mainBox, 1.5	, {
				backgroundColor: '#2B5A84'
			})
		}
	});

//Vimeo
	$('#vimeo').click(function(){
		if(state !== 4){
			state = 4;

		
		
			$('#bodyText').fadeOut(500,function() {
		  	$(this).text('Bacon ipsum dolor amet strip steak corned beef bacon tenderloin ball tip prosciutto tri-tip drumstick. Landjaeger pig corned beef short ribs. Ham pork loin brisket sirloin beef ribs chicken. Ball tip tenderloin brisket sirloin andouille, prosciutto beef bacon doner chicken short ribs ham hock. Brisket kevin cupim beef porchetta. ').fadeIn(1000);
			});

			$('#world').fadeOut(250,function() {
		  	$(this).text('VIMEO').fadeIn(500);
			});

			TweenLite.to(image, .5, {
				opacity: 0,
			})

			TweenLite.to(image, 1, {
				opacity: 1,
				onComplete: setTimeout(function() {
					$('#image')
						.attr('src', './styles/images/slideshow.gif')
						.css({
							'height': '365px', 
							'width': '552px',
							'padding-bottom': '70px',
							'padding-right': '5px',
							'border-radius': '15px'
						})
				}, 500)
			}).delay(.75)

			TweenLite.to(mainBox, 1.5	, {
				backgroundColor: '#1BB1E4'
			})
		}
	});
//backbutton
	$('#arrow').click(function(){
		if(state !== 0){
			state = 0;

		
		
			$('#bodyText').fadeOut(500,function() {
		  	$(this).html("I\'m Christophe Kerebel, the guy who created the photo and video gallery you like to visit and share my love for lights. I dedicated a full year to chase the marvelous lights of America, armed with nothing more than my beloved Canon camera.<br><br>					Sorry, I stopped selling those pictures and devote myself today to my new job as a UX/UI designer. If you want to check out my portfolio, it's at <strong><a href='http://www.christophekerebel.com' class='link'>christophekerebel.com</a></strong><br><br>Still, catching the light is my passion. You are welcome to visit my new gallery at <strong><a href='http://www.kreapx.com' class='link'>kreapx.com</a></strong>" 
					
					).fadeIn(1000);
			});

			$('#world').fadeOut(250,function() {
		  	$(this).text('WORLD.').fadeIn(500);
			});

			TweenLite.to(image, .5, {
				opacity: 0,
			})

			TweenLite.to(image, 1, {
				opacity: 1,
				onComplete: setTimeout(function() {
					$('#image')
						.attr('src', './styles/images/Kerebel.png')
						.css({
							'height': '', 
							'width': '',
							'padding-bottom': '',
							'padding-right': '',
							'border-radius': ''
						})

						$('.logo').each(function(){
						var newSrc = $(this)[0].src.substring(0, $(this)[0].src.length-9) + ".png";
						$(this).attr('src', newSrc)
				})
					

				$('#largeGraphic')
					.css({
						'justify-content': '',
						'align-items': ''
					})
				}, 500)
			}).delay(.75)

			TweenLite.to(mainBox, 1.5	, {
				backgroundColor: '#f4f4f4'
			})
		}
		TweenLite.to(bodyText, 2, {
			color: '#6B717B'
		})

		TweenLite.to(text, 2, {
			color: '#6B717B'
		})
	});



})

