

var searchBtn = document.querySelector('.search-button');
var searchForm = document.querySelector('.search-form'); 

searchForm.classList.toggle('hidden');

searchBtn.addEventListener('click', function(){
	// alert('you clicked search button')
	searchForm.classList.toggle('hidden');
});