$(document).ready(function(){
	$('#loginPurpleDot').click(function(){
		$.ajax({
			url: window.location.origin + "/loginPurple",
			type: 'GET',
			dataType: 'html', 
			success: function(newHTML){
				$('#mainBox').html(newHTML)
				
				$('link').attr('href', './styles/loginPurple.css')
			}
		})
		
		$('#homeDot').attr('src', '../styles/images/navDot.png')
		$('#loginRedDot').attr('src', '../styles/images/navDot.png')

		$('#loginPurpleDot').attr('src', '../styles/images/navDotClicked.png')
	})

	$('#loginRedDot').click(function(){
		$.ajax({
			url: window.location.origin + "/loginRed",
			type: 'GET',
			dataType: 'html', 
			success: function(newHTML){
				$('#mainBox').html(newHTML)
				
				$('link').attr('href', './styles/loginRed.css')
			}
		})
		
		$('#homeDot').attr('src', '../styles/images/navDot.png')
		$('#loginPurpleDot').attr('src', '../styles/images/navDot.png')

		$('#loginRedDot').attr('src', '../styles/images/navDotClicked.png')
	})

	$('#homeDot').click(function(){
		$.ajax({
			url: window.location.origin + "/home",
			type: 'GET',
			dataType: 'html', 
			success: function(newHTML){
				$('#mainBox').html(newHTML)
				
				$('link').attr('href', './styles/styles.css')
			}
		})
		
		$('#loginPurpleDot').attr('src', '../styles/images/navDot.png')
		$('#loginRedDot').attr('src', '../styles/images/navDot.png')

		$('#homeDot').attr('src', '../styles/images/navDotClicked.png')
	})
})



















