const mixinDetectDevice = {
  layout (context) {
    if (context.store.getters['detectedDevice/isFromPc']) {
      return 'pc'
    } else {
      return 'mobile'
    }
  },
  computed: {
    isFromPc () {
      return this.$store.getters['detectedDevice/isFromPc']
    },
    ispwa () {
      return this.$store.getters['detectedDevice/ispwa']
    }
  }
}

export default mixinDetectDevice
