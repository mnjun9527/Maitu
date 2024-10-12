<template>
  <div>
    <!-- 模态框，当 showModal 为 true 时显示 -->
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <div class="lock-container">
          <!-- 锁的图标 -->
          <span class="icon-lock">🔒</span>
        </div>
        <p class="text-white">本页面只允许密码访问</p>
        <!-- 输入密码的文本框 -->
        <input v-model="inputPassword" type="password" placeholder="输入密码">
        <!-- 提交按钮 -->
        <button @click="checkPassword">提交</button>
        <!-- 显示错误消息，当密码错误时 -->
        <p v-if="error" class="error-message">密码错误，请重试。</p>
      </div>
    </div>

    <!-- 如果密码正确，显示插槽内容 -->
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    password: {
      type: String, // 密码属性，必填
      required: true,
    },
  },
  data() {
    return {
      inputPassword: '', // 用户输入的密码
      error: false,      // 错误标志，用于控制错误提示
      showModal: true,   // 控制模态框显示的标志
    };
  },
  methods: {
    // 检查输入的密码是否正确
    checkPassword() {
      if (this.inputPassword === this.password) {
        localStorage.setItem('passwordCorrect', true); // 将正确密码状态存储到 localStorage
        this.showModal = false; // 密码正确后关闭模态框
      } else {
        this.error = true; // 显示错误提示
      }
    },
  },
  mounted() {
    // 组件挂载后检查 localStorage 中的密码状态
    const passwordCorrect = localStorage.getItem('passwordCorrect');
    if (passwordCorrect) {
      this.showModal = false; // 如果密码已正确，则直接关闭模态框
    }
  },
};
</script>

<style scoped>
.modal {
  position: fixed; /* 固定位置，覆盖全屏 */
  top: 0;
  left: 0;
  width: 100%; /* 宽度和高度占满整个屏幕 */
  height: 100%;
  display: flex; /* 使用 flexbox 布局 */
  justify-content: center; /* 垂直居中 */
  align-items: center; /* 水平居中 */
  background-color: rgba(0, 0, 0, 0.7); /* 半透明背景 */
  z-index: 9999; /* 确保在最上层 */
}

.modal-content {
  background: linear-gradient(145deg, #1d1d1d, #2a2a2a); /* 渐变背景 */
  padding: 30px; /* 内边距 */
  border-radius: 15px; /* 圆角 */
  text-align: center; /* 文本居中 */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); /* 阴影效果 */
  width: 90%; /* 宽度 */
  max-width: 400px; /* 最大宽度 */
}

.lock-container {
  display: flex; /* 使用 flexbox 布局 */
  justify-content: center; /* 居中 */
  align-items: center; /* 居中 */
  margin-top: 30px; /* 上边距 */
  margin-bottom: 50px; /* 下边距 */
}

.icon-lock {
  font-size: 70px; /* 图标大小 */
  color: #FFD700; /* 图标颜色 */
}

input {
  margin: 10px 0; /* 上下边距 */
  padding: 10px; /* 内边距 */
  width: 100%; /* 宽度占满父元素 */
  border: none; /* 无边框 */
  border-radius: 5px; /* 圆角 */
  background-color: rgb(20, 22, 43); /* 背景色 */
  color: white; /* 文本颜色 */
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.2); /* 内阴影效果 */
}

.error-message {
  color: red; /* 错误消息颜色 */
  margin-top: 20px; /* 上边距 */
}

button {
  margin-top: 15px; /* 上边距 */
  width: 100%; /* 宽度占满父元素 */
  padding: 10px 20px; /* 内边距 */
  border: none; /* 无边框 */
  border-radius: 5px; /* 圆角 */
  background-color: rgb(58, 109, 240); /* 背景颜色 */
  color: white; /* 文本颜色 */
  cursor: pointer; /* 鼠标悬停时显示为指针 */
  transition: background-color 0.3s; /* 背景颜色变化动画 */
}

button:hover {
  background-color: #0056b3; /* 悬停时的背景颜色 */
}

.text-white {
  color: white; /* 使文本颜色为白色 */
}

</style>
