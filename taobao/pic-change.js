window.onload = function() {
	//时间间隔的问题？
	var container = $(".one-container");
	var buttons = $(".pic-button").find("span");
	// var list = document.getElementByClassName(".pic-list");
	//classname不起作用？byid才有left的定义
	var list = document.getElementById("pic-list"); 
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");

	var index = 1;    //索引当前图片
	var len = 5;      //不同图片数量
	var timer;        //定时器
	var isAnimated = false;   //判断切换是否进行
	var interval = 2600;      //自动播放定时器秒数3s

	function animate(offset) {
		isAnimated = true;   //切换进行中
        var time = 300;      //位移总时间
        var inteval = 8;     //位移之间暂停的时间
        var speed = offset/(time/inteval);   //每次位移量
        var left = parseInt(list.style.left) + offset; //目标值

        var go = function () {
        	//这两种情况表示还在切换中
	        if ( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
	            list.style.left = parseInt(list.style.left) + speed + 'px';
	            setTimeout(go, inteval); //继续执行切换go()函数
	        }
	        else {
	            list.style.left = left + 'px';
	            if(left > -520){
	                list.style.left = -520 * len + 'px';
	            }
	            if(left < (-520 * len)) {
	                list.style.left = '-520px';
	            }
	            isAnimated = false; //切换完成
	        }
        }
        go();
	}
	//用于为按钮添加样式
    function buttonStyle() {
        //先找出原来有.on类的按钮，并移除其类
        for (var i = 0; i < buttons.length ; i++) {
            if( buttons[i].className == 'on'){
                buttons[i].className = '';
                break;
            }
        }
        //为当前按钮添加类
        buttons[index - 1].className = 'on';
    }
     //自动播放
    function autoPlay() {
        timer = setTimeout(function () {
            next.onclick();
            autoPlay();
        }, interval);
    }
     //清除定时器
    function timeStop() {
        clearTimeout(timer);
    }
    //右点击
    next.onclick = function () {
        if (isAnimated) {    //如果切换还在进行，则直接结束，直到切换完成
            return;
        }
        if (index == 5) {
            index = 1; 
        }
        else {
            index += 1;
        }
        animate(-520);
        buttonStyle();
    }
    //左点击
    prev.onclick = function () {
        if (isAnimated) {       //如果切换还在进行，则直接结束，直到切换完成
            return;
        }
        if (index == 1) {
            index = 5;
        }
        else {
            index -= 1;
        }
        animate(520);
        buttonStyle();
    }
    //按钮点击
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            if (isAnimated) {         //如果切换还在进行，则直接结束，直到切换完成
                return;
            }
            if(this.className == 'on') {     //如果点击的按钮是当前的按钮，不切换，结束
                return;
            }
            //获取按钮的自定义属性index，用于得到索引值
            var myIndex = parseInt(this.getAttribute('index'));
            var offset = -520 * (myIndex - index);   //计算总的位移量

            animate(offset);
            index = myIndex;   //将新的索引值赋值index
            buttonStyle();
        }
    }

    container.onmouseover = timeStop;//父容器的移入移出事件
    container.onmouseout = autoPlay;

    autoPlay();  //调用自动播放函数

}