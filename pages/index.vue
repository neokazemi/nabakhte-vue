<template>
  <div>
    <TopView v-if="!isFromPc" :products="products" :main-carousel-slides="mainCarouselSlides" />
    <v-layout
      v-else
      column
      justify-center
      align-center
    >
      <v-row
        justify="center"
        no-gutters
      >
        <v-col
          cols="12"
        >
          <TopView :products="products" :main-carousel-slides="mainCarouselSlides" />
        </v-col>
      </v-row>
    </v-layout>
    <div v-if="!isFromPc">
      <ProductSliderCarousel :products="products" :type="3" main-bg="#000">
        جدید ترین کتاب های کمک آموزشی
      </ProductSliderCarousel>
      <ProductSliderCarousel :products="products" :type="3" main-bg="#000">
        جدید ترین نوشت افزار ها
      </ProductSliderCarousel>
      <ProductSliderCarousel :products="products" :type="3" main-bg="#000">
        محبوب ترین محصولات
      </ProductSliderCarousel>
    </div>
    <div v-else>
      <ProductSliderCarousel :products="products">
        جدید ترین کتاب های کمک آموزشی
      </ProductSliderCarousel>
      <ProductSliderCarousel :products="products">
        جدید ترین نوشت افزار ها
      </ProductSliderCarousel>
      <ProductSliderCarousel :products="products" main-bg="#6130a4" bottom-bg="#6d3ab3">
        محبوب ترین محصولات
      </ProductSliderCarousel>
      <v-container>
        <v-row>
          <v-col :md="4" class="recent-articles">
            <div class="recent-articles-header">
              <h4>مقالات اخیر</h4>
              <nuxt-link class="more-info" to="/blog/category/maghalat">
                مشاهده بیشتر
              </nuxt-link>
            </div>
            <div class="recent-articles-content">
              <div class="item">
                <nuxt-link to="#">
                  بهترین کتاب های کمک آموزشی پایه دوازدهم بر اساس نظرسنجی مهرماه 1399
                </nuxt-link>
              </div>
              <div class="item">
                <nuxt-link to="#">
                  بهترین کتاب های کمک آموزشی پایه یازدهم بر اساس نظرسنجی مهرماه 1399
                </nuxt-link>
              </div>
              <div class="item">
                <nuxt-link to="#">
                  بهترین کتاب های کمک آموزشی پایه دهم بر اساس نظرسنجی مهرماه 1399
                </nuxt-link>
              </div>
              <div class="item">
                <nuxt-link to="#">
                  چگونه در مقطع متوسطه اول (دبیرستان) انتخاب رشته کنیم؟
                </nuxt-link>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import mixinProduct from '~/plugins/mixinProduct'
import ProductSliderCarousel from '~/components/ProductSliderCarousel'
import TopView from '~/components/TopView/TopView'

export default {
  components: {
    TopView,
    ProductSliderCarousel
  },
  mixins: [mixinProduct],
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
    isFromPc () {
      return this.$store.getters.isFromPc
    }
  }
}
</script>

<style scoped>
  .recent-articles {
    display: flex;
    flex-direction: column;
  }

  .recent-articles .recent-articles-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .recent-articles .recent-articles-content {
    background-color: #000;
    display: flex;
    flex-direction: column;
  }

  .recent-articles .recent-articles-content .item {
    padding: 5px 10px;
    text-align: center;
    height: 80px;
    display: flex;
    justify-content: center;
    align-content: center;
    border: 1px solid #fff;
  }

  .recent-articles .recent-articles-content .item a {
    color: #fff;
    text-align: center;
    font-size: 0.8rem;
  }

  .more-info {
    color: #a2a2a1;
    font-size: 0.8rem;
  }
</style>
