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

const initValine = () => {
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
    placeholder: "请在这里留下你的留言，如果上面填写了邮箱还能收到邮件哟，地址是点击头像跳转的地址",
  });
};

const remoteImport = (url) => {
  return new Promise((resolve) => {
    const head = document.getElementsByTagName("head")[0];
    const script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", url);
    head.appendChild(script);

    script.onload = function () {
      resolve();
    };
  });
};

watch(
  () => route.path,
  () => {
    console.log("监听路由变化");
    initValine();
  }
);

onMounted(() => {
  remoteImport('//unpkg.com/valine/dist/Valine.min.js').then(() => initValine());
});
</script>

<style scoped>
.page-edit-read {
  text-align: right;
  margin: 14px 0;
}
</style>
