<template>
  <div>
    <div v-html="postBody"></div>
  </div>
</template>

<script>

export default {
  name: 'ShowPost',
  props: {
    postAttributes: {
      type: Object,
      default: null
    },
    postBody: {
      type: String,
      default: null
    }
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
