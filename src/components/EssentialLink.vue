<template>
  <q-item
    clickable
    :to="link"
    tag="a"
  >
    <q-item-section
      top
      avatar
    >
      <q-avatar :icon="icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{title}}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: '#'
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
