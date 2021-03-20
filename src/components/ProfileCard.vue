<template>
  <q-card
    :style="backgroundColorStyle"
    flat
    square
  >
    <q-card-section class="flex flex-center q-pb-sm">
      <q-avatar :size="avatarSize">
        <q-img
          src="statics/avatar.jpg"
          :style="imgStyle"
        >
          <template v-slot:error>
            <div
              class="bg-secondary"
              :style="imgStyle"
            >
              <i class="fas fa-user flex flex-center"></i>
            </div>
          </template>
        </q-img>

      </q-avatar>
    </q-card-section>
    <q-card-section
      class='col q-py-none'
      style=""
    >
      <q-card-section
        class='col flex flex-center q-pb-none q-pt-xs text-bold'
        :style="fontColorStyle"
        :class="authorNameClass"
      >
        {{author.name}}
      </q-card-section>
      <q-card-section
        class='col flex flex-center q-pt-none q-px-lg text-center'
        :style="authorDescriptionStyle"
      >

        {{author.description}}

      </q-card-section>
    </q-card-section>
    <q-card-section class='flex flex-center q-py-none q-px-none social-section'>
      <div class="q-px-xl q-py-sm">

        <q-btn-group flat>
          <q-btn
            v-if="social.stackOverflow.link"
            flat
            round
            :style="`color: ${social.stackOverflow.color};`"
            icon="fab fa-stack-overflow"
            type="a"
            :href="social.stackOverflow.link"
            target="_blank"
          />
          <q-btn
            v-if="social.github.link"
            flat
            round
            :style="`color: ${social.github.color}`"
            icon="fab fa-github"
            type="a"
            :href="social.github.link"
            target="_blank"
          />
          <q-btn
            v-if="social.bitbucket.link"
            flat
            round
            :style="`color: ${social.bitbucket.color}`"
            icon="fab fa-bitbucket"
            type="a"
            :href="social.bitbucket.link"
            target="_blank"
          />
          <q-btn
            v-if="social.twitter.link"
            flat
            round
            :style="`color: ${social.twitter.color}`"
            icon="fab fa-twitter"
            type="a"
            :href="social.twitter.link"
            target="_blank"
          />
          <q-btn
            v-if="social.linkedIn.link"
            flat
            round
            :style="`color: ${social.linkedIn.color}`"
            icon="fab fa-linkedin-in"
            type="a"
            :href="social.linkedIn.link"
            target="_blank"
          />
          <q-btn
            v-if="social.facebook.link"
            flat
            round
            :style="`color: ${social.facebook.color}`"
            icon="fab fa-facebook-f"
            type="a"
            :href="social.facebook.link"
            target="_blank"
          />
        </q-btn-group>
      </div>
    </q-card-section>

  </q-card>
</template>

<script>
import { colors } from 'quasar'

export default {
  name: 'ProfileCard',
  props: {
    author: {
      type: Object
    },
    social: {
      type: Object
    },
    size: {
      type: Number,
      default: 1
    },
    backgroundColor: {
      type: String,
      default: colors.getBrand('primary')
    },
    fontColor: {
      type: String,
      default: 'white'
    }
  },
  data () {
    return {

    }
  },
  computed: {
    imgStyle () {
      const value = this.size * 75
      return `height:${value}px; width:${value}px;`
    },
    avatarSize () {
      return `${this.size * 75}px`
    },
    authorNameClass () {
      let className
      if (this.size < 2) {
        className = 'text-h6'
      } else if (this.size >= 2 && this.size < 3) {
        className = 'text-h5'
      } else if (this.size >= 3 && this.size < 5) {
        className = 'text-h4'
      } else {
        className = 'text-h3'
      }
      return className
    },
    authorDescriptionStyle () {
      let fontSize
      if (this.size < 2) {
        fontSize = 0.75
      } else if (this.size >= 2 && this.size < 5) {
        fontSize = 1
      } else {
        fontSize = 1.5
      }
      return `font-size: ${fontSize}rem; ${this.fontColorStyle}`
    },
    backgroundColorStyle () {
      return `background-color: ${this.backgroundColor};`
    },
    fontColorStyle () {
      return `color: ${this.fontColor};`
    }
    // socialStyle () {
    //   const bgColor = this.$q.dark.mode ? '#121212' : 'white'
    //   return `background-color: ${bgColor};`
    // }
  }
}
</script>
<style lang="scss">
.left-drawer {
  .left-drawer-profile {
    .author-description {
      max-width: 75%;
      text-align: center;
    }
  }
}
.social-section {
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
}
</style>
