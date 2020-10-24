<template>
  <div>
    <div v-if="!isFromPc" class="mobile-container">
      <div class="products">
        <div v-for="(item, index) in products.list" :key="index" class="half-width">
          <ProductCard :type="8" :details="item" />
        </div>
      </div>
    </div>
    <v-container v-else>
      <v-row class="flex-column flex-md-row">
        <v-col :sm="3">
          <Breadcrumbs :items="breadcrumbsItems" />
        </v-col>
        <v-col :sm="9">
          <div class="sort">
            <div class="sort-by-container">
              <p class="sort-by">
                مرتب سازی بر اساس
              </p>
              <v-select
                solo
                :items="dropItems"
                :value="dropItems[1]"
                :height="30"
                dense
                class="select-sort"
              />
            </div>
            <div class="show-type page-fields d-none d-md-block">
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
        </v-col>
      </v-row>
      <v-row class="flex-column flex-md-row">
        <v-col :md="3" class="right-side-menu">
          <Sidebar>
            <div class="d-none d-md-block">
              <ToggleButton />
              <ExpansionPanel :data="expansionPanelData" />
            </div>
          </Sidebar>
          <v-btn
            color="primary"
            dark
            class="d-block d-md-none"
            width="100%"
            @click.stop="drawer = true"
          >
            فیلترها
          </v-btn>
        </v-col>
        <v-col :md="9" class="relative">
          <v-navigation-drawer
            v-model="drawer"
            floating
            right
            fixed
            class="navigation-drawer-filters"
          >
            <ToggleButton />
            <ExpansionPanel :data="expansionPanelData" />
            <v-btn
              color="primary"
              dark
              width="80%"
              class="mx-auto"
              @click.stop="drawer = false"
            >
              بستن
            </v-btn>
          </v-navigation-drawer>
          <transition name="fade">
            <v-row v-if="grid === 'square'">
              <v-col v-for="(product, index) in products.list" :key="index" :sm="3" class="product-card-col">
                <ProductCard :type="4" :product="product">
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
  </div>
</template>
<script>
import mixinProduct from '~/plugins/mixinProduct'
import Breadcrumbs from '~/components/Breadcrumbs'
import ProductCard from '~/components/ProductCard/ProductCard'
import Sidebar from '~/components/app/Sidebar'
import ExpansionPanel from '~/components/ExpansionPanel'
import ToggleButton from '~/components/ToggleButton'
import '~/assets/css/pages/Shop.css'
import mixinDetectDevice from '~/plugins/mixinDetectDevice'

export default {
  name: 'Shop',
  components: {
    Breadcrumbs,
    ProductCard,
    Sidebar,
    ExpansionPanel,
    ToggleButton
  },
  mixins: [mixinProduct, mixinDetectDevice],
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
      ],
      dropItems: [
        'محبوبیت',
        'جدیدترین',
        'میانگین رتبه',
        'هزینه: کم به زیاد',
        'هزینه زیاد به کم',
        'پرفروش ترین'
      ],
      drawer: false
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
  @import url('~/assets/css/pages/ShopScoped.css');
</style>
