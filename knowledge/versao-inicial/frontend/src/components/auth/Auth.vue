<template>
  <div class="auth-content">
    <div class="auth-modal">
      <img src="@/assets/logo.png" alt="logo" width="200" />
      <hr />

        <div class="auth-title">{{showSignup ? 'Cadastro' : 'Login'}}</div>
      <input v-if="showSignup" v-model="user.name" type="text" name="name" placeholder="Nome">
      <input type="text" name="email" v-model="user.email" placeholder="E-mail">
      <input type="password" v-model="user.password" placeholder="Senha...">
      <input v-if="showSignup" type="password" v-model="user.confirmPassword" placeholder="Confirme a Senha...">

      <button class="btn btn-primary" v-if="!showSignup" @click="signin">Entrar</button>
      <button class="btn btn-primary" v-else @click="signup">Cadastrar</button>

      <a href @click.prevent="showSignup = !showSignup" >
          <span v-if="showSignup"> Já tem cadastro? Acesse o login!</span>
          <span v-else> Não tem cadastro? Registre-se aqui</span>
      </a>
    </div>
  </div>
</template>

<script>
import { baseUrl, showError, userKey } from "@/global";
import axios from "axios";

export default {
  name: "Auth",
  data: function () {
    return {
      showSignup: false,
      user: {},
    };
  },

  methods: {
      signin(){
          const url = `${baseUrl}/signin`
          axios.post(url, this.user).then(res => {
              this.$store.commit('setUser', res.data)
              localStorage.setItem(userKey, JSON.stringify(res.data))
              this.$router.push({path: '/'})
          }).catch(showError)
      },
      signup(){
          const url = `${baseUrl}/signup`
          axios.post(url,this.user).then(() => {
              this.showSignup = false
              this.user = {}
              this.$toasted.global.defaultSuccess()
          }).catch(showError)

      }
  }
};
</script>

<style>
.auth-content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.auth-modal {
  background-color: #fff;
  width: 350px;
  padding: 35px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
  align-items: center;
}
.auth-title{
    font-size: 1.2rem;
    font-weight: 100;
    margin-top: 10px;
    margin-bottom: 15px;
}

.auth-modal input {
    border: 1px solid #bbb;
    width: 100%;
    margin-bottom: 15px;
    padding: 3px 8px;
    outline: none;
}

.auth-modal button {
    align-self: flex-end;
    padding: 5px 15px;
}

.auth-modal a {
    margin-top: 35px;
}

.auth-modal hr {
    border: 0;
    width: 100%;
    height: 2px;
    background-image: linear-gradient(to right,
    rgba(120,120,120,0),
    rgba(120,120,120,0.75),
    rgba(120,120,120,0));
}
</style>