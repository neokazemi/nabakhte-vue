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
      <nuxt-link :to="product.link">
        <img :src="product.image.url" :alt="product.name">
      </nuxt-link>
      <div class="image-hover">
        <nuxt-link class="more-info" :to="product.link">
          توضیحات بیشتر
          <i class="fas fa-angle-double-left" />
        </nuxt-link>
        <button class="card-button like" type="submit">
          <i class="fas fa-heart" />
        </button>
        <button class="card-button buy" @click="addToCart(product)">
          <i class="fas fa-shopping-cart" />
        </button>
      </div>
    </div>
    <nuxt-link :to="product.link" class="product-title">
      <slot />
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

<style>
.product-card {
  display: flex;
  background: transparent;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}

.product-card-image {
  position: relative;
  width: 95%;
  margin: 2.5%;
}

.product-card-2 .analysis {
  background-color: #ff4342;
  border-radius: 0 10px 10px 0;
  padding: 2px 10px;
  z-index: 1;
  position: absolute;
  top: 8px;
  left: 0;
  color: #fff;
}

.product-card-image img {
  width: 100%;
  height: auto;
  display: block;
}

.font-black .product-title {
  padding: 0 10px;
}

.product-card-1 .product-title {
  height: auto;
  line-height: 1.4rem;
  color: #fff;
  font-family: inherit;
  font-size: 0.8rem;
  width: 100%;
  text-align: center;
  margin: 4% 0;
}

.product-card-2 .product-title {
  color: #207c69;
  font-size: 0.9rem;
  padding: 0 15px;
  margin: 30px auto 0 auto;
  width: 100%;
  text-align: center;
}

.product-card-4 {
  position: relative;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(4, 5, 5, 0.25);
  border-radius: 2px;
}

.product-card-4 a {
  color: #000;
  font-weight: bold;
  font-size: 0.8rem;
}

.product-card-4 .product-title {
  height: 40px;
  margin: 10px;
}

.product-card-4 .rating {
  text-align: center;
  margin-bottom: 10px;
}

.product-card-4 .product-card-image {
  margin: 0;
  width: 100%;
}

.rating button {
  background-color: transparent;
}

.product-card .product-title:hover {
  text-decoration: none;
}

.product-card .price {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
}

.product-card-1 .price {
  height: 38px;
  line-height: 2.3rem;
  font-size: 1rem;
  color: #fff;
  bottom: -8px;
}

.product-card-2 .price {
  color: #799992;
  font-size: 1.1rem;
  position: relative;
}

.product-card-4 .price {
  position: relative;
}

.product-card-1 .price .old-price {
  font-family: inherit;
  font-size: 12px;
  text-decoration: line-through;
  color: #fff;
  margin: 0 3px;
}

.product-card .price .percent {
  padding: 0 3px;
  background-color: #fb1616;
  margin: 0 3px;
  font-family: inherit;
  color: #fff !important;
}

.product-card-1 .price .percent {
  font-size: inherit;
  font-weight: 500;
  line-height: 1rem;
}

.product-card-2 .price .percent {
  color: #fff;
  width: 50px;
  position: absolute;
  text-align: center;
  top: -75px;
  left: calc(50% - 25px);
}

.product-card-2 .price .percent::after {
  content: ' ';
  position: absolute;
  bottom: -8px;
  right: 50%;
  margin-right: -4px;
  background-color: #fb1616;
  height: 0;
  width: 0;
  border: 4px solid #fff;
  border-top: 4px solid #fb1616;
}

.product-card-1 .price .new-price {
  font-weight: bold;
  font-size: 1.2rem;
  font-family: inherit;
  margin: 0 3px;
}

.product-card-image .image-hover {
  background-color: rgba(0, 0, 0, 0.75);
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.product-card-image:hover .image-hover {
  visibility: visible;
  opacity: 1;
}

.product-card-image .image-hover .more-info {
  font-family: inherit;
  color: #fff !important;
  font-size: 0.8rem;
  display: flex;
  width: 100%;
  height: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.font-black .product-card-image .image-hover .more-info {
  font-size: 0.75rem;
}

.card-button i {
  margin: 5px 0;
  font-size: 16px;
}

.product-card-image .image-hover .more-info:hover {
  text-decoration: none;
}

.product-card-image .image-hover .more-info i {
  font-size: 14px;
  margin: 3px;
}

.card-button {
  border-radius: 10px;
  border: none;
  width: 32px;
  height: 32px;
  display: inline-block;
  position: absolute;
  bottom: 15%;
  color: #fff;
}

.card-button:hover {
  cursor: pointer;
}

.image-hover .like {
  background-color: #50cbb2;
  right: calc(50% - 40px);
}

.image-hover .buy {
  background-color: #fb1616;
  left: calc(50% - 40px);
}

.font-black {
  color: #000 !important;
  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;
}

.font-black a {
  color: #000 !important;
}
</style>
