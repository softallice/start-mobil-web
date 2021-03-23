<template>
  <q-page>
    <EventMarkDown />
  </q-page>
</template>
<script>
import fm from 'src/markdown/adevent/01.우리가족.md'

export default {
    name: 'Family',
    components: {
        EventMarkDown: fm.vue.components
    },
    data() {
        return {
            title: fm.attributes.title
        }
    },
}
</script>