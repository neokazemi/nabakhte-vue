<template>
  <div>
    <transition
      ref="highlight"
      name="expand"
      @clicked="expanded = true"
      @after-enter="afterEnter"
      @leave="leave"
    >
      <div ref="expandContainer" class="fixedheight">
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
      expanded: false
    }
  },
  methods: {
    cl () {
      this.$emit('clicked')
      this.enter(this.$refs.expandContainer)
      this.afterEnter((this.$refs.expandContainer))
    },
    enter (element) {
      const width = element.clientWidth

      element.style.width = width
      element.style.position = 'absolute'
      element.style.visibility = 'hidden'
      element.style.height = 'auto'

      const height = element.clientHeight

      element.style.width = null
      element.style.position = null
      element.style.visibility = null
      element.style.height = 100

      // Force repaint to make sure the
      // animation is triggered correctly.
      // getComputedStyle(element).height

      // Trigger the animation.
      // We use `requestAnimationFrame` because we need
      // to make sure the browser has finished
      // painting after setting the `height`
      // to `0` in the line above.
      requestAnimationFrame(() => {
        element.style.height = height
      })
    },
    afterEnter (element) {
      element.style.height = 'auto'
    },
    leave (element) {
      const height = getComputedStyle(element).height

      element.style.height = height

      // Force repaint to make sure the
      // animation is triggered correctly.
      // getComputedStyle(element).height

      requestAnimationFrame(() => {
        element.style.height = 100
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
    transform: translateZ(100px);
    backface-visibility: hidden;
    perspective: 1000px;
  }
</style>
