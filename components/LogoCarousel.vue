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
import 'swiper/swiper-bundle.css'

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

<style>
.logo-swiper {
  position: relative;
  margin: 30px 0;
}

.logo-swiper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 135px !important;
  height: 110px;
  margin: 0 7px;
  border: 1px dashed #c6d2d0;
  border-radius: 40px;
}

.logo-swiper .swiper-button-prev {
  left: -25px;
}

.logo-swiper .swiper-button-next {
  right: -25px;
}

.logo-swiper .swiper-button-next::after,
.logo-swiper .swiper-button-prev::after {
  font-size: 25px !important;
  font-weight: bold;
  color: #141414;
  opacity: 0.7;
}
</style>
