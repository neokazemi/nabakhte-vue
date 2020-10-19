<template>
  <div>
    <transition
      name="expand"
      @clicked="enter"
      @after-enter="afterEnter"
      @leave="leave"
    >
      <slot />
    </transition>
    <button @click="cl">
      click
    </button>
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

  .expand-enter,
  .expand-leave-to {
    height: 100px;
    opacity: 1;
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
