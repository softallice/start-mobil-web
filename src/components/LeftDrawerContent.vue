<template>
  <div class="left-drawer">
    <div
      class="column items-center q-pa-md"
      style="max-height: 125px;"
    >
      <img
        src="statics/monitor.png"
        alt="Mountains"
        class="drawer-avatar"
      >
    </div>

    <q-list>

      <!-- <q-item-label header>
        Pages
      </q-item-label> -->

      <essential-link
        v-for="link in pageLinks"
        :key="link.title"
        :title="link.title"
        :link="link.url"
        :icon="link.icon"
      />

      <q-item-label header>
        Resources
      </q-item-label>

      <essential-link
        v-for="link in resourceLinks"
        :key="link.title"
        :title="link.title"
        :link="link.url"
        :icon="link.icon"
      />

      <q-item-label header>
        Settings
      </q-item-label>
      <q-item class="z-index-1">
        <q-item-section
          avatar
          color="accent"
          text-color="white"
        >
          <q-avatar icon="far fa-lightbulb" />

        </q-item-section>

        <q-item-section>
          <q-item-label>
            {{currentDarkMode}}
          </q-item-label>

        </q-item-section>

        <q-item-section>

          <q-toggle
            v-model="darkMode"
            color="secondary"
            @input="toggleDarkMode"
          />
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section avatar>
          <q-avatar icon="fas fa-font" />

        </q-item-section>
        <q-item-section>
          <q-btn-group flat>
            <q-btn
              icon="fas fa-align-left"
              size="xs"
              @click="setFontSize('xs', $event)"
            />
            <q-btn
              icon="fas fa-align-left"
              size="sm"
              @click="setFontSize('sm', $event)"
            />
            <q-btn
              icon="fas fa-align-left"
              size="md"
              @click="setFontSize('md', $event)"
            />
          </q-btn-group>

        </q-item-section>
        <q-item-section>

        </q-item-section>
      </q-item>

    </q-list>
    <!-- <q-icon
      name="fas fa-lightbulb"
      class="absolute-center drawer-bg-icon"
    /> -->
    <!-- <img
      src="statics/diego-ph-fIq0tET6llw-unsplash.jpg"
      class="drawer-bg-image absolute-center"
      alt="Photo by Diego PH on Unsplash"
    /> -->
  </div>
</template>

<script>
import { authorConfig } from 'src/config/authorConfig'
import { leftMenuLinks } from 'src/config/leftMenuLinks'
// import ProfileCard from 'components/ProfileCard'
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'LeftDrawer',
  components: {
    // ProfileCard,
    EssentialLink
  },
  data () {
    return {
      darkMode: this.$q.dark.mode,
      open: this.leftDrawerOpen,
      author: authorConfig.author,
      social: authorConfig.socialProfiles,
      resourceLinks: leftMenuLinks.resources,
      pageLinks: leftMenuLinks.pages,
      selectedTextSize: null
    }
  },
  methods: {
    toggleDarkMode () {
      this.$q.dark.toggle()
    },
    setFontSize (size, event) {
      const htmlElement = document.getElementsByTagName('html')[0]
      switch (size) {
        case 'xs':
          htmlElement.style.fontSize = 'small'
          break
        case 'sm':
          htmlElement.style.fontSize = 'medium'
          break
        case 'md':
          htmlElement.style.fontSize = 'large'
          break
        default:
          break
      }
    }
  },
  computed: {
    currentDarkMode () {
      return this.$q.dark.mode ? 'Dark Mode' : 'Light Mode'
    },
    avatar () {
      return 'blah'
    }
  },
  created () {

  }
}
</script>

<style lang="scss">
// .active {
//   border: 1px solid gray;
//   padding: 10px;
//   border-radius: 50%;
// }
.left-drawer-active-class {
  background-color: $secondary;
  color: white;
}
.drawer-avatar {
  max-width: 90%;
  max-height: 100px;
}
.drawer-bg-image {
  max-width: 100%;
  opacity: 0.2;
  z-index: 0;
}
.drawer-bg-icon {
  font-size: 15rem;
  color: $primary;
  opacity: 0.1;
  z-index: 0;
}
.z-index-1 {
  z-index: 1;
}
</style>
