$(document).ready(function(){

	var signInBox = document.getElementById('signInBox');
	var mountains = document.getElementById('mountains');
	var topBars = document.getElementById('topBars');
	var topGraphics = document.getElementById('topGraphics');
	var holder;

	$('#signIn').click(function(){
		$('#signIn').fadeOut();

		var chain = new TimelineLite();

		chain
			.to(signInBox, .5, {'border-radius': '0px'})
			.to(topBars, .5, {
				opacity: '0',
				height: '0px',
			})
			.to(signInBox, .5, {
				height: '247px',
				width: '267px', 
				'margin-top': '0px',
				'margin-bottom': '54px',
				'border-radius': '5px',
				'padding-top': '20px',
				'padding-bottom': '40px'
			}, '-=.5')
			.to(mountains, .5, {
				'margin-top': '77px',
				onComplete: function(){
					$('#signInBox').html('<div id="textBox"><input type="text" class="input" id="Username" value="Username"/><input type="text" class="input" id="E-mail" value="E-mail"/><input type="text" class="input" id="Password" value="Password"/></div><div id="submit2Box"><div id="submit2"></div></div>')
				
					$('.input').focus(function(){
						if(this.value == this.id){
							holder = this.value
							this.value = '';
						} 
					})
					$('.input').focusout(function(){

						if(this.value === ''){
							this.value = holder;
						}

					})

					var submit2 = document.getElementById('submit2')


					TweenLite.to(submit2, .5, {
						width: '70px',
						height: '35px',
						'margin-top': '50px',
						onComplete: function(){
							$('#submit2').html('DONE')
						}
					})

				}
			}, '-=.25')
			
	})


});







