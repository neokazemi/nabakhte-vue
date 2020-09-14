<template>
  <div>
    <v-app-bar
      v-if="true"
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
                    <a id="home-page" class="nav-link" href="#">چی بخونم</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">تماس با ما</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">درباره ما</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">قوانین و شرایط</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">اخبار</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">مقالات</a>
                  </li>
                </ul>
              </div>
              <div class="col-3 contact-us">
                <p class="white-font fontIranSans nav-bar-options">
                  021-66979455
                  <i class="fas fa-phone-volume"></i>
                </p>
                <a href="#" class="instagram nav-bar-options"><i class="fab fa-instagram"></i></a>
                <a href="#" class="telegram nav-bar-options"><i class="fab fa-telegram-plane"></i></a>
                <div class="header-bg">
                  <div class="header-bg-white" />
                  <div class="header-bg-green" />
                  <div class="header-bg-white-horizontal" />
                </div>
              </div>
              <div class="col-2 favorites">
                <p class="black-font fontIranSans">علاقه مندی ها</p>
                <div class="header-fluid-bg"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="container top-menu">
          <div class="row menu">
            <div class="col-7">
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
                  </li>
                  <li class="nav-item">
                    <a class="nav-link menu-nav" href="#">آموزش خرید کتاب</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link menu-nav" href="#">
                      <i class="fas fa-shopping-bag" />پیگیری سفارش
                    </a>
                  </li>
                </ul>
              </div>
              <div class="row searchbar-container">
                <input type="text" placeholder="عنوان، انتشارات، درس یا ... (حداقل 3 حرف)" />
                <button type="submit" class="search-button">
                  <i class="fas fa-search" />
                </button>
              </div>
            </div>

            <div class="col-3 user-button">
              <div class="user-cart">
                <a href="#">
                  <div class="cart-logo leftSide-btn-arrow">
                    <i class="fas fa-shopping-cart" />
                  </div>
                  <h2 class="cart-description">سبد خرید</h2>
                </a>
                <div class="cart-details user-button-details">
                  <p>چیزی در سبد خرید یافت نشد</p>
                </div>
              </div>
              <div class="account-management">
                <a href="#">
                  <div class="account-logo leftSide-btn-arrow">
                    <i class="fas fa-user" />
                  </div>
                  <h2 class="account-description">حساب کاربری</h2>
                </a>
                <div class="account-options user-button-details">
                  <a class="first-option" href="#">
                    <i class="fas fa-shopping-basket" />سفارش ها
                  </a>
                  <a class="middle-option" href="#">
                    <i class="fas fa-truck" />آدرس ها
                  </a>
                  <a class="middle-option" href="#">ویرایش پروفایل</a>
                  <a class="last-option" href="#">خروج</a>
                </div>
              </div>
            </div>

            <a class="col-2 logo" href="#">
              <v-img src="https://www.chibekhoonam.net/wp-content/themes/chibekhoonam/img/logo.svg" class="logo-image" />
              <p id="logo-info-1">تحلیل، مقایسه و خرید آنلاین</p>
              <p id="logo-info-2">کتاب های کمک آموزشی</p>
            </a>
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
            <v-btn small depressed>
              مشاوره
            </v-btn>
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
          <input class="fixed-search-input" type="text" placeholder="جستجو" />
          <a href="#">
            <div class="leftSide-btn search-button">
              <i class="fas fa-shopping-cart" />
            </div>
          </a>
          <a href="#">
            <div class="leftSide-btn leftSide-btn-arrow cart-logo">
              <i class="fas fa-shopping-cart" />
            </div>
          </a>
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
export default {
  name: 'Header'
}
</script>

<style scoped>
header .fixedMenu {
  display: block;
}

header .scrolledMenu {
  display: none;
}

header {
  box-shadow: none !important;
  background-color: #f8f8f8 !important;
}

header.v-app-bar--is-scrolled {
  box-shadow: 1px 3px 7px rgba(103, 82, 57, 0.1) !important;
  background-color: #fff !important;
}

header.v-app-bar--is-scrolled .fixedMenu {
  display: none;
}

header.v-app-bar--is-scrolled .scrolledMenu {
  display: flex;
}

header.v-app-bar--is-scrolled .scrolledMenu .leftSide {
  display: flex;
}

header.v-app-bar--is-scrolled .scrolledMenu .scrolledMenuLinks {
  flex: 1;
}

.scrolledMenu .leftSide .leftSide-btn {
  text-decoration: none !important;
  text-align: center;
  position: relative;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  height: 25px;
  width: 25px;
  margin-right: 12px;
}

.top-menu {
  padding-top: 0;
}

.search-button {
  background-color: #33b130;
}

.cart-logo {
  background-color: #fb1616;
}

.account-logo {
  background-color: #50cbb2;
}

.leftSide-btn-arrow {
  width: 25px;
  height: 25px;
  border-radius: 3px;
  position: relative;
}

.leftSide-btn-arrow::before {
  content: " ";
  position: absolute;
  bottom: -8px;
  right: 50%;
  margin-right: -4px;
  height: 0;
  width: 0;
  border: 4px solid transparent;
  border-top: 4px solid;
}

.account-logo::before {
  border-top-color: #50cbb2;
}

.cart-logo::before {
  border-top-color: #fb1616;
}

.fixed-search-input {
  min-width: 200px;
  border: none;
  border-radius: 7px;
  background-color: #ececec;
  height: 25px;
  color: #252525;
  font-size: 12px;
  padding-right: 15px;
}
</style>

<style>
.v-application p {
  margin: 0;
}

header:not(.v-app-bar--is-scrolled) .v-toolbar__content {
  padding: 0;
}

.full-container {
  width: 100%;
  padding: 0;
  margin: 0;
}

.top-bar {
  height: 40px;
  background-color: #2bbb28;
  z-index: 1;
  padding-right: 0;
}

.menu-options-container .nav {
  position: relative;
  padding-top: 15px;
}

.nav-item {
  float: right;
  padding: 0;
  color: #f8f8f8;
  font-size: 12pt;
  transition: all 0.3s ease;
}

a,
mark {
  background-color: transparent;
  color: inherit;
  font-size: inherit;
}

html,
body,
button,
input,
optgroup,
select,
textarea {
  background-color: #f8f8f8;
}

a ::after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

#home-page {
  font-size: 1rem;
}

.nav p {
  color: #f8f8f8;
  padding: 8px 0;
  font-family: inherit;
}

#phone-number {
  color: #fff;
  padding: 8px 0;
}

.white-font {
  color: #fff;
  padding: 8px 0;
}

.black-font {
  color: #292b2c;
  padding: 0;
}

.favorites {
  border-top-right-radius: 20px;
  background-color: #f8f8f8;
  text-align: center;
  height: 36px;
  margin-top: 4px;
  font-size: 0.8rem;
  position: relative;
}

.contact-us {
  border-bottom-left-radius: 20px;
  padding: 0;
  padding-left: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
}

.navbar-bg {
  background-color: #fff;
  height: 36px;
  width: 100px;
}

.navbar-container {
  background-color: #2bbb28;
  height: 40px;
  z-index: 1;
  padding: 0;
}

.menu {
  background-color: inherit;
}

.menu-options-container {
  height: 77px;
  margin: 0 0;
  padding-right: 5px;
}

.searchbar-container {
  height: 32px;
}

header a {
  text-decoration: none;
}

.menu-nav {
  color: #000 !important;
  font-size: 0.8rem;
  font-weight: bold;
  margin: 0 10px;
  padding: 10px;
  display: flex;
  flex-flow: row;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.searchbar-container input {
  font-size: 0.8rem;
  word-spacing: 2;
  font-weight: 400;
  width: 90%;
  padding: 0 6px;
  margin-right: 20px;
  border-color: internal-light-dark;
  background-color: #fff;
  border: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  border-left: 1px solid #ececec;
}

.searchbar-container .search-button {
  width: 32px;
  border: 1px;
  padding: 1px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}

.user-button {
  height: 120px;
  flex-flow: row;
  display: flex;
  justify-content: space-between;
}

.logo .logo-image {
  width: 130px;
  margin: 10px auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

#logo-info-1 {
  border-top: 1px solid #c3c3c3;
  font-size: 0.7rem;
  margin: 0 8px;
  display: block;
  color: #8e8e8e;
  text-align: center;
  line-height: 17px;
}

#logo-info-2 {
  border-bottom: 1px solid #c3c3c3;
  font-size: 0.9rem;
  margin: 0 8px;
  display: block;
  color: #8e8e8e;
  text-align: center;
  line-height: 17px;
}

.logo {
  text-decoration: none !important;
  padding: 12px 20px;
}

.account-management {
  height: 83px;
  margin-top: 26px;
  color: #50cbb2;
  text-decoration: none !important;
  width: 120px;
  border: 2px solid #f8f8f8;
  border-bottom-color: #50cbb2;
  justify-content: center;
  display: flex;
  flex-flow: column;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.user-cart {
  height: 83px;
  margin-top: 26px;
  color: #fb1616;
  align-items: center;
  width: 120px;
  border: 2px solid #f8f8f8;
  border-bottom-color: #fb1616;
  justify-content: center;
  display: flex;
  flex-flow: column;
  flex-direction: column;
  text-decoration: none !important;
  position: relative;
}

.cart-description {
  font-size: 0.9rem;
  font-weight: 400;
  color: #fb1616;
  text-decoration: none !important;
  position: relative;
  display: block;
  margin: 15px 0;
}

.account-description {
  font-size: 0.9rem;
  font-weight: 400;
  color: #50cbb2;
  text-decoration: none !important;
  position: relative;
  display: block;
  margin: 15px 0;
}

.user-cart a,
.account-management a {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  flex-direction: column;
}

.fa-search {
  color: #2bbb28;
  font-size: 15px;
}

.fa-shopping-cart {
  color: #fff;
  font-size: 14px;
}

.fa-user {
  color: #fff;
  font-size: 14px;
}

.fa-ellipsis-v {
  margin: 0 10px;
}

.nav .nav-item .nav-link {
  transition: all 0.3s ease;
  border-radius: 2px;
}

.navigation-bar .nav-item .nav-link {
  display: flex;
  padding-right: 0;
  padding-left: 3px;
  color: #f8f8f8;
  font-weight: thin;
  font-size: 0.8rem;
}

.navigation-bar .nav-item .nav-link:hover {
  text-decoration: none;
  color: #f8f8f8;
}

.menu-options-container .nav .nav-item .nav-link:hover {
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  color: #000;
}

.navigation-bar .nav-item .nav-link::after {
  content: "/";
  padding-top: 10px;
  margin: 0 8px;
  font-size: 7pt;
  opacity: 0.5;
  cursor: default;
}

.nav.navigation-bar .nav-item:last-child a::after {
  display: none;
}

.navigation-bar .nav-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto 5px;
}

.nav .nav-item .menu-nav {
  margin-right: 0;
}

.menu .col-7 {
  padding-right: 0;
}

.header-bg {
  position: absolute;
  height: 36px;
  margin-top: 4px;
  width: 20%;
  left: -10%;
  z-index: 1;
  top: 0;
}

.header-bg-white {
  width: 50%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #f8f8f8;
  position: absolute;
  top: 0;
  left: 0;
  border-top-right-radius: 20px;
  z-index: 1;
}

.header-bg-green {
  width: 50%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #2bbb28;
  position: absolute;
  bottom: 0;
  right: 0;
  border-bottom-left-radius: 20px;
  z-index: 3;
}

.header-bg-white-horizontal {
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
  background-color: #f8f8f8;
  z-index: 2;
}

.header-fluid-bg {
  position: absolute;
  height: 36px;
  right: 100%;
  top: 0;
  width: 500px;
  overflow: hidden;
  z-index: 2;
  background-color: #f8f8f8;
  margin: 0;
}

.ch-telephone {
  fill: #fff;
  height: 15px;
  width: 15px;
  display: flex;
  margin: auto 0;
  color: #fff;
}

.fa-angle-down {
  color: #2bbb28;
  width: 8px;
  height: 12px;
  margin-right: 10px !important;
  line-height: 12px;
  display: flex;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

a:hover .fa-angle-down {
  transform: rotate(180deg);
}

.consulting-mega-menu {
  font-size: 0.8rem;
  font-weight: 400;
  height: 340px;
  background-color: #f4f1ec;
  width: 115%;
  margin: 5px;
  margin-top: 30px;
  position: absolute;
  left: 0;
  right: 0;
  visibility: hidden;
  z-index: 2500;
  box-shadow: 0 3px 7px rgba(103, 82, 57, 0.1);
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  opacity: 0;
}

.consulting:hover .consulting-mega-menu {
  visibility: visible;
  opacity: 1;
  margin-top: 5px;
}

.consulting-mega-menu .option-selection {
  position: absolute;
  top: 0;
  right: 0;
  width: 166px;
  height: 100px;
  display: flex;
  justify-content: space-evenly;
  flex-flow: column;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-left: 1px solid #e2dcd3;
}

.consulting-mega-menu .option-selection .option {
  height: 28px;
  width: 125px;
  border-radius: 20px;
  padding: 0 10px;
  margin: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  text-decoration: none;
  flex-flow: row;
  flex-direction: row;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.user-cart .cart-details p {
  padding: 17px;
  font-size: 1.15rem;
  color: #000;
}

.consulting-mega-menu .option-selection .option p {
  color: #000;
  display: flex;
  margin-bottom: 0;
}

.consulting-mega-menu .option-selection .option:hover {
  background-color: #2bbb28;
}

.nav-bar-options i {
  margin: 5px;
}

.menu-nav i {
  margin-right: 0;
  margin-left: 10px !important;
}

.fixed-nav-options .search-button i {
  color: #fff;
}

.navigation-bar .nav-item i {
  width: 15px;
  height: 15px;
  color: #fff;
  margin: 5px;
  margin-left: 10px;
  justify-content: center;
  display: flex;
}

.account-management .account-options a i {
  color: #292929;
  height: 20px;
  width: 20px;
  margin: auto;
  margin-right: 0;
  margin-left: 10px;
  transition: all 200ms ease-in-out;
}

.consulting-mega-menu .option-selection .option i {
  display: inline-block;
  margin: 0;
  visibility: hidden;
  opacity: 0;
  color: #fff;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.account-management .account-options a:hover i {
  color: #fff;
}

.consulting-mega-menu .option-selection .option:hover i {
  display: inline-block;
  margin: 5px;
  font-size: 12px;
  visibility: visible;
  opacity: 1;
  color: #fff;
}

.account-management .account-options a {
  font-size: 1.1rem;
  width: 100%;
  color: #000 !important;
  margin: 0;
  height: 100%;
  align-items: center;
  padding: 0 15px;
  transition: all 200ms ease-in-out;
  display: flex;
  flex-flow: row;
  flex-direction: row;
  justify-content: flex-start;
}

.fixed-nav-options a:hover {
  text-decoration: none !important;
}

.user-button .account-management:hover a {
  text-decoration: none;
  color: #50cbb2;
}

.user-button .user-cart:hover a {
  text-decoration: none;
  color: #fb1616;
}

.consulting-mega-menu .megaMenuIMG {
  position: absolute;
  left: 60px;
  margin: auto;
  display: block;
  top: 0;
  bottom: 0;
}

.consulting-mega-menu .offline-consulting-menu {
  position: absolute;
  top: 0;
  right: 166px;
  height: 330px;
  width: 250px;
  padding: 20px;
  display: flex;
  flex-flow: column;
  flex-direction: column;
  justify-content: right;
}

.consulting-menu-sub-option {
  color: #000 !important;
  direction: rtl;
  float: right;
  display: flex;
  padding: 0 10px;
  margin: 7px 0;
}

.consulting-menu-sub-option:hover {
  text-decoration: none;
  color: #ff3737 !important;
}

.user-cart .cart-details {
  height: 55px;
  width: 340px;
  right: 0%;
}

.user-button-details {
  position: absolute;
  top: 85%;
  margin-top: 5px;
  padding: 0;
  -webkit-transform: translateY(-15px) !important;
  -moz-transform: translateY(-15px) !important;
  -ms-transform: translateY(-15px) !important;
  -o-transform: translateY(-15px) !important;
  transform: translateY(-15px) !important;
  -webkit-transition: all 400ms ease-in-out !important;
  -moz-transition: all 400ms ease-in-out !important;
  -ms-transition: all 400ms ease-in-out !important;
  -o-transition: all 400ms ease-in-out !important;
  transition: all 400ms ease-in-out !important;
  z-index: 2400;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  opacity: 0;
  background-color: #fff !important;
  box-shadow: 0 3px 7px rgba(103, 82, 57, 0.1) !important;
}

.user-cart:hover .user-button-details {
  visibility: visible;
  top: 100%;
  opacity: 1;
}

.account-management .account-options {
  border-radius: 4px;
  text-align: right;
  width: 175px;
  height: 166px;
  left: 0%;
  display: flex;
  flex-flow: column;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
}

.account-management:hover .account-options {
  visibility: visible;
  opacity: 1;
  top: 100%;
}

.account-management .account-options a:hover {
  text-decoration: none;
  color: #fff !important;
  background-color: #50cbb2;
}

.account-management .account-options .first-option {
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  border-bottom: 1px solid #f4f4f4;
}

.account-management .account-options .middle-option {
  border-bottom: 1px solid #f4f4f4;
}

.account-management .account-options .last-option {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.nav-bar-options {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  color: #fff;
  margin: auto 0;
  margin-left: 5%;
  font-size: 0.8rem;
}

.nav-bar-options:hover {
  color: #156a14;
}

.instagram {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.telegram {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.instagram:hover,
.telegram:hover {
  text-decoration: none;
}

.fixed-navbar {
  background-color: #fff;
  position: fixed;
  top: 0;
  z-index: 2600;
  height: 41px;
  box-shadow: 1px 3px 7px rgba(103, 82, 57, 0.1);
  display: flex;
  justify-content: center;
}

.fixed-navbar .fixed-navbar-content {
  height: 41px;
  padding: auto 0;
}

.fixed-navbar .fixed-navbar-content .row .nav-menu a {
  margin: auto 0;
  text-align: center;
  padding-right: 20px;
}

.fixed-navbar .fixed-navbar-content .row .nav-menu {
  display: flex;
  flex-flow: row;
  flex-direction: row;
  padding: 0;
  align-items: center;
  justify-content: flex-start;
}

.fixed-navbar .fixed-navbar-content .row .nav-menu a:hover {
  text-decoration: none;
  color: #000;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
}

.fixed-nav-options {
  display: flex;
  flex-flow: row;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.fixed-nav-options .search-button {
  background-color: #33b130;
  height: 64%;
  width: 30px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.body-head {
  height: 462px;
  background: transparent;
}

.body-head div {
  height: inherit;
}

.body-haed div div {
  height: inherit;
}

.big-carousel {
  height: 355px;
}
</style>
