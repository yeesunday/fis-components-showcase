fis-components-showcase
===================

FIS 组件使用 demo，以及网站开发目录结构示范

安装插件

```bash
npm install fis-postprocessor-require-async -g
npm install fis-postpackager-autoload -g
npm install fis-packager-depscombine -g
npm install fis-parser-ejs -g //ejs 编译插件
```

安装 components

```
# 进入 fis-components-showcase 目录后执行
fis install
```

编译运行

```
fis release
fis server start
```

## 注意

demo 中很多资源都是通过注释来标记依赖而不是直接引用。原因是方便打包工具根据依赖自动合并所有依赖。如果是其他方案 fisp 、jello 或者 yogurt 如果用 fis 提供的标签，没必要通过注释来标志依赖。
