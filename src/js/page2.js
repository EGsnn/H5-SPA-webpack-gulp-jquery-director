import commonModule from './module/commonModule.js';
import touchModule from './module/touchModule.js';


var rankModule = Object.create(commonModule);
(function () {
	var myModule = {
		el:$("#rank"),
		preHref:"#/home",
		nextHref:"#/BOM",
		render:function () {
			// this.el.html('rank')
		},
		bindEvent:function () {
			var touchM = new touchModule(this.el,this.preHref,this.nextHref);
			// this.el.click(function(){
			// 	location.href = "#/BOM";
			// })
		}
	}
	$.extend(rankModule,myModule)
})();

module.exports  = rankModule;