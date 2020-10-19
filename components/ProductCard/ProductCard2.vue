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
  .card {
    display: flex;
    flex-direction: row;
  }

  .full-width {
    box-sizing: border-box;
    width: 100%;
  }

  .product-image {
    box-shadow: 0 1px 2px rgba(4, 5, 5, 0.25);
    margin-left: 10px;
    width: 25%;
  }

  .product-info {
    background-color: #fff;
    box-shadow: 1px 2px rgba(4, 5, 5, 0.25);
    display: flex;
    padding: 10px;
  }

  .product-info .left-part {
    padding: 0 20px;
  }

  .product-info .right-part,
  .product-info .left-part {
    display: flex;
    flex-direction: column;
    font-size: 0.75rem;
    font-weight: bold;
    height: 100%;
    padding-top: 30px;
    width: 50%;
  }

  .product-info .right-part {
    align-items: center;
    border-left: 1px solid #ebe4e4;
  }

  .product-info .right-part .price {
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 50px;
    justify-content: center;
  }

  .product-info .right-part .price * {
    margin: 0 5px;
  }

  .product-info .right-part .price .percent {
    background-color: #fb1616;
    border-radius: 3px;
    color: #fff !important;
    font-size: 0.85rem;
    line-height: 17px;
    margin: 0 3px;
    padding: 0 3px;
  }

  .product-info .right-part .price .toman {
    color: #808080;
  }

  .product-info .right-part .price .new-price {
    font-size: 1.6rem;
  }

  .buy-options {
    height: 30px;
  }

  .buy-options button {
    padding: 0 20px;
  }

  .left-part p {
    line-height: 30px;
  }

  .left-part p span {
    color: #989898;
  }
</style>
