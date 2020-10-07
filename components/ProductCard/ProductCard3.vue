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
          <span>{{ cartItem.qty }} عدد </span>
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
  .card {
    display: flex;
    flex-direction: row;
  }

  .full-width {
    width: 100%;
    box-sizing: border-box;
    padding: 20px 0;
  }

  .product-image {
    max-width: 50px;
    position: relative;
  }

  .card-product-details {
    display: flex;
    flex-direction: column;
    color: #000;
    font-size: 0.8rem;
    font-weight: bold;
    margin-right: 10px;
    text-align: right;
  }

  .cart-item-price {
    justify-content: right;
    text-align: right;
  }

  .cart-item-price span {
    font-size: 0.6rem;
    font-weight: normal;
  }

  .cart-item-image-hover {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #fb1616;
    visibility: hidden;
    opacity: 0;
    -webkit-transition: all 300ms ease-in-out !important;
    -moz-transition: all 300ms ease-in-out !important;
    -ms-transition: all 300ms ease-in-out !important;
    -o-transition: all 300ms ease-in-out !important;
    transition: all 300ms ease-in-out !important;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #fff !important;
  }

  .product-image:hover .cart-item-image-hover {
    visibility: visible;
    opacity: 1;
  }
</style>
