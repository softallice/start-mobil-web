<template>
  <q-page v-if="!!adevent" padding>
    <EventMarkDown :data="adevent" />
  </q-page>
</template>
<script>
import EventMarkDown from 'src/components/event/EventMarkDown'
export default {
    name: 'Woman',
    components: {
        EventMarkDown
    },
    data: () => ({
        adevent: 
        {
          src: '../../markdown/adevent/02.생리통.md'
        }
    }),
}
</script>