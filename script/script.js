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

    $(".card-img1").hover(function(){
        $(".cover",this).fadeToggle();
    });
});