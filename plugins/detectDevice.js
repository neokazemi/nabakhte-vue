import Vue from 'vue'

const DetectDevice = {
  install (Vue) {
    Vue.mixin({
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
        }
      }
    })
  }
}

Vue.use(DetectDevice)

export default function (context) {
  // https://www.npmjs.com/package/nuxt-user-agent#methods
  context.isFromPc = context.app.$ua.isFromPc()
  context.store.commit('detectedDevice/updateIsFromPc', context.isFromPc)
}
