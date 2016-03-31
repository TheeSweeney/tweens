
$(document).ready(function(){
//initial pageload
	var mainBox = document.getElementById('mainBox');
	var image = document.getElementById('image');
	var bodyText = document.getElementById('bodyText');
	var text = document.getElementsByClassName('text');
	var state = 0;
	//var boxHeight = window.getComputedStyle(document.getElementById('txtImgLogoBox')).getPropertyValue('height')
  TweenLite.from(image, 2, {'opacity': 0});



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
							'padding-bottom': '70px'
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
							'padding-right': '5px'
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
							'padding-right': '5px'
						})
				}, 500)
			}).delay(.75)

			TweenLite.to(mainBox, 1.5	, {
				backgroundColor: '#1BB1E4'
			})
		}
	});




})

