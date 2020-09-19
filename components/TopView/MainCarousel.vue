<template>
  <v-carousel
    height="355"
    :hide-delimiters="true"
  >
    <v-carousel-item v-for="(slide, index) in slides" :key="index">
      <v-img :src="slide.imgurl" />
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import '~/assets/css/components/MainCarousel.scss'
export default {
  name: 'MainCarousel',
  props: {
    slides: {
      type: Array,
      required: true
    }
  }
}
</script>
