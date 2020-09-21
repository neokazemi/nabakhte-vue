<template>
  <v-container>
    <v-row>
      <v-col>
        <Breadcrumbs :items="breadcrumbsItems" />
      </v-col>
    </v-row>
    <v-row>
      <v-col :md="3">
        <Sidebar>
          <div>
            <ToggleButton />
            <ExpansionPanel :data="expansionPanelData" />
          </div>
        </Sidebar>
      </v-col>
      <v-col :md="9">
        <div class="sort">
          <p class="sort-by">
            مرتب سازی بر اساس
          </p>
          <select class="page-fields">
            <option>
              محبوبیت
            </option>
            <option selected="selected">
              جدید ترین
            </option>
            <option>
              میانگین رتبه
            </option>
            <option>
              هزینه: کم به زیاد
            </option>
            <option>
              هزینه: زیاد به کم
            </option>
            <option>
              پرفروش ترین
            </option>
          </select>
          <div class="show-type page-fields">
            <button :class="{ 'button-selected': grid === 'row' }" @click="changeGridToRow">
              rw
            </button>
            <button :class="{ 'button-selected': grid === 'square' }" @click="changeGridToSquare">
              sq
            </button>
          </div>
          <div class="page-fields pagination">
            <v-pagination
              v-model="page"
              :length="201"
              :total-visible="4"
            />
          </div>
        </div>
        <transition name="fade">
          <v-row v-if="grid === 'square'">
            <v-col v-for="(product, index) in products.list" :key="index" :md="3" class="product-card-col">
              <ProductCard :type="4" :details="product">
                {{ product.name }}
              </ProductCard>
            </v-col>
          </v-row>
        </transition>
        <transition name="fade">
          <v-row v-if="grid === 'row'">
            <v-col v-for="(product, index) in products.list" :key="index" :md="12" class="product-card-col">
              <ProductCard :details="product" :type="5">
                {{ product.name }}
              </ProductCard>
            </v-col>
          </v-row>
        </transition>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Breadcrumbs from '../../components/Breadcrumbs'
import ProductCard from '../../components/ProductCard/ProductCard'
import { ProductList } from '../../models/Product'
import Sidebar from '../../components/app/Sidebar'
import ExpansionPanel from '../../components/ExpansionPanel'
import ToggleButton from '../../components/ToggleButton'

export default {
  name: 'Shop',
  components: {
    Breadcrumbs,
    ProductCard,
    Sidebar,
    ExpansionPanel,
    ToggleButton
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
          text: 'فروشگاه',
          to: '#'
        }
      ],
      grid: 'square',
      page: 1,
      expansionPanelData: [
        {
          name: 'انتشارات',
          details: [
            'گاج',
            'قلمجی',
            'خیلی سبز',
            'نشر الگو',
            'متبکران',
            'مهر و ماه',
            'مشاوران آموزش',
            'بنی هاشم',
            'دانش پژوهان جوان',
            'راه اندیشه',
            'فاطمی',
            'زیر ذره بین',
            'زیستاز',
            'خوشخوان',
            'کلاغ سپید',
            'فاکو',
            'فار',
            'نشر دریافت'
          ]
        },
        {
          name: 'سال چاپ',
          details: [
            '1399',
            '1398',
            '1397',
            '1396',
            '1395',
            '1394',
            '1393',
            '1392'
          ]
        },
        {
          name: 'دسته بندی کلی',
          details: [
            'آموزش',
            'تست',
            'آمادگی امتحان نهایی',
            'پاسخ تمارین کتاب درسی',
            'کتاب کار',
            'آزمون',
            'جمع بندی',
            'موضوعی',
            'پاسخ نامه'
          ]
        },
        {
          name: 'پایه تحصیلی',
          details: [
            'دوازدهم ریاضی',
            'دوازدهم تجربی',
            'دوازدهم انسانی',
            'یازدهم ریاضی',
            'یازدهم تجربی',
            'یازدهم انسانی',
            'دهم ریاضی',
            'دهم تجربی',
            'دهم انسانی'
          ]
        },
        {
          name: 'درس های مرتبط',
          details: [
            'دوازدهم ریاضی',
            'دوازدهم تجربی',
            'دوازدهم انسانی',
            'یازدهم ریاضی',
            'یازدهم تجربی',
            'یازدهم انسانی',
            'دهم ریاضی',
            'دهم تجربی',
            'دهم انسانی'
          ]
        }
      ]
    }
  },
  computed: {
    products () {
      return this.$store.getters.products
    }
  },
  methods: {
    changeGridToSquare () {
      this.grid = 'square'
    },
    changeGridToRow () {
      this.grid = 'row'
    }
  }
}
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .sort {
    display: flex;
    flex-direction: row;
    margin: 0 0 20px 0;
    align-items: center;
  }

  .sort-by {
    color: #878787;
    font-size: 0.7rem;
  }

  .sort select {
    width: 170px;
    -webkit-appearance: button;
    -moz-appearance: button;
    -webkit-user-select: none;
    line-height: 30px;
    -moz-user-select: none;
  }

  .page-fields {
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(4, 5, 5, 0.25);
    border-radius: 2px;
    font-size: 0.8rem;
    font-weight: bold;
    margin: 0 15px;
    padding: 4px 15px;
  }

  .product-card-col {
    padding: 5px;
  }

  .page-fields button {
    background-color: #fff;
  }

  .button-selected {
    color: #2bbb28;
  }

  .show-type {
    padding: 6px 15px;
  }

</style>

<style>
  .pagination .v-pagination .v-pagination__navigation {
    display: none !important;
  }
</style>
