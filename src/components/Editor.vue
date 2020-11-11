<template>
  <div class="inpock-markdown-editor">
    <div class="row no-gutters">
      <div class="col">
        <textarea :value="value" @input="update" placeholder="여기에 작성하세요 ..." />
      </div>
      <div class="col d-none d-lg-block">
        <div class="preview marked" v-html="compiledMarkdown" />
      </div>
    </div>
    
    
  </div>
</template>

<script>
import Vue from 'vue'
import debounce from 'lodash/debounce'
import marked from 'marked'
import hljs from 'highlight.js'
// import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/atom-one-light.css';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('javascript', javascript);

import '../assets/editor.scss'

export default Vue.extend({
  data() {
    return {
      value: ''
    }
  },
  computed: {
    compiledMarkdown() {
      return marked(this.value, {
        sanitize: true,
        breaks: true,
        highlight: function(code, language) {
          const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
          return hljs.highlight(validLanguage, code).value;
        },
      })
    }
  },
  methods: {
    // update: debounce(function (e) {
    //   this.value = e.target.value
    // }, 100),
    update(e) {
      this.value = e.target.value
    }
  }
})
</script>

<style lang='scss' scoped>
.inpock-markdown-editor {
  height: 100%;
  .row {
    height: 100%;
  }
}
textarea {
  width: 100%;
  outline: none;
  appearance: none;
  resize: none;
  height: 100%;
  background-color: var(--color-ui-grayscale-gray-white);
  border: none;
}

.preview {
  height: 100%;
  background-color: #f8f8f8;
}

textarea, .preview {
  padding: 32px;
}
</style>
