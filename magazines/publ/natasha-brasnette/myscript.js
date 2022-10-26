const btn1 = document.querySelector('.search-toggle');

console.log(btn1);

btn1.addEventListener('click', function(){

  document.body.classList.toggle('search-on');
});
