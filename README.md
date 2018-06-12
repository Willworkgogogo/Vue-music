# Vue-music


基于Vue.js2.x开发仿一个音乐播放器应用。个人Vue.js练习项目，进阶...


## 1.目录结构
```shell
vue-music/
    build/ 构建工具，存放webpack配置、打包文件
    config/ 开发环境配置
    node_modules/ node包依赖
    src/ 源码目录
        api/ 封装了接口了函数、常用model
            config.js      公用参数，ERR_OK...
            recommend.js   推荐页面接口函数
            singer.js      歌手页面接口函数
        assets/ 资源
        base/ 基础组件
            listview/ 歌手列表，多级联动
            loading/  loading组件
            scroll/   滚动组件
            slider/   轮播组件
        common/ 公用静态资源
            fonts/
            image/
            js/
            stylus/
        components/ 业务组件
            m-header/   头部组件
            rank/       排行组件
            recommend/  推荐组件
            search/     搜索组件
            singer/     歌手组件
            singer-detail/ 歌手详情
            tab/        tab组件
        router/ 路由
        store/ 第三方
        App.vue 根组件
        main.js
    static/        
```

### 2.技术栈&&插件
- better-scroll 滚动
- vue-lazyload 图片懒加载
- Vuex
- axios

### 3.Question
> need to be resolved...

1. new Promise && Promise.resolve()  the differences
1. flex

### 4.Issue
1. fastclick 和 better-scroll的click冲突，导致recommends页面的轮播图片无法点击。解决办法，在点击的img上添加class='needsclick'
1. 


### 5.知识点记录
1. data() && props 里的属性都会被检测，当设置的某个属性不需要被监测时，应该放置在created方法中
1. & | 位运算
