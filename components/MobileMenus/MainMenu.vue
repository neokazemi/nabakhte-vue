<template>
  <div class="menu">
    <div class="mobile-drawer-header-container">
      <div class="close-button" @click="closeDrawer">
        <p>✕</p>
      </div>
      <div class="header-info">
        <v-img src="https://www.chibekhoonam.net/wp-content/themes/chib-pwa/assets/images/logo-site-mobile.svg" :width="89" :height="34" contain />
      </div>
    </div>
    <div class="mobile-drawer-content">
      <nuxt-link to="/" class="drawer-item">
        خانه
      </nuxt-link>
      <v-treeview :items="treeviewItems" dense transition open-on-click />
      <nuxt-link to="#" class="drawer-item red-font">
        بهترین کتاب های کنکور 1400 (جدید)
      </nuxt-link>
      <nuxt-link to="#" class="drawer-item ">
        پیگیری سفارش
      </nuxt-link>
      <nuxt-link to="/blog/maghalat" class="drawer-item ">
        مقالات
      </nuxt-link>
      <nuxt-link to="#" class="drawer-item ">
        مشاوره
      </nuxt-link>
      <nuxt-link to="/تماس-با-ما" class="drawer-item ">
        تماس با ما
      </nuxt-link>
      <nuxt-link to="#" class="drawer-item ">
        همکاری با چی بخونم
      </nuxt-link>
      <nuxt-link to="#" class="drawer-item ">
        علاقه مندی ها
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import '~/assets/css/components/MainMenu.css'

export default {
  name: 'MainMenu',
  data () {
    return {
      treeviewItems: [
        {
          id: 1,
          name: 'کتاب های کمک آموزشی بر اساس پایه',
          children: [
            {
              id: 2,
              name: 'دوازدهم ریاضی',
              children: [
                { id: 3, name: 'حسابان دوازدهم' },
                { id: 4, name: 'هندسه دوزادهم' },
                { id: 5, name: 'گسسته دوازدهم' }
              ]
            },
            {
              id: 6,
              name: 'دوازدهم تجربی',
              children: [
                { id: 7, name: 'حسابان دوازدهم' },
                { id: 8, name: 'هندسه دوزادهم' },
                { id: 9, name: 'گسسته دوازدهم' }
              ]
            },
            {
              id: 10,
              name: 'دوازدهم انسانی',
              children: [
                { id: 11, name: 'حسابان دوازدهم' },
                { id: 12, name: 'هندسه دوزادهم' },
                { id: 13, name: 'گسسته دوازدهم' }
              ]
            }
          ]
        },
        {
          id: 14,
          name: 'کتاب های کمک آموزشی بر اساس انتشارات',
          children: [
            {
              id: 15,
              name: 'انتشارات گاج',
              children: [
                { id: 16, name: 'همه کتاب ها ' },
                { id: 17, name: 'سری میکرو' },
                { id: 18, name: 'سری میکرو طلایی' }
              ]
            },
            {
              id: 19,
              name: 'آنتشارات خیلی سبز',
              children: [
                { id: 20, name: 'همه کتاب ها' },
                { id: 21, name: 'سری تست و جمع بندی' },
                { id: 22, name: 'سری آزمون جامع' }
              ]
            },
            {
              id: 23,
              name: 'انتشارات مبتکران',
              children: [
                { id: 24, name: 'همه کتاب ها' },
                { id: 25, name: 'سری تست' },
                { id: 26, name: 'سری آزمون' }
              ]
            }
          ]
        },
        {
          id: 27,
          name: 'کتاب های المپیاد',
          children: [
            {
              id: 28,
              name: 'انتشارات گاج',
              children: [
                { id: 29, name: 'همه کتاب ها ' },
                { id: 30, name: 'سری میکرو' },
                { id: 31, name: 'سری میکرو طلایی' }
              ]
            },
            {
              id: 32,
              name: 'آنتشارات خیلی سبز',
              children: [
                { id: 33, name: 'همه کتاب ها' },
                { id: 34, name: 'سری تست و جمع بندی' },
                { id: 35, name: 'سری آزمون جامع' }
              ]
            },
            {
              id: 36,
              name: 'انتشارات مبتکران',
              children: [
                { id: 37, name: 'همه کتاب ها' },
                { id: 38, name: 'سری تست' },
                { id: 39, name: 'سری آزمون' }
              ]
            }
          ]
        },
        {
          id: 40,
          name: 'لوازم التحریر',
          children: [
            {
              id: 41,
              name: 'انتشارات گاج',
              children: [
                { id: 42, name: 'همه کتاب ها ' },
                { id: 43, name: 'سری میکرو' },
                { id: 44, name: 'سری میکرو طلایی' }
              ]
            },
            {
              id: 45,
              name: 'آنتشارات خیلی سبز',
              children: [
                { id: 46, name: 'همه کتاب ها' },
                { id: 47, name: 'سری تست و جمع بندی' },
                { id: 48, name: 'سری آزمون جامع' }
              ]
            },
            {
              id: 49,
              name: 'انتشارات مبتکران',
              children: [
                { id: 50, name: 'همه کتاب ها' },
                { id: 51, name: 'سری تست' },
                { id: 52, name: 'سری آزمون' }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    closeDrawer () {
      this.$store.commit('updateDrawer', false)
    }
  }
}
</script>

<style scoped>
  @import url('~/assets/css/components/MainMenuScoped.css');
</style>
