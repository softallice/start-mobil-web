<template>
  <q-page class="page-with-transparent-header">
    <div class="col">
      <q-parallax
        :src="profileImageData.url"
        :height="profileImageData.height"
      >
        <profile-card
          :author="author"
          :social="social"
          :size="3.5"
          :backgroundColor="bgColor"
          :font-color="'white'"
          class="q-pt-xl"
        />
      </q-parallax>
    </div>
    <h3 class="text-center">My Story</h3>
    <div class="flex flex-center">

      <q-timeline
        color="primary"
        layout="comfortable"
        style="max-width: 800px;"
      >

        <q-timeline-entry
          title="I was Born"
          subtitle="July 6, 1981"
          icon="fas fa-baby-carriage"
        >
          <div>
            Best day of my life so far ;)
          </div>
        </q-timeline-entry>
        <q-timeline-entry
          title="Moved from Nebraska to Wisconsin"
          subtitle="May, 1987"
          color="orange"
          icon="fas fa-suitcase"
        >
          <div>
            My dad worked for 3M and recieved a promotion to work for the international team at their headquarters in St. Paul, MN.
          </div>
        </q-timeline-entry>
        <q-timeline-entry
          title="Started Kindergarten"
          subtitle="August, 1987"
          color="primary"
          icon="fas fa-school"
        >
          <div>
            I don't remember much back then, but this is when I started my K through 12 journey.
          </div>
        </q-timeline-entry>
        <q-timeline-entry
          title="Played in My First Hockey Game"
          subtitle="October, 1990"
          color="orange"
          icon="fas fa-hockey-puck"
        >
          <div>
            I absolutely love hockey and have been playing it since 3rd grade.
          </div>
        </q-timeline-entry>
        <q-timeline-entry
          title="Started Middle School"
          subtitle="August, 1993"
          color="primary"
          icon="fas fa-child"
        >
          <div>
            I made it through elementry school!
          </div>
        </q-timeline-entry>
        <q-timeline-entry
          title="My First Computer"
          subtitle="December, 1995"
          color="orange"
          icon="fas fa-desktop"
        >
          <div>
            <p>For years, everytime my dad would bring his work computer home I would sit on it for hours. It was a black and white laptop with Windows 3.1 on it.
              Starting in 8th grade I would go over to my friends houses and we would all take turns playing on their computers. For Christmas my dad suprised us
              (mainly me) with a brand new Windows 95 desktop computer. It had a pentium processer and 8 MB of ram.</p>

            <p>This is also the same time I figured out what the Internet was. I was hooked on "surfing the web" and trying to figure out how they built the pages.
              The only problem was the internet we were using was America Online dial-up. What I didn't realize was they only had long distance numbers. My dad was
              pissed when he got the phone bill!</p>

            <p>For the next two years all I did was work on the computer. I bought 8 more megs of ram from Best Buy and my friend and I opened up the case and figured out
              how to install it. We both built personal web pages and put them on Geocities. My favorite game was Warcraft 2. We got so good at the "Friends" level that nobody
              could beat us. I spent hours on IRC chatting with people from around the world.</p>

            <p>I knew then that something with computers and the internet would be what I would do for a career</p>
          </div>
        </q-timeline-entry>
      </q-timeline>
    </div>

  </q-page>
</template>

<script>
import ProfileCard from 'components/ProfileCard'
import { authorConfig } from 'src/config/authorConfig'
// import { colors } from 'quasar'

export default {
  name: 'About',
  components: {
    ProfileCard
  },
  data () {
    return {
      author: authorConfig.author,
      social: authorConfig.socialProfiles,
      bgColor: 'transparent',
      profileImageData: {
        url: 'statics/about-bg.jpg',
        height: 450
      }
    }
  }
}
</script>
