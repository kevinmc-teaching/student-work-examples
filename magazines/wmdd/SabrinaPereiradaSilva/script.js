function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 10,
            header = document.querySelector("header");
        
        	console.log(distanceY + ' ' + shrinkOn);
        if (distanceY > shrinkOn) {
            header.className = "wraper_12 smaller";
        } else {
			header.className = "wraper_12 ";
        }
    });
}
window.onload = init();


function thanks(){
    document.getElementById("tks").innerHTML.value="Thank you!"
}