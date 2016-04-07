$(document).ready(function(){

	var textBox = document.getElementById('signInBox');
	var mountains = document.getElementById('mountains');
	var topBars = document.getElementById('topBars');
	var topGraphics = document.getElementById('topGraphics');
	
	$('#signIn').click(function(){
		$('#signIn').fadeOut();

		var chain = new TimelineLite();

		chain
			.to(textBox, .5, {'border-radius': '0px'})
			.to(topBars, .5, {
				opacity: '0',
				height: '0px',
			})
			.to(textBox, .5, {
				height: '247px',
				width: '267px', 
				'margin-top': '0px',
				'margin-bottom': '54px',
				'border-radius': '5px'
			}, '-=.5')
			.to(mountains, .5, {
				'margin-top': '77px',
				onComplete: function(){
					$('#signInBox').html('<input type="text" class="input" id="username" value="username"/><input type="text" class="input" id="email" value="E-mail Address"/><input type="text" class="input" id="password" value="Password"/>')
				
					$('.input').focus(function(){

						this.value = '';
						console.log(this)
					})
				}
			}, '-=.25')
	})


});



// 77 mountain up 44 mt to textBox which is 244 high and 54 above bottom bars

//247







