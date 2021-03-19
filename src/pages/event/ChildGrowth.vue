<template>
  <q-page v-if="!!adevent" padding>
    <EventMarkDown :data="adevent" />
  </q-page>
</template>
<script>
import EventMarkDown from 'src/components/event/EventMarkDown'
export default {
    name: 'ChildGrowth',
    components: {
        EventMarkDown
    },
    data: () => ({
        adevent: '../../markdown/adevent/03.아이성장.md'
    }),
}
</script>