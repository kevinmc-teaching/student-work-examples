document.getElementById('search-form').style.display='none';

document.getElementById('guiSearch').addEventListener('click', ()=>{
	if(document.getElementById('search-form').style.display==='none') {
		document.getElementById('search-form').style.display='block';
		// document.getElementById('search-form').removeClass("fadeOut");
		// document.getElementById('search-form').addClass("fadeIn");
	}
	else {
		document.getElementById('search-form').style.display='none';
		// document.getElementById('search-form').addClass("fadeOut");
		// document.getElementById('search-form').removeClass("fadeIn");
	}
})

