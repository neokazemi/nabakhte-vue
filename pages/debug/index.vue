<template>
  <div>
    aaaa
  </div>
</template>

<script>

export default {
  name: 'Index',
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    showLoginDialog () {
      this.$store.commit('updateLoginDialog', true)
    }
  }
}
</script>
