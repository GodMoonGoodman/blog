<template>
  <nav class="navbar">
    <div class="container d-flex justify-content-between">
      <div class="navbar-brand">
        <router-link to="/">
        <img :src="BrandLogo" alt="">
        <span>블로그</span>
      </router-link>
      </div>

      <div class="navbar-item">
        <div class="item">
          <a href="https://team.inpock.co.kr" target="_blank">인포크 팀</a>
        </div>
        <div class="item">
          <a href="https://inpock.co.kr" target="_blank">인포크스토어</a>
        </div>
        <div class="item">
          <a href="https://link.inpock.co.kr" target="_blank">인포크링크</a>
        </div>
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

.navbar-item {
  display: flex;
  align-items: center;
  margin-left: 32px;
  .item {
    margin: 0 16px;
    &:last-child {
      margin-right: 0;
    }
    a {
      text-decoration: none;
      color: var(--color-ui-grayscale-gray-700);
      display: flex;
      align-items: center;

      transition: color 0.2s ease-in-out;
      &:hover {
        color: var(--color-ui-grayscale-gray-900);
      }
    }
  }
}
</style>
