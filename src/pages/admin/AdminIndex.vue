<template>
  <div class="q-ma-md">
    <h2>Blog Posts</h2>
    <q-list
      bordered
      separator
    >
      <q-item
        v-for="post in posts"
        :key="post.key"
      >
        <q-item-section>
          {{post.title}}
          <q-item-label
            caption
            lines="2"
          >{{post.description}} </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn
            icon="fas fa-glasses"
            color="secondary"
            flat
            round
            size="sm"
          />
        </q-item-section>
        <q-item-section side>
          <q-btn
            icon="fas fa-pencil-alt"
            color="primary"
            flat
            round
            size="sm"
            :to="{ name: 'edit-post', params: { key: post.key, post: post }}"
          />
        </q-item-section>
        <q-item-section side>
          <q-btn
            icon="fas fa-trash-alt"
            color="red-9"
            flat
            round
            size="sm"
          />
        </q-item-section>

      </q-item>
    </q-list>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AdminIndex',
  data () {
    return {
      posts: []
    }
  },
  methods: {
    async getPosts () {
      const response = await axios.get(`${process.env.API_URL}/posts`)
      this.posts = response.data.posts
      console.log(this.posts)
    }
  },
  created () {
    this.getPosts()
  }
}
</script>
