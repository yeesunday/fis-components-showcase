var path  = require('path');

fis.config.set('settings.postprocessor.jswrapper.type', 'amd');

// 更多 roadmap.path 配置，请查看 http://fis.baidu.com/docs/advance/roadmap.html
fis.config.set('roadmap.path', [
    {
        reg: /^\/components\/.*\.js$/i,
        isMod: true
    },

    {
        reg: /\/modules\/([^\/]+)\/\1\.js$/,
        id: '$1',
        isMod: true,
        useHash: true
    },

    {
        reg: /^\/scripts\/(.*)\.(js)$/i,
        isMod: true,
        id: '$1',
        useHash: true
    },

    {
        reg : 'style/css/**.scss',
        useSprite: true,
        useHash: true
    },

    // 下划线打头的一般都是被 inline 的文件，所以不需要发布，同时也不需要优化处理。
    {
        reg: '**/_*.*',
        release: false,
        useAMD: false,
        useOptimizer: false
    },

    // 不是 isMode 不会在 map.json 里面。
    // 依靠它来读取 html 文件的依赖。
    {
        reg: /\/pages\/(.*\.(?:html))/i,
        isMod: true,
        release : '$1'
    }
].concat(fis.config.get('roadmap.path', [])));

/**********************配置组件安装******************************/
//fis.config.set('component.dir', 'component_modules');
fis.config.set('modules.postprocessor.html', 'require-async');
fis.config.set('modules.postprocessor.js', 'jswrapper, require-async');

// 开起 autuload, 好处是，依赖自动加载。
fis.config.set('modules.postpackager', 'autoload');


/**********************配置打包策略******************************/
// 使用 depscombine 是因为，在配置 pack 的时候，命中的文件其依赖也会打包进来。
fis.config.set('modules.packager', 'depscombine');
//
//fis.config.merge({
//    pack : {
//        'pkg/util.js' : ['scripts/util/util1.js', 'scripts/util/util2.js']
//    }
//});

/**********************配置模板引擎******************************/
//tell fis that `.ejs` is a js file
fis.config.set('roadmap.ext.ejs', 'js');
//tell fis that parse `.ejs` file by using `fis-parser-ejs` plugin
fis.config.set('modules.parser.ejs', 'ejs');
//set options if you need
//@see https://github.com/visionmedia/ejs#options
fis.config.set('settings.parser.ejs', {
    open : '<%',
    close : '%>'
});