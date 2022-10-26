const btn1 = document.querySelector('.menu-button');
const btn2 = document.querySelector('.menu-search-button');
const btn3 = document.querySelector('.search-button');

console.log(btn1, btn2, btn3);

btn1.addEventListener('click', function(){
  // console.log('You clicked button 1. Well done.');
  document.body.classList.toggle('menu-on');
});
btn2.addEventListener('click', function(){
  // console.log('You clicked button 2. Well done.');
  document.body.className = "menu-on search-on";
  });
btn3.addEventListener('click', function(){
  // console.log('You clicked button 2. Well done.');
  document.body.className = "search-on";
  });
