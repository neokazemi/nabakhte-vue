<template>
  <div class="logo-swiper">
    <Swiper ref="mySwiperRef" :options="swiperOption">
      <SwiperSlide v-for="(item, index) in items" :key="index">
        <v-img :src="item.imageUrl" :width="59" :height="59" contain />
      </SwiperSlide>
    </Swiper>
    <div slot="button-prev" class="swiper-button-prev" @click="slidePrev" />
    <div slot="button-next" class="swiper-button-next" @click="slideNext" />
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import '~/assets/css/components/LogoCarousel.css'

export default {
  name: 'LogoCarousel',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    items: {
      type: Array,
      required: true,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        breakpoints: this.getBreakPoints(),
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods: {
    slideNext () {
      this.$refs.mySwiperRef.$swiper.slideNext()
    },
    slidePrev () {
      this.$refs.mySwiperRef.$swiper.slidePrev()
    },
    getBreakPoints () {
      return {
        400: {
          slidesPerView: 2,
          spaceBetween: 0
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 0
        },
        960: {
          slidesPerView: 5,
          spaceBetween: 0
        },
        1260: {
          slidesPerView: 5,
          spaceBetween: 0
        }
      }
    }
  }
}
</script>
