<template>
  <div class="user-admin m-3" >
    <b-form>
      <input type="hidden" id="user-id" v-model="user.id" />
      <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="Nome:" label-for="user-name">
            <b-form-input id="user-name" type="text" :readonly='mode==="remove"' v-model="user.name" required placeholder="Informe o Nome do Usuário" />
          </b-form-group>
        </b-col>

        <b-col md="6" sm="12">
          <b-form-group label="Email:">
            <b-form-input id="user-email" type="text" v-model="user.email" required :readonly='mode==="remove"' placeholder="Informe o Email do Usuário" />
          </b-form-group>
        </b-col>
      </b-row>
    <b-form-checkbox id="user-admin" v-show='mode==="save"' v-model="user.admin" class="mt-3 mb-3">
      Administrador?
    </b-form-checkbox>
    <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="Password:" v-show='mode==="save"' label-for="user-password">
            <b-form-input id="user-password" type="password" v-model="user.password" required placeholder="Informe a Senha do Usuário" />
          </b-form-group>
        </b-col>

        <b-col md="6" sm="12">
          <b-form-group label="Confirmação de Senha:"  v-show='mode==="save"' label-for="user-confirm-password">
            <b-form-input id="user-confirm-password" type="password" v-model="user.confirmPassword" required placeholder="Informe o Email do Usuário" />
          </b-form-group>
        </b-col>
      </b-row>

    <b-row>
      <b-col xs="12">
          <b-button variant="primary" @click="save" v-if='mode=="save"'>Salvar</b-button>
          <b-button variant="danger" @click="remove" v-if='mode=="remove"' >Deletar</b-button>
          <b-button class="ml-2" @click="reset" variant="secondary">Reset</b-button>
      </b-col>
    </b-row>
    
    </b-form>

    <b-table class="mt-3" hover striped :items="users" :fields="fields">
      <template slot="actions" slot-scope="data">
        <b-button class="mr-2" variant="warning" @click="loadUser(data.item)">
          <i class="fa fa-pencil"></i>
        </b-button>

        <b-button variant="danger" @click="loadUser(data.item,'remove')">
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import { baseUrl } from "@/global";
import axios from "axios";
import {showError} from '@/global'

export default {
  name: "UserAdmin",
  data: function () {
    return {
      mode: "save",
      user: {},
      users: [],
      fields: [
        { key: "id", label: "Código", sortable: true },
        { key: "name", label: "Nome", sortable: true },
        { key: "email", label: "E-mail", sortable: true },
        {
          key: "admin",
          label: "Administrador",
          sortable: true,
          formatter: (value) => (value ? "Sim" : "Não"),
        },
        { key: "actions", label: "Ações" },
      ],
    };
  },
  methods: {
    loadUsers() {
      const url = `${baseUrl}/users`;
      axios.get(url).then((res) => (this.users = res.data));
    },

    save(){
      const method = this.user.id ? 'put'  : 'post'
      const id = this.user.id ? `/${this.user.id}` : ''
      const url = `${baseUrl}/users${id}`

      axios[method](url,this.user).then(()=> {
        this.$toasted.global.defaultSuccess()
        this.reset()
      }).catch(showError)

      
    },
    reset() {
      this.mode ='save'
      this.user = {}
      this.loadUsers()
    },
    remove(){
      const id = this.user.id
      axios.delete(`${baseUrl}/users/${id}`).then(()=> {
        this.$toasted.global.defaultSuccess()
        this.reset()
      }).catch(showError)
    },

    loadUser(user, mode='save'){
      this.user = user
      this.mode = mode
    }
  },

  mounted() {
    this.loadUsers();
  },
};
</script>

<style>
</style>