
var yargs = require('yargs').argv;
var gulp = require('gulp');
var less = require('gulp-less');
//var header = require('gulp-header');
var minify = require('gulp-minify-css');
var minifyJs = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var minifyHtml = require('gulp-minify-html');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config')
//var ExtractTextPlugin = require('extract-text-webpack-plugin');


/*--------------src文件下需要操作的文件夹名称------------------------*/
                // var  _src = "project_0809_niushilaixi";
                // var  _src = "project_1";
                var  _src = "";



var option = {base: 'src'}; //基准目录从src目录开始
var dist = __dirname + '/dist';
var _less_src =  "src"+_src+"/**/*.less";
var _css_src =  "src"+_src+"/**/*.css";
var _html_src =  "src"+_src+"/**/*.html";
var _img_src =  "src"+_src+"**/*.{png,jpg,gif,ico}";
var _js_src =  "src"+_src+"/**/*.js";


gulp.task("default", ['release'], function() {  //默认 直接进入该命令 
    //执行默认任务之前，你需要执行release任务（完成部署操作）
    if (yargs.s) {
        gulp.start('server');
    }

    if (yargs.w) {
        gulp.start('watch');
    }
    gulp.run('autoUpdateSource');
});

gulp.task("transformLess", function() {
    //gulp.src("src/style/**/*.less")/到关于所有less的发源地
    //.pipe(less())//把所有less文件转化css文件
    //.pipe(gulp.dest(dist));
    //如果说你直接这么执行，会在dist目录下发现这样的文件结果：
     /*dist
        home
            header.css*/

    gulp.src(_less_src, option)//到关于所有less的发源地
    .pipe(less())//把所有less文件转化css文件
    .pipe(autoprefixer()) //自动匹配前缀操作
    //.pipe(concat('index_all.min.css'))
    .pipe(minify())//压缩css操作
    .pipe(gulp.dest(dist))
     //自动进行同步操作
     /*dist
        style
            home
                header.css*/
});
gulp.task("release", function(){
    //发布、部署操作 --》 就是要把src里面的内容全部转移到dist里去
    gulp.run('html');
    gulp.run('transformLess');
    gulp.run('img');
    // gulp.run('js');
    gulp.run('styles');
    gulp.run('webpack');
})
gulp.task("styles", function(){
    //样式的发布任务
     gulp.src(_css_src, option)
    // .pipe(concat('common.min.css'))
    .pipe(minify())//压缩css操作
    .pipe(gulp.dest(dist))
    .pipe(browserSync.reload({stream: true}));
})

gulp.task("html", function(){
    gulp.src(_html_src, option) //到src下所有的html的发源地
    .pipe(minifyHtml()) //进行html压缩工作，目的在于加速传输速度
    .pipe(gulp.dest(dist))
    .pipe(browserSync.reload({stream: true}));//当监听到html文件变化的时候，执行同步更新操作
})
gulp.task("img", function(){
    gulp.src('src/img/**/*.{png,jpg,gif,ico}')
        .pipe(gulp.dest(__dirname + '/dist/img'))
})

gulp.task("js", function(){
    gulp.src(_js_src, option)
    // .pipe(minifyJs())
    .pipe(gulp.dest(dist))       
})
//自动更新资源文件，比如js/less
gulp.task('autoUpdateSource', function(){
    //单独的监听所有与less相关的文件，做到对less转成css的工作
    gulp.watch(_less_src, ['transformLess'])
    //单独的监听所有与html相关的文件，若改变，执行html任务
    gulp.watch(_html_src, ['html']);
     // gulp.watch([_js_src], ['js']);
     gulp.watch([_img_src], ['img']);
   gulp.watch(['src/**/*.js'], ['webpack']);
 // gulp.src('/src/js/index.js')
 // .pipe(webpackTask(webpackModule))
    
});

gulp.task('cleanTask', function(){   
    return gulp.src(dist).pipe(clean());//清空dist目录
});

gulp.task('server', function () {
    yargs.p = yargs.p || 8080;
    browserSync.init({
        server: {
            baseDir: "./dist" //--> localhost:8080/
        },
        port: yargs.p,
        startPath: './'
    });
});

gulp.task('webpack',function () {
	return gulp.src('./src/js/test.js') //找到需要进行编译的文件
	.pipe(webpack(webpackConfig))       //放到webpackConfig 进行编译
	.pipe(gulp.dest('dist/js'));        //编译完成后放到该目录下
});
