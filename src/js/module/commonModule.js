var commonModule = {
	init:function(){
		this.render();
		this.bindEvent();
	},
	render:function(){

	},
	bindEvent:function () {
		
	},
	leave:function () {
		var _this = this;
		var _timer =null;
		this.el.addClass("feichu")
		this.el.removeClass("feijin")
		function removeCls() {
			_this.el.removeClass("feichu")
			clearTimeout(_timer);
			return;
		}
		_timer = window.setTimeout(removeCls,2000)
	},
	enter:function () {
		this.el.addClass("feijin")
	}

}
module.exports  = commonModule;