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
            <img :src="$store.state.auth.photoURL ? $store.state.auth.photoURL : picture">
          </q-avatar>
          <div class="text-weight-bold">{{this.$store.state.auth.userName}}</div>
          <div>{{this.$store.state.auth.email}}</div>
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
import { KeyValueStore } from "pages/common/keyValStore.js";

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
    drawer: false,
    userInfo: {
       picture: "https://cdn.quasar.dev/img/boy-avatar.png"
    }
  }),
  methods: {
    toggleDrawer () {
      this.drawer = !this.drawer
    }
  },
  // beforeCreate: async function () {
  //   console.log('$store.state.auth.userName', $store.state.auth.userName)
  //   // 로컬 DB 초기화 
  //   this.indexdb = new KeyValueStore("user-metadata", "metadata");

  //   try {
  //     this.userInfo = await this.indexdb.get('userInfo');
  //   } catch (e) {
  //     console.error("failed to qusry the userweight", e);
  //   }
  // }
}
</script>

<style>
</style>
