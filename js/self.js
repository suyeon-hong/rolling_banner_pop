const $list = $(".list");
const $boxs = $list.find("li");
let num = 0;

let timer = setInterval(move, 50);

$boxs.on("mouseenter", function(){
    clearInterval(timer);
});

$boxs.on("mouseleave", function(){
    timer = setInterval(move, 50);
});

$boxs.on("click", function(e){
    e.preventDefault();

    let target = $(this).children("a").attr("href");

    $(".pop").remove();
    $("body").append(
        $("<div class='pop'>").append(
            $("<div class='con'>"),
            $("<span class='btnClose'>").text("CLOSE")
        ).fadeIn(500)
    )

    $.ajax({
        url: target
    }).success(function(data){
        $(".pop .con").html(data);
    }).error(function(err){
        console.error("데이터를 불러오지 못했습니다.");
    });
});

$("body").on("click", ".btnClose", function(e){
    e.preventDefault(e);

    $(".pop").fadeOut(500, function(){
        $(this).remove();
    });
});

function move(){
    if (num <= -240){
        num = 0;
        $list.find("li").first().appendTo($list);
    }else{
        num -= 2;
    }
    $list.css({marginLeft: num})
}
