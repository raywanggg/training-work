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



