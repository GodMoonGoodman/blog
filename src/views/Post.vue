<template>
  <div class="post">
    <section class="flex-container">
      <Editor />
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
import Editor from '../components/Editor.vue'
export default Vue.extend({
  components: {
    Editor
  }
})
</script>

<style lang='scss' scoped>
.post, .flex-container {
  height: 100%;
}
</style>
