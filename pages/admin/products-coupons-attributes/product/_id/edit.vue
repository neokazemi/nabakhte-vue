<template>
  <div>
    <div
      class="d-flex justify-end"
    >
      <v-btn
        color="#b2dfdb"
        elevation="3"
        class="ml-5 mt-5 mb-5"
        @click="$router.go(-1)"
      >
        بازگشت >>
      </v-btn>
    </div>
    <product-information-correction :productslist="products" />
    <div class="d-flex justify-end">
      <v-btn
        color="#b2dfdb"
        elevation="3"
        class="ml-5 mt-5 mb-5"
      >
        اعمال تغییرات
      </v-btn>
    </div>
  </div>
</template>

<script>
import mixinProduct from '~/plugins/mixinProduct'

import ProductInformationCorrection
  from '~/components/admin/managementsPanel/productInformationCorrection'
export default {
  name: 'Edit',
  components: { ProductInformationCorrection },
  mixins: [mixinProduct]
}
</script>

<style scoped>
  .main {
    background-color: #8e8e8e;
  }
</style>
