$(".menuBtn").click(function(){
    $(".mobile-menu").show();
    $(".menuBtn").hide();
    $(".closeBtn").css('display','flex');
    $(".closeBtn").css('background','#298D7F');
});
$(".closeBtn").click(function(){
    $(".mobile-menu").hide();
    $(".menuBtn").show();
    $(".closeBtn").hide();
});