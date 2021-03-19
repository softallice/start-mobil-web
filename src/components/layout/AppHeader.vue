<template>
  <q-header>
    <q-toolbar>
      <q-toolbar-title>
        
        <div v-if="$route.matched.some(({ name }) => name === isBackButton)">
          <q-btn flat icon="keyboard_arrow_left" @click=$router.go(-1) />
        </div>
        <div v-else> 
          <h4 class="q-ma-none">송아리</h4>
        </div>
      </q-toolbar-title>
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="$root.$emit('ToggleDrawer')"
      />
    </q-toolbar>
  </q-header>
</template>

<script>

export default {
  name: 'AppHeader',
  data: () => ({
    showAutocomplete: false,
    isLoadingSuggestedLocations: false,
    location: '',
    suggestedLocations: [],
    isSuggestedLocationClicked: false,
    isBackButton: 'Diet',
  }),
  methods: {
    
  },
  watch: {
    
  }
}
</script>

<style lang="scss" scoped>
.autocomplete-enter-active,
.autocomplete-leave-active {
  transition: all 0.2s ease;
  opacity: 1;
  max-height: 130px;
}

.autocomplete-enter,
.autocomplete-leave-to {
  opacity: 0;
  max-height: 0;
}

.autocomplete-list {
  height: 120px;
  border-radius: 0 0 4px 4px;
  background: rgba(255, 255, 255, 0.07);

  &.zero-results {
    height: 30px;
  }

  span:hover {
    color: #50afe6;
  }
}
</style>
