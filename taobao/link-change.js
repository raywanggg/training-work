//导航栏的hover事件
$(".nav-right").find("li").hover(function() {
	$(this).find(".right-hidden").css("display","block");
},function() {
	$(this).find(".right-hidden").css("display","none");
})
$(".sitenavigation").hover(function() {
	$(".last-hidden").css("display","block");
},function() {
	$(".last-hidden").css("display","none");
})

//"更多"的hover事件
$(".search-more").hover(function() {
	$(".arrow-right").attr("src","img/white_arrow_right.png");
},function() {
	$(".arrow-right").attr("src","img/gray_arrow_right.png");
})

//搜索栏的切换事件
$(".tianmao").click(function() {
	//按钮切换
	$(this).addClass("tianmao-select").removeClass("tianmao");
	if ($(".label-three").find("li").eq(0).hasClass("baobei-select")) {
		$(".label-three").find("li").eq(0).removeClass("baobei-select").addClass("baobei");
	}
	if ($(".label-three").find("li").eq(2).hasClass("dianpu-select")) {
		$(".label-three").find("li").eq(2).removeClass("dianpu-select").addClass("dianpu");	
	}
	//列表切换
	$(".list-one").css("display","none");
	$(".list-two").css("display","block");
	$(".search-more").css("display","none");
	//搜索栏的颜色切换
	$(".search-pannel").css("background-color","#c60000");
	$(".confirm-button").css("background-color","#c60000");
	//搜索栏里面的文字切换
	$(".baobei-text").css("display","none");
	$(".tianmao-text").css("display","block");
	//搜索栏的相机图片
	$(".pic-image").css("display","none");
})
$(".dianpu").click(function() {
	$(this).addClass("dianpu-select").removeClass("dianpu");
	if ($(".label-three").find("li").eq(0).hasClass("baobei-select")) {
		$(".label-three").find("li").eq(0).removeClass("baobei-select").addClass("baobei");
	}
	if ($(".label-three").find("li").eq(1).hasClass("tianmao-select")) {
		$(".label-three").find("li").eq(1).removeClass("tianmao-select").addClass("tianmao");	
	}
	//列表切换
	$(".list-one").css("display","block");
	$(".list-two").css("display","none");
	$(".search-more").css("display","block");
	//搜索栏的颜色切换
	$(".search-pannel").css("background-color","#ff4200");
	$(".confirm-button").css("background-color","#ff4200");
	//搜索栏里面的文字切换
	$(".baobei-text").css("display","none");
	$(".tianmao-text").css("display","none");
	//搜索栏的相机图片
	$(".pic-image").css("display","none");
})
$(".baobei-select").click(function() {
	$(this).addClass("baobei-select").removeClass("baobei");
	if ($(".label-three").find("li").eq(1).hasClass("tianmao-select")) {
		$(".label-three").find("li").eq(1).removeClass("tianmao-select").addClass("tianmao");
	}
	if ($(".label-three").find("li").eq(2).hasClass("dianpu-select")) {
		$(".label-three").find("li").eq(2).removeClass("dianpu-select").addClass("dianpu");	
	}
	//列表切换
	$(".list-one").css("display","block");
	$(".list-two").css("display","none");
	$(".search-more").css("display","block");
	//搜索栏的颜色切换
	$(".search-pannel").css("background-color","#ff4200");
	$(".confirm-button").css("background-color","#ff4200");	
	//搜索栏里面的文字切换
	$(".baobei-text").css("display","block");
	$(".tianmao-text").css("display","none");
	//搜索栏的相机图片
	$(".pic-image").css("display","block");
})