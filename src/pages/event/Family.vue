<template>
  <q-page v-if="!!adevent" padding>
    <EventMarkDown :data="adevent" />
  </q-page>
</template>
<script>
import EventMarkDown from 'src/components/event/EventMarkDown'
export default {
    name: 'Family',
    components: {
        EventMarkDown
    },
    data() {
        return {
            adevent: { src: '../../markdown/adevent/01.우리가족.md'}
        }
    },
}
</script>