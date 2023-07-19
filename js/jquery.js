$(document).ready(function(){
    let count=0
    setInterval(function(){
        count++
        count %= 3
        $(".ani > li").eq(count).addClass("on").siblings().removeClass("on")
    }, 3000)


    $("#tab h3").click(function(){
        $(this).parent().addClass("view").siblings().removeClass("view")
    })
})