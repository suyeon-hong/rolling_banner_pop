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

    $("body").append(
        $("<aside class='pop'>").append(
            $("<div class='con'>"),
            $("<span class='btnClose'>").text("close")
        ).fadeIn(500)
    )
});

$(".pop .btnClose").on("click", function(e){
    e.preventDefault();

    $(".pop").fadeOut();
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
