<template>
  <div class="product-card5">
    <div :class="{ 'product-card5-bg': true, 'box-shadow': boxShadow }">
      <div class="product-img">
        <nuxt-link :to="product.getLink()">
          <v-img
            :src="product.photo"
            :alt="product.name"
            :nam="product.name"
            contain
            :width="'100%'"
            :height="'100%'"
          />
        </nuxt-link>
      </div>
      <div class="product-name">
        <slot />
      </div>
      <div class="rating">
        <v-rating
          readonly
          small
          :value="3"
          dense
          background-color="#2bbb28"
          color="#2bbb28"
          class="rating"
        />
      </div>
      <div class="final-price-and-buy">
        <nuxt-link to="#" />
        <div class="final-price">
          <p class="bold black-font">
            {{ product.price.toman('final', false) }}
          </p>
          <p> تومان</p>
        </div>
      </div>

      <div class="discount-price">
        <p v-if="product.price.discountInPercent()" class="org-price">
          {{ product.price.toman('base', false) }}
        </p>
        <p v-if="product.price.discountInPercent()" class="discount">
          {{ product.price.discountInPercent() }}%
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Product } from '~/models/Product'
import '~/assets/css/components/ProductCards/ProductCard5.css'

export default {
  name: 'ProductCard5',
  props: {
    product: {
      type: Product,
      default () {
        return new Product({
          price: {
            base: 100000,
            discount: 20000,
            final: 80000
          },
          image: {
            url: 'https://media.chibekhoonam.net/2020/09/golbarg-olom6.jpg'
          },
          name: 'اسم محصول',
          link: '#'
        })
      }
    },
    type: {
      type: Number,
      required: false,
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

<style scoped>
  @import url('~/assets/css/components/ProductCards/ProductCard5Scoped.css');
</style>
