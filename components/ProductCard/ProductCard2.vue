<template>
  <div class="full-width card">
    <div class="product-image">
      <v-img :src="details.image.url" contain />
    </div>
    <div class="full-width product-info">
      <div class="right-part">
        <slot />
        <div class="price">
          <span v-if="type === 1" class="old-price">{{ 100000 | price }}</span>
          <span class="percent">{{ 20 }}%</span>
          <span class="new-price">{{ 80000 | price }}</span>
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
export default {
  name: 'ProductCard2',
  filters: {
    price (value) {
      return value.toLocaleString('ar-SA')
    }
  },
  props: {
    details: {
      type: Object,
      default () {
        return {
          oldPrice: 100000,
          newPrice: 80000,
          off: 20,
          imgURL: 'https://media.chibekhoonam.net/2020/09/golbarg-olom6.jpg',
          productURL: '#'
        }
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
    width: 100%;
    box-sizing: border-box;
  }

  .product-image {
    width: 25%;
    margin-left: 10px;
    box-shadow: 0 1px 2px rgba(4, 5, 5, 0.25);
  }

  .product-info {
    background-color: #fff;
    box-shadow: 1px 2px rgba(4, 5, 5, 0.25);
    padding: 10px;
    display: flex;
  }

  .product-info .left-part {
    padding: 0 20px;
  }

  .product-info .right-part,
  .product-info .left-part {
    width: 50%;
    height: 100%;
    font-size: 0.75rem;
    font-weight: bold;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
  }

  .product-info .right-part {
    border-left: 1px solid #ebe4e4;
    align-items: center;
  }

  .product-info .right-part .price {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 50px;
  }

  .product-info .right-part .price * {
    margin: 0 5px;
  }

  .product-info .right-part .price .percent {
    padding: 0 3px;
    background-color: #fb1616;
    margin: 0 3px;
    color: #fff !important;
    font-size: 0.85rem;
    line-height: 17px;
    border-radius: 3px;
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
