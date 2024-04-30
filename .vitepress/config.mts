import { defineConfig } from 'vitepress';
//导航栏
import nav from './nav.mts';
//时间线
import timeline from 'vitepress-markdown-timeline';
//侧边栏
import sidebar from './sidebar.mts';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '迈途商贸有限公司',
  //这里可以不用改
  description: '产品资料站点',
  //服务器需要注释下面
  // base: '/Maitu/',
  //文档目录的路径 报错
  //srcDir: 'docs',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    //路径要放在docs/pubic/目录下
    logo: '/logo.svg',
    //导航栏
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

    //侧边栏导入
    sidebar: { ...sidebar } as any,
    // sidebar: [
    //   {
    //     text: '儿童款',
    //     items: [
    //       { text: '基础参数', link: '/奥克斯洗鞋机/儿童款/1.基础参数' },
    //       { text: '产品讲解', link: '/奥克斯洗鞋机/儿童款/2.产品讲解' },
    //     ],
    //   },

    //   {
    //     text: '居家中小款',
    //     items: [
    //       { text: '基础参数', link: '/奥克斯洗鞋机/居家中小款/1.基础参数' },
    //       { text: '产品讲解', link: '/奥克斯洗鞋机/居家中小款/2.产品讲解' },
    //     ],
    //   },

    //   {
    //     text: '豪华大款',
    //     items: [
    //       { text: '基础参数', link: '/奥克斯洗鞋机/豪华大款/1.基础参数' },
    //       { text: '产品讲解', link: '/奥克斯洗鞋机/豪华大款/2.产品讲解' },
    //     ],
    //   },
    //   {
    //     text: '经典双桶款',
    //     items: [
    //       { text: '基础参数', link: '/奥克斯洗鞋机/经典双桶款/1.基础参数' },
    //       { text: '产品讲解', link: '/奥克斯洗鞋机/经典双桶款/2.产品讲解' },
    //     ],
    //   },
    //   {
    //     text: '太空舱款',
    //     items: [
    //       { text: '基础参数', link: '/奥克斯洗鞋机/太空舱款/1.基础参数' },
    //       { text: '产品讲解', link: '/奥克斯洗鞋机/太空舱款/2.产品讲解' },
    //     ],
    //   },
    // ],

    footer: {
      //message: 'Released under the MIT License.',
      //这里是页脚
      copyright: 'Copyright © 2024-present 迈途商贸',
    },
  },
  markdown: {
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
    },
    //行号
    lineNumbers: false,
  },
});

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
