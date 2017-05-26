var touchModule = function (id,preHref,nextHref) {
	var $elementId = $(id); 
	var startX = 0;
	var startY = 0;
	var endX = 0;
	var endY = 0;
	var touchX = 0;
	var touchY = 0;

	$elementId.on("touchstart",function (e) {
		var _event = e.targetTouches[0];
		startX = _event.pageX;
		startY = _event.pageY;

		// console.log("start"+"____"+e.timeStamp+"****"+startX+"****"+startY)
	});
	$elementId.on("touchmove",function (e) {
		e.preventDefault()
		var _event = e.targetTouches[0];
		endX = _event.pageX;
		endY = _event.pageY;
		touchX = endX - startX;
		touchY = endY - startY;
		// console.log("move" +"******"+endX+"****"+endY)
	});
	$elementId.on("touchend",function (e) {
		var _event = e.targetTouches[0];
		touchDistance();
		// console.log("end"+'*****'+e.timeStamp+"*****"+(endX- startX)+'******'+(endY - startY))

	})
	function touchDistance() {
		if(touchX>180 && preHref != null){
			// console.log("+200"+"****"+touchX+"right");
			location.href =preHref;
		}else if(touchX<-180 && nextHref != null){
			// console.log("-200"+"****"+touchX+"left");
			location.href =nextHref;
		}
		if(touchY>200 ){
			// console.log("+200"+"****"+touchY+"down");
		}else if(touchY<-200){
			// console.log("-200"+"****"+touchY+"top");
		}
		touchX = 0;
		touchY = 0;
	}
}
module.exports  = touchModule;