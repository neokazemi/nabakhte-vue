const mixinDetectDevice = {
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
