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
import '~/assets/css/components/HeaderCart.css'

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
  @import url('../assets/css/components/HeaderCartScoped.css');
</style>
