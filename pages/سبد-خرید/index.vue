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
            <ProductCard v-for="(item, index) in cart.list" :key="index" :type="7" :cart-item="item" />
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
import ProductCard from '~/components/ProductCard/ProductCard'
import mixinStore from '~/plugins/mixinStore'

export default {
  name: 'Cart',
  components: {
    ProductCard,
    Breadcrumbs
  },
  filters: {
    price (value) {
      return value.toLocaleString('ar-SA')
    }
  },
  mixins: [mixinStore],
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
  computed: {
    isFromPc () {
      return this.$store.getters.isFromPc
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
  .container {
    display: flex;
    flex-direction: column;
  }

  .cart-content {
    position: relative;
    min-height: 50px;
    box-shadow: 0 1px 2px rgba(4, 5, 5, 0.25);
    background-color: #fff;
  }

  .empty-cart p {
    font-size: 0.95rem;
    color: #fff;
    display: block;
    margin: 15px 20px;
    padding: 15px 25px;
    border-right: 0.6180469716em solid rgba(0, 0, 0, 0.15);
    border-radius: 2px;
    background-color: #2bbb28;
  }

  .empty-cart a {
    font-size: 0.9rem;
    font-weight: bold;
    color: #fff;
    display: inline-block;
    margin: 0 20px;
    padding: 12px 20px;
    background-color: #43454b;
  }

  .cart-with-products {
    min-height: 100px;
  }

  .table-header {
    height: 40px;
    padding: 0;
  }

  .table-header .col {
    font-size: 0.8rem;
    font-weight: bold;
    color: #868686;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .table-header .product-names {
    font-size: 1rem;
    color: #000;
  }

  .table-header-row {
    margin-top: -10px;
  }

  .discount-code {
    display: flex;
    flex-direction: row;
    margin: 20px 30px;
  }

  .discount-input {
    font-size: 0.8rem;
    font-weight: bold;
    min-width: 300px;
    height: 42px;
    padding: 0 30px;
    border: solid 1px #dedede;
    border-radius: 4px;
    background-color: #fff;
  }

  .discount-input:focus {
    outline: none;
  }

  /* .discount-input:focus::input-placeholder {
    opacity: 0;
    transition: opacity 0.5s 0.5s ease !important;
  } */

  .apply-discount {
    color: #25a522;
    height: 42px;
    margin: 0 5px;
    padding: 0 10px;
    border: solid 1px #2bbb28;
    border-radius: 4px;
    background-color: #fff;
  }

  .apply-discount:hover {
    opacity: 0.7;
  }

  .purchase-details {
    display: flex;
    flex-direction: column;
    width: calc(100% + 24px);
    min-height: 50px;
    margin-right: -12px;
    margin-bottom: -12px;
    background-color: #f2f2f2;
  }

  .purchase-details .container {
    padding: 30px 45px;
  }

  .total-price {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px 15px;
    border-radius: 4px;
    background-color: #fff;
  }

  .total-price .p-1 {
    font-size: 0.8rem;
    font-weight: bold;
    line-height: 1.8;
  }

  .total-price * {
    display: inline-block;
  }

  .total-price2 {
    color: #24a822;
    margin-top: 10px;
  }

  .total-price .p-2 {
    font-size: 1.1rem;
    font-weight: bold;
    line-height: 20px;
    height: 20px;
  }

  .total-price2 span {
    font-size: 0.8rem;
  }

  .purchase {
    font-size: 1.3rem;
    font-weight: bold;
    color: #fff;
    display: inline-block;
    margin-right: -15px;
    padding: 10px 25px;
    border-radius: 4px;
    background-color: #2c2d33;
  }

  .purchase:hover {
    background-color: #00b722;
  }

  .mobile-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 95%;
    margin: 0 2.5%;
  }

  .mobile-container .discount-container {
    z-index: 2;
    display: flex;
    height: 48px;
    margin-bottom: -10px;
    padding: 0 3px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.24);
    border-radius: 8px;
    background-color: #fff;
  }

  .discount-container input {
    width: 100%;
    height: 100%;
  }

  .discount-button {
    font-size: 12px;
    font-weight: bold;
    color: #fff;
    letter-spacing: 0;
    width: 80px;
    height: 42px !important;
    margin: 3px 0;
    padding: 0 9px !important;
    border-radius: 6px;
  }

  .mobile-container .final-price-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 14px;
    padding: 30px 10px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.24);
    border-radius: 10px;
    background-color: #fff;
  }

  .mobile-container .final-price-container .cart-subtotal,
  .mobile-container .final-price-container .subtotal-price {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .mobile-container .final-price-container .cart-subtotal {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    padding-bottom: 10px;
    border-bottom: 1px solid #dfdfdf;
  }

  .mobile-container .final-price-container .cart-subtotal span {
    font-size: 12px;
  }

  .mobile-container .final-price-container .subtotal-price {
    font-size: 20px;
    font-weight: bold;
    margin-top: 0;
    padding-top: 10px;
    border-top: 1px solid #dfdfdf;
  }

  .mobile-container .final-price-container .subtotal-price span {
    font-size: 12px;
  }

  .fixed-buy-button {
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    position: fixed;
    z-index: 20000;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 15px;
    background-color: #2bbb28;
  }

  @media screen and ( max-width: 1264px ) {
    .breadcrumbs-container,
    .cart-container {
      align-self: center;
      width: 950px;
    }
  }

  @media screen and ( max-width: 959.5px ) {
    .breadcrumbs-container,
    .cart-container {
      align-self: center;
      max-width: 600px;
    }

    .discount-input {
      font-size: 1rem;
    }

    .purchase {
      font-size: 1.5rem;
      line-height: 30px;
      text-align: center;
      display: block;
      margin: 0 -12px;
    }

    .total-price .p-1 {
      font-size: 1.2rem;
    }

    .total-price .p-2 {
      font-size: 1.5rem;
    }

    .total-price2 span {
      font-size: 1.2rem;
    }

    .total-price h4 {
      font-size: 1.2rem;
    }

    .total-price h1 {
      font-size: 1.5rem;
    }
  }

  @media screen and ( max-width: 768px ) {
    .table-header {
      height: 20px;
    }

    .discount-input {
      font-size: 1.2rem;
    }

    .total-price .p-1 {
      font-size: 1.5rem;
    }

    .total-price .p-2 {
      font-size: 2rem;
    }

    .total-price2 span {
      font-size: 1.5rem;
    }

    .total-price h4 {
      font-size: 1.5rem;
    }

    .total-price h1 {
      font-size: 2rem;
    }
  }

  @media screen and ( max-width: 600px ) {
    .breadcrumbs-container,
    .cart-container {
      align-self: center;
      max-width: 90%;
    }

    .discount-input {
      font-size: 1.2rem;
      min-width: 100px;
    }

    .total-price .p-1 {
      font-size: 1.2rem;
    }

    .total-price .p-2 {
      font-size: 1.5rem;
    }

    .total-price2 span {
      font-size: 1.2rem;
    }

    .total-price h4 {
      font-size: 1.2rem;
    }

    .total-price h1 {
      font-size: 1.5rem;
    }

    .discount-code {
      display: flex;
      flex-direction: column;
    }

    .discount-code * {
      margin: 5px -20px;
    }
  }

  @media only screen and ( max-width: 400px ) {
    .discount-input {
      font-size: 1rem;
    }

    .total-price .p-1 {
      font-size: 1rem;
    }

    .total-price .p-2 {
      font-size: 1.2rem;
    }

    .total-price2 span {
      font-size: 1rem;
    }

    .total-price h4 {
      font-size: 1rem;
    }

    .total-price h1 {
      font-size: 1.2rem;
    }
  }
</style>

<style>
  .mobile-container .discount-container .v-input {
    padding-left: 5px;
    border-radius: 6px;
  }

  .mobile-container .discount-container .theme--light.v-text-field > .v-input__control > .v-input__slot::before {
    border-color: transparent;
  }

  .mobile-container .discount-container .v-text-field .v-label {
    font-size: 12px;
    font-weight: bold;
    top: 12px;
    right: 0 !important;
    left: auto !important;
    transform-origin: top right !important;
  }

  .mobile-container .discount-container .v-text-field input {
    padding: 0;
  }

  .mobile-container .discount-container .v-text-field--filled:not( .v-text-field--single-line ) input {
    margin: 0;
    background-color: transparent;
  }

  .mobile-container .discount-container .v-text-field.v-text-field--enclosed .v-text-field__details {
    display: none;
  }

  .mobile-container .discount-container .v-input__slot {
    margin: 4px 0 0;
  }

  .mobile-container .discount-container .v-text-field--filled > .v-input__control > .v-input__slot {
    min-height: 42px;
  }
</style>
