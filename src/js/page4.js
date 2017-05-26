
import commonModule from './module/commonModule.js';
import touchModule from './module/touchModule.js';
var cityNameModule = Object.create(commonModule);
(function () {
	var myModule = {
		el:$("#cityName"),
		preHref:"#/BOM",
		nextHref:"#/login",
		render:function () {
			// this.el.html('我是cityName')
		},
		bindEvent:function () {
			var touchM = new touchModule(this.el,this.preHref,this.nextHref);
			// this.el.click(function(){
			// 	location.href = "#/login";
			// })
		}
	}
	$.extend(cityNameModule,myModule)
})();
module.exports = cityNameModule;