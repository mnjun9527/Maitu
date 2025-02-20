---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  
  name: '迈途商贸有限公司'
  text: '产品信息 & 资料 & 文档 & 视频站点' 
  tagline: 'Product Information Website'
  image:
    # src: /主页.svg
    # alt: 主页图片

  actions:
    - theme: alt
      text: 打开术语库
      link: https://alidocs.dingtalk.com/spreadsheetv2/pgzJkjgGLFwJ1ezL/edit?dentryKey=pgzJkjgGLFwJ1ezL&dd_user_keyboard=false&dd_progress=true&dt_editor_toolbar=true
    - theme: VitePress
      text: 打开质检表
      link: https://shimo.im/sheets/m8AZVK0brRUGXeAb/QqyuR

features:
  - title: 🔩客服之声(开发中)
    details: 如果你需要任何的帮助,请点击这里填写告诉我们,<br>我们将尽力帮助你。<br>我们将尽力帮助你。
    link: https://www.baidu.com
  - title: 🔑经验分享(开发中)
    details: 如果您有宝贵经验分享,请点击这里提交<br>不限于：<br>疑难场景、话术、售前售后技巧、等...
    link: https://www.baidu.com
  - title: 📦站点问题反馈(开发中)
    details: 如果某个产品的资料不完善或者您想提交产品信息<br>请点击这里向我们提交, 感谢!
    link: https://www.baidu.com
---

<!-- 新增 Coze 聊天组件 -->
<div id="coze-chat-container"></div>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 动态加载 SDK
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = resolve
      script.onerror = reject
      document.head.appendChild(script)
    })
  }

  // 顺序加载 SDK 并初始化
  loadScript('https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.1.0-beta.3/libs/cn/index.js')
    .then(() => {
      new CozeWebSDK.WebChatClient({
        config: {
          bot_id: '7471649100459687986',
          container: '#coze-chat-container' // 绑定到指定容器
        },
        componentProps: {
          title: '迈途智能客服',
          position: 'right', // 右侧悬浮
          welcomeMessage: '您好，有什么可以帮您？',
          showClose: true,
          bubbleStyle: { 
            backgroundColor: '#1890ff',
            color: '#fff'
          }
        },
        auth: {
          type: 'token',
          token: 'pat_4uDltrTOwxZ1cP6NJ2tZVfr8Qyv1Z6Zu2hAaFAJe36UslC12Gm9LuvKvIgsUeQWr', // 替换实际 token
          onRefreshToken: () => 'pat_4uDltrTOwxZ1cP6NJ2tZVfr8Qyv1Z6Zu2hAaFAJe36UslC12Gm9LuvKvIgsUeQWr' 
        },
        // 用户信息
        // userInfo: {
        //   id: '12345',
        //   url: 'https://lf-coze-web-cdn.coze.cn/obj/coze-web-cn/obric/coze/favicon.1970.png',
        //   nickname: 'UserA',
        // },
      ui: {
        // 图标
        // base: {
        //     icon: 'https://lf-coze-web-cdn.coze.cn/obj/coze-web-cn/obric/coze/favicon.1970.png',
        //     layout: 'pc',
        //     zIndex: 1000,
        // },
        // asstBtn: {
        //     isNeed: true,
        // },
        footer: {
          isShow: true,
          expressionText: '开发人员: {{name}}&{{name1}}',
          linkvars: {
              name: {
                text: '张俊',
                //link: 'https://www.test1.com'
              },
              name1: {
                text: '微信:Mnjun9527',
                //link: 'https://www.test2.com'
              }
          }
        }
      },


        
      })
    })
    .catch(err => {
      console.error('SDK 加载失败:', err)
    })
})
</script>

<style scoped>

/* 自定义样式 */
/* #coze-chat-container {
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 999;
  width: 0px;
  height: 0px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  border-radius: 8px;
  overflow: hidden;
}

@media (max-width: 768px) {
  #coze-chat-container {
    width: 90%;
    height: 70vh;
    right: 5%;
    bottom: 20px;
  }
} */
</style>
