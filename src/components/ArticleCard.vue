<template>
  <div class="article-card">
    <img class="thumbnail" :src="thumbnail" alt="">
    <div class="title">
      {{ title }}
    </div>
    <div class="sub-title">
      {{ sub_title }}
    </div>
    <div class="profile">
      <img class="profile-avatar" :src="profile" alt="">
      <div>{{ author }}</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: {
      type: String,
      default: ''
    },
    thumbnail: {
      type: String,
      default: ''
    },
    sub_title: {
      type: String,
      default: ''
    },
    profile: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang='scss' scoped>

.article-card {
  margin-bottom: 64px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    transform: translateY(-10px);
    img.thumbnail {
      box-shadow: 0 1em 1.4em 0.3em rgba(0,0,33,.07), 0 0.2em 1em 0 rgba(0,0,33,.05), 0 0 1px 0 rgba(0,0,33,.07);
    }
  }
}

img.thumbnail {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 12px;
}

img.profile-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 12px;
}

.profile {
  display: flex;
  align-items: center;
}

.title {
  font-size: 24px;
  font-weight: bold;
  line-height: 1.27;
  color: var(--color-ui-primary-darkgray);
  margin: 16px 0 0;
}

.sub-title {
  margin: 8px 0 24px;
  font-size: 1em;
  line-height: 1.56;
  color: var(--color-ui-primary-darkgray);
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
}
</style>
