$(".nav-right").find("li").hover(function(){
	$(this).find(".right-hidden").css("display","block");
},function(){
	$(this).find(".right-hidden").css("display","none");
})

$(".sitenavigation").hover(function(){
	$(".last-hidden").css("display","block");
},function(){
	$(".last-hidden").css("display","none");
})