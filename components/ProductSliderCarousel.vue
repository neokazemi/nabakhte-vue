<template>
  <div :fluid="true" class="new-books-container full-container">
    <div class="slider-bg" :style="{ backgroundColor: mainBg }" />
    <div class="price-bg" :style="{ backgroundColor: bottomBg }" />
    <v-container class="slider-container">
      <v-row>
        <v-col class="slider">
          <div class="slider-title" :style="{ color: mainBg }">
            <slot />
          </div>
          <div class="slider-carousel">
            <Swiper ref="mySwiperRef" class="swiper" :options="swiperOption">
              <SwiperSlide v-for="(product,index) in products" :key="index">
                <ProductCard :details="product">
                  {{ product.productTitle }}
                </ProductCard>
              </SwiperSlide>
              <div slot="button-prev" class="swiper-button-prev" @click="slidePrev" />
              <div slot="button-next" class="swiper-button-next" @click="slideNext" />
            </Swiper>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import ProductCard from './productCard'

export default {
  components: {
    ProductCard,
    Swiper,
    SwiperSlide
  },
  props: {
    products: {
      type: Array,
      default () {
        return []
      }
    },
    mainBg: {
      type: String,
      default: '#33b130'
    },
    bottomBg: {
      type: String,
      default: '#42bc3f'
    }
  },
  data () {
    return {
      swiperOption: {
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 0
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 0
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 0
          }
        },
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
    }
  }
}
</script>

<style scoped>

  .new-books-container {
    position: relative;
    z-index: 2;
    margin: 40px 0;
    width: 100%;
  }

  .slider-bg {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 290px;
    z-index: -1;
  }

  .price-bg {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 38px;
    z-index: -1;
  }

  .slider-title {
    font-size: 1rem;
  }

  .slider-carousel {
    display: flex;
    flex-direction: row;
    height: 405px;
  }

  .slider-container {
    padding: 0 12px;
  }

  .slider {
    padding: 0 12px;
  }
</style>
