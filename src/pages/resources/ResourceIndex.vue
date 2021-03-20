<template>
  <q-page class="page-with-transparent-header">
    <q-parallax
      src="statics/resources/header.jpg"
      :height="400"
      alt="Coffe mug Photo by Erik Witsoe on Unsplash"
    >
      <div class="header-image-content">
        <h1 class="text-white text-weight-bold">Resources</h1>
      </div>

    </q-parallax>
    <div class="row items-start q-gutter-md q-ma-md">

      <q-card
        v-for="(resource, index) of resourceList"
        :key="index"
        class="resource-card"
        @click="routerTo(resource.link)"
      >
        <!-- <q-img
          :src="resource.image"
          :alt="resource.imageAlt"
        /> -->
        <div class="img-container">
          <img
            :src="resource.image"
            :alt="resource.imageAlt"
          >
        </div>

        <q-card-section>
          <div class="text-h6">
            <q-icon
              :name="resource.icon"
              class="q-mr-md"
            />{{resource.title}}</div>
        </q-card-section>
        <!-- <q-card-section>
          {{resource.description}}
        </q-card-section> -->
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { resources } from './resources'

export default {
  name: 'ResourceIndex',
  data () {
    return {
      resourceList: resources
    }
  },
  methods: {
    routerTo (link) {
      this.$router.push(link)
    }
  }
}
</script>
<style lang="scss">
.resource-card {
  max-width: 400px;
  cursor: pointer;
  .img-container {
    max-height: 175px;
    overflow: hidden;
    width: 100%;
    img {
      width: 100%;
    }
  }
}
</style>
