<template>
  <div class="full-width">
    <p v-if="products.length === 0" class="empty-cart">
      چیزی در سبد خرید یافت نشد
    </p>
    <div v-if="products.length !== 0">
      <div class="in-cart-products">
        <ProductCard v-for="(product, index) in products" :key="index" :type="6" :details="product" class="product-card" />
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
import ProductCard from './ProductCard/ProductCard'
export default {
  name: 'HeaderCart',
  components: {
    ProductCard
  },
  props: {
    products: {
      type: Array,
      default () {
        return []
      },
      required: false
    }
  }
}
</script>

<style scoped>
  .full-width {
    width: 100%;
    text-align: center;
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
    font-size: 0.9rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-weight: bold;
    height: 50px;
  }

  .see-cart {
    background: transparent;
    color: #9a9a9a;
    line-height: 30px;
    padding: 5px;
  }

  .finalize-purchase {
    background-color: #2bbb28;
    box-shadow: 1px 2px 3px rgba(4, 5, 5, 0.15);
    border-radius: 7px;
    line-height: 30px;
    padding: 5px 20px;
    color: #fff;
  }

</style>

<style>
  .product-card:first-child .full-width {
    padding-top: 0;
  }
</style>
