<script setup>
import DefaultTheme from 'vitepress/theme';
import ValineComment from '/.vitepress/theme/ValineComment.vue'; // 确保路径正确
import notice from './components/notice.vue'; // 导入二维码组件
import backtotop from './components/backtotop.vue'; // 导入返回顶部组件
import { h } from 'vue';

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #layout-top>
      <notice /> 
    </template>
    <slot />
    <template #doc-after>
      <ClientOnly>
        <ValineComment />
      </ClientOnly>
    </template>
    <template #doc-footer-before>
      <backtotop /> 
    </template>
  </Layout>
</template>


