<template>
  <div>
    <div v-if="ispwa" class="pwa-container">
      <ProductCard v-for="(item, index) in products.list" :key="index" :type="9" :details="item" />
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
          <div v-if="products.list.length === 0" class="empty-cart">
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
            <ProductCard v-for="(item, index) in products.list" :key="index" :type="7" :details="item" />
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
import Breadcrumbs from '../../components/Breadcrumbs'
import { ProductList } from '../../models/Product'
import ProductCard from '../../components/ProductCard/ProductCard'
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
  asyncData (context) {
    return (new ProductList()).fetch()
      .then((response) => {
        context.store.commit('updateProducts', new ProductList(response.data[0].data.data))
      })
  },
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
    products () {
      return this.$store.getters.products
    },
    ispwa () {
      return this.$store.getters.ispwa
    }
  },
  created () {
    this.$store.commit('updateFooterMargin', '54px')
  },
  destroyed () {
    this.$store.commit('updateFooterMargin', '0')
  }
}

</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
  }

  .cart-content {
    min-height: 50px;
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(4, 5, 5, 0.25);
    position: relative;
  }

  .empty-cart p {
    background-color: #2bbb28;
    border-right: 0.6180469716em solid rgba(0, 0, 0, 0.15);
    margin: 15px 20px;
    padding: 15px 25px;
    font-size: 0.95rem;
    color: #fff;
    display: block;
    border-radius: 2px;
  }

  .empty-cart a {
    color: #fff;
    font-weight: bold;
    background-color: #43454b;
    padding: 12px 20px;
    margin: 0 20px;
    font-size: 0.9rem;
    display: inline-block;
  }

  .cart-with-products {
    min-height: 100px;
  }

  .table-header {
    padding: 0;
    height: 40px;
  }

  .table-header .col {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 0.8rem;
    color: #868686;
  }

  .table-header .product-names {
    color: #000;
    font-size: 1rem;
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
    border: solid 1px #dedede;
    background-color: #fff;
    height: 42px;
    min-width: 300px;
    padding: 0 30px;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: bold;
  }

  .discount-input:focus {
    outline: none;
  }

  .discount-input:focus::-webkit-input-placeholder {
    transition: opacity 0.5s 0.5s ease !important;
    opacity: 0;
  }

  .apply-discount {
    color: #25a522;
    border: solid 1px #2bbb28;
    border-radius: 4px;
    height: 42px;
    background-color: #fff;
    margin: 0 5px;
    padding: 0 10px;
  }

  .apply-discount:hover {
    opacity: 0.7;
  }

  .purchase-details {
    background-color: #f2f2f2;
    min-height: 50px;
    width: calc(100% + 24px);
    margin-right: -12px;
    margin-bottom: -12px;
    display: flex;
    flex-direction: column;
  }

  .purchase-details .container {
    padding: 30px 45px;
  }

  .total-price {
    background-color: #fff;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px 15px;
    align-items: center;
  }

  .total-price .p-1 {
    font-weight: bold;
    font-size: 0.8rem;
    line-height: 1.8;
  }

  .total-price * {
    display: inline-block;
  }

  .total-price2 {
    margin-top: 10px;
    color: #24a822;
  }

  .total-price .p-2 {
    font-weight: bold;
    font-size: 1.1rem;
    height: 20px;
    line-height: 20px;
  }

  .total-price2 span {
    font-size: 0.8rem;
  }

  .purchase {
    margin-right: -15px;
    background-color: #2c2d33;
    color: #fff;
    padding: 10px 25px;
    font-weight: bold;
    font-size: 1.3rem;
    display: inline-block;
    border-radius: 4px;
  }

  .purchase:hover {
    background-color: #00b722;
  }

  .pwa-container {
    margin: 0 2.5%;
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .pwa-container .discount-container {
    height: 48px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.24);
    background-color: #fff;
    border-radius: 8px;
    padding: 0 3px;
    margin-bottom: -10px;
    display: flex;
    z-index: 2;
  }

  .discount-container input {
    width: 100%;
    height: 100%;
  }

  .discount-button {
    padding: 0 9px !important;
    width: 80px;
    height: 42px !important;
    margin: 3px 0;
    font-size: 12px;
    font-weight: bold;
    color: #fff;
    letter-spacing: 0;
    border-radius: 6px;
  }

  .pwa-container .final-price-container {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.24);
    background-color: #fff;
    border-radius: 10px;
    margin-bottom: 14px;
    display: flex;
    flex-direction: column;
    padding: 30px 10px;
  }

  .pwa-container .final-price-container .cart-subtotal,
  .pwa-container .final-price-container .subtotal-price {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .pwa-container .final-price-container .cart-subtotal {
    font-size: 16px;
    font-weight: bold;
    border-bottom: 1px solid #dfdfdf;
    margin-bottom: 5px;
    padding-bottom: 10px;
  }

  .pwa-container .final-price-container .cart-subtotal span {
    font-size: 12px;
  }

  .pwa-container .final-price-container .subtotal-price {
    border-top: 1px solid #dfdfdf;
    margin-top: 0;
    padding-top: 10px;
    font-size: 20px;
    font-weight: bold;
  }

  .pwa-container .final-price-container .subtotal-price span {
    font-size: 12px;
  }

  .fixed-buy-button {
    background-color: #2bbb28;
    font-weight: bold;
    position: fixed;
    bottom: 0;
    z-index: 20000;
    padding: 15px;
    width: 100%;
    right: 0;
    left: 0;
    text-align: center;
    font-size: 16px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }

  @media screen and (max-width: 1264px) {
    .breadcrumbs-container,
    .cart-container {
      width: 950px;
      align-self: center;
    }
  }

  @media screen and (max-width: 959.5px) {
    .breadcrumbs-container,
    .cart-container {
      max-width: 600px;
      align-self: center;
    }

    .discount-input {
      font-size: 1rem;
    }

    .purchase {
      display: block;
      text-align: center;
      margin: 0 -12px;
      line-height: 30px;
      font-size: 1.5rem;
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

  @media screen and (max-width: 768px) {
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

  @media screen and (max-width: 600px) {
    .breadcrumbs-container,
    .cart-container {
      max-width: 90%;
      align-self: center;
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

  @media only screen and (max-width: 400px) {
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
  .pwa-container .discount-container .v-input {
    padding-left: 5px;
    border-radius: 6px;
  }

  .pwa-container .discount-container .theme--light.v-text-field > .v-input__control > .v-input__slot::before {
    border-color: transparent;
  }

  .pwa-container .discount-container .v-text-field .v-label {
    transform-origin: top right !important;
    left: auto !important;
    right: 0 !important;
    top: 12px;
    font-size: 12px;
    font-weight: bold;
  }

  .pwa-container .discount-container .v-text-field input {
    padding: 0;
  }

  .pwa-container .discount-container .v-text-field--filled:not(.v-text-field--single-line) input {
    background-color: transparent;
    margin: 0;
  }

  .pwa-container .discount-container .v-text-field.v-text-field--enclosed .v-text-field__details {
    display: none;
  }

  .pwa-container .discount-container .v-input__slot {
    margin: 4px 0 0 0;
  }

  .pwa-container .discount-container .v-text-field--filled > .v-input__control > .v-input__slot {
    min-height: 42px;
  }
</style>
