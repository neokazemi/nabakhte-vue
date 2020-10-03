<template>
  <div class="product-card5">
    <div :class="{ 'product-card5-bg': true, 'box-shadow': boxShadow }">
      <div class="product-img">
        <nuxt-link :to="productLink">
          <v-img :src="details.image.url" alt="" contain :width="'100%'" :height="'100%'" />
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
            {{ 80000 | price }}
          </p>
          <p> تومان</p>
        </div>
      </div>
      <div class="discount-price">
        <p class="org-price">
          {{ 100000 | price }}
        </p>
        <p class="discount">
          20%
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard5',
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
    },
    boxShadow: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  computed: {
    productLink () {
      return '/product/' + this.details.name.split(' ').join('_')
    }
  }
}
</script>

<style scoped>
  .product-card5 {
    box-sizing: border-box;
    width: 100%;
    padding: 0 5px;
    position: relative;
  }

  .product-card5-bg {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
  }

  .product-img {
    width: 95%;
    margin: 2.5%;
  }

  .product-name {
    text-align: right;
    font-size: 0.8rem;
    padding: 3px 10px;
    height: 40px;
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
    margin: 0 10px;
    align-items: center;
  }

  .final-price {
    color: #6f6f6f;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .bold {
    font-weight: bold;
    font-size: 1.2rem;
  }

  .black-font {
    color: #000;
  }

  .discount-price {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin: 10px 10px;
  }

  .discount-price p {
    margin: 0 3px;
  }

  .discount-price .org-price {
    text-decoration: line-through;
  }

  .discount-price .discount {
    background-color: #fb1616;
    padding: 5px 1px;
    font-weight: bold;
    color: #fff;
  }

  .box-shadow {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.24);
  }
</style>

<style>
  .product-card5 .final-price-and-buy a {
    background-color: #2bbb28;
    width: 20px;
    height: 20px;
    margin: 5px 0;
    border-radius: 50%;
  }
</style>
