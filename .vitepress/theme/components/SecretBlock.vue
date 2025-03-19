<template>
    <div class="secret-block">
      <div v-if="!unlocked" class="lock-form">
        <div class="lock-icon">🔒</div>
        <input
          v-model="inputPassword"
          type="password"
          placeholder="输入密码查看内容"
          @keyup.enter="checkPassword"
          class="password-input"
        />
        <button @click="checkPassword" class="unlock-button">解锁</button>
        <p v-if="error" class="error">密码错误，请重试</p>
      </div>
      <div v-else class="content">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      password: {
        type: String,
        required: true
      },
      // 添加唯一标识支持多个区块
      id: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        inputPassword: '',
        unlocked: false,
        error: false
      }
    },
    computed: {
      // 生成唯一存储键名
      storageKey() {
        return `secret-${this.id || btoa(this.password)}-unlocked`
      }
    },
    methods: {
      checkPassword() {
        if (this.inputPassword === this.password) {
          localStorage.setItem(this.storageKey, 'true')
          this.unlocked = true
          this.error = false
        } else {
          this.error = true
          this.inputPassword = ''
        }
      }
    },
    mounted() {
      const unlocked = localStorage.getItem(this.storageKey)
      if (unlocked) {
        this.unlocked = true
      }
    }
  }
  </script>
  
  <style scoped>
  .secret-block {
    margin: 1.5rem 0;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    position: relative;
  }
  
  .lock-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
  }
  
  .lock-icon {
    font-size: 1.8rem;
    filter: grayscale(0.3);
  }
  
  .password-input {
    padding: 0.5rem 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 200px;
    font-size: 0.9rem;
  }
  
  .unlock-button {
    padding: 0.5rem 1.5rem;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s;
  }
  
  .unlock-button:hover {
    background: #0056b3;
  }
  
  .error {
    color: #dc3545;
    font-size: 0.9rem;
    margin: 0;
  }
  
  .content {
    padding: 1rem 0;
  }
  </style>