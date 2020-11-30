<template>
  <div class="post">
    <NavBar />
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 id="article-title" class="mt-4">{{ title }}</h1>
          <h4 id="article-sub-title">{{ article.sub_title }}</h4>
          <article>
            <div class="marked preview" v-html="compiledMarkdown" />
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import DB_ARTICLES from '../db/article'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-light.css';
import javascript from 'highlight.js/lib/languages/javascript';
import NavBar from '../components/NavBar.vue'

hljs.registerLanguage('javascript', javascript);

import '../assets/editor.scss'

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  components: {
    NavBar
  },
  data() {
    return {
      article: DB_ARTICLES.find(articles => articles.title === this.title)
    }
  },
  computed: {
    compiledMarkdown() {
      return marked(this.article.contents, {
        sanitize: true,
        breaks: true,
        highlight: function(code, language) {
          const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
          return hljs.highlight(validLanguage, code).value;
        },
      })
    }
  }
})
</script>

<style lang='scss' scoped>
.post {
  padding-top: 64px + 64px;
}


#article-title {
  font-size: 36px;
  font-weight: bold;
  line-height: 1.17;
  color: var(--color-ui-primary-darkgray);
  width: 100%;
  border: none;

  outline: none;

  margin-bottom: 24px;
}

#article-sub-title {
  font-size: 1em;
  line-height: 1.56;
  color: var(--color-ui-primary-darkgray);
  width: 100%;
  border: none;

  outline: none;

  margin-bottom: 48px;
}
</style>
