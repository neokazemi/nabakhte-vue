<template>
  <div class="product-card5">
    <div :class="{ 'product-card5-bg': true, 'box-shadow': boxShadow }">
      <div class="product-img">
        <nuxt-link :to="product.getLink()">
          <v-img :src="product.image.url" alt="" contain :width="'100%'" :height="'100%'" />
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
        <p class="org-price">
          {{ product.price.toman('base', false) }}
        </p>
        <p class="discount">
          {{ product.price.discountInPercent() }}%
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Product } from '../../models/Product'

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
  .product-card5 {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    padding: 0 5px;
  }

  .product-card5-bg {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    background-color: #fff;
  }

  .product-img {
    width: 95%;
    margin: 2.5%;
  }

  .product-name {
    font-size: 0.8rem;
    text-align: right;
    height: 40px;
    padding: 3px 10px;
  }

  .rating {
    display: flex;
    justify-content: center;
    margin: 10px 0;
  }

  .final-price-and-buy {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 10px;
  }

  .final-price {
    color: #6f6f6f;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .bold {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .black-font {
    color: #000;
  }

  .discount-price {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin: 10px;
  }

  .discount-price p {
    margin: 0 3px;
  }

  .discount-price .org-price {
    text-decoration: line-through;
  }

  .discount-price .discount {
    font-weight: bold;
    color: #fff;
    padding: 5px 1px;
    background-color: #fb1616;
  }

  .box-shadow {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.24);
  }
</style>

<style>
  .product-card5 .final-price-and-buy a {
    width: 20px;
    height: 20px;
    margin: 5px 0;
    border-radius: 50%;
    background-color: #2bbb28;
  }
</style>
