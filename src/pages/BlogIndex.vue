<template>
  <q-page class="page-with-transparent-header">
    <q-parallax src="../statics/tree-bg.jpg">
      <div class="header-image-content">
        <h1 class="text-white text-bold q-pa-md">Welcome to Hoff Design</h1>
      </div>

    </q-parallax>
    <div>
      <h2 class="text-center">Latest Posts</h2>
      <div class="latest-posts">
        <q-card
          class="latest-posts-card"
          v-for="post in latestPosts"
          :key="post.title"
        >
        <!-- scss 오류 해결 필요 -->
          <!-- <q-img
            :src="require(`src/` + post.headerImagePath)"
            :ratio="16/9"
          > -->

            <div class="absolute-bottom text-subtitle2 text-center">
              <router-link
                :to="post.routerLink"
                class="post-link"
              >
                {{post.title}}
              </router-link>
            </div>

          <!-- </q-img> -->
        </q-card>

      </div>
    </div>
    <div
      v-for="post in postsTest"
      :key="post.key"
    >
      <h2>{{post.key}}</h2>
      <div v-html="mdIt(post.body)">

      </div>

    </div>
    <div class="row q-ma-lg">
      <div class="col">
        <q-input
          v-model="testMarkdown"
          filled
          type="textarea"
        />
      </div>
      <div
        class="col bg-grey-1 q-ml-sm"
        v-html="mdIt(testMarkdown)"
      >

      </div>
    </div>
  </q-page>
</template>

<script>
import { authorConfig } from 'src/config/authorConfig'
import axios from 'axios'
import postList from 'src/config/posts.json'
import { date } from 'quasar'
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
  name: 'PageIndex',
  components: {
    // ProfileCard
  },
  data () {
    return {
      author: authorConfig.author,
      social: authorConfig.socialProfiles,
      latestPosts: [],
      postsTest: [],
      testMarkdown: ''
    }
  },
  methods: {
    publishedDate (dateString) {
      // Add a timezone of 00:00:00 to make sure the date is calculated correctly
      // https://stackoverflow.com/a/51062145/756623
      return date.formatDate(new Date(dateString + 'T00:00:00'), 'MMMM Do, YYYY')
    },
    sortByDate (posts) {
      return posts.sort((a, b) => a.publishDate - b.publishDate).reverse()
    },
    async getPostsTest () {
      const response = await axios.get(`${process.env.API_URL}/admin/posts`)
      this.postsTest = response.data.posts
      console.log(this.postsTest)
    },
    mdIt (markdown) {
      return md.render(markdown)
    }
  },
  async created () {
    this.latestPosts = this.sortByDate(postList.posts).slice(0, 3)

    await this.getPostsTest()
    console.log(this.postsTest)
  }
}
</script>
<style lang="scss">
.latest-posts {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 20px 0 20px;
  .latest-posts-card {
    width: 100%;
    margin: 10px;
    max-width: 300px;
    .post-link {
      text-decoration: none;
      color: white;
    }
  }
}
</style>
