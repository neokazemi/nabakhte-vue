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
        <p><span class="d-inline-block d-sm-none title">مجموع: </span>{{ cartItem.product.price.toman('final', false) }} <span> تومان </span></p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { CartItem } from '~/models/Cart'

export default {
  name: 'ProductCard4',
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
  .col {
    text-align: center;
    margin: 0 auto;
    padding-top: 0;
    padding-bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .name {
    font-weight: bold;
  }

  .container {
    padding: 6px 12px;
    border-top: 1px solid #f8f8f8;
    border-bottom: 1px solid #f0f0f0;
  }

  .price {
    font-weight: bold;
    position: relative;
  }

  .old-price {
    text-decoration: line-through;
    font-size: 0.9rem;
  }

  .percent {
    background-color: #fb1616;
    border-radius: 3px;
    padding: 0 5px;
    font-size: 0.8rem;
    color: #fff;
    line-height: 20px !important;
  }

  .final-price {
    color: #24a822;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .final-price span {
    font-size: 0.8rem;
  }

  .remove {
    color: #8d8d8d;
    font-size: 0.8rem;
  }

  .product-card .title {
    font-weight: bold;
    font-size: 0.7rem;
    margin-left: 10px;
  }

  @media only screen and (max-width: 600px) {
    .product-card {
      padding: 0 12px;
    }
  }
</style>

<style>
  .count input {
    background-color: #fff;
  }

  .product-card .count .v-input__slot {
    width: 50%;
    padding: 0 5px !important;
  }

  .product-card .count .v-select__slot {
    height: 25px;
  }

  .product-card .count .v-input__control {
    align-items: center;
  }

  .product-card .count .v-text-field__details {
    display: none;
  }

  .product-card .v-text-field.v-text-field--enclosed:not(.v-text-field--rounded) > .v-input__control > .v-input__slot .v-select__selections input {
    display: none;
  }

  .product-card .v-text-field.v-text-field--enclosed:not(.v-text-field--rounded) > .v-input__control > .v-input__slot fieldset {
    height: 30px;
  }

  .product-card .v-text-field.v-text-field--enclosed:not(.v-text-field--rounded) > .v-input__control > .v-input__slot .v-input__append-inner {
    padding: 0;
    margin-top: 0;
  }

  .product-card .v-text-field.v-text-field--enclosed:not(.v-text-field--rounded) > .v-input__control > .v-input__slot .v-select__selections {
    font-size: 0.75rem;
    font-weight: bold;
  }

  .product-card .v-text-field.v-text-field--enclosed:not(.v-text-field--rounded) > .v-input__control > .v-input__slot {
    min-height: 20px;
  }

  @media only screen and (max-width: 960px) {
    .product-card .count .v-input__slot {
      width: 80%;
    }

    .product-card-image-cart {
      padding: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    .product-card .count .v-input__slot {
      width: 100%;
    }

    .product-card-image-cart {
      padding: 0;
    }
  }

  @media only screen and (max-width: 600px) {
    .product-card .col {
      padding: 5px 0;
      border-top: 1px solid #f8f8f8;
      border-bottom: 1px solid #f8f8f8;
      line-height: 50px;
    }

    .product-card .count .v-input__slot {
      width: 30%;
      font-size: 1rem;
      align-self: start;
    }

    .product-card-image-cart .v-image {
      height: 150px !important;
    }
  }

  @media only screen and (max-width: 400px) {
    .product-card .count .v-input__slot {
      width: 50%;
      font-size: 1rem;
      align-self: start;
    }
  }
</style>
