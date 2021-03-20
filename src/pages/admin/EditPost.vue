<template>
  <div class="q-ma-lg">

    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <h2>Post Details</h2>
      <q-input
        class="post-details-input"
        filled
        v-model="post.key"
        label="Key (url slug) *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        class="post-details-input"
        filled
        v-model="post.title"
        label="Title *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <q-input
        class="post-details-input"
        filled
        v-model="post.description"
        label="Description *"
        type="textarea"
        rows="2"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />
      <h2>Post Body</h2>
      <div class="row q-ma-lg">
        <div class="col">
          <q-input
            v-model="post.body"
            filled
            type="textarea"
            autogrow
          />
        </div>
        <div
          class="col bg-grey-1 q-ml-sm"
          v-html="mdIt(post.body)"
        >
        </div>
      </div>
      <div>
        <q-btn
          label="Submit"
          type="submit"
          color="primary"
        />
      </div>
    </q-form>
  </div>
</template>
<script>

import axios from 'axios'
import MarkDownIt from 'markdown-it'
const markdownItFontAwesome = require('markdown-it-fontawesome')
const markdownItPrism = require('markdown-it-prism')
require('prismjs/components/prism-javascript')
require('prismjs/components/prism-bash')
require('prismjs/plugins/command-line/prism-command-line')

const md = new MarkDownIt().use(markdownItFontAwesome)
  .use(markdownItPrism, {
    plugins: ['command-line'],
    defaultLanguage: 'javascript'
  })

export default {
  name: 'EditPost',
  data () {
    return {
      post: this.$route.params.post
    }
  },
  methods: {
    onSubmit (params) {
      console.log(params)
    },
    async getPost (postKey) {
      const response = await axios.get(`${process.env.API_URL}/posts/${this.$route.params.key}`)
      this.post = response.data.post
    },
    mdIt (markdown) {
      return md.render(markdown)
    }
  },
  created () {
    if (!this.post) {
      this.getPost(this.postKey)
    }
  }
}
</script>

<style lang="scss">
.post-details-input {
  max-width: 800px;
}
</style>
