<template>
  <v-badge :content="content" :color="color" :offset-x="x" :offset-y="y" />
</template>
<script>
import '~/assets/css/components/Header.css'

export default {
  name: 'Badge',
  props: {
    content: {
      type: Number,
      default: 0,
      required: true
    },
    color: {
      type: String,
      default: '#000',
      required: false
    },
    x: {
      type: Number,
      default: 0,
      required: false
    },
    y: {
      type: Number,
      default: 0,
      required: false
    }
  }
}
</script>
