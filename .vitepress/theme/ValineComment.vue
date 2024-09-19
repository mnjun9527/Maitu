<template>
  <div class="page">
    <section class="page-edit">
      <div class="page-edit-read">
        <span class="leancloud-visitors" data-flag-title="Your Article Title">
          <em class="post-meta-item-text">阅读量： </em>
          <i class="leancloud-visitors-count"></i>
        </span>
      </div>
      <div id="vcomments"></div>
    </section>
  </div>
</template>

<script setup>
import { watch, onMounted } from "vue";
import { useRoute } from "vitepress";

const route = useRoute();

let valineInitialized = false;

const initValine = async () => {
  if (typeof window !== 'undefined' && !valineInitialized) {
    valineInitialized = true; // 防止重复初始化

    // 动态导入 Valine
    const Valine = (await import('valine')).default;

    let path = location.origin + location.pathname;
    document.getElementsByClassName("leancloud-visitors")[0].id = path;

    new Valine({
      el: "#vcomments",
      appId: "7s1VNathIn6To7Kwv4WJ1pY8-gzGzoHsz",
      appKey: "EmvSEF656XK6QEVgPRFiXd4B",
      notify: false,
      verify: false,
      path: path,
      visitor: true,
      avatar: "mm",
      placeholder: "来都来了，不留点啥吗",
    });
  }
};

onMounted(() => {
  initValine(); // 初始化 Valine
});

watch(
  () => route.path,
  () => {
    console.log("监听路由变化");
    initValine(); // 路由变化时重新初始化 Valine
  }
);
</script>

<style scoped>
.page-edit-read {
  text-align: right;
  margin: 14px 0;
}
</style>
