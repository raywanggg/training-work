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

//第四部分hover事件
$(".part-charge").hover(function() {
	$(this).css("height","72px").find("img").attr("src","img/phone.png").removeClass("img-big").addClass("img-big-hover");
	$(".extra-box").css("display","block");
},function() {
	$(this).css("height","145px").find("img").attr("src","img/phone-60.png").removeClass("img-big-hover").addClass("img-big");
	$(".extra-box").css("display","none");
})

//上下标签切换
var isTotop = true;
var isUpclick = false;
var isDownclick = true;
var down_sign = $(".down-sign");
var up_sign = $(".up-sign");
function upsign(x,y) {
	var x,y;
	x.css("background-color","#ff4400");
	x.find("img").attr("src","img/down_white.png").css("-webkit-transform","rotate(180deg)");
	y.css("background-color","#ffffff");
	y.find("img").attr("src","img/up_orange.png").css("-webkit-transform","rotate(180deg)");
	if(isTotop == true) {
		$(".updown-wrap").animate({
			top:'-70px'
		},"fast");
		isTotop = false;
	}
	else {
		$(".updown-wrap").animate({
			top: '0'
		},"fast");
		isTotop = true;
	}	
}
function downsign(x,y) {
	var x,y;
	x.css("background-color","#ff4400");
	x.find("img").attr("src","img/down_white.png").css("-webkit-transform","rotate(0deg)");
	y.css("background-color","#ffffff");
	y.find("img").attr("src","img/up_orange.png").css("-webkit-transform","rotate(0deg)");
	if(isTotop == true) {
		$(".updown-wrap").animate({
			top:'-70px'
		},"fast");
		isTotop = false;
	}
	else {
		$(".updown-wrap").animate({
			top: '0'
		},"fast");
		isTotop = true;
	}
}
$(".up-sign").click(function() {
	upsign(up_sign,down_sign);
	isUpclick = true;
	isDownclick = false;
}) 
$(".down-sign").click(function() {
	downsign(down_sign,up_sign);
	isUpclick = false;
	isDownclick = true;	
}) 
if (isUpclick == false) {
	up_sign.hover(function() {
		$(this).find("img").attr("src","img/down_white.png").css("-webkit-transform","rotate(180deg)");
	},function() {
		$(this).find("img").attr("src","img/up_orange.png").css("-webkit-transform","rotate(0deg)");
	})	
}
if (isDownclick == false) {
	down_sign.hover(function() {
		$(this).find("img").attr("src","img/down_white.png").css("-webkit-transform","rotate(0deg)");
	},function() {
		$(this).find("img").attr("src","img/up_orange.png").css("-webkit-transform","rotate(180deg)");
	})
}

//搜索栏的切换事件
var list_one = $(".list-one");
var list_two = $(".list-two");
var search_more = $(".search-more");
var search_panel = $(".search-panel");
var confirm_button = $(".confirm-button");
var baobei_text = $(".baobei-text");
var tianmao_text = $(".tianmao-text");
var pic_image = $(".pic-image");
function search_orange() {
	//列表切换
	list_one.css("display","block");
	list_two.css("display","none");
	search_more.css("display","block");
	//搜索栏的颜色切换
	search_panel.css("background-color","#ff4200");
	confirm_button.css("background-color","#ff4200");
	//搜索栏里面的文字切换
	tianmao_text.css("display","none");	
}
function search_pink() {
	//列表切换
	list_one.css("display","none");
	list_two.css("display","block");
	search_more.css("display","none");
	//搜索栏的颜色切换
	search_panel.css("background-color","#c60000");
	confirm_button.css("background-color","#c60000");
	//搜索栏里面的文字切换
	baobei_text.css("display","none");
	tianmao_text.css("display","block");
	//搜索栏的相机图片
	pic_image.css("display","none");
}
$(".tianmao").click(function() {
	//涉及到类名称的参数怎样传
	$(this).addClass("tianmao-select").removeClass("tianmao");
	if ($(".label-three").find("li").eq(0).hasClass("baobei-select")) {
		$(".label-three").find("li").eq(0).removeClass("baobei-select").addClass("baobei");
	}
	if ($(".label-three").find("li").eq(2).hasClass("dianpu-select")) {
		$(".label-three").find("li").eq(2).removeClass("dianpu-select").addClass("dianpu");	
	}
	search_pink();
})
$(".dianpu").click(function() {
	$(this).addClass("dianpu-select").removeClass("dianpu");
	if ($(".label-three").find("li").eq(0).hasClass("baobei-select")) {
		$(".label-three").find("li").eq(0).removeClass("baobei-select").addClass("baobei");
	}
	if ($(".label-three").find("li").eq(1).hasClass("tianmao-select")) {
		$(".label-three").find("li").eq(1).removeClass("tianmao-select").addClass("tianmao");	
	}
	search_orange();
	baobei_text.css("display","none");
	pic_image.css("display","none");
})
$(".baobei-select").click(function() {
	$(this).addClass("baobei-select").removeClass("baobei");
	if ($(".label-three").find("li").eq(1).hasClass("tianmao-select")) {
		$(".label-three").find("li").eq(1).removeClass("tianmao-select").addClass("tianmao");
	}
	if ($(".label-three").find("li").eq(2).hasClass("dianpu-select")) {
		$(".label-three").find("li").eq(2).removeClass("dianpu-select").addClass("dianpu");	
	}
	search_orange();
	baobei_text.css("display","block");
	pic_image.css("display","block");
})

// 右侧标签的hover事件
var label_head = $(".label-head");
var label_rule = $(".label-rule");
var label_forum = $(".label-forum");
var label_secu = $(".label-secu");
var label_tail = $(".label-tail");
var content_ad = $(".content-ad");
var content_rule = $(".content-rule");
var content_forum = $(".content-forum");
var content_secu = $(".content-secu");
var content_bene = $(".content-bene");
function label_hover(label, content) {
	var label;
	var content;
	label.hover(function() {
		label.addClass("label-select");
		content.css("display","block");
		label.siblings().removeClass("label-select");
		content.siblings().css("display","none");
	},function() {

	})
}
label_hover (label_head, content_ad);
label_hover (label_rule, content_rule);
label_hover (label_forum, content_forum);
label_hover (label_secu, content_secu);
label_hover (label_tail, content_bene);

//中国制造图标的动画事件
$(".made-image").hover(function() {
	$(this).find("img").animate({
		left:'5px'
	},"fast");
},function() {
	$(this).find("img").animate({
		left:'0'
	},"fast");
})
$(".change-image").hover(function() {
	$(this).find("img").animate({
		left:'5px'
	},"fast");
},function() {
	$(this).find("img").animate({
		left:'0'
	},"fast");
})
