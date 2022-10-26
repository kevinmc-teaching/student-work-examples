


//------------------------------------Javascript Functions------ Start--------------------

//---------------------------Function to open search box-------Start-------------------------
function opensearch() {
    add_overlay_open();
    var searchoverlay = document.getElementById('search-overlay');
    try {
        searchoverlay.classList.remove('slideOutUp');
    }
    catch (e) {
    }
    searchoverlay.classList.add('slideInDown');
    searchoverlay.style.display = 'block';
    submenu.style.visibility = 'visible';

}
//---------------------------Function to open search box-------End-------------------------



//---------------------------Function to close search box-------Start-------------------------
function closesearch() {
    remove_overlay_open();
    var searchoverlay = document.getElementById('search-overlay');
    searchoverlay.classList.remove('slideInDown');
    searchoverlay.classList.add('slideOutUp');
    submenu.style.visibility = 'collapse';

}
//---------------------------Function to close search box-------End-------------------------



//---------------------------Function to show submenu-------Start-------------------------
function showsubmenu() {
    if (window.innerWidth > 780) {
        $('#mob_menu').empty();
        //alert('start');
        var submenu = document.getElementById('submenu');
        try {
            submenu.classList.remove('fadeOut');
        }
        catch (e) {
        }
        //alert('add');
        submenu.classList.add('fadeIn');
        //alert('done');
        submenu.style.display = 'block';
        submenu.style.visibility = 'visible';
    }
}
//---------------------------Function to show submenu-------End-------------------------


//---------------------------Function to hide submenu-------Start-------------------------
function hidesubmenu() {
    if (window.innerWidth > 780) {
        var submenu = document.getElementById('submenu');
        submenu.classList.remove('fadeIn');
        submenu.classList.add('fadeOut');
        submenu.style.visibility = 'collapse';
    }
}
//---------------------------Function to hide submenu-------End-------------------------



//---------------------------Function to close mob menu-------Start-------------------------
function close_mob_menu() {
    var mob_menu = document.getElementById('mob_menu');
    try {
        mob_menu.classList.remove('slideInRight');
    }
    catch (e) {

    }
    mob_menu.classList.add('slideOutLeft');
    mob_menu.style.visibility = 'collapse';
    remove_overlay_open();

}
//---------------------------Function to close mob menu-------End-------------------------




//---------------------------Function to disable scroll on body-------Start-------------------------
function add_overlay_open() {
    var body = document.getElementById('body');
    body.classList.add('overlay-open');
}
//---------------------------Function to disable scroll on body-------End-------------------------



//---------------------------Function to enable scroll on body-------Start-------------------------
function remove_overlay_open() {
    var body = document.getElementById('body');
    body.classList.remove('overlay-open');
}
//---------------------------Function to enable scroll on body-------End-------------------------



//-------------------Function to filter source Images-----------------START----------------
function filtersource(item) {
   var indeximages = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32'];
   var storyimages = ['9', '10', '11', '12', '13', '14', '23', '24', '25', '26', '27', '28', '29', '30', '31', '33','34','35','36','37'];
   var contactimages = ['23', '24', '25', '26', '27', '28', '29', '30', '31','39'];
   var errorimages = ['9', '10', '11', '12', '13', '14', '23', '24', '25', '26', '27', '28', '29', '30', '31','38'];
   var myarray = [];
   var spans = document.getElementById('filter_btn').getElementsByTagName('span');
   for(var t=0;t<spans.length;t++){
    spans[t].style.background ='#626363';
   }
   document.getElementById(item).style.background = 'black';


   if (item == 'all') {
   }
   else if (item == 'index') {
       myarray = indeximages;
   }
   else if (item == 'story') {
       myarray = storyimages;
   }
   else if (item == 'contact') {
       myarray = contactimages;
   }
   else if (item == 'error') {
       myarray = errorimages;
   }
   else {
   }
   if (item == 'all') {
       var table = document.getElementById('source_table');
       table.style.display ='none';
       var td = table.getElementsByTagName('td');
       for (var i = 0; i < td.length; i++) {            
           td[i].style.display = 'block';
       }
       table.style.display = 'block';
   }
   else {
       var table = document.getElementById('source_table');
       var td = table.getElementsByTagName('td');
       table.style.display ='none';
       for (var i = 0; i < td.length; i++) {        
           if (myarray.indexOf(td[i].getElementsByTagName('img')[0].src.replace(/^.*[\\\/]/, '').slice(0, -4)) > -1) {
               td[i].style.display = 'block';
           }
           else {
               td[i].style.display = 'none';
           }
       }
       table.style.display = 'block';
   }      
    
}

//-------------------Function to filter source Images-----------------END----------------



//------------------------------------Javascript Functions------ End--------------------


//--------------------JQUERY Functions---------Start---------------------
$(document).ready(function () {


    //----------------------FUNCTION to scroll to submenu item on click-------START------
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {            
            var currentPage = location.pathname.split('/').slice(-1)[0];
            if (currentPage == '' || currentPage == 'index.html') {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        localStorage.clear();
                        return false;
                    }
                }
            }
            else {                
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

                    localStorage['gotoThisSection'] = this.hash;
                    var url = 'index.html';
                    window.location.href = url;
                }

            }
        });
    });
    //----------------------FUNCTION to scroll to submenu item on click-------END------
    


    //----------------------FUNCTION to scroll to submenu item on click by Dynamically created menu-------START------
    $("#mob_menu").delegate("a[href*=#]:not([href=#])", "click", function () {
        var currentPage = location.pathname.split('/').slice(-1)[0];
        if (currentPage == '' || currentPage == 'index.html') {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    localStorage.clear();
                    return false;
                }
            }
        }
        else {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

                localStorage['gotoThisSection'] = this.hash;
                var url = 'index.html';
                window.location.href = url;
            }

        }
    });
    //----------------------FUNCTION to scroll to submenu item on click by Dynamically created menu-------END------



    //----------------------FUNCTION to scroll to submenu item on click from other page than index.html-------START------
    function gotoThisSection() {
        try {
            if (localStorage['gotoThisSection']) {

                var target = $(localStorage['gotoThisSection']);
                location.href = localStorage['gotoThisSection'];
                localStorage.clear();

            }
        }
        catch (e) {
            localStorage.clear();
        }
    }
    //----------------------FUNCTION to scroll to submenu item on click from other page than index.html-------End------



    // Call gotoThisSection on page load to check localStorage value
    gotoThisSection();


    //---------------------------Function to open mob menu-------Start-------------------------
    $("#open-mob-menu").click(function () {
        $('#mob_menu').empty();
        $('#mob_menu').html($('#full-menu').html() + '<i class="fa fa-times close-mob-menu" id="close-mob-menu" onclick="close_mob_menu();" aria-hidden="true"></i>');
        //$("#full-menu").clone(false).find("*").removeAttr("id").appendTo($("#mob_menu"));
        var mob_menu = document.getElementById('mob_menu');
        var sub_menu = document.getElementById('submenu');
        try {
            mob_menu.classList.remove('slideOutLeft');
            sub_menu.classList.remove('fadeOut');
        }
        catch (e) {
        }
        mob_menu.classList.add('slideInRight');
        mob_menu.style.display = 'block';
        mob_menu.style.visibility = 'visible';
        add_overlay_open();
    });
    //---------------------------Function to open mob menu-------End-------------------------


    //---------------------------Function to Load more items-------Start-------------------------
    $("span.loadmore").click(function () {
        //var teasers = $(this).closest('.container');
        //var title = $(this).closest('section')[0].id;
        //alert(title);
        //var finalteaser;
        //var totalfinalteaser;
        //for (var i = 0; i < teasers.length; i++) {
        //    try{
        //        finalteaser[i] = teasers[i].classList.remove('fadeIn');
        //        alert(finalteaser[i].innerHTML);
        //    }
        //    catch(e){
        //    }

        //}
        //if (id === 'featured') {
        //    for (var i = 0; i < 4; i++) {
        //        totalfinalteaser[i] = finalteaser[i].classList.add('fadeIn');
        //        totalfinalhtml = totalfinalhtml + totalfinalteaser[i];
        //    }
        //}
        if (this.id === 'model') {
            $(this).closest('.container').find('.teasercollection')[1].innerHTML = $(this).closest('.container').find('.teasercollection')[1].innerHTML + $(this).closest('.container').find('.teasercollection')[1].innerHTML;
        }
        else {
            $(this).closest('.container').find('.teasercollection')[0].innerHTML = $(this).closest('.container').find('.teasercollection')[0].innerHTML + $(this).closest('.container').find('.teasercollection')[0].innerHTML;
        }
    });
    //---------------------------Function to Load more items-------End-------------------------



    //--------------------Function to add effect when in viewport-----START------
    jQuery('.fadeineffect').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100
    });
    //--------------------Function to add effect when in viewport-----END------


    //------------Function to change background color of header on scroll-------START-----
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 50) {
            $("header").css('background', 'rgba(10, 2, 2, 0.67)');
        } else {
            $("header").css('background', 'rgba(0, 0, 0, 0.15)');
        }
    });
    //------------Function to change background color of header on scroll-------END-----




    //-------Contact Form Send Message---------------START--------------
    $("#send_message").click(function () {
        var tmpname = $("#messageName").val();
        var tmpemail = $("#messageEmail").val();
        var tmpmessage = $("#message").val();
        if (tmpname.trim() == '') {
            shownotification('Enter your name', 'error');
            return;
        }
        else if (tmpemail.trim() == '') {
            shownotification('Enter your email', 'error');
            return;
        }
        else if (!isValidEmailAddress(tmpemail.trim())) {
            shownotification('Enter valid email address', 'error');
            return;
        }

        else if (tmpmessage.trim() == '') {
            shownotification('Enter message', 'error');
            return;
        }
        else {
            var jsonobj = {
                name: tmpname,
                email: tmpemail,
                message: tmpmessage
            };

            var messageData = JSON.stringify(jsonobj);

            $.ajax({
                url: "https://formspree.io/shakti.cheema@gmail.com",
                contentType: "application/json; charset=utf-8",
                method: "POST",
                data: messageData,
                dataType: "json",
                success: function () {
                    console.log(messageData);
                    console.log(jsonobj);
                    shownotification('Message sent successfully!', 'success');
                    $("#messageName").val('');
                    $("#messageEmail").val('');
                    $("#message").val('');
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    alert('error');
                    shownotification('Something went wrong! Please try later.', 'error');
                }
            });            
        }
    });
    //-------Contact Form Send Message---------------END--------------




    //-------------Function to show Notification--------START------------
    function shownotification(notitext, icon) {
        if (icon == 'error') {
            try {
                $("#noti_icon_success").hide();
            }
            catch (e) {
            }
            $("#noti_icon_error").show();
            $("#notification").css("background", "#d82424");
        }
        else {
            try {
                $("#noti_icon_error").hide();
            }
            catch (e) {
            }
            $("#noti_icon_success").show();
            $("#notification").css("background", "#11a531");
        }

        $("#noti_message").html(notitext);
        try {
            $("#notification").removeClass('slideOutUp');
            $("#notification").removeClass('slideInDown');
        }
        catch (e) {
        }
        $("#notification").addClass('slideInDown');
        $("#notification").show();
        setTimeout(function () {
            $("#notification").addClass('slideOutUp');
        }, 3000);

    };
    //-------------Function to show Notification------END--------------




    //----------------Function to check valid email address----------Start--------------
    function isValidEmailAddress(emailAddress) {
        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return pattern.test(emailAddress);
    };
    //----------------Function to check valid email address----------END--------------


});

//--------------------JQUERY Functions---------END---------------------

