<template>
  <div class="full-width">
    <p v-if="cart.list.length === 0" class="empty-cart">
      چیزی در سبد خرید یافت نشد
    </p>
    <div v-else>
      <div class="in-cart-products">
        <CartItem v-for="(cartItem, index) in cart.list" :key="index" :type="2" :cart-item="cartItem" class="product-card" />
      </div>
      <div class="header-cart-buttons">
        <nuxt-link to="/سبد-خرید">
          <button class="see-cart">
            مشاهده سبد خرید
          </button>
        </nuxt-link>
        <nuxt-link to="/تسویه-حساب">
          <button class="finalize-purchase">
            تکمیل سفارش
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ProductList } from '~/models/Product'
import mixinStore from '~/plugins/mixin/store'
import '~/assets/css/components/HeaderCart.css'
import CartItem from '~/components/CartItem/CartItem'

export default {
  name: 'HeaderCart',
  components: {
    CartItem
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
  @import url('~/assets/css/components/HeaderCartScoped.css');
</style>
