<template>
  <div>
    <CartItem1 v-if="type === 1" :cart-item="cartItem" @remove="removeCartItem" @changedQuantity="quantityChanged">
      {{ cartItem.product.title }}
    </CartItem1>
    <CartItem2 v-else-if="type === 2" :cart-item="cartItem">
      {{ cartItem.product.title }}
    </CartItem2>
  </div>
</template>

<script>
import { CartItem } from '~/models/Cart'

export default {
  name: 'CartItem',
  components: {
    CartItem1: () => import('./CartItem1'),
    CartItem2: () => import('./CartItem2')
  },
  props: {
    cartItem: {
      type: CartItem,
      default () {
        return new CartItem()
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
  },
  methods: {
    removeCartItem (cartItem) {
      this.$emit('remove', cartItem)
    },
    quantityChanged () {
      this.$emit('changedQuantity')
    }
  }
}
</script>
