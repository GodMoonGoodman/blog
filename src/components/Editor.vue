<template>
  <div class="inpock-markdown-editor">
    <div class="row no-gutters">
      <div class="col">
        <div class="markdown editor">
          <section class="title-section">
            <input v-model.trim="title" type="text" class="title" placeholder="제목을 입력하세요...">
            <input v-model.trim="subTitle" type="text" class="sub-title" placeholder="부제목도 입력하세요...">
          </section>
          <textarea :value="value" @input="update" placeholder="내용 입력..." />

          <div class="control-box">
            <div>
              <button>나가기</button>
            </div>
            <div>
              <button>임시저장</button>
              <button>출간하기</button>
            </div>
          </div>
        </div>
        
      </div>
      <div class="col d-none d-lg-block">
        <div class="markdown preview">
          <section class="title-section">
            <div class="title">{{ title }}</div>
            <div class="sub-title">{{ subTitle }}</div>
          </section>
          <div class="marked" v-html="compiledMarkdown" />
        </div>
        
      </div>
    </div>
    
  </div>
</template>

<script>
import Vue from 'vue'
import debounce from 'lodash/debounce'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-light.css';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('javascript', javascript);

import '../assets/editor.scss'

export default Vue.extend({
  data() {
    return {
      title: '',
      subTitle: '',
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
  mounted() {
    
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

.editor {
  background-color: transparent;
  height: 100%;

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

  h1 {
    margin-bottom: 24px;
  }

  .sub-title > div {
    font-size: 1em;
    line-height: 1.56;
    color: var(--color-ui-primary-darkgray);
    width: 100%;
    border: none;
    outline: none;
    margin-bottom: 48px;
  }
}

.editor, .preview {
  padding: 32px;
}


.control-box {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 50vw;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
  padding: 12px 16px;

  display: flex;
  justify-content: space-between;
}
</style>
