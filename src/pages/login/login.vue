<template>
  <div class="vuepress-admin-body">
    <div class="login-box">
      <div class="form-input">
        <label for="acccount">账号：</label>
        <input 
          v-model="user.acccount" 
          name="acccount"  
        >
      </div>
      <div class="form-input">
        <label for="password">密码：</label>
        <input
          v-model="user.password"
          name="password" 
          type="password"
        >
      </div>
      <button 
        class="login-btn" 
        @click="handleClick"
      >
        登录
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent } from 'vue'
import { setUserToken } from '/src/auth/user'
import { useRouter } from 'vue-router'
export default defineComponent( {
  setup() {
    const router = useRouter();

    const user = reactive({
      acccount: '',
      password: ''
    })
    const handleClick = () => {
        console.log('提交登录，获取token');
        console.log('user', user);
        setUserToken('123');
        router.replace({
          path: '/'
        })
    }
    return {
      user,
      handleClick
    }
  }
});
</script>

<style lang="scss" scoped>
@import "../../common/common.scss";
#{$pre-fix}-body {
  // background-color: #e45675;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/login/login-bg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-box {
    width: 400px;
    height: 200px;
    background-color: rgb(47, 55, 91);
    box-shadow: 5px 5px 20px 5px rgb(47, 55, 91);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    .form-input {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      color: #fff;
      label {
        min-width: 50px;
        text-align: right;
      }
      input {
        border: 0;
        background-color: transparent;
        border: 1px solid #414893;
        line-height: 1.5;
        color: #fff;
        font-size: 14px;
        padding: 5px 10px;
      }
    }
    .login-btn {
      background: #2f375b;
      border: 1px solid#5a6284 00;
      color: #fff;
      padding: 10px 20px;
    }
  }
}
</style>
