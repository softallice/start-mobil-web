<template>
  <q-layout 
    @scroll="updateHeaderColor"
    view="hHh Lpr fFf">
    <AppHeader />
    <AppDrawer />
    <AppFooter />
    <q-page-container class="app-page-container">
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        mode="out-in"
      >
        <Loading v-if="isLoading" />
      </transition>
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        mode="out-in"
      >
        <keep-alive>
          <router-view v-if="!!(content && !isLoading)" :content="content" />
        </keep-alive>
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import AppHeader from 'components/layout/AppHeader.vue'
import AppDrawer from 'components/layout/AppDrawer'
import AppFooter from 'components/layout/AppFooter.vue'
import Loading from 'components/layout/AppLoadingScreen'

export default {
  name: 'MainLayout',
  components: {
    AppHeader,
    AppDrawer,
    AppFooter,
    Loading,
  },
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    isLoading: false,
    transparentHeader: true
  }),
  mounted () {
    this.$root.$on('onAPILoadingStart', () => { this.isLoading = true })
    this.$root.$on('onAPILoadingEnd', () => { this.isLoading = false })
    
  },
  methods: {
    updateHeaderColor (details) {
      // Only run if the page has set the header transparency

      if (details.position <= 200) {
        this.transparentHeader = true
      } else if (details.position > 200) {
        this.transparentHeader = false
      }
    }
  },
}
</script>

<style lang="scss">
.app-page-container {
  width: 100%;
  max-width: 1280px;
  margin: auto;
}
</style>
