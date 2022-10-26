@media screen and (max-width: 600px) {
  .menus ul li a {display: none;}
  .menus ul li a.icon {
    float: right;
    display: block;
  }
  .menus {
    overflow: hidden;
    background-color: #333;
  }

  #large, #small{
    display: none;
  }

  .menus ul{
    list-style-type: none;
  }

  .menus ul li a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }

  .menus ul li a:hover {
    background-color: #ddd;
    color: black;
  }

  .menus ul li .icon {
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .menus.responsive {position: relative;}
  .menus.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .menus.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}

function responsiveMenu(){
  let a = document.getElementById("Topnav");
  if (a.className === "menus") {
    a.className += " responsive";
  } else {
    a.className = "menus";
  }
}



let m2 = window.matchMedia("(max-width: 650px)");
mediaQuery2(m2);
m2.addListener(mediaQuery2);

function mediaQuery2(m2){
  if (m2.matches){
    document.getElementByClassName(".site-head").style.display = "none";
    document.getElementById("bd").style.display = "none";
  }
}
