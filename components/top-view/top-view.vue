<template>
  <div class="container body-head">
    <div class="row">
      <div class="col-md-9">
        <div class="row big-carousel">
          <MainCarousel />
        </div>
        <CarouselButtons />
      </div>
      <div class="col-3">
        <ProductCard type=2>گلبرگ</ProductCard>
      </div>
    </div>
  </div>
</template>
<script>
import ProductCard from '../productCard'
import MainCarousel from './MainCarousel'
import CarouselButtons from './underCarouselButtons'

export default {
  components: {
    ProductCard,
    MainCarousel,
    CarouselButtons
  }
}
</script>
