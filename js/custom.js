const $list = $(".list");
let num = 0;

let timer = setInterval(move, 50);

$(".listBox").on("mouseenter", function(){
    clearInterval(timer);
});

$(".listBox").on("mouseleave", function(){
    timer = setInterval(move, 50);
});

function move(){
    if (num <= -120){
        num = 0;
        $list.find("li").first().appendTo($list);
    }else{
        num -= 2;
    }
    $list.css({marginLeft: num});
}