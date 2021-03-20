<template>
  <q-page class="row justify-center ">

    <div class="resource-container col-lg-8 col-md-10 col-sm-12 bg-white">
      <q-parallax
        :src="require(`src/statics/${resource.attributes.headerImage}`)"
        :height="200"
      >
        <div class="header-image-content center">
          <h1 class="text-white text-bold">{{resource.attributes.title}}</h1>
        </div>

      </q-parallax>
      <div
        v-html="resource.html"
        class="q-px-md"
      ></div>
    </div>

  </q-page>
</template>

<script>

export default {
  name: 'ResourceShow',
  data () {
    return {
      resource: {},
      headerImage: ''
    }
  },
  watch: {
    // Since the page doesn't reload and "created ()" doesn't fire when changing between pages we need to watch for path changes
    // https://github.com/vuejs/vue-router/issues/311#issuecomment-448960985
    '$route.path': 'loadMdPage'
  },
  methods: {
    loadMdPage () {
      this.resource = require(`src/${this.getLinkToMd()}.md`)
      this.resource.html = this.openLinksInNewTab(this.resource.html)
    },
    getLinkToMd () {
      const pathArray = this.$route.fullPath.substring(1).split('/')
      pathArray.push(pathArray[pathArray.length - 1])
      pathArray.unshift('statics')
      return pathArray.join('/')
    },
    openLinksInNewTab (html) {
      const htmlLinksNewTab = html.replace(/(<a href="(.*)")/g, (item) => {
        return item + ' target="_blank"'
      })
      return htmlLinksNewTab
    }
  },

  created () {
    this.loadMdPage()
  }
}
</script>
<style lang="scss">
.body--dark {
  .resource-container {
    background-color: $dark !important;
  }
}
.resource-container {
  @media (max-width: $breakpoint-xs-max) {
    h1 {
      margin-bottom: 20px;
      margin-top: 15px;
    }
  }
}
</style>
