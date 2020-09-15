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
          <ProductCard1>کتاب</ProductCard1>
          <ProductCard2>کتاب 2</ProductCard2>
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
import ProductCard1 from '../components/productCard'
import ProductCard2 from '../components/productCard2'
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    ProductCard2,
    ProductCard1,
    Logo,
    VuetifyLogo
  }
}
</script>
