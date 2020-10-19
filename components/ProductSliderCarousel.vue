<template>
  <div :fluid="true" class="new-books-container full-container">
    <div v-if="type === 1 || type === 2" :class="{ 'slider-bg': true, 'shorter-slider-bg': type === 2 }" :style="{ backgroundColor: mainBg }" />
    <div v-if="type === 1 || type === 2" class="price-bg" :style="{ backgroundColor: bottomBg } " />
    <v-container :class="{ 'slider-container': true, 'slider-container3': type === 3 }">
      <v-row>
        <v-col class="slider">
          <div :class="{ 'slider-title': true, 'slider-title3': type === 3 }" :style="{ color: mainBg }">
            <slot />
            <nuxt-link v-if="type === 1" class="more-info" to="/shop">
              مشاهده بیشتر <div class="more-info-icon" />
            </nuxt-link>
            <nuxt-link v-if="type === 3" class="more-info3" to="/shop">
              مشاهده بیشتر >
            </nuxt-link>
          </div>
          <div :class="{ 'slider-carousel': true, 'shorter-slider-carousel': type === 2, 'mobile-slider-carousel': type === 3 }">
            <Swiper ref="mySwiperRef" class="swiper" :options="swiperOption">
              <SwiperSlide v-for="(product,index) in products.list" :key="index">
                <ProductCard :product="product" :type="productCardType" :box-shadow="boxShadow">
                  {{ product.name }}
                </ProductCard>
              </SwiperSlide>
            </Swiper>
          </div>
        </v-col>
      </v-row>
      <div v-if="type === 1 || type === 2" slot="button-prev" :class="{ 'swiper-button-prev': type === 1, 'swiper-button-prev2': type === 2 }" @click="slidePrev" />
      <div v-if="type === 1 || type === 2" slot="button-next" :class="{ 'swiper-button-next': type === 1, 'swiper-button-next2': type === 2 }" @click="slideNext" />
    </v-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import { ProductList } from '../models/Product'
import ProductCard from './ProductCard/ProductCard'

export default {
  components: {
    ProductCard,
    Swiper,
    SwiperSlide
  },
  props: {
    products: {
      type: ProductList,
      default () {
        return new ProductList()
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
    },
    boxShadow: {
      type: Boolean,
      default: false,
      required: false
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
      } else if (this.type === 3) {
        return 8
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
            slidesPerView: 6,
            spaceBetween: 0
          }
        }
      } else if (this.type === 1) {
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
            slidesPerView: 4,
            spaceBetween: 0
          },
          1260: {
            slidesPerView: 5,
            spaceBetween: 0
          }
        }
      } else if (this.type === 3) {
        return {
          0: {
            slidesPerView: 1.2,
            spaceBetween: 0
          },
          400: {
            slidesPerView: 2.2,
            spaceBetween: 0
          },
          768: {
            slidesPerView: 3.2,
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
    width: 100%;
    margin: 40px 0;
  }

  .slider-bg {
    position: absolute;
    z-index: -1;
    right: 0;
    bottom: 0;
    left: 0;
    height: 290px;
  }

  .shorter-slider-bg {
    height: 250px;
  }

  .price-bg {
    position: absolute;
    z-index: -1;
    right: 0;
    bottom: 0;
    left: 0;
    height: 38px;
  }

  .slider-title {
    font-size: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10px;
  }

  .slider-title3 {
    margin-bottom: 20px;
  }

  .slider-title a {
    font-size: 0.7rem;
    color: #8e8e8e;
    display: flex;
    align-items: center;
  }

  .slider-title .more-info3 {
    font-size: 1rem;
    color: #000;
  }

  .more-info-icon {
    display: inline-flex;
    width: 20px;
    height: 20px;
    margin: 0 10px;
    border: 2px solid #d4d4d4;
    border-radius: 50%;
  }

  .slider-carousel {
    position: relative;
    display: flex;
    flex-direction: row;
    height: 405px;
  }

  .shorter-slider-carousel {
    height: 350px;
  }

  .mobile-slider-carousel {
    height: fit-content !important;
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
    text-shadow: 0 0 10px #424242;
  }

  .swiper-button-prev {
    position: absolute;
    left: 40px;
  }

  .swiper-button-next {
    position: absolute;
    right: 40px;
  }

  .swiper-button-next2::after,
  .swiper-button-prev2::after {
    font-size: 0.9rem;
    font-weight: 800;
    color: #fff;
  }

  .swiper-button-next2,
  .swiper-button-prev2 {
    text-align: center;
    position: absolute;
    z-index: 10;
    top: 120px;
    width: 20px;
    height: 20px;
  }

  .swiper-button-prev2 {
    left: -10px;
    background-color: #50cbb2;
  }

  .swiper-button-next2 {
    right: -10px;
    background-color: #fb1616;
  }

  .swiper-button-next2::after {
    content: '<';
  }

  .swiper-button-prev2::after {
    content: '>';
  }

  .slider-container3 {
    width: 100% !important;
    max-width: 100% !important;
  }

  @media only screen and ( max-width: 1260px ) {
    .slider-container {
      width: 930px;
    }

    .slider {
      padding: 0;
    }
  }

  @media only screen and ( max-width: 959.5px ) {
    .slider-container {
      max-width: 600px;
    }

    .slider-bg {
      height: 250px;
    }

    .slider-carousel {
      height: 340px;
    }
  }

  @media only screen and ( max-width: 599.5px ) {
    .slider-container {
      width: 350px;
    }

    .slider-carousel {
      height: 310px;
    }

    .slider-bg {
      height: 220px;
    }
  }

  @media only screen and ( max-width: 400px ) {
    .slider-container {
      width: 200px;
    }

    .slider-carousel {
      height: 330px;
    }

    .slider-bg {
      height: 240px;
    }
  }
</style>
