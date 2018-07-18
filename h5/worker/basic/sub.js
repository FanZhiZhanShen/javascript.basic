//子线程向  主线程发送信息 
postMessage('hello');


setTimeout(function() {
	console.log('end 2');
}, 2000);
setTimeout(function() {
	console.log('end 1');
}, 100);

onmessage = function(event) {
	console.log("收到了来自于主线程的消息 : " + event.data);
};
//console.log('end');