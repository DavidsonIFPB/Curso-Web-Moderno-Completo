<template>
  <div class="article-admin mt-3 mx-3">
    <b-form>
      <input type="hidden" id="article-id" v-model="article.id">
      <b-form-group label="Nome:" label-for="article-nome">
        <b-form-input id="article-nome" type="text" v-model="article.name" placeholder="Digite o Nome do Artigo..." 
        required :readonly="mode === 'remove'"/>
      </b-form-group>

      <b-form-group label="Descrição:" label-for="article-description">
        <b-form-input id="article-description" type="text" v-model="article.description" placeholder="Digite a Descrição do Artigo..." 
        required :readonly="mode === 'remove'"/>
      </b-form-group>

      <b-form-group v-show="mode==='save'" label="Imagem(URL)" label-for="article-image">
        <b-form-input id="article-image" type="text" v-model="article.image" placeholder="Informe a URL da imagem" 
        required :readonly="mode === 'remove'"/>
      </b-form-group>

      <b-form-group v-if="mode === 'save'" 
                label="Categoria:" label-for="article-categoryId">
                <b-form-select id="article-categoryId"
                    :options="categories" v-model="article.categoryId" />
            </b-form-group>

      <b-form-group v-show="mode==='save'" label="Autor:" label-for="article-autor">
          <b-form-select v-if="mode === 'save'" id="article-autor" :options="users" v-model="article.userId" />

      </b-form-group>
      
      
      <b-form-group v-if="mode === 'save'"
                label="Conteúdo" label-for="article-content">
                <VueEditor v-model="article.content"
                    placeholder="Informe o Conteúdo do Artigo..." />
      </b-form-group>

      <b-button class="my-2" variant="primary" v-if="mode==='save'" @click="save">Salvar</b-button>
      <b-button class="my-2" variant="danger" v-if="mode==='remove'" @click="remove">Excluir</b-button>
      <b-button class="my-2 ml-2" variant="secondary" @click="reset">Reset</b-button>

    </b-form>

    <b-table hover striped :items="articles" :fields="fields">
      <template class="tabela" slot="actions" slot-scope="data">
          <b-button variant="warning" @click="loadArticle(data.item)" class="mr-2">
              <i class="fa fa-pencil"></i>
          </b-button>
          <b-button variant="danger" @click="loadArticle(data.item, 'remove')">
              <i class="fa fa-trash"></i>
          </b-button>
      </template>
    </b-table>
  
    <b-pagination class="mb-1" size="md" v-model="page" :total-rows="count" :per-page="limit"/>

  </div>
</template>

<script>

import {baseUrl, showError} from '@/global'
import {VueEditor} from 'vue2-editor'
import axios from 'axios'

export default {
    name:'ArticleAdmin',
    components:{ VueEditor},
    data: function(){
      return {
        mode:'save',
        article:{},
        articles:[],
        categories: [],
        users: [],
        page: 1,
        count:0,
        limit: 1,
        fields:[
          {key:'id', label:"Código", sortable:true},
          {key:'name', label:"Nome do Artigo", sortable:true},
          {key:'description', label:"Descrição", sortable:true},
          {key:'actions', label: "Ações"}

        ]
      }
    },
    methods: {
      loadArticles(){
        const url = `${baseUrl}/articles?page=${this.page}`
        axios.get(url).then((res)=> {
          this.articles = res.data.data
          this.count = res.data.count
          this.limit = res.data.limit
        })
      },
      loadArticle(article, mode = 'save'){
        this.article = article
        this.mode = mode
        
        const url = `${baseUrl}/articles/${this.article.id}`
        axios.get(url).then(res => this.article= res.data)
      },

      loadCategories(){
        const url = `${baseUrl}/categories`
        axios.get(url).then((res)=> {
            this.categories = res.data.map(category => {
            return { ...category, value: category.id, text: category.path }
          })  
        })
      },

      loadUsers(){
        const url = `${baseUrl}/users`
        axios.get(url).then((res)=> {
          this.users = res.data.map(user => {
          return { value: user.id, text: `${user.name} - ${user.email}` }
          })         
        })
      },

      save(){
        const url = this.article.id ? `${baseUrl}/articles/${this.article.id}` : `${baseUrl}/articles`
        const method = this.article.id ? 'put' : 'post'

        axios[method](url, this.article).then(()=>{
          this.$toasted.global.defaultSuccess()
          this.reset()
        }
        ).catch(showError)

      },
      reset(){
        this.mode='save'
        this.article = {}
      },
      remove(){}

    },

    watch:{
      page(){
        this.loadArticles()
      }
    },

    mounted(){
      this.loadUsers()
      this.loadCategories()
      this.loadArticles()
    }
}
</script>

<style>
.ql-editor .ql-blank pre{
  background-color: #ccc;
  color: red;
}

</style>