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
  </div>
</template>

<script>
import productCard1 from './productCard1'
import ProductCard2 from './ProductCard2'
import ProductCard3 from './ProductCard3'
import ProductCard4 from './ProductCard4'

export default {
  name: 'ProductCard',
  components: {
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
    }
  }
}
</script>
