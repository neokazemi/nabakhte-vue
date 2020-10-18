<template>
  <div class="full-width">
    <p v-if="cart.list.length === 0" class="empty-cart">
      چیزی در سبد خرید یافت نشد
    </p>
    <div v-else>
      <div class="in-cart-products">
        <ProductCard v-for="(cartItem, index) in cart.list" :key="index" :type="6" :cart-item="cartItem" class="product-card" />
      </div>
      <div class="header-cart-buttons">
        <button class="see-cart">
          مشاهده سبد خرید
        </button>
        <button class="finalize-purchase">
          تکمیل سفارش
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '~/components/ProductCard/ProductCard'
import { ProductList } from '~/models/Product'
import mixinStore from '~/plugins/mixinStore'

export default {
  name: 'HeaderCart',
  components: {
    ProductCard
  },
  mixins: [mixinStore],
  props: {
    products: {
      type: ProductList,
      default () {
        return new ProductList()
      }
    }
  }
}
</script>

<style scoped>
  .full-width {
    text-align: center;
    width: 100%;
  }

  .empty-cart {
    font-size: 1rem;
    font-weight: bold;
  }

  .product-card {
    border-bottom: 1px solid #e8e8e8;
  }

  .in-cart-products {
    max-height: 300px;
    overflow-y: auto;
  }

  .header-cart-buttons {
    align-items: flex-end;
    display: flex;
    font-size: 0.9rem;
    font-weight: bold;
    height: 50px;
    justify-content: space-between;
  }

  .see-cart {
    background: transparent;
    color: #9a9a9a;
    line-height: 30px;
    padding: 5px;
  }

  .finalize-purchase {
    background-color: #2bbb28;
    border-radius: 7px;
    box-shadow: 1px 2px 3px rgba(4, 5, 5, 0.15);
    color: #fff;
    line-height: 30px;
    padding: 5px 20px;
  }

</style>

<style>
  .product-card:first-child .full-width {
    padding-top: 0;
  }
</style>
