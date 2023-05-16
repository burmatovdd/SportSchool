<link rel="stylesheet" href="login.css">
<template>
<div class="login">
    <div class="container">
      <div class="login-content">
        <p>Добро пожаловтаь в Спортивную школу СССР</p>
        <input id="login" type="text" class="login-input" placeholder="login">
        <input id="password" type="password" class="login-input" placeholder="password">
        <p id="error" class="no-error error">Неверный логин или пароль</p>
        <button @click="checkLogin" class="login-button">login</button>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
export default defineComponent( {
  name: "login",
  methods:{
    checkLogin: function (){
      const admin = {
        login: 'admin',
        password: 'admin'
      }

      const employee = {
        login: 'member01',
        password: 'member01'
      }

      let login = document.getElementById('login').value
      let password = document.getElementById('password').value

      console.log("login:", login)
      console.log("password:", password)

      switch (login){
        case 'admin':
          if (login !== admin.login || password !== admin.password){
            let error = document.getElementById('error')
            error.classList.remove("no-error")
          }else{
            this.$router.push('/mainForAdmin')
          }
          break;
        case 'member01':
          if (login !== employee.login || password !== employee.password){
            let error = document.getElementById('error')
            error.classList.remove("no-error")
          }else{
            this.$router.push('/mainForEmployee')
          }
          break;
        default:
          let error = document.getElementById('error')
          error.classList.remove("no-error")
      }
    }
  }
})
</script>

<style lang="css">
@import "login.css";
</style>