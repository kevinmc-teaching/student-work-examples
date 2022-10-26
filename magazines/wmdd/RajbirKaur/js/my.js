$(document).ready(function () {   
   
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 268) {
         
            $("#menu").addClass('menufix');
            $("#menu_items").addClass('mobile_menufix');
            $("#sidebar").addClass('myclass');
        } else {
            $("#menu").removeClass('menufix');
            $("#menu_items").removeClass('mobile_menufix');
             $("#sidebar").removeClass('myclass');
        }
    });


});