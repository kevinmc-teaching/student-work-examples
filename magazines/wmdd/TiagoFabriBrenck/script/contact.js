$(function() {


	$("#submitForm").click(function(event){  
		event.preventDefault();

		var errorMsg = "Error: \n Dear user, unfortunately the submit failed.\n Please try again later."
		var successMsg = "Success: \nDear user, thank you for sending us this message. \nOur staff will read your message and reply as soon as possible."

		$.ajax({
		    url: "https://formspree.io/tiagobrenck@gmail.com", 
		    method: "POST",
		    data: $("#contactForm").serialize(),
		    dataType: "json",
		    success: function() {
		    	alert(successMsg);
		    	$("#contactForm").trigger("reset");
		    },
		    error: function() {
		    	alert(errorMsg);	
		    }
		});
	});

$(document)
            .bind("ajaxStart", function () { lockScreen(); })
            .bind("ajaxStop", function () { unlockScreen(); });
});

function lockScreen() {
    $('#overlay,#loading').show();
}

function unlockScreen() {
    $('#overlay,#loading').hide();
}