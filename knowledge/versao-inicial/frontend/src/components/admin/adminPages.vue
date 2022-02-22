<template>
  <div class="adminPages">
    <Pagetitle
      icon="fa fa-cogs"
      main="Administração do Sistema"
      sub="Cadastro & Cia"
    ></Pagetitle>
    <div class="admin-Pages-tabs">
      <b-card no-body>
        <b-tabs> 
          <b-tab title="Articles" active>
            <ArticleAdmin/>
          </b-tab>
          <b-tab title="Categories">
            <CategoryAdmin/>
          </b-tab>

          <b-tab title="Users">
            <UserAdmin/>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import Pagetitle from "@/components/template/Pagetitle";
import ArticleAdmin from './ArticleAdmin.vue'
import CategoryAdmin from './CategoryAdmin.vue'
import UserAdmin from './UserAdmin.vue'


export default {
  name: "adminPages",
  components: { Pagetitle, ArticleAdmin, CategoryAdmin, UserAdmin },
};
</script>

<style>
</style>