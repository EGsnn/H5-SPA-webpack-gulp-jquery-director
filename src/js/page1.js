
import commonModule from './module/commonModule.js';
import touchModule from './module/touchModule.js';

var homeModule = Object.create(commonModule);
 
(function () {
	var myModule = {
		el:$("#home"),
		preHref:null,
		nextHref:"#/rank",
		render:function () {
		
		},
		bindEvent:function () {
			var touchM = new touchModule(this.el,this.preHref,this.nextHref);
			// this.el.click(function(){
			// 	location.href = "#/rank";
			// });
			console.log(111);
		}
	}
	$.extend(homeModule,myModule)
})()

module.exports  = homeModule;