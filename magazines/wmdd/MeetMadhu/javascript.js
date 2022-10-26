let m = window.matchMedia("(min-width: 1000px)");
mediaQuery(m);
m.addListener(mediaQuery);

function mediaQuery(m){
  if (m.matches){
    scrollFunction();
    gotopFunction();
  }
}

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("top-arrow").style.display = "block";
  } else {
    document.getElementById("top-arrow").style.display = "none";
  }
}

function gotopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
