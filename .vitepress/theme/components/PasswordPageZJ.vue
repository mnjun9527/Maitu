<template>
  <div>
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <div class="lock-container">
          <span class="icon-lock">🔒</span> <!-- 使用 Unicode 锁图标 -->
        </div>
        <p>本页面只允许密码访问</p>
        <input v-model="inputPassword" type="password" placeholder="输入密码">
        <button @click="checkPassword">提交</button>
        <p v-if="error" class="error-message">密码错误，请重试。</p> <!-- 错误提示放在按钮下面 -->
      </div>
    </div>

    <!-- 当密码正确时，显示插槽中的内容 -->
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputPassword: '',
      correctPassword: '123456', // 正确密码
      error: false,
      showModal: true // 控制模态框显示
    };
  },
  methods: {
    checkPassword() {
      if (this.inputPassword === this.correctPassword) {
        localStorage.setItem('passwordCorrect', true);
        this.showModal = false; // 密码正确后关闭模态框
      } else {
        this.error = true;
      }
    }
  },
  mounted() {
    // 如果本地存储有密码正确的记录，直接跳过模态框
    const passwordCorrect = localStorage.getItem('passwordCorrect');
    if (passwordCorrect) {
      this.showModal = false;
    }
  }
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7); /* 深色背景 */
  z-index: 9999; /* 确保模态框在最上层 */
}

.modal-content {
  background: linear-gradient(145deg, #1d1d1d, #2a2a2a); /* 更深的渐变背景 */
  padding: 30px;
  border-radius: 15px; /* 圆角效果 */
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); /* 增加阴影 */
  width: 90%; /* 设置宽度 */
  max-width: 400px; /* 最大宽度 */
}

.lock-container {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  margin-top: 30px; /* 设置锁图标与上方的间距 */
  margin-bottom: 50px; /* 图标与文本之间的间距 */
}

.icon-lock {
  font-size: 70px; /* 增加图标大小 */
  color: #FFD700; /* 图标颜色为金色 */
}

input {
  margin: 10px 0; /* 输入框上下间距 */
  padding: 10px; /* 增加内边距 */
  width: 100%; /* 设置宽度为 100% */
  border: none; /* 去掉边框 */
  border-radius: 5px; /* 圆角效果 */
  background-color: rgb(20, 22, 43); /* 输入框背景 */
  color: white; /* 输入框文字颜色 */
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.2); /* 内阴影 */
}

.error-message {
  color: red;
  margin-top: 10px; /* 上边距 */
}

button {
  margin-top: 15px; /* 增加按钮与输入框之间的间距 */
  width: 100%; /* 设置按钮宽度为 100% */
  padding: 10px 20px;
  border: none; /* 去掉边框 */
  border-radius: 5px; /* 圆角效果 */
  background-color: rgb(58, 109, 240); /* 按钮颜色 */
  color: white; /* 按钮文字颜色 */
  cursor: pointer; /* 鼠标样式 */
  transition: background-color 0.3s; /* 动画效果 */
}

button:hover {
  background-color: #0056b3; /* 鼠标悬停时的颜色 */
}
</style>
