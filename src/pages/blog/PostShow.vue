<template>
  <q-page class="page-with-transparent-header">
    <q-parallax>
      <!-- sass 오류 -->
    <!-- <q-parallax :src="headerImage"> -->
      <div class="header-image-content post-header-image-content row">
        <div class="q-px-md text-white">
          <!-- <h1 class=" text-bold q-pa-md">{{post.attributes.title}}</h1> -->
          <!-- <div class="text-h3"> {{post.attributes.description}}</div> -->
          <!-- <div class="text-subtitle">{{publishedDate(post.attributes.publishDate)}}</div> -->
        </div>

      </div>

    </q-parallax>
    <div class="row justify-center">
      <div
        v-html="post.html"
        class="post-container q-pa-lg bg-white"
      >
      </div>
    </div>

  </q-page>
</template>

<script>
import { date } from 'quasar'

export default {
  name: 'PostShow',
  data () {
    return {
      post: {},
      headerImage: ''
    }
  },
  methods: {
    getPost () {
      const fullPathArray = this.$route.fullPath.split('/')
      // Remove the first "/" because webpack doesn't like it
      fullPathArray.shift()
      // Get the filename by removing the last item in the array
      const filename = fullPathArray.pop() + '.md'
      const folderPath = fullPathArray.join('/')
      this.post = require(`../../statics/${folderPath}/${filename}`)
      // this.post = require(`src/statics/${folderPath}/${filename}`)
      // sass 오류
      // this.headerImage = require(`src/statics/${folderPath}/${this.post.attributes.headerImage}`)
    },
    publishedDate (dateString) {
      // Add a timezone of 00:00:00 to make sure the date is calculated correctly
      // https://stackoverflow.com/a/51062145/756623
      return date.formatDate(new Date(dateString + 'T00:00:00'), 'MMMM Do, YYYY')
    }
  },
  created () {
    this.getPost()
  }
}
</script>
<style lang="scss">
.body--dark {
  .post-container {
    background-color: $dark !important;
  }
}
.post-container {
  max-width: 960px;
  h2 {
    margin-top: 10px;
  }
  @media (max-width: $breakpoint-xs-max) {
    h1 {
      margin-bottom: 20px;
      margin-top: 15px;
    }
  }
}
</style>
