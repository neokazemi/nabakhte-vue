<template>
  <v-container>
    <v-row>
      <v-col>
        <Breadcrumbs :items="breadcrumbsItems" />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="cart-content">
        <div v-if="products.list.length === 0" class="empty-cart">
          <p>سبد خرید شما در حال حاضر خالی است.</p>
          <nuxt-link to="/shop">
            بازگشت به فروشگاه
          </nuxt-link>
        </div>
        <div v-else class="cart-with-products">
          <v-container :fluid="true" class="table-header">
            <v-row class="table-header-row">
              <v-col :md="2" />
              <v-col :md="4" class="product-names">
                محصولات
              </v-col>
              <v-col :md="2">
                قیمت
              </v-col>
              <v-col :md="2">
                تعداد
              </v-col>
              <v-col :md="2">
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
        </div>
      </v-col>
    </v-row>
  </v-container>
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
      // return {
      //   list: []
      // }
    }
  }
}

</script>

<style scoped>
  .cart-content {
    min-height: 50px;
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(4, 5, 5, 0.25);
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
</style>
