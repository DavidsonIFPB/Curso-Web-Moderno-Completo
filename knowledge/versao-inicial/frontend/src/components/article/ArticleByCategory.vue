<template>
  <div class="article-by-category">
    <Pagetitle :main="category.name" icon="fa fa-folder-o" sub="Categoria" />
    
    
    <!-- Minha Solução -->
    <!-- <div class="artigo-by-categoria"  v-for="item in articles" :key="item.id">
      <img id="imagemArticle" src='@/assets/article.png' alt="" srcset="">  

      <div class="artigo-name-description">
          <div>
            <router-link :to="'/articles/'+item.id">
            <h3>
              {{item.name}} 
            </h3>
            </router-link>

            <h4>
              {{item.description}}
            </h4>  

          </div>
        
          <span><strong>Autor:</strong> {{item.author}}</span>
      </div>

    </div> -->

    <ul>
      <li v-for="article in articles" :key="article.id">
        <ArticleItem :article="article"/>
      </li>
    </ul>

    
    <div class="load-more" v-show="loadMore">
      <button class="btn btn-outline-primary" @click="loadArticles">
        Carregar Mais Artigos
      </button>
    </div>
  
  </div>


</template>

<script>
import Pagetitle from "../template/Pagetitle.vue";
import { baseUrl } from "@/global";
import axios from "axios";
import ArticleItem from "./ArticleItem.vue"

export default {
  name: "ArticleByCategory",
  components: { Pagetitle, ArticleItem },
  data: function () {
    return {
      category: {},
      articles: [],
      imageURL:
       "require(`@/assets/article.png`)",
      page: 1,
      loadMore: true,
    };
  },
  methods: {
    loadArticles() {
      const url = `${baseUrl}/categories/${this.category.id}/articles?page=${this.page}`;
      axios.get(url).then((res) => {
        this.articles = this.articles.concat(res.data);
        this.page++;

        if (res.data.length === 0) this.loadMore = false;
      });
    },

    loadCategory() {
      const url = `${baseUrl}/categories/${this.category.id}`;
      axios.get(url).then((res) => (this.category = res.data));
    }
  },
  watch: {
    $route(to){
      this.category.id = to.params.id
      this.articles = []
      this.page = 1
      this.loadMore = true

      this.loadCategory()
      this.loadArticles()
    }
  },
  mounted() {
    this.category.id = this.$route.params.id;
    this.loadArticles();
    this.loadCategory();
  },
};
</script>

<style>
.article-by-category .load-more {
  display: flex;
  justify-content: center;
  margin-top: 25px;
}

ul {
  list-style: none;
  margin:0;
  padding: 0;
}



</style>