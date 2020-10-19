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
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: transparent;
}

.product-card-image {
  position: relative;
  width: 95%;
  margin: 2.5%;
}

.product-card-2 .analysis {
  color: #fff;
  position: absolute;
  z-index: 1;
  top: 8px;
  left: 0;
  padding: 2px 10px;
  border-radius: 0 10px 10px 0;
  background-color: #ff4342;
}

.product-card-image img {
  display: block;
  width: 100%;
  height: auto;
}

.font-black .product-title {
  padding: 0 10px;
}

.product-card-1 .product-title {
  font-size: 0.8rem;
  line-height: 1.4rem;
  color: #fff;
  text-align: center;
  width: 100%;
  height: auto;
  margin: 4% 0;
}

.product-card-2 .product-title {
  font-size: 0.9rem;
  color: #207c69;
  text-align: center;
  width: 100%;
  margin: 30px auto 0;
  padding: 0 15px;
}

.product-card-4 {
  position: relative;
  box-shadow: 0 1px 2px rgba(4, 5, 5, 0.25);
  border-radius: 2px;
  background-color: #fff;
}

.product-card-4 a {
  font-size: 0.8rem;
  font-weight: bold;
  color: #000;
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
  width: 100%;
  margin: 0;
}

.rating button {
  background-color: transparent;
}

.product-card .product-title:hover {
  text-decoration: none;
}

.product-card .price {
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.product-card-1 .price {
  font-size: 1rem;
  line-height: 2.3rem;
  color: #fff;
  bottom: -8px;
  height: 38px;
}

.product-card-2 .price {
  font-size: 1.1rem;
  color: #799992;
  position: relative;
}

.product-card-4 .price {
  position: relative;
}

.product-card-1 .price .old-price {
  font-size: 12px;
  color: #fff;
  text-decoration: line-through;
  margin: 0 3px;
}

.product-card .price .percent {
  font-family: inherit;
  color: #fff !important;
  margin: 0 3px;
  padding: 0 3px;
  background-color: #fb1616;
}

.product-card-1 .price .percent {
  font-size: inherit;
  font-weight: 500;
  line-height: 1rem;
}

.product-card-2 .price .percent {
  color: #fff;
  text-align: center;
  position: absolute;
  top: -75px;
  left: calc(50% - 25px);
  width: 50px;
}

.product-card-2 .price .percent::after {
  position: absolute;
  right: 50%;
  bottom: -8px;
  width: 0;
  height: 0;
  margin-right: -4px;
  content: ' ';
  border: 4px solid #fff;
  border-top: 4px solid #fb1616;
  background-color: #fb1616;
}

.product-card-1 .price .new-price {
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 3px;
}

.product-card-image .image-hover {
  position: absolute;
  top: 0;
  display: flex;
  visibility: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.3s ease;
  background-color: rgba(0, 0, 0, 0.75);
}

.product-card-image:hover .image-hover {
  visibility: visible;
  opacity: 1;
}

.product-card-image .image-hover .more-info {
  font-family: inherit;
  font-size: 0.8rem;
  color: #fff !important;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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
  color: #fff;
  position: absolute;
  bottom: 15%;
  display: inline-block;
  width: 32px;
  height: 32px;
  border: 0;
  border-radius: 10px;
}

.card-button:hover {
  cursor: pointer;
}

.image-hover .like {
  right: calc(50% - 40px);
  background-color: #50cbb2;
}

.image-hover .buy {
  left: calc(50% - 40px);
  background-color: #fb1616;
}

.font-black {
  font-size: 0.8rem;
  font-weight: bold;
  color: #000 !important;
  text-align: center;
}

.font-black a {
  color: #000 !important;
}
</style>
