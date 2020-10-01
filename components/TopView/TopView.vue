<template>
  <div class="container body-head">
    <div class="row">
      <div :class="{ 'col-md-9': !ispwa, col: ispwa }">
        <div class="row big-carousel">
          <MainCarousel :slides="mainCarouselSlides" />
          <CarouselButtons v-if="!ispwa" />
        </div>
      </div>
      <div v-if="!ispwa" class="col-3">
        <v-carousel hide-delimiters class="product-card">
          <v-carousel-item
            v-for="(product,index) in productCards"
            :key="index"
          >
            <ProductCard :type="2" :details="product">
              {{ product.name }}
            </ProductCard>
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>
  </div>
</template>
<script>
import ProductCard from '../ProductCard/ProductCard'
import MainCarousel from './MainCarousel'
import CarouselButtons from './UnderCarouselButtons'

export default {
  name: 'TopView',
  components: {
    ProductCard,
    MainCarousel,
    CarouselButtons
  },
  props: {
    productCards: {
      type: Array
    },
    mainCarouselSlides: {
      type: Array
    }
  },
  computed: {
    ispwa () {
      return this.$store.getters.ispwa
    }
  }
}
</script>

<style>
  .product-card .v-window__prev,
  .product-card .v-window__next {
    background: #50cbb2;
    position: absolute;
    border-radius: 0;
    margin: 0;
    top: calc(60% - 20px);
    z-index: 1;
    width: 20px;
    height: 20px;
  }

  .product-card .v-window__prev {
    right: 20px;
  }

  .product-card .v-window__next {
    right: -1px;
  }

  .product-card .v-window__prev i,
  .product-card .v-window__next i {
    font-size: 20px !important;
  }

  .product-card .v-window__prev button,
  .product-card .v-window__next button {
    width: 20px;
    height: 20px;
  }
</style>
