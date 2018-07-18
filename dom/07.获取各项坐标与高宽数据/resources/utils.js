
//内边距 
function getInnerWH(obj) {
	return {
		w : obj.clientWidth,
		h : obj.clientHeight
	}
}

//外边距
function getOuterWH(obj) {
	return {
		w : obj.offsetWidth , 
		h : obj.offsetHeight
	}
}

//可滚动的整体高宽
function getScrollWH(obj) {
	return {
		w : obj.scrollWidth , 
		h : obj.scrollHeight
	}
}

//滚动时 被卷起的高宽
function getScrollTL(obj) {
	return {
		t : obj.scrollTop , 
		l : obj.scrollLeft
	}
}

//获取元素的相对于父级元素的位移
function getAbsoluteXY(obj) {
	return {
		x : obj.offsetLeft ,  //obj.offsetParent
		y : obj.offsetTop
	}
}

function getRelativeXY(obj) {
	return {
		x : obj.scrollLeft ,
		y : obj.scrollTop
	}
}

//获取 上下左右
function getLTRB(obj) {
	var ltrb = obj.getBoundingClientRect(); 
	return {
		left : ltrb.left , 
		top : ltrb.top , 
		right : ltrb.right , 
		bottom : ltrb.bottom 
	}
}

//屏幕可用高宽
function getScreenAvailWH() {
	return {
		w : screen.availWidth , 
		h : screen.availHeight
	}
}

//当前屏幕分辨率
function getCurrScreenWH() {
	return {
		w : window.screen.width , 
		h : window.screen.height
	}
}

//获取当前鼠标事件的 XY 
function getMouseXY() {
	return {
		x : event.x , 
		y : event.y
	}
}
