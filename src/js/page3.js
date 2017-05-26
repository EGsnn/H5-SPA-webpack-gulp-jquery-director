
import commonModule from './module/commonModule.js';
import touchModule from './module/touchModule.js';
var BOMModule = Object.create(commonModule);
(function () {
	var myModule = {
		el:$("#BOM"),
		preHref:"#/rank",
		nextHref:"#/cityName",
		render:function () {
			alert("ok")
		},
		bindEvent:function () {
			var touchM = new touchModule(this.el,this.preHref,this.nextHref);
			// this.el.click(function(){
			// 	location.href = "#/cityName";
			// })
		}
	}
	$.extend(BOMModule,myModule)
})()


module.exports = BOMModule;
