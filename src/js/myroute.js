import homeModule from './page1.js';
import rankModule from './page2.js';
import BOMModule from './page3.js';
import cityNameModule from './page4.js';
import loginModule from './page5.js';


var routeModule = (function () {
	var pageMap = {    //确定有哪些页面
		home:homeModule,
		rank:rankModule,
		login:loginModule,
		cityName:cityNameModule,
		BOM:BOMModule
	}
	var current_page=null; //当前页
	var pre_page=null;     //上一页


	var pageInit={
		//当前页面有无被初始化
	}

	function routerControl(routeName) {
		if(pageMap[routeName]){
			var module = pageMap[routeName];
			if( typeof pageInit[routeName] === "undefined"){
				
				module.init(); //页面的初始化
				module.enter();//页面的加载
				pageInit[routeName] = module; //记录已经被初始化
				
				//记录当前页还是前一页
				pre_page = current_page; // 前一页等于上一次的当前页
				current_page = module;   //当前页等于这一次的页面
				if(pre_page){ //如果有上一页就给上一页进行离开处理
					pre_page.leave();//上一页离开
				}
			}else{
				module.enter();

				pre_page = current_page; // 前一页等于上一次的当前页
				current_page = module;   //当前页等于这一次的页面
				if(pre_page){ //如果有上一页就给上一页进行离开处理
					pre_page.leave();//上一页离开
				}
			}

		}else{
			pageMap["home"].init();
		}
	}
	return {
		router:routerControl
	}
})();


new Router({
	'/:pageName': function (pageName) {
			//执行对应的路由变化
			routeModule.router(pageName);
	}.bind(this)
}).init('/home');