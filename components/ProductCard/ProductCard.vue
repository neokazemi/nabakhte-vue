<template>
  <div>
    <productCard1 v-if="type <= 4" :details="details" :type="type">
      {{ details.name }}
    </productCard1>
    <ProductCard2 v-if="type === 5" :details="details">
      {{ details.name }}
    </ProductCard2>
  </div>
</template>

<script>
import productCard1 from './productCard1'
import ProductCard2 from './ProductCard2'

export default {
  name: 'ProductCard',
  components: {
    productCard1,
    ProductCard2
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
