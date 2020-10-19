<template>
  <div>
    <v-app-bar
      v-if="!isFromPc"
      color="#fff"
      app
      class="mobile-header"
    >
      <div class="mobile-appbar">
        <div class="mobile-appbar-item">
          <v-app-bar-nav-icon @click="menuDrawerOpen" />
        </div>
        <div class="mobile-appbar-item" @click="searchDrawerOpen">
          <p>جستجو</p>
        </div>
        <div class="mobile-appbar-item">
          <nuxt-link to="/سبد-خرید">
            سبد خرید
          </nuxt-link>
        </div>
        <div class="mobile-appbar-item" @click="AccountDrawerOpen">
          <p>پنل کاربری</p>
        </div>
        <div class="mobile-appbar-item">
          <nuxt-link to="/" class="full-height d-flex align-center">
            <v-img src="./images/logo3.png" contain :height="'70%'" :min-width="50" />
          </nuxt-link>
        </div>
      </div>
    </v-app-bar>
    <v-app-bar
      v-else
      shrink-on-scroll
      fixed
      app
      :height="160"
    >
      <div class="full-container fixedMenu menu">
        <div class="full-container top-bar">
          <div class="container navbar-container">
            <div class="row">
              <div class="col-7">
                <ul class=" nav navigation-bar">
                  <li class="nav-item">
                    <nuxt-link class="home-page nav-link" to="/">
                      چی بخونم
                    </nuxt-link>
                  </li>
                  <li class="nav-item">
                    <nuxt-link to="/تماس-با-ما" class="nav-link">
                      تماس با ما
                    </nuxt-link>
                  </li>
                  <li class="nav-item">
                    <nuxt-link to="/درباره-ما" class="nav-link">
                      درباره ما
                    </nuxt-link>
                  </li>
                  <li class="nav-item">
                    <nuxt-link class="nav-link" to="/قوانین-و-شرایط">
                      قوانین و شرایط
                    </nuxt-link>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">اخبار</a>
                  </li>
                  <li class="nav-item">
                    <nuxt-link class="nav-link" to="/blog/category/maghalat">
                      مقالات
                    </nuxt-link>
                  </li>
                </ul>
              </div>
              <div class="col-3 contact-us">
                <p class="white-font fontIranSans nav-bar-options">
                  021-66979455
                  <i class="fas fa-phone-volume" />
                </p>
                <a href="#" class="instagram nav-bar-options"><i class="fab fa-instagram" /></a>
                <a href="#" class="telegram nav-bar-options"><i class="fab fa-telegram-plane" /></a>
                <div class="header-bg">
                  <div class="header-bg-white" />
                  <div class="header-bg-green" />
                  <div class="header-bg-white-horizontal" />
                </div>
              </div>
              <div class="col-2 favorites">
                <p class="black-font fontIranSans">
                  علاقه مندی ها
                </p>
                <div class="header-fluid-bg" />
              </div>
            </div>
          </div>
        </div>
        <div class="container top-menu">
          <div class="row menu justify-center">
            <div class="col top-menu-col">
              <div class="menu-bar full-container">
                <div class="right-bar">
                  <div class="row menu-options-container justify-content-start align-items-center">
                    <ul class="nav">
                      <li class="nav-item">
                        <a class="nav-link menu-nav" href="#">
                          <i class="fas fa-ellipsis-v" />دسته بندی محصولات
                        </a>
                      </li>
                      <li class="nav-item consulting">
                        <a class="nav-link menu-nav" href="#">
                          <i class="fas fa-user-tie" />مشاوره
                          <i class="fas fa-angle-down" />
                        </a>
                        <div class="consulting-mega-menu">
                          <div class="consulting-mega-menu-bg" />
                          <div
                            class="option-selection"
                          >
                            <a class="offline-consulting option" href="#">
                              <p>
                                <i class="fas fa-angle-left" />مشاوره آفلاین
                              </p>
                            </a>
                            <a class="documents option" href="#">
                              <p>
                                <i class="fas fa-angle-left" />مجموعه مقالات
                              </p>
                            </a>
                          </div>
                          <div class="offline-consulting-menu">
                            <a class="consulting-menu-sub-option" href="#">تحلیل و مشاوره</a>
                            <a class="consulting-menu-sub-option" href="#">نحوه مطالعه و تست زنی</a>
                            <a class="consulting-menu-sub-option" href="#">برنامه ریزی تحصیلی</a>
                            <a class="consulting-menu-sub-option" href="#">انواع کتاب ها</a>
                            <a class="consulting-menu-sub-option" href="#">انتخاب رشته</a>
                            <a class="consulting-menu-sub-option" href="#">آشنایی با دانشگاه ها</a>
                          </div>
                          <v-img src="https://media.chibekhoonam.net/2018/05/p4.png" :width="194" :height="224" class="megaMenuIMG" />
                        </div>
                      </li>
                      <li class="nav-item">
                        <nuxt-link class="nav-link menu-nav" to="/آموزش-تصویری-خرید-کتاب-از-سایت-چی-بخونم">
                          آموزش خرید کتاب
                        </nuxt-link>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link menu-nav" href="#">
                          <i class="fas fa-shopping-bag" />پیگیری سفارش
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="row searchbar-container">
                    <input type="text" placeholder="عنوان، انتشارات، درس یا ... (حداقل 3 حرف)">
                    <button type="submit" class="search-button">
                      <i class="fas fa-search" />
                    </button>
                  </div>
                </div>
                <div class="left-bar">
                  <div class="user-button">
                    <div class="user-cart">
                      <nuxt-link to="/سبد-خرید">
                        <div class="cart-logo leftSide-btn-arrow">
                          <i class="fas fa-shopping-cart" />
                        </div>
                        <h2 class="cart-description">
                          سبد خرید
                        </h2>
                        <Badge v-if="typeof cart.list !== 'undefined'" :content="cart.list.length" color="#fb1616" :x="50" :y="-40" />
                      </nuxt-link>
                      <div class="cart-details user-button-details">
                        <HeaderCart :products="products" />
                      </div>
                    </div>
                    <div class="account-management">
                      <nuxt-link to="/my-account">
                        <div class="account-logo leftSide-btn-arrow">
                          <i class="fas fa-user" />
                        </div>
                        <h2 class="account-description">
                          حساب کاربری
                        </h2>
                      </nuxt-link>
                      <div class="account-options user-button-details">
                        <nuxt-link class="first-option" to="/my-account/orders">
                          <i class="fas fa-shopping-basket" />سفارش ها
                        </nuxt-link>
                        <nuxt-link class="middle-option" to="/my-account/edit-address">
                          <i class="fas fa-truck" />آدرس ها
                        </nuxt-link>
                        <nuxt-link class="middle-option" to="/my-account/edit-account">
                          ویرایش پروفایل
                        </nuxt-link>
                        <a class="last-option" href="#">خروج</a>
                      </div>
                    </div>
                  </div>
                  <a class="logo" href="#">
                    <v-img src="https://www.chibekhoonam.net/wp-content/themes/chibekhoonam/img/logo.svg" class="logo-image" />
                    <p class="logo-info-1">تحلیل، مقایسه و خرید آنلاین</p>
                    <p class="logo-info-2">کتاب های کمک آموزشی</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container scrolledMenu">
        <v-item-group class="scrolledMenuLinks" active-class="primary">
          <v-item>
            <v-btn small depressed>
              دسته بندی محصولات
            </v-btn>
          </v-item>
          <v-item>
            <div class="consulting">
              <v-btn small depressed>
                مشاوره
              </v-btn>
              <div class="consulting-mega-menu">
                <div class="option-selection">
                  <a class="offline-consulting option" href="#">
                    <p>
                      <i class="fas fa-angle-left" />مشاوره آفلاین
                    </p>
                  </a>
                  <a class="documents option" href="#">
                    <p>
                      <i class="fas fa-angle-left" />مجموعه مقالات
                    </p>
                  </a>
                </div>
                <div class="offline-consulting-menu">
                  <a class="consulting-menu-sub-option" href="#">تحلیل و مشاوره</a>
                  <a class="consulting-menu-sub-option" href="#">نحوه مطالعه و تست زنی</a>
                  <a class="consulting-menu-sub-option" href="#">برنامه ریزی تحصیلی</a>
                  <a class="consulting-menu-sub-option" href="#">انواع کتاب ها</a>
                  <a class="consulting-menu-sub-option" href="#">انتخاب رشته</a>
                  <a class="consulting-menu-sub-option" href="#">آشنایی با دانشگاه ها</a>
                </div>
                <v-img src="https://media.chibekhoonam.net/2018/05/p4.png" :width="194" :height="224" class="megaMenuIMG" />
              </div>
            </div>
          </v-item>
          <v-item>
            <v-btn small depressed>
              آموزش خرید کتاب
            </v-btn>
          </v-item>
          <v-item>
            <v-btn small depressed>
              پیگیری سفارش
            </v-btn>
          </v-item>
        </v-item-group>
        <ul v-if="false" class="nav">
          <li class="nav-item">
            <a class="nav-link menu-nav" href="#">دسته بندی محصولات</a>
          </li>
          <li class="nav-item consulting">
            <a class="nav-link menu-nav" href="#">
              مشاوره
              <i class="fas fa-angle-down" />
            </a>
            <div class="consulting-mega-menu">
              <div class="option-selection">
                <a class="offline-consulting option" href="#">
                  <p>
                    <i class="fas fa-angle-left" />مشاوره آفلاین
                  </p>
                </a>
                <a class="documents option" href="#">
                  <p>
                    <i class="fas fa-angle-left" />مجموعه مقالات
                  </p>
                </a>
              </div>
              <div class="offline-consulting-menu">
                <a class="consulting-menu-sub-option" href="#">تحلیل و مشاوره</a>
                <a class="consulting-menu-sub-option" href="#">نحوه مطالعه و تست زنی</a>
                <a class="consulting-menu-sub-option" href="#">برنامه ریزی تحصیلی</a>
                <a class="consulting-menu-sub-option" href="#">انواع کتاب ها</a>
                <a class="consulting-menu-sub-option" href="#">انتخاب رشته</a>
                <a class="consulting-menu-sub-option" href="#">آشنایی با دانشگاه ها</a>
              </div>
              <v-img src="https://media.chibekhoonam.net/2018/05/p4.png" />
            </div>
          </li>
          <a class="nav-link menu-nav" href="#">آموزش خرید کتاب</a>
          <a class="nav-link menu-nav" href="#">پیگیری سفارش</a>
        </ul>
        <div class="leftSide">
          <input class="fixed-search-input" type="text" placeholder="جستجو">
          <a href="#">
            <div class="leftSide-btn search-button">
              <i class="fas fa-shopping-cart" />
            </div>
          </a>
          <div class="cart-scrolled-menu">
            <nuxt-link to="/سبد-خرید">
              <div class="leftSide-btn leftSide-btn-arrow cart-logo">
                <i class="fas fa-shopping-cart" />
              </div>
            </nuxt-link>
            <div class="cart-details">
              <HeaderCart :products="products" />
            </div>
          </div>
          <a href="#">
            <div class="leftSide-btn leftSide-btn-arrow account-logo">
              <i class="fas fa-user" />
            </div>
          </a>
        </div>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import HeaderCart from '../HeaderCart'
import { ProductList } from '../../models/Product'
import Badge from '../Badge'
import MainMenu from '../MobileMenus/MainMenu'
import SearchMenu from '../MobileMenus/SearchMenu'
import AccountMenu from '../MobileMenus/AccountMenu'
import mixinStore from '~/plugins/mixinStore'
import '~/assets/css/components/Header.css'

export default {
  name: 'Header',
  components: { HeaderCart, Badge },
  mixins: [mixinStore],
  data () {
    return {
      mainCarouselSlides: [
        {
          imgurl: 'https://media.chibekhoonam.net/2020/09/nazarsanji-hafte3-shahrivar.jpg',
          url: '#'
        },
        {
          imgurl: 'https://media.chibekhoonam.net/2020/08/%D8%A7%D8%B3%D9%84%D8%A7%DB%8C%D8%AF-%D8%B4%D9%88.jpg',
          url: '#'
        }
      ]
    }
  },
  computed: {
    products () {
      return new ProductList(this.$store.getters.products)
    },
    isFromPc () {
      return this.$store.getters.isFromPc
    }
  },
  methods: {
    menuDrawerOpen () {
      this.$store.commit('updateDrawer', true)
      this.$emit('drawer-menu', MainMenu)
    },
    searchDrawerOpen () {
      this.$store.commit('updateDrawer', true)
      this.$emit('drawer-menu', SearchMenu)
    },
    AccountDrawerOpen () {
      this.$store.commit('updateDrawer', true)
      this.$emit('drawer-menu', AccountMenu)
    }
  }
}
</script>

<style>
  @import url('../../assets/css/components/HeaderScoped.css');
</style>
