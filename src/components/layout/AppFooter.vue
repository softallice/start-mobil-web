<template>
  <q-footer class="bg-dark">
    <q-tabs>
      <q-route-tab
        v-for="route in tabRoutes"
        :key="route.name"
        :to="{ name: route.name }"
        :name="route.name"
        :icon="route.icon"
        :label="route.name"
        exact
        replace
      />
    </q-tabs>
  </q-footer>
</template>



<script>
export default {
  name: 'AppFooter',
  computed: {
    tabRoutes () {
      return this.$router.options.routes[0].children.filter(route => route.name !== 'About' && route.name !== 'Credits'  && route.name !== 'Diet' && route.name !== 'Stature' && route.name !== 'Post' && route.name !== 'PostShow')
    }
  }
}
</script>

<style>

</style>
