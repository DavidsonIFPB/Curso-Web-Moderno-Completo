<template>
  <div class="home">
    <Pagetitle
      icon="fa fa-home"
      main="Dashboard"
      sub="Base de Conhecimento"
    ></Pagetitle>

    <div class="stats">
      <Stat titulo="Categorias" icon="fa fa-folder" color="#D54D50" :value='stat.categories'></Stat>
      <Stat titulo="Artigos" icon="fa fa-file" color="#3BC480" :value='stat.articles'></Stat>
      <Stat titulo="Usuários" icon="fa fa-user" color="#3282CD" :value='stat.users'></Stat>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import Stat from './Stat.vue'
import Pagetitle from '@/components/template/Pagetitle'
import {baseUrl} from '@/global'

export default {
    name:'Home',
    components : {Pagetitle, Stat},
    data: function(){
        return {
          stat: {}
        }
    },
    methods:{
      getStats(){
        axios.get(`${baseUrl}/stats`).then(res => this.stat= res.data)
      }
    },
    mounted(){
      this.getStats()
    }
}

</script>

<style>
.stats {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>