function isBlock(x) {
	x.css("display","block");
}
function isNone(y) {
	y.css("display","none");
}

//导航栏的hover事件
var nav_right = $(".nav-right");
var site_navigation = $(".sitenavigation");
var last_hidden = $(".last-hidden");
nav_right.find("li").hover(function() {
	$(this).find(".right-hidden").css("display","block");
},function() {
	$(this).find(".right-hidden").css("display","none");
})
site_navigation.hover(function() {
	isBlock(last_hidden);
},function() {
	isNone(last_hidden);
})

//"更多"的hover事件
$(".search-more").hover(function() {
	$(".arrow-right").attr("src","img/white_arrow_right.png");
},function() {
	$(".arrow-right").attr("src","img/gray_arrow_right.png");
})

//第四部分hover事件
var part_charge = $(".part-charge");
var part_game = $(".part-game");
var part_travel = $(".part-travel");
var part_secu = $(".part-secu");
var extra_box = $(".extra-box");
var extra_one = $(".extra-one");
var extra_two = $(".extra-two");
var extra_thr = $(".extra-thr");
var extra_fou = $(".extra-fou");
var row_one = $(".row-one");
var close_logo = $(".close-logo");
//给第一排hover添加边框效果&辅框内容
function extraShow(x,y) {
	x.hover(function() {
		part_charge.css("height","72px").find("img").attr("src","img/phone.png").removeClass("img-big").addClass("img-big-hover");
		isBlock(y);
		isNone(y.siblings());//显示辅框以及兄弟框消失
		x.addClass("row-one-hover");
		if (x.siblings().has("row-one-hover")) {
			x.siblings().removeClass("row-one-hover");
		}
	},function() {

	})
}
extraShow(part_charge,extra_one);
extraShow(part_game,extra_two);
extraShow(part_travel,extra_thr);
extraShow(part_secu,extra_fou);
//关闭辅框
close_logo.click(function() {
	isNone(extra_box);
	part_charge.css("height","145px").find("img").attr("src","img/phone-60.png").removeClass("img-big-hover").addClass("img-big");
	row_one.removeClass("row-one-hover");
})


//不修改类名则标签对click之后的hover事件不起作用
var isTotop = true;
var updown_wrap = $(".updown-wrap");
var sign_common = $(".sign-common");
sign_common.click(function() {
	if(isTotop == true) {
		updown_wrap.animate({
			top:'-70px'
		},"fast");
		isTotop = false;
	}
	else {
		updown_wrap.animate({
			top: '0'
		},"fast");
		isTotop = true;
	}
	if ($(this).hasClass("up-sign")) {
		$(this).addClass("up-click").removeClass("up-sign");
		$(this).siblings().addClass("down-unclick").removeClass("down-sign");
	}	
	if ($(this).hasClass("down-unclick")) {
		$(this).addClass("down-sign").removeClass("down-unclick");
		$(this).siblings().addClass("up-sign").removeClass("up-click");
	}
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

//中国制造图标的动画事件
var made_image = $(".made-image");
var change_image = $(".change-image");
made_image.hover(function() {
	$(this).find("img").animate({
		left:'5px'
	},"fast");
},function() {
	$(this).find("img").animate({
		left:'0'
	},"fast");
})
change_image.hover(function() {
	$(this).find("img").animate({
		left:'5px'
	},"fast");
},function() {
	$(this).find("img").animate({
		left:'0'
	},"fast");
})
//快来扫我的动画
// var scan_show = $(".scan-show");
// var scan_hide = $(".scan-hide");
// scan_show.hover(function() {
// 	scan_hide.fadeIn(200).animate({top:'-2px'},"fast");
// },function(){
// 	scan_hide.css("top","20px").css("display","none");
// })

// function picroll() {
// 	if ($(".back-wrap").hasClass("wrap-change")) {
// 		$(".back-wrap").addClass("wrap-two").removeClass("wrap-change");
// 		setTimeout(picroll, 2000);
// 	}

// 	if ($(".back-wrap").hasClass("wrap-two")) {
// 		$(".back-wrap").addClass("wrap-thr").removeClass("wrap-two");
// 		setTimeout(picroll, 2000);
// 	}
// 	if ($(".back-wrap").hasClass("wrap-thr")) {
// 		$(".back-wrap").addClass("wrap-change").removeClass("wrap-thr");
// 		setTimeout(picroll, 2000);
// 	}
	
// }
// picroll();

//返回顶部
function distanceJudge() {
    var showDistance = 730;//距离顶端多少距离开始显示go-top
    var thisTop = $(window).scrollTop();//初次加载页面的判断
    if($(window).scrollTop() < showDistance){
        $(".top-return").css("display","none");
    }
    //滑动过程中的距离判断
    $(window).scroll(function() {
        thisTop = $(this).scrollTop();
        if($(this).scrollTop() < showDistance) {
            $(".top-return").css("display","none");
        }
        else {
            $(".top-return").css("display","block");
        }
    });
}
distanceJudge();
$(".top-return").click(function() {
	$("body").animate({scrollTop:0},"fast");//Webkit，ie把body改为html
})

