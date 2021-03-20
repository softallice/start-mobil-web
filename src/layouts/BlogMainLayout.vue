<template>
  <q-layout
    @scroll="updateHeaderColor"
    view="lHh Lpr lFf"
  >
    <q-header
      :class="transparency"
      class="header"
    >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          <router-link to="/">
            <img
              src="statics/logo.png"
              alt="Hoff Technologies"
              class="q-pa-md flex flex-center"
            >
          </router-link>
        </q-toolbar-title>
        <div class="gt-xs">
          <q-btn
            color="secondary"
            label="Blog"
            to="/posts"
            rounded
            class="q-mr-md header-link"
          />
          <q-btn
            color="accent"
            label="Resources"
            to="/resources"
            rounded
            class="q-mr-md header-link"
          />
          <q-btn
            color="accent"
            label="About"
            to="/about"
            rounded
            class="header-link"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      :content-class="leftDrawerContentClass"
    >
      <!-- <left-drawer-content></left-drawer-content> -->

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import LeftDrawerContent from 'components/LeftDrawerContent'
import { authorConfig } from 'src/config/authorConfig'

export default {
  name: 'BlogMainLayout',
  components: {
    // LeftDrawerContent
  },
  data () {
    return {
      leftDrawerOpen: false,
      author: authorConfig.author,
      transparentHeader: true
    }
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
  computed: {
    leftDrawerContentClass () {
      return this.$q.dark.mode ? '' : 'bg-grey-1'
    },
    transparency () {
      if (this.transparentHeader) {
        return 'transparent'
      } else {
        return ''
      }
    }
  }
}
</script>
<style lang="scss">
.header {
  transition: background-color 1000ms linear;
}
.header-link {
  font-family: Bauhaus_93;
}
</style>
