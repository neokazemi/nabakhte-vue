<template>
  <div>
    <productCard1 v-if="type <= 4" :details="details" :type="type">
      {{ details.name }}
    </productCard1>
    <ProductCard2 v-else-if="type === 5" :details="details">
      {{ details.name }}
    </ProductCard2>
    <ProductCard3 v-else-if="type === 6" :details="details">
      {{ details.name }}
    </ProductCard3>
    <ProductCard4 v-else-if="type === 7" :details="details">
      {{ details.name }}
    </ProductCard4>
    <ProductCard5 v-else-if="type === 8" :details="details" :box-shadow="boxShadow">
      {{ details.name }}
    </ProductCard5>
    <ProductCard6 v-else-if="type === 9" :details="details">
      {{ details.name }}
    </ProductCard6>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  components: {
    ProductCard1: () => import('./ProductCard1'),
    ProductCard2: () => import('./ProductCard2'),
    ProductCard3: () => import('./ProductCard3'),
    ProductCard4: () => import('./ProductCard4'),
    ProductCard5: () => import('./ProductCard5'),
    ProductCard6: () => import('./ProductCard6')
  },
  props: {
    details: {
      type: Object,
      default () {
        return {}
      }
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
