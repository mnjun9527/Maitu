// https://vitepress.dev/guide/custom-theme
//注册组件

import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style/index.css'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({app}) { 
    // 注册全局组件
    // app.component('Linkcard' , Linkcard)
  },


  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  }
} satisfies Theme