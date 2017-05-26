//这是我们项目中，执行全局初始化的一个文件

//routeModule.router('home'); //告诉页面，首页发生了变化




//第三方插件会暴露一个全局Router变量，
//专门负责监听hash值的变化
new Router({
	'/:pageName': function (pageName) {
			//执行对应的路由变化
			routeModule.router(pageName);
	}.bind(this)
}).init('/home');