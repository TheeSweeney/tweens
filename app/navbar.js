$(document).ready(function(){
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
	})
})



















