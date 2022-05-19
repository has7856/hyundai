$(function(){
    var baseW = $(".bill-contents").width();
    var baseH = $(".bill-contents").height();
    //2148px,1614px
    $(".bill-contents").on("mousemove", function(event){
        var x = event.originalEvent.pageX;
        var y = event.originalEvent.pageY;

        var distW = x/baseW*20;
        var distH = y/baseH*70;

        $(".tagcloud-pc").animate({
            left : -distW+"%",
            top : -distH+"%"
        },20);
    });

    $(document).scroll(function(){
        var winH = $(window).height();
        if($(this).scrollTop() >= winH){
            $("#menu-tab").addClass("fixed");
        }else{
            $("#menu-tab").removeClass("fixed");
        }
    });

    var dday = new Date("May 23, 2022, 0:00:00").getTime();
    setInterval(function() {
        var today = new Date().getTime();
        var gap = dday - today;
        var day = Math.ceil(gap / (1000 * 60 * 60 * 24));
        var hour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
        var sec = Math.ceil((gap % (1000 * 60)) / 1000);
      
        $(".count").html("D-" + day);
      }, 1000);
});