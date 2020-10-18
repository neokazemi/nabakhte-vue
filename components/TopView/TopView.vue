<template>
  <div class="container body-head">
    <div class="row">
      <div :class="{ 'col-md-9': isFromPc, col: !isFromPc }">
        <div class="row big-carousel">
          <MainCarousel :slides="mainCarouselSlides" />
          <CarouselButtons v-if="isFromPc" />
        </div>
      </div>
      <div v-if="isFromPc" class="col-3">
        <v-carousel hide-delimiters class="product-card">
          <v-carousel-item
            v-for="(product,index) in products.list"
            :key="index"
          >
            <ProductCard :type="2" :product="product">
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
import { ProductList } from '../../models/Product'
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
    products: {
      type: ProductList,
      default () {
        return new ProductList()
      }
    },
    mainCarouselSlides: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    isFromPc () {
      return this.$store.getters.isFromPc
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
