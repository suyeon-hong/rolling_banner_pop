

const $list = $(".list");
let num = 0;

let timer = setInterval(move, 20);

$(".listBox").on("mouseenter", function(){
    clearInterval(timer);
});

$(".listBox").on("mouseleave", function(){
    timer = setInterval(move, 20);
});

$(".list li").on("click", function(e){
    e.preventDefault();

    $(".pop").remove();

    $("body").append(
        $("<aside class='pop'>").append(
            $("<div class='con'>"),
            $("<span class='btnClose'>").text("close")
        ).fadeIn(500)
    )

    let target = $(this).children("a").attr("href");

    $.ajax({
        url: target,
        success: function(data){
            $(".pop .con").html(data);
        },
        error: function(err){
            console.error("데이터를 불러오지 못했습니다.");
        }
    });
});

$("body").on("click", ".pop .btnClose", function(e){
    e.preventDefault();

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
    $list.css({marginLeft: num});
}
