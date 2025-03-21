import { defineConfig } from 'vitepress';
//导航栏
import nav from './nav.mts';
//时间线
import timeline from 'vitepress-markdown-timeline';
//侧边栏
import sidebar from './sidebar.mts';
//流程图
import { withMermaid } from 'vitepress-plugin-mermaid'

import vue from '@vitejs/plugin-vue';
//代码组图标+自定义标题
//import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'
//自定义代码组图标
// import { groupIconMdPlugin, groupIconVitePlugin, localIconLoader } from 'vitepress-plugin-group-icons'

//自动侧边栏插件  待学习
// import { generateSidebar } from 'vitepress-sidebar';
// const vitepressSidebarOptions = {
//   /* Options... */
// };
export default withMermaid(  
  defineConfig({
  title: 'Maitu 商贸',
  description: '产品资料站点',
  base: '/Maitu/',

  lastUpdated: true, //首次配置不会立即生效，需git提交后爬取时间戳
  //文档目录的路径 报错
  //srcDir: 'docs',
  themeConfig: {
    //路径要放在docs/pubic/目录下
    logo: '/yumao.png',
    // 设置站点标题
    // siteTitle: false, //标题隐藏
    //导航栏
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short', // 可选值full、long、medium、short
        timeStyle: 'medium' // 可选值full、long、medium、short
      },
    },

    nav,
    //下面是全文搜索的配置项
    // 设置搜索框的样式
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档',
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
            },
          },
        },
      },
    },
    //手机端深浅模式文字修改
    darkModeSwitchLabel: '深浅模式', 
    //侧边栏文字更改(移动端)
    sidebarMenuLabel:'目录',
    //返回顶部文字修改
    returnToTopLabel:'返回顶部', 
    
    //编辑本页
    // editLink: { 
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path', // 改成自己的仓库
    //   text: '在GitHub编辑本页'
    // },

    //社交链接
    socialLinks: [ 
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }, 
      { icon: 'twitter', link: 'https://twitter.com/' }, 
      // { icon: 'discord', link: 'https://chat.vitejs.dev/' },
      {icon: {
        svg: '<svg t="1703483542872" class="icon" viewBox="0 0 1309 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6274" width="200" height="200"><path d="M1147.26896 912.681417l34.90165 111.318583-127.165111-66.823891a604.787313 604.787313 0 0 1-139.082747 22.263717c-220.607239 0-394.296969-144.615936-394.296969-322.758409s173.526026-322.889372 394.296969-322.889372C1124.219465 333.661082 1309.630388 478.669907 1309.630388 656.550454c0 100.284947-69.344929 189.143369-162.361428 256.130963zM788.070086 511.869037a49.11114 49.11114 0 0 0-46.360916 44.494692 48.783732 48.783732 0 0 0 46.360916 44.494693 52.090549 52.090549 0 0 0 57.983885-44.494693 52.385216 52.385216 0 0 0-57.983885-44.494692z m254.985036 0a48.881954 48.881954 0 0 0-46.09899 44.494692 48.620028 48.620028 0 0 0 46.09899 44.494693 52.385216 52.385216 0 0 0 57.983886-44.494693 52.58166 52.58166 0 0 0-57.951145-44.494692z m-550.568615 150.018161a318.567592 318.567592 0 0 0 14.307712 93.212943c-14.307712 1.080445-28.746387 1.768001-43.283284 1.768001a827.293516 827.293516 0 0 1-162.394168-22.296458l-162.001279 77.955749 46.328175-133.811485C69.410411 600.858422 0 500.507993 0 378.38496 0 166.683208 208.689602 0 463.510935 0c227.908428 0 427.594322 133.18941 467.701752 312.379588a427.463358 427.463358 0 0 0-44.625655-2.619261c-220.24709 0-394.100524 157.74498-394.100525 352.126871zM312.90344 189.143369a64.270111 64.270111 0 0 0-69.803299 55.659291 64.532037 64.532037 0 0 0 69.803299 55.659292 53.694846 53.694846 0 0 0 57.852923-55.659292 53.465661 53.465661 0 0 0-57.852923-55.659291z m324.428188 0a64.040926 64.040926 0 0 0-69.574114 55.659291 64.302852 64.302852 0 0 0 69.574114 55.659292 53.694846 53.694846 0 0 0 57.951145-55.659292 53.465661 53.465661 0 0 0-57.951145-55.659291z" p-id="6275"></path></svg>'
      },
      link: 'https://weixin.qq.com/', 
      // 您也可以为可访问性添加自定义标签（可选但推荐）：
      ariaLabel: 'wechat'
      }
    ], 

    //侧边栏导入
    sidebar: { ...sidebar } as any,
    //右边大纲
    outline: {
      level: [2, 3], // 显示2-4级标题
      // level: 'deep', // 显示2-6级标题
      label: '当前页大纲', // 文字显示
    },
    // outline:false, // 关闭标题显示
    // outlineTitle:'当前页大纲', //老方式设置标题

    footer: {
      //message: 'Released under the MIT License.',
      //这里是页脚
      copyright: 'Copyright © 2024-present 迈途商贸',
    },
  },

  markdown: {
    
    math: true, // 启用数学公式
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息',
    },
    

    //时间线
    config: (md) => {
      md.use(timeline);
      //md.use(groupIconMdPlugin); //代码组图标
    },
    
    //行号
    lineNumbers: false,
  },

  vite: { 
    plugins: [
      //groupIconVitePlugin() //代码组图标   
      // groupIconVitePlugin(
      //   { 
      //   customIcon: {
      //     hs: localIconLoader(import.meta.url, '../public/hs.svg'), //本地ts图标导入
      //     pnpm: 'logos:square', //js图标
      //     md: 'logos:markdown', //markdown图标
      //     css: 'logos:css-3', //css图标
      //   },
      // }
      // ) //代码组图标
    ],
  },


  //appearance:true, //默认浅色且开启切换
  //启用深色模式
  appearance: 'dark',
  


  //fav图标
  // head: [
  //   ['link',{ rel: 'icon', href: '/苹果.png'}],
  // ],

  //添加谷歌字体
  head: [
    
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }
    ],
    [
      'script',
      { src: 'Valine.min.js'}, // 添加 Valine 脚本
    ],
  ],

  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  // optionally set additional config for plugin itself with MermaidPluginConfig
  mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container 
  },

  


  
  
  
}));

// module.exports = {
//   // 其他配置省略
//   head: [
//     [
//       "script",
//       { src: '/Valine.min.js'},
//     ],
//   ],
// }

/*nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],*/

// sidebar: [
//   {
//     text: 'Examples',
//     items: [
//       { text: 'Markdown Examples', link: '/markdown-examples' },
//       { text: 'Runtime API Examples', link: '/api-examples' }
//     ]
//   }
// ],

//     socialLinks: [
//       { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
//     ]
//   }
// })
