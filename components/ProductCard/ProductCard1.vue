<template>
  <div
    :class="{
      'product-card': true,
      'product-card-1': type === 1,
      'product-card-2': type === 2,
      'product-card-4': type === 4,
      'font-black': type === 3
    }"
  >
    <div class="product-card-image">
      <p v-if="type === 2" class="analysis">
        <i class="fas fa-chart-pie" /> تحلیل
      </p>
      <nuxt-link :to="'/product/' + product.id">
        <v-img :src="product.photo" :alt="product.name" />
      </nuxt-link>
      <div class="image-hover">
        <nuxt-link class="more-info" :to="'/product/' + product.id">
          توضیحات بیشتر
          <v-icon color="#fff" size="20">
            mdi-chevron-double-left
          </v-icon>
        </nuxt-link>
        <button class="card-button like" type="submit">
          <v-icon color="#fff" size="20">
            mdi-heart
          </v-icon>
        </button>
        <button class="card-button buy" @click="addToCart(product)">
          <v-icon color="#fff" size="20">
            mdi-cart
          </v-icon>
        </button>
      </div>
    </div>
    <nuxt-link :to="'/product/' + product.id" class="product-title">
      {{ product.title }}
    </nuxt-link>
    <v-rating
      v-if="type === 4"
      readonly
      small
      :value="3"
      dense
      background-color="#2bbb28"
      color="#2bbb28"
      class="rating"
    />
    <div class="price">
      <span v-if="type === 1 || type === 3 || type === 4" class="old-price">{{ product.price.toman('base', false) }}</span>
      <span class="percent">{{ product.price.discountInPercent() }}%</span>
      <span class="new-price">{{ product.price.toman('final', false) }}</span>
      <span class="toman">تومان</span>
    </div>
  </div>
</template>

<script>
import { Product } from '~/models/Product'
import mixinStore from '~/plugins/mixinStore'
import '~/assets/css/components/ProductCards/ProductCard1.css'

export default {
  name: 'ProductCard1',
  mixins: [mixinStore],
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
  }
}
</script>
