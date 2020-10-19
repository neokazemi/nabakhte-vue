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
  .card {
    display: flex;
    flex-direction: row;
  }

  .full-width {
    box-sizing: border-box;
    padding: 20px 0;
    width: 100%;
  }

  .product-image {
    max-width: 50px;
    position: relative;
  }

  .card-product-details {
    color: #000;
    display: flex;
    flex-direction: column;
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
    align-items: center;
    background-color: #fb1616;
    color: #fff !important;
    display: flex;
    font-size: 1.5rem;
    font-weight: bold;
    height: 100%;
    justify-content: center;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: all 300ms ease-in-out !important;
    visibility: hidden;
    width: 100%;
  }

  .product-image:hover .cart-item-image-hover {
    opacity: 1;
    visibility: visible;
  }
</style>
