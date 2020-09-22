<template>
  <div :fluid="true" class="new-books-container full-container">
    <div :class="{ 'slider-bg': true, 'shorter-slider-bg': type === 2 }" :style="{ backgroundColor: mainBg }" />
    <div class="price-bg" :style="{ backgroundColor: bottomBg }" />
    <v-container class="slider-container">
      <v-row>
        <v-col class="slider">
          <div class="slider-title" :style="{ color: mainBg }">
            <slot />
            <nuxt-link v-if="type === 1" class="more-info" to="/shop">
              مشاهده بیشتر <div class="more-info-icon" />
            </nuxt-link>
          </div>
          <div :class="{ 'slider-carousel': true, 'shorter-slider-carousel': type === 2 }">
            <Swiper ref="mySwiperRef" class="swiper" :options="swiperOption">
              <SwiperSlide v-for="(product,index) in products" :key="index">
                <ProductCard :details="product" :type="productCardType">
                  {{ product.name }}
                </ProductCard>
              </SwiperSlide>
            </Swiper>
            <div slot="button-prev" :class="{ 'swiper-button-prev': type === 1, 'swiper-button-prev2': type === 2 }" @click="slidePrev" />
            <div slot="button-next" :class="{ 'swiper-button-next': type === 1, 'swiper-button-next2': type === 2 }" @click="slideNext" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import ProductCard from './ProductCard/ProductCard'

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
    },
    type: {
      type: Number,
      required: false,
      default: 1
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
  computed: {
    productCardType () {
      if (this.type === 1) {
        return 1
      } else if (this.type === 2) {
        return 3
      } else {
        return 1
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
      if (this.type === 2) {
        return {
          640: {
            slidesPerView: 3,
            spaceBetween: 0
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 0
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 0
          }
        }
      } else if (this.type === 1) {
        return {
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
        }
      }
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

  .shorter-slider-bg {
    height: 250px;
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10px;
  }

  .slider-title a {
    font-size: 0.7rem;
    color: #8e8e8e;
    display: flex;
    align-items: center;
  }

  .more-info-icon {
    border: 2px solid #d4d4d4;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: inline-flex;
    margin: 0 10px;
  }

  .slider-carousel {
    display: flex;
    flex-direction: row;
    height: 405px;
    position: relative;
  }

  .shorter-slider-carousel {
    height: 350px;
  }

  .slider-container {
    padding: 0 12px;
  }

  .slider {
    padding: 0 12px;
  }

  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-weight: 800;
    color: #fff;
  }

  .swiper-button-prev {
    position: absolute;
    left: -70px;
  }

  .swiper-button-next {
    position: absolute;
    right: -70px;
  }

  .swiper-button-next2::after,
  .swiper-button-prev2::after {
    font-weight: 800;
    font-size: 14px;
    color: #fff;
  }

  .swiper-button-next2,
  .swiper-button-prev2 {
    width: 20px;
    height: 20px;
    position: absolute;
    z-index: 10;
    top: 120px;
    text-align: center;
  }

  .swiper-button-prev2 {
    left: -10px;
    background-color: #50cbb2;
  }

  .swiper-button-next2 {
    background-color: #fb1616;
    right: -10px;
  }

  .swiper-button-next2::after {
    content: '<';
  }

  .swiper-button-prev2::after {
    content: '>';
  }

</style>
