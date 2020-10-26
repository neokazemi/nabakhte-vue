<template>
  <v-container :fluid="true" class="product-card">
    <v-row class="flex-column flex-sm-row">
      <v-col :sm="1">
        <a href="#" class="remove">حذف ×</a>
      </v-col>
      <v-col :sm="1" class="product-card-image-cart">
        <v-img :src="cartItem.product.image.url" contain :width="56" :height="75" />
      </v-col>
      <v-col :sm="4" class="justify-sm-center justify-start">
        <p class="name justify-start">
          <span class="d-inline-block d-sm-none title">محصول: </span>
          <slot />
        </p>
      </v-col>
      <v-col :sm="2">
        <div class="price justify-sm-center justify-start">
          <span class="title d-inline-block d-sm-none">قیمت: </span>
          <span v-if="type === 1" class="old-price">{{ cartItem.product.price.toman('base', false) }}</span>
          <span class="percent">{{ cartItem.product.price.discountInPercent() }}%</span>
          <span class="new-price">{{ cartItem.product.price.toman('final', false) }}</span>
          <span class="toman"> تومان</span>
        </div>
      </v-col>
      <v-col :sm="2" class="count justify-sm-center justify-start">
        <span class="title d-inline-block d-sm-none">تعداد: </span>
        <v-select
          v-model="cartItem.qty"
          :items="items"
          item-text="title"
          item-value="value"
          outlined
          background-color="#fff"
          dense
          eager
          flat
          :height="20"
        />
      </v-col>
      <v-col :sm="2" class="final-price justify-sm-center justify-start">
        <p><span class="d-inline-block d-sm-none title">مجموع: </span>{{ cartItem.totalPrice().toman('final', false) }} <span> تومان </span></p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { CartItem } from '~/models/Cart'
import '~/assets/css/components/ProductCards/ProductCard4.css'

export default {
  name: 'CartItem1',
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
  },
  data () {
    return {
      items: [
        {
          title: '1 عدد',
          value: 1
        },
        {
          title: '2 عدد',
          value: 2
        },
        {
          title: '3 عدد',
          value: 3
        },
        {
          title: '4 عدد',
          value: 4
        },
        {
          title: '5 عدد',
          value: 5
        },
        {
          title: '6 عدد',
          value: 6
        },
        {
          title: '7 عدد',
          value: 7
        },
        {
          title: '8 عدد',
          value: 8
        },
        {
          title: '9 عدد',
          value: 9
        },
        {
          title: '100 عدد',
          value: 100
        }
      ]
    }
  }
}
</script>

<style scoped>
  @import url('~/assets/css/components/ProductCards/ProductCard4Scoped.css');
</style>
