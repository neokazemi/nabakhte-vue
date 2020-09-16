<template>
  <v-carousel
    height="355"
    :hide-delimiters="true"
  >
    <v-carousel-item>
      <v-img src="https://media.chibekhoonam.net/2020/09/nazarsanji-hafte3-shahrivar.jpg" />
    </v-carousel-item>
    <v-carousel-item>
      <v-img src="https://media.chibekhoonam.net/2020/08/اسلاید-شو.jpg" />
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import '~/assets/css/components/MainCarousel.scss'
export default {
  name: 'MainCarousel'
}
</script>
