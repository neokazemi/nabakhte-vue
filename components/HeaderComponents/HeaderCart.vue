<template>
  <div class="full-width">
    <client-only>
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
    </client-only>
  </div>
</template>

<script>
import mixinStore from '~/plugins/mixin/store'
import CartItem from '~/components/CartItem/CartItem'
import '~/assets/css/components/HeaderCart.css'

export default {
  name: 'HeaderCart',
  components: {
    CartItem
  },
  mixins: [mixinStore]
}
</script>

<style scoped>
  @import url('~/assets/css/components/HeaderCartScoped.css');
</style>
