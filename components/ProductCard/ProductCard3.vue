<template>
  <div class="full-width card">
    <div class="product-image">
      <v-img :src="cartItem.product.image.url" contain />
      <a class="cart-item-image-hover">×</a>
    </div>
    <div class="card-product-details">
      <slot />
      <div class="cart-item-price">
        <p>
          {{ cartItem.product.price.toman('final', false) }}
          <span>تومان</span>
          <span>{{ cartItem.qty }} عدد  </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import mixinStore from '~/plugins/mixinStore'
import { CartItem } from '~/models/Cart'

export default {
  name: 'ProductCard3',
  mixins: [mixinStore],
  props: {
    cartItem: {
      type: CartItem,
      default () {
        return new CartItem()
      }
    },
    type: {
      type: Number,
      required: false,
      default: 1
    }
  }
}
</script>

<style scoped>
  @import url('~/assets/css/components/ProductCards/ProductCard3Scoped.css');
</style>
