<template>
  <div class="home">
    <NavBar></NavBar>
    <main class="container">
      <div class="row">
        <div class="col-12 col-md-6"><ArticleCard v-bind="article1" /></div>
        <div class="col-12 col-md-6"><ArticleCard v-bind="article2" /></div>
        <div class="col-12 col-md-6"><ArticleCard v-bind="article1" /></div>
      </div>
    </main>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import { article1, article2 } from '../db/article/index'

import ArticleCard from '../components/ArticleCard.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    ArticleCard
  },
  data() {
    return {
      article1,
      article2
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding-top: 64px + 64px;
}
</style>