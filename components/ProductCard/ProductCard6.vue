<template>
  <div class="product-card6">
    <div class="image-container">
      <v-img :src="product.photo" contain :width="52" :height="63" />
    </div>
    <div class="product-info-container">
      <div class="product-title">
        <slot />
      </div>
      <div class="product-buy-info">
        <div class="quantity">
          <v-select

            :items="quantity"
            :value="quantity[0]"
            dense
            outlined
            :height="25"
          />
          <nuxt-link to="#" class="delete-button">
            حذف
          </nuxt-link>
        </div>
        <div v-if="product.price.discountInPercent()" class="price">
          {{ product.price.toman('final', true) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Product } from '~/models/Product'
import '~/assets/css/components/ProductCards/ProductCard6.css'

export default {
  name: 'ProductCard6',
  filters: {
    price (value) {
      return value.toLocaleString('ar-SA')
    }
  },
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
    }
  },
  data () {
    return {
      quantity: [
        '1 عدد',
        '2 عدد',
        '3 عدد',
        '4 عدد',
        '5 عدد',
        '6 عدد',
        '7 عدد',
        '100 عدد'
      ]
    }
  }
}
</script>

<style scoped>
  @import url('~/assets/css/components/ProductCards/ProductCard6Scoped.css');
</style>
