<template>
  <div>
    <TopView v-if="ispwa" :products="products" :main-carousel-slides="mainCarouselSlides" />
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
    <div v-if="ispwa">
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
    </div>
  </div>
</template>

<script>
import { ProductList } from '../models/Product'
import ProductSliderCarousel from '~/components/ProductSliderCarousel'
import TopView from '~/components/TopView/TopView'

export default {
  components: {
    TopView,
    ProductSliderCarousel
  },
  asyncData (context) {
    return (new ProductList()).fetch()
      .then((response) => {
        context.store.commit('updateProducts', new ProductList(response.data[0].data.data))
      })
  },
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
    ispwa () {
      return this.$store.getters.ispwa
    }
  }
}
</script>
