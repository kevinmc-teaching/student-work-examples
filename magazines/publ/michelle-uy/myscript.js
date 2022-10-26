// console.log("hello");
const btn1 = document.querySelector('.search-button');
// console.log(btn1);
btn1.addEventListener('click', function(){
// console.log("button-pressed");
  document.body.classList.toggle('search-active');
});

const btn2 = document.querySelector('.sub-button');
// console.log(btn1);
btn2.addEventListener('click', function(){
// console.log("button-pressed");
  document.body.classList.toggle('sub-active');
});


// var slides = document.querySelectorAll('#slides .slide');
// var currentSlide = 0;
// var slideInterval = setInterval(nextSlide,10000);
//
// function nextSlide() {
//     goToSlide(currentSlide+1);
// }
//
// function previousSlide() {
//     goToSlide(currentSlide-1);
// }
//
// function goToSlide(n) {
//     slides[currentSlide].className = 'slide';
//     currentSlide = (n+slides.length)%slides.length;
//     slides[currentSlide].className = 'slide fadent';
// }
//
// var next = document.getElementById('next');
// var previous = document.getElementById('previous');
//
// next.onclick = function() {
//     // pauseSlideshow();
//     nextSlide();
// };
// previous.onclick = function() {
//     // pauseSlideshow();
//     previousSlide();
// };
