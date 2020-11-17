<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/">
        <img :src="BrandLogo" alt="">
        <span>블로그</span>
      </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import Vue from 'vue'
import BrandLogo from '../assets/brand_logo.svg'

export default Vue.extend({
  data() {
    return {
      BrandLogo
    }
  }
})
</script>

<style lang='scss' scoped>
.navbar {
  height: 64px;
  display: flex;
  align-items: center;

  box-shadow: 0 1px 5px rgba(220,220,220,.46);

  background-color: white;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;

  z-index: 10;

  .navbar-brand {
    display: flex;
    align-items: center;

    a {
      text-decoration: none;
      color: #343434;
      font-weight: bold;
      display: flex;
      align-items: center;

      img {
        height: 30px;
      }
    }

    span {
      font-size: 20px;
      height: 18px;
      margin-left: 4px;
    }
  }

}
</style>
