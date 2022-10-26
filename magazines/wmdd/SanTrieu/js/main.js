// When the hamburger icon button is clicked, toggle on/off the css class name hamburger-nav-expand to show/hide the expanded menu. Same logic applies for the search icon and its corresponding css class name search-screen-expand.

hamburgerMenuIcon.addEventListener('click', function() {
    document.body.classList.toggle("hamburger-nav-expand")
});

searchIcon.addEventListener('click', function() {
    document.body.classList.toggle("search-screen-expand")
});
