<template>
  <div>
    <productCard1 v-if="type <= 4" :details="details" :type="type">
      {{ details.name }}
    </productCard1>
    <ProductCard2 v-if="type === 5" :details="details">
      {{ details.name }}
    </ProductCard2>
    <ProductCard3 v-if="type === 6" :details="details">
      {{ details.name }}
    </ProductCard3>
    <ProductCard4 v-if="type === 7" :details="details">
      {{ details.name }}
    </ProductCard4>
    <ProductCard5 v-if="type === 8" :details="details" :box-shadow="boxShadow">
      {{ details.name }}
    </ProductCard5>
    <ProductCard6 v-if="type === 9" :details="details">
      {{ details.name }}
    </ProductCard6>
  </div>
</template>

<script>
import productCard1 from './productCard1'
import ProductCard2 from './ProductCard2'
import ProductCard3 from './ProductCard3'
import ProductCard4 from './ProductCard4'
import ProductCard5 from './ProductCard5'
import ProductCard6 from './ProductCard6'

export default {
  name: 'ProductCard',
  components: {
    ProductCard6,
    ProductCard5,
    ProductCard4,
    productCard1,
    ProductCard2,
    ProductCard3
  },
  props: {
    details: {
      type: Object
    },
    type: {
      type: Number,
      default: 1
    },
    boxShadow: {
      type: Boolean,
      default: false,
      required: false
    }
  }
}
</script>
