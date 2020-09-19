<template>
  <div>
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
            <v-col
              cols="12"
            >
              <TopView :product-cards="products.list" :main-carousel-slides="mainCarouselSlides" />
            </v-col>
          </v-row>
        </v-layout>
      </v-col>
    </v-row>
    <ProductSliderCarousel :products="products.list">
      جدید ترین کتاب های کمک آموزشی
    </ProductSliderCarousel>
    <ProductSliderCarousel :products="products.list">
      جدید ترین نوشت افزار ها
    </ProductSliderCarousel>
    <ProductSliderCarousel :products="products.list" main-bg="#6130a4" bottom-bg="#6d3ab3">
      محبوب ترین محصولات
    </ProductSliderCarousel>
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
      books: [
        {
          oldPrice: 120000,
          newPrice: 80000,
          off: 20,
          imgURL: 'https://media.chibekhoonam.net/2020/09/golbarg-olom6.jpg',
          productURL: '#',
          productTitle: 'کتاب کمک آموزشی 1'
        },
        {
          oldPrice: 100000,
          newPrice: 80000,
          off: 20,
          imgURL: 'https://media.chibekhoonam.net/2020/09/golbarg-olom6.jpg',
          productURL: '#',
          productTitle: 'کتاب کمک آموزشی 2'
        },
        {
          oldPrice: 100000,
          newPrice: 80000,
          off: 20,
          imgURL: 'https://media.chibekhoonam.net/2020/09/golbarg-olom6.jpg',
          productURL: '#',
          productTitle: 'کتاب کمک آموزشی 3'
        },
        {
          oldPrice: 100000,
          newPrice: 80000,
          off: 20,
          imgURL: 'https://media.chibekhoonam.net/2020/09/golbarg-olom6.jpg',
          productURL: '#',
          productTitle: 'کتاب کمک آموزشی 4'
        },
        {
          oldPrice: 100000,
          newPrice: 80000,
          off: 20,
          imgURL: 'https://media.chibekhoonam.net/2020/09/golbarg-olom6.jpg',
          productURL: '#',
          productTitle: 'کتاب کمک آموزشی 5'
        },
        {
          oldPrice: 100000,
          newPrice: 80000,
          off: 20,
          imgURL: 'https://media.chibekhoonam.net/2020/09/golbarg-olom6.jpg',
          productURL: '#',
          productTitle: 'کتاب کمک آموزشی 6'
        },
        {
          oldPrice: 100000,
          newPrice: 80000,
          off: 20,
          imgURL: 'https://media.chibekhoonam.net/2020/09/golbarg-olom6.jpg',
          productURL: '#',
          productTitle: 'کتاب کمک آموزشی 7'
        }
      ],
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
      return this.$store.getters.products
    }
  }
}
</script>
