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

    $("body").append(
        $("<div class='pop'>").append(
            $("<div class='con'>"),
            $("<span class='btnClose'>").text("CLOSE")
        ).fadeIn(500)
    )
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
