<template>
  <q-drawer
    v-model="drawer"
    :width="250"
    :breakpoint="600"
    bordered
    overlay
    side="right"
    content-class="column justify-between"
  >
    <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <div class="text-weight-bold">송아리(로그인시)</div>
          <div>songari@naver.com</div>
        </div>
      </q-img>
    <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
      <div>
        <DrawerRoutesList />
        <DrawerAppSettings />
      </div>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import DrawerAppSettings from 'components/partials/DrawerAppSettings'
import DrawerRoutesList from 'components/partials/DrawerRoutesList'

export default {
  name: 'AppDrawer',
  components: {
    DrawerAppSettings,
    DrawerRoutesList
  },
  beforeMount () {
    this.$root.$on('ToggleDrawer', this.toggleDrawer)
  },
  data: () => ({
    drawer: false
  }),
  methods: {
    toggleDrawer () {
      this.drawer = !this.drawer
    }
  }
}
</script>

<style>
</style>
