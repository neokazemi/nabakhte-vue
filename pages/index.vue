<template>
  <v-row>
    <v-col>
      <v-layout
        column
        justify-center
        align-center
      >
        <v-row
          justify="center"
          no-gutters
        >
          <div class="container body-head">
            <div class="row">
              <div class="col-md-9">
                <div class="row big-carousel">
                  <main-crousel />
                </div>
                <div class="row under-carousel-buttons">
                  <a href="#" class="under-carousel-button">
                    <img src="https://www.chibekhoonam.net/wp-content/themes/chibekhoonam/img/free-delivery.svg"><p>ارسال سریع</p>
                    <p class="after-hover-text">بیشتر بدانید</p>
                  </a>
                  <a href="#" class="under-carousel-button">
                    <img src="https://www.chibekhoonam.net/wp-content/themes/chibekhoonam/img/tag.svg"><p>تخفیف های جذاب</p>
                    <p class="after-hover-text">بیشتر بدانید</p>
                  </a>
                  <a href="#" class="under-carousel-button">
                    <img src="https://www.chibekhoonam.net/wp-content/themes/chibekhoonam/img/24-hours.svg"><p>پشتیبانی</p>
                    <p class="after-hover-text">بیشتر بدانید</p>
                  </a>
                  <a href="#" class="under-carousel-button">
                    <img src="https://www.chibekhoonam.net/wp-content/themes/chibekhoonam/img/customer-service.svg"><p>خدمات مشتریان</p>
                    <p class="after-hover-text">بیشتر بدانید</p>
                  </a>
                  <a href="#" class="under-carousel-button type2">
                    بیشتر بدانید ...
                  </a>
                </div>
              </div>
              <div class="col-3">
                <ProductCard2>گلبرگ</ProductCard2>
              </div>
            </div>
          </div>
        </v-row>
        <v-flex
          xs12
          sm8
          md6
        >
          <div class="text-center">
            <logo />
            <vuetify-logo />
          </div>
        </v-flex>
      </v-layout>
    </v-col>
  </v-row>
</template>

<script>
/* import ProductCard1 from '../components/productCard' */
import ProductCard2 from '../components/productCard2'
import MainCrousel from '../components/mainCarousel'
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    MainCrousel,
    ProductCard2,
    Logo,
    VuetifyLogo
  }
}
</script>

<style>

  a {
    text-decoration: none;
  }

  .under-carousel-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 15px;
    padding-right: 6px;
    padding-left: 5%;
  }

  .under-carousel-buttons .type2 {
    justify-content: center !important;
    width: 16% !important;
    background-color: #ededed;
    box-shadow: none;
  }

  .under-carousel-button {
    width: 19.8%;
    height: 60px;
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    color: black !important;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    position: relative;
  }

  .under-carousel-button:hover {
    color: #000;
    text-decoration: none;
  }

  .under-carousel-button p {
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    margin-right: 10px;
    font-size: 0.8rem;
  }

  .under-carousel-button:hover p {
    margin-right: 49px;
    font-size: 1px;
    opacity: 0;
  }

  .under-carousel-button .after-hover-text {
    color: #269b24;
    font-size: 1px;
    margin-right: 49px;
    position: absolute;
    height: 100%;
    top: 50%;
    right: 65px;
    opacity: 0;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  .under-carousel-button:hover .after-hover-text {
    font-size: 0.9rem;
    margin-right: 0;
    opacity: 1;
    top: 30%;
    right: 65px;
  }

  .under-carousel-button img {
    height: 38px;
    width: auto;
    margin-right: 10px;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  .under-carousel-button:hover img {
    margin-right: 1px;
  }
</style>
