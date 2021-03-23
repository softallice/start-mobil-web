<template>
  <q-page class="page-with-transparent-header">

    <!-- <img
        src="statics/blog.png"
        alt="Blog"
      > -->
    <div class="row posts">
      <div
        v-for="(post, index) in posts"
        :key="index"
        :class="isFeaturedPost(index)"
      >

        <div v-if="index===0">
          <q-img
            class="featured-image"
            :src="require(`../../statics/` + post.headerImagePath)"
          >
            <div class="header-image-content post-header-image-content row">
              <div class="q-px-md col-md-10 col-sm-12 text-white">
                <h1 class=" text-bold q-pa-md">
                  <router-link
                    :to="post.routerLink"
                    class="post-link"
                  >{{post.title}}
                  </router-link>
                </h1>
                <div class="text-h3"> {{post.description}}</div>
                <div class="text-subtitle q-mb-sm">{{publishedDate(post.publishDate)}}</div>
                <q-btn
                  color="primary"
                  label="Read More"
                  :to="post.routerLink"
                  class="q-mb-xl"
                />
              </div>

            </div>
            <!-- <div class="featured-image-content column items-center q-pa-md">

              <div class="text-caption">Latest Post</div>
              <h1 class="q-my-sm">
                <router-link
                  :to="post.routerLink"
                  class="post-link"
                >{{post.title}}</router-link>
              </h1>
              <div class="q-mb-md post-desc">
                {{post.description}}
              </div>
              <div class="text-subtitle q-mb-sm">{{publishedDate(post.publishDate)}}</div>
              <q-btn
                color="primary"
                label="Read More"
                :to="post.routerLink"
                class="q-mb-xl"
              />
            </div> -->

          </q-img>
          <div class="text-h5 q-mt-sm q-ml-sm">Earlier Posts</div>
        </div>

        <div
          v-else
          class="q-mx-sm"
        >

          <q-card class="q-ma-md post">
            <q-card-section horizontal>
              <q-img
                :src="require(`../../statics/` + post.headerImagePath)"
                :alt="post.headerImageAlt"
                class="post-image"
              />
            </q-card-section>

            <q-card-section>
              <div class="row">
                <router-link
                  :to="post.routerLink"
                  class="post-link col"
                >
                  <div class="text-h6">{{post.title}}</div>
                </router-link>

                <q-icon
                  name="fas fa-check"
                  class="col-1"
                />
              </div>
              <div class="text-subtitle">{{publishedDate(post.publishDate)}}</div>
            </q-card-section>
            <q-card-section>
              {{post.description}}
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import postList from 'src/config/posts.json'
import { date } from 'quasar'

export default {
  name: 'PostIndex',
  data () {
    return {
      posts: []
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
    postVisited (post) {
      return true
    },
    isFeaturedPost (index) {
      return index === 0 ? 'featured-post' : 'post-container'
    }
  },
  computed: {

  },
  created () {
    this.posts = this.sortByDate(postList.posts)
    console.log(this.posts)
  }
}
</script>
<style lang="scss">
.featured-post {
  width: 100%;
  .featured-image {
    height: 450px;
    width: 100%;
    h1 {
      font-size: 3.8rem;
      line-height: 4rem;
      font-weight: bold;
      margin-top: $nav-bar-height;
      @media (max-width: $breakpoint-xs-max) {
        font-size: 2.5rem;
        line-height: 2.6rem;
      }
    }
  }
}
.posts {
  @media (max-width: $breakpoint-sm-max) {
    justify-content: center;
  }
}
.post {
  min-width: 300px;
  max-width: 400px;
  .post-image {
    height: 200px;
  }
  .post-list-title {
    // background-color: $secondary;
    // color: $body-bg-color;
    // font-family: Bauhaus_93;
    line-height: 80px;
    margin: 0;
    text-align: center;
  }
  .post-link {
    text-decoration: none;
    color: #333333;
  }
}
</style>
