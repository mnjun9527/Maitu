<script setup lang="ts">
import { useData } from 'vitepress' // 从 VitePress 导入 useData 函数，用于获取页面数据
import { computed } from 'vue' // 从 Vue 导入 computed 函数，用于创建响应式计算属性

// 获取当前页面的数据
const { page } = useData() // 解构获取当前页面对象

// 创建一个计算属性，用于格式化最后更新时间
const date = computed(
  () => new Date(page.value.lastUpdated!) // 将页面的 lastUpdated 属性转换为日期对象
)
</script>

<template>
  <div class="LastUpdated"> <!-- 创建一个容器 div，用于显示更新时间 -->
    <p>更新时间: {{ date.toLocaleString() }}</p> <!-- 显示格式化后的更新时间 -->
  </div>
</template>

<style>
.LastUpdated {
  color: var(--vp-c-text-2); /* 设置更新时间文本的颜色 */
}
</style>
