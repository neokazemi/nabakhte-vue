<template>
  <div>
    aaaa
  </div>
</template>

<script>
import mixinDetectDevice from '~/plugins/mixin/detectDevice'

export default {
  name: 'Index',
  mixins: [mixinDetectDevice],
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
