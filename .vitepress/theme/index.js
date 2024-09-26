// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';

import './style.css';
/* 激活颜色 */
import './style/index.css';
// 图片放大插件
import mediumZoom from 'medium-zoom';
import { onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vitepress';
// 图片放大

//注册全局组件示例,并无实际作用
import Mycomponent from "./components/Mycomponent.vue"

//链接卡片
import Linkcard from "./components/Linkcard.vue"
// 只需添加以下一行代码，引入时间线样式
import 'vitepress-markdown-timeline/dist/theme/index.css';
//主页的横线
// import HomeUnderline from "./components/HomeUnderline.vue"
//西瓜视频组件
import xgplayer from "./components/xgplayer.vue"
/* @type {import('vitepress').Theme} */

//标题下添加时间有下面这个替代了
// import update from "./components/update.vue"
//标题下添加时间 字数及阅读时间
import ArticleMetadata from "./components/ArticleMetadata.vue"
//返回顶部 插槽
import backtotop from "./components/backtotop.vue"
//公告二维码
import notice from "./components/notice.vue"

//代码组图标
// import 'virtual:group-icons.css' //代码组样式
//留言板
import MyLayout from './MyLayout.vue'



export default {
  //添加谷歌字体
  head: [
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      // would render:
      //
      // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    ],
    [
      "script",
      // { src: '/Valine.min.js'},
      { src: 'https://cdn.jsdelivr.net/npm/valine@latest/dist/Valine.min.js'},
      
    ],
    // [
    //   'script',
    //   { src: '/public/Valine.min.js'}, // 引入 Valine 脚本
    // ],

    [
      'script',
      { id: 'register-sw' },
      `;(() => {
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/sw.js')
        }
      })()`,
      // would render:
      //
      // <script id="register-sw">
      // ;(() => {
      //   if ('serviceWorker' in navigator) {
      //     navigator.serviceWorker.register('/sw.js')
      //   }
      // })()
      // </script>
    ],
  ],

  extends: DefaultTheme,
 
  Layout: MyLayout,
  
  // layout() {
  //   return h(MyLayout, null, {
  //     'doc-footer-before': () => h(backtotop), // 返回顶部组件
  //     'layout-top': () => h(notice), // 二维码组件
  //   });
  // },
  
  enhanceApp({app}) { 
    // 注册全局组件 示例
    app.component('Mycomponent' , Mycomponent)
    // 注册全局组件  卡片连接
    app.component('Linkcard' , Linkcard)
    // 注册全局组件西瓜视频
    app.component('xgplayer' , xgplayer)
     // 注册全局组件 主页横线
    //  app.component('HomeUnderline' , HomeUnderline)
     //标题下添加时间
    //  app.component('update' , update)
     //标题下添加时间 字数及阅读时间
     app.component('ArticleMetadata' , ArticleMetadata)
  },



  markdown: {
    image: {
      // 启用懒加载
      lazyLoading: true,
    },
  },




  // 图片放大代码
  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
};
