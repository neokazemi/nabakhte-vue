<template>
  <div>
    <div v-if="!isFromPc" class="mobile-container">
      <ProductCard v-for="(item, index) in cart.list" :key="index" :type="9" :details="item" />
      <div class="discount-container">
        <v-text-field
          label="کد تخفیف خود را وارد نمایید"
          filled
        />
        <v-btn class="discount-button" color="#2bbb28">
          اعمال تخفیف
        </v-btn>
      </div>
      <div class="final-price-container">
        <div class="cart-subtotal">
          <p>مجموع کل سبد خرید</p>
          <p>{{ 480000 | price }}  <span>تومان</span></p>
        </div>
        <div class="subtotal-price">
          <p>مجموع نهایی</p>
          <p>{{ 480000 | price }}  <span>تومان</span></p>
        </div>
      </div>
      <div class="fixed-buy-button">
        اقدام به پرداخت
      </div>
    </div>
    <v-container v-else>
      <v-row class="breadcrumbs-container">
        <v-col :xs="12">
          <Breadcrumbs :items="breadcrumbsItems" />
        </v-col>
      </v-row>
      <v-row class="cart-container">
        <v-col class="cart-content">
          <div v-if="cart.list.length === 0" class="empty-cart">
            <p>سبد خرید شما در حال حاضر خالی است.</p>
            <nuxt-link to="/shop">
              بازگشت به فروشگاه
            </nuxt-link>
          </div>
          <div v-else class="cart-with-products">
            <v-container :fluid="true" class="d-none d-sm-flex">
              <v-row class="table-header-row no-gutters">
                <v-col :sm="1" />
                <v-col :sm="1" />
                <v-col :sm="4" class="product-names justify-center d-flex">
                  محصولات
                </v-col>
                <v-col :sm="2" class="justify-center d-flex">
                  قیمت
                </v-col>
                <v-col :sm="2" class="justify-center d-flex">
                  تعداد
                </v-col>
                <v-col :sm="2" class="justify-center d-flex">
                  مجموع
                </v-col>
              </v-row>
            </v-container>
            <CartItem v-for="(item, index) in cart.list" :key="index" :type="1" :cart-item="item" />
            <div class="discount-code">
              <input class="discount-input" placeholder="کد تخفیف:">
              <button class="apply-discount">
                اعمال تخفیف
              </button>
            </div>
            <div class="purchase-details">
              <v-container>
                <v-row>
                  <v-col :md="6" class="total-price">
                    <p class="p-1">
                      مجموع کل سبد خرید
                    </p>
                    <h4>
                      {{ 6 * 80000 | price }} <h6>تومان</h6>
                    </h4>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col :md="6" class="total-price total-price2">
                    <p class="p-2">
                      مجموع نهایی
                    </p>
                    <h1>
                      {{ 6 * 80000 | price }} <span>تومان</span>
                    </h1>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <a class="purchase" href="#">
                      اقدام به پرداخت
                    </a>
                  </v-col>
                </v-row>
              </v-container>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs'
import mixinStore from '~/plugins/mixinStore'
import '~/assets/css/pages/Cart.css'
import mixinDetectDevice from '~/plugins/mixinDetectDevice'
import CartItem from '~/components/CartItem/CartItem'

export default {
  name: 'Cart',
  components: {
    CartItem,
    Breadcrumbs
  },
  filters: {
    price (value) {
      return value.toLocaleString('ar-SA')
    }
  },
  mixins: [mixinStore, mixinDetectDevice],
  data () {
    return {
      breadcrumbsItems: [
        {
          disabled: false,
          exact: false,
          href: '#',
          link: false,
          text: 'خانه',
          to: '#'
        },
        {
          disabled: true,
          exact: false,
          href: '#',
          link: false,
          text: 'سبد خرید',
          to: '#'
        }
      ]
    }
  },
  created () {
    this.$store.commit('updateFooterMargin', '54px')
  },
  destroyed () {
    this.$store.commit('updateFooterMargin', '0'
    )
  }
}

</script>

<style scoped>
  @import url('../../assets/css/pages/CartScoped.css');
</style>
