<template>
  <v-badge :content="content" :color="color" :offset-x="x" :offset-y="y" />
</template>
<script>
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

<style>
  .v-badge__badge::before {
    border: 4px solid #ff3737;
    border-bottom-color: transparent;
    border-right-color: transparent;
    content: '';
    position: absolute;
    right: -4px;
    top: 9px;
    z-index: -1;
  }
</style>
