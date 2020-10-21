<template>
  <div class="specs">
    <p class="subject">
      {{ title }}
    </p>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ProductSpecs',
  props: {
    title: {
      type: String,
      default: 'Title',
      required: true
    }
  }
}
</script>

<style scoped>
  @import url('~/assets/css/components/ProductSliderCarouselScoped.css');

</style>
