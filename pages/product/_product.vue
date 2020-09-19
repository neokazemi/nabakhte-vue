<template>
  <v-container>
    <v-row>
      <v-col>
        <breadcrumbs :items="breadcrumbsItems" />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="product-data">
        <v-img :src="productData.image.url" :width="productData.image.width" :height="productData.image.height" :contain="true" />
        <div class="product-details">
          <div class="product-details-col first">
            <p class="name">
              {{ productData.name }}
            </p>
            <div class="price">
              <p class="old-price">
                {{ productData.price.base | price }}
              </p>
              <p class="discount">
                {{ productData.price.discount }}%
              </p>
              <p class="new-price">
                {{ productData.price.final | price }}
              </p>
            </div>
            <div class="buy-options">
              <button>افزودن به سبد خرید</button>
              <select>
                <option value="1">
                  1 عدد
                </option>
                <option value="2">
                  2 عدد
                </option>
                <option value="3">
                  3 عدد
                </option>
                <option value="4">
                  4 عدد
                </option>
                <option value="5">
                  5 عدد
                </option>
                <option value="6">
                  6 عدد
                </option>
                <option value="7">
                  7 عدد
                </option>
                <option value="8">
                  8 عدد
                </option>
                <option value="9">
                  9 عدد
                </option>
                <option value="10">
                  10 عدد
                </option>
              </select>
            </div>
            <div class="related-books">
              <p>
                جلدهای مرتبط
              </p>
              <div class="related-book">
                <a href="#">
                  فاگوزیست دوازدهم فصل چهارم (تغییر در اطلاعات وراثتی) فاگو
                </a>
                <div class="add-to-cart" />
                <a href="#">
                  فاگوزیست دوازدهم فصل اول (مولکول های اطلاعاتی) فاگو</a>
                <div class="add-to-cart" />
              </div>
            </div>
          </div>
          <div class="product-details-col middle">
            <p><span>نوع محصول: </span>کتاب کمک آموزشی</p>
            <p><span>مولف: </span>مرتضی شکری، محمد یاوری</p>
            <p><span>سال چاپ: </span>1399</p>
            <p><span>تعداد صفحه: </span>255</p>
            <p><span>تجدید چاپ: </span><v-rating readonly :value="3" dense background-color="#2bbb28" color="#2bbb28" /></p>
            <p><span>امتیاز کاربران: </span><v-rating readonly :value="3" dense background-color="#2bbb28" color="#2bbb28" /></p>
          </div>
          <div class="product-details-col last" />
          <div class="share" />
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="similar-products">
        <ProductSliderCarousel :products="products.list" main-bg="#fff" bottom-bg="#fff" :type="2" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Breadcrumbs from '../../components/Breadcrumbs'
import { ProductList } from '../../models/Product'
import ProductSliderCarousel from '../../components/ProductSliderCarousel'

export default {
  name: 'Product',
  filters: {
    price (value) {
      return value.toLocaleString('ar-SA')
    }
  },
  components: {
    ProductSliderCarousel,
    Breadcrumbs
  },
  props: {
    productData: {
      type: Object,
      default () {
        return {
          id: 1,
          name: 'شاهکار علوم نهم کلاغ سپید',
          image: {
            url: 'https://media.chibekhoonam.net/2020/09/shahkar-olom9.jpg',
            width: 280,
            height: 380
          },
          price: {
            base: 75000,
            discount: 20,
            final: 60000
          }
        }
      }
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
          disabled: false,
          exact: false,
          href: '#',
          link: false,
          text: 'کتاب',
          to: '#'
        },
        {
          disabled: false,
          exact: false,
          href: '#',
          link: false,
          text: 'کتاب کمک آموزشی',
          to: '#'
        },
        {
          disabled: true,
          exact: false,
          href: '#',
          link: false,
          text: 'کتاب کمک آموزشی',
          to: '#'
        }
      ]
    }
  },
  computed: {
    products () {
      return this.$store.getters.products
    }
  }
}
</script>

<style>
  .product-data {
    display: flex;
    flex-direction: row;
  }

  .product-details {
    background-color: #fff;
    width: 99%;
    margin-right: 1%;
    box-shadow: 0 1px 2px rgba(4, 5, 5, 0.25);
    display: flex;
    flex-direction: row;
    position: relative;
  }

  .product-details-col {
    width: 100%;
    padding-top: 30px;
  }

  .product-details-col button {
    background-color: #fff;
  }

  .v-rating {
    display: inline;
  }

  .product-details .first {
    text-align: center;
  }

  .product-details .middle {
    border-right: 1px solid #ebe4e4;
    border-left: 1px solid #ebe4e4;
    padding-right: 20px;
  }

  .price,
  .buy-options {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .product-details .price * {
    margin: auto 10px;
  }

  .product-details .name {
    font-weight: bold;
    font-size: 0.8rem;
    margin-bottom: 18px;
  }

  .price .old-price {
    text-decoration: line-through;
  }

  .price .discount {
    padding: 0 3px;
    background-color: #fb1616;
    color: #fff;
    border-radius: 3px;
  }

  .price .new-price {
    font-size: 1.2rem;
  }

  .buy-options button {
    color: #fff;
    font-size: 0.8rem;
    background-color: #2bbb28;
    border-radius: 5px;
    box-shadow: 0 2px 3px rgba(4, 5, 5, 0.15);
    padding: 0 10px;
    line-height: 30px;
    margin-left: 5px;
  }

  .buy-options select {
    border-radius: 5px;
    height: 30px;
    text-align: center;
    -webkit-appearance: button;
    -moz-appearance: button;
    -webkit-user-select: none;
    -moz-user-select: none;
    background-color: #fff;
    border: 1px solid #222;
    font-weight: normal;
    font-size: 0.8rem;
  }

  .buy-options select:focus {
    outline: none;
  }

  .product-details .middle p {
    font-size: 0.8rem;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .product-details .middle p span {
    color: #989898;
  }

  .product-details .share {
    position: absolute;
    bottom: 0;
    height: 42px;
    background-color: #f8f8f8;
    box-shadow: 0 1px 2px rgba(4, 5, 5, 0.25);
    width: 100%;
  }

  .related-books {
    text-align: right;
    padding: 20px 10px;
    font-size: 0.85rem;
    font-weight: bold;
    display: flex;
    flex-direction: column;
  }

  .related-book {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.24);
    position: relative;
    border-radius: 8px;
    padding: 10px;
    font-size: 0.65rem;
    margin: 10px auto;
    display: flex;
    flex-direction: row;
  }

  .related-book a {
    color: #000;
    width: 85%;
    margin: auto 5px;
  }

  .add-to-cart {
    background-color: rgb(43, 187, 40);
    border-radius: 50%;
    line-height: 23px;
    height: 20px;
    width: 20px;
  }
</style>
