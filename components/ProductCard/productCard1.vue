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
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.product-card-image {
  margin: 2.5%;
  position: relative;
  width: 95%;
}

.product-card-2 .analysis {
  background-color: #ff4342;
  border-radius: 0 10px 10px 0;
  color: #fff;
  left: 0;
  padding: 2px 10px;
  position: absolute;
  top: 8px;
  z-index: 1;
}

.product-card-image img {
  display: block;
  height: auto;
  width: 100%;
}

.font-black .product-title {
  padding: 0 10px;
}

.product-card-1 .product-title {
  color: #fff;
  font-size: 0.8rem;
  height: auto;
  line-height: 1.4rem;
  margin: 4% 0;
  text-align: center;
  width: 100%;
}

.product-card-2 .product-title {
  color: #207c69;
  font-size: 0.9rem;
  margin: 30px auto 0;
  padding: 0 15px;
  text-align: center;
  width: 100%;
}

.product-card-4 {
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(4, 5, 5, 0.25);
  position: relative;
}

.product-card-4 a {
  color: #000;
  font-size: 0.8rem;
  font-weight: bold;
}

.product-card-4 .product-title {
  height: 40px;
  margin: 10px;
}

.product-card-4 .rating {
  margin-bottom: 10px;
  text-align: center;
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
  align-items: center;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  width: 100%;
}

.product-card-1 .price {
  bottom: -8px;
  color: #fff;
  font-size: 1rem;
  height: 38px;
  line-height: 2.3rem;
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
  color: #fff;
  font-size: 12px;
  margin: 0 3px;
  text-decoration: line-through;
}

.product-card .price .percent {
  background-color: #fb1616;
  color: #fff !important;
  font-family: inherit;
  margin: 0 3px;
  padding: 0 3px;
}

.product-card-1 .price .percent {
  font-size: inherit;
  font-weight: 500;
  line-height: 1rem;
}

.product-card-2 .price .percent {
  color: #fff;
  left: calc(50% - 25px);
  position: absolute;
  text-align: center;
  top: -75px;
  width: 50px;
}

.product-card-2 .price .percent::after {
  background-color: #fb1616;
  border: 4px solid #fff;
  border-top: 4px solid #fb1616;
  bottom: -8px;
  content: ' ';
  height: 0;
  margin-right: -4px;
  position: absolute;
  right: 50%;
  width: 0;
}

.product-card-1 .price .new-price {
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 3px;
}

.product-card-image .image-hover {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  opacity: 0;
  position: absolute;
  top: 0;
  transition: all 0.3s ease;
  visibility: hidden;
  width: 100%;
}

.product-card-image:hover .image-hover {
  opacity: 1;
  visibility: visible;
}

.product-card-image .image-hover .more-info {
  align-items: center;
  color: #fff !important;
  display: flex;
  font-family: inherit;
  font-size: 0.8rem;
  height: 100%;
  justify-content: center;
  text-align: center;
  width: 100%;
}

.font-black .product-card-image .image-hover .more-info {
  font-size: 0.75rem;
}

.card-button i {
  font-size: 16px;
  margin: 5px 0;
}

.product-card-image .image-hover .more-info:hover {
  text-decoration: none;
}

.product-card-image .image-hover .more-info i {
  font-size: 14px;
  margin: 3px;
}

.card-button {
  border: 0;
  border-radius: 10px;
  bottom: 15%;
  color: #fff;
  display: inline-block;
  height: 32px;
  position: absolute;
  width: 32px;
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
