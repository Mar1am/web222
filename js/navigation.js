$(document).ready(() => {
    console.log("navigation loaded."); 
    
    // scroll to the section that was clicked on
    $("#top-nav .main-nav-items li a").click(function(e) {
        e.preventDefault();
        var aTag = $(this).attr("href");
        $('html,body').animate({scrollTop: $(aTag).offset().top},'slow');
    });
});