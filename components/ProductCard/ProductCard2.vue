<template>
  <div class="full-width card">
    <div class="product-image">
      <v-img :src="product.image.url" contain />
    </div>
    <div class="full-width product-info">
      <div class="right-part">
        <slot />
        <div class="price">
          <span v-if="type === 1" class="old-price">{{ product.price.toman('base', false) }}</span>
          <span class="percent">{{ product.price.discountInPercent() }}%</span>
          <span class="new-price">{{ product.price.toman('final', false) }}</span>
          <span class="toman">تومان</span>
        </div>
        <div class="buy-options">
          <button>افزودن به سبد خرید</button>
          <select>
            <option value="1">
              1 عدد
            </option>
            <option value="2">
              2 عدد
            </option>
            <option value="3">
              3 عدد
            </option>
            <option value="4">
              4 عدد
            </option>
            <option value="5">
              5 عدد
            </option>
            <option value="6">
              6 عدد
            </option>
            <option value="7">
              7 عدد
            </option>
            <option value="8">
              8 عدد
            </option>
            <option value="9">
              9 عدد
            </option>
            <option value="10">
              10 عدد
            </option>
          </select>
        </div>
      </div>
      <div class="left-part">
        <p><span>مولف: </span>گروه مولفان مهر و ماه</p>
        <p><span>سال چاپ: </span>1399</p>
        <p><span>دسته بندی: </span>آزمون</p>
        <p><span>تعداد صفحه: </span>62</p>
        <p><span>شناسه محصول: </span>9786003175808</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Product } from '../../models/Product'

export default {
  name: 'ProductCard2',
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

<style scoped>
  @import url('../../assets/css/components/ProductCards/ProductCard2Scoped.css');
</style>
