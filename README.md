# 代码规范性
指定代码规范<br/>
1、所有vue文件均第一个字母大写<br/>
2、所有js文件均第一个字母小写<br/>
3、所有定义的局部变量名、方法名均第一个字母小写<br/>
4、全局常量名全部用大写字母，多个单词用_连接<br/>
5、css样式名多个单词短横线连接<br/>
6、单词的命名以英文单词，不能出现中文拼音<br/>
# 组件化开发
同一个组件只能有一个，不能重复出现
1、封装组件，外部通过设置组件参数改变组件的样式数据等信息<br/>
2、封装http请求<br/>
3、封装vuex状态请求<br/>
4、逻辑优化：在全局封装getMemeber方法，每当用户数据出现任何变化则调用getMember方法刷新localStorage的用户数据<br/>
# 目录结构说明
components:所有组件<br/>
http:http请求<br/>
vuex:通过vuex管理状态传递<br/>
html:UI界面，通过调用components的组件来呈现<br/>
assets:所有静态资源文件（css、js、images等）<br/>
router:所有路由跳转<br/>
# 主要组件：
1、登录组件<br/>
2、注册组件<br/>
3、顶部组件<br/>
4、头部组件<br/>
5、导航栏组件<br/>
6、图片轮播组件<br/>
7、用户中心左侧导航组件<br/>
8、底部组件（两部分）
9、首页、精品馆、普通馆商品列表单个商品展示组件<br/>
10、限时特卖、每日上新组件<br/>
11、特别推荐、今日主打组件<br/>
12、支付、支付完成<br/>
13、toast(吐司)、弹窗<br/>
14、confirm组件<br/>


# ppshopv2

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

# ppshopv2
铺铺商城2.0
