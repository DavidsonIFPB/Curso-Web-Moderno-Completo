<template>
  <div class="article-by-id">

      <Pagetitle icon="fa fa-folder-o" :main="article.name" :sub="article.description" />

      <div class="article-content" v-html="article.content"> </div>
  </div>
</template>

<script>
import 'highlightjs/styles/dracula.css';
import hljs from 'highlightjs/highlight.pack.js';
import {baseUrl} from '@/global';
import axios from 'axios';
import Pagetitle from '../template/Pagetitle.vue';

export default {
    name:'ArticleById',
    components: {Pagetitle},
    data: ()=> {
        return {
            article:{}
        }
    },
    methods:{
        loadArticleById(){
            const url = `${baseUrl}/articles/${this.$route.params.id}`
            axios.get(url).then(res => this.article = res.data)
        }
    },
    mounted(){
        this.loadArticleById()
    },
    updated(){
        document.querySelectorAll('.article-content pre.ql-syntax').forEach(elemento => {
            hljs.highlightBlock(elemento)
            // console.log('teste')
        })
    }
}
</script>

<style>

.article-by-id{
    background-color: #fff;
    padding: 15px;
    border-radius: 10px;
    
}



.article-by-id .article-content {
    margin-bottom: 0;
}

.article-by-id .article-content img{
    width: 80%;

}
</style>