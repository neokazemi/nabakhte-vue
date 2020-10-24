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
              مشاهده بیشتر <div class="more-info-icon">
                <v-icon color="#33b130">
                  mdi-chevron-left
                </v-icon>
              </div>
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
  @import url('~/assets/css/components/ProductSliderCarouselScoped.css');
</style>
