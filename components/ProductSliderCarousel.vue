<template>
  <div :fluid="true" class="new-books-container full-container">
    <div :class="{ 'slider-bg': true, 'green-slider-bg': type === 1, 'purple-slider-bg': type === 2 }" />
    <div :class="{ 'price-bg': true, 'green-price-bg': type === 1, 'purple-price-bg': type === 2 }" />
    <v-container class="slider-container">
      <v-row>
        <v-col class="slider">
          <div :class="{ 'slider-title': type === 1, 'purple-slider-title': type === 2 }">
            <slot />
          </div>
          <div class="slider-carousel">
            <Swiper ref="mySwiper" :options="swiperOptions">
              <SwiperSlide v-for="(product,index) in products" :key="index" :style="style">
                <ProductCard :details="product">
                  {{ product.productTitle }}
                </ProductCard>
              </SwiperSlide>
              <div slot="loading">
                loading...
              </div>
            </Swiper>
            <!-- <ProductCard v-for="(product, index) in products" :key="index" type="1" :details="product">
              {{ product.productTitle }}
            </ProductCard> -->
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
// import 'swiper/css/swiper.css'
import ProductCard from './productCard'

export default {
  components: {
    ProductCard,
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  props: {
    products: {
      type: Array,
      default () {
        return []
      }
    },
    type: {
      type: Number,
      required: false,
      default: 1
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        }
        // Some Swiper option/callback...
      },
      style: {
        width: '20%'
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
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

  .green-slider-bg {
    background-color: #33b130;
  }

  .purple-slider-bg {
    background-color: #6130a4;
  }

  .price-bg {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 38px;
    z-index: -1;
  }

  .green-price-bg {
    background-color: #42bc3f;
  }

  .purple-price-bg {
    background-color: #6d3ab3;
  }

  .slider-title {
    color: #26ac23;
    font-size: 1rem;
  }

  .purple-slider-title {
    color: #5048b3;
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
