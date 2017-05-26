
import commonModule from './module/commonModule.js';
import touchModule from './module/touchModule.js';
var loginModule = Object.create(commonModule);
(function () {
	var myModule = {
		el:$("#login"),
		preHref:"#/cityName",
		nextHref:null,
		render:function () {
			// this.el.html('我是login')
		},
		bindEvent:function () {
			var touchM = new touchModule(this.el,this.preHref,this.nextHref);
		}
	}
	$.extend(loginModule,myModule)
})();

module.exports = loginModule;