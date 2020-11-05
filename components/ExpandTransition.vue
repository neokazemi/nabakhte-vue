<template>
  <div>
    <transition
      ref="highlight"
      name="expand"
      @clicked="cl"
      @after-enter="afterEnter"
      @leave="leave"
    >
      <div ref="expandContainer" class="fixedheight" :class="{ 'expand-enter-active': active, 'expand-enter-to': active }">
        <slot />
      </div>
    </transition>
    <v-btn @click="cl">
      click
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'ExpandTransition',
  data () {
    return {
      expanded: false,
      active: false
    }
  },
  methods: {
    cl () {
      this.active = true
      // this.enter(this.$refs.expandContainer)
      this.afterEnter((this.$refs.expandContainer), this.enter)
    },
    enter (element) {
      const width = getComputedStyle(element).width

      element.style.width = width
      element.style.position = 'absolute'
      element.style.visibility = 'hidden'
      element.style.height = 'auto'

      const height = getComputedStyle(element).height

      element.style.width = null
      element.style.position = null
      element.style.visibility = null
      element.style.height = 0

      // eslint-disable-next-line
      getComputedStyle(element).height

      requestAnimationFrame(() => {
        element.style.height = height
      })
    },
    afterEnter (element, callback) {
      callback(element)
      element.style.height = 'auto'
    },
    leave (element) {
      const height = getComputedStyle(element).height

      element.style.height = height

      // eslint-disable-next-line
      getComputedStyle(element).height

      requestAnimationFrame(() => {
        element.style.height = 0
      })
    }
  }
}
</script>

<style>
  .expand-enter-active,
  .expand-leave-active {
    overflow: hidden;
    transition: height 1s ease-in-out;
    transition-property: opacity, height;
  }

  .fixedheight {
    overflow: hidden;
    height: 100px;
    transition: height 1s ease-in-out;
    transition-property: opacity, height;
  }
</style>

<style scoped>
  * {
    will-change: height;
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
</style>
