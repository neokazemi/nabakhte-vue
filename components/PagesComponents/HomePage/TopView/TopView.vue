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
import MainCarousel from './MainCarousel'
import CarouselButtons from './UnderCarouselButtons'
import ProductCard from '~/components/ProductCard/ProductCard'
import { ProductList } from '~/models/Product'
import '~/assets/css/components/TopView.css'

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
  }
}
</script>
