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
    <ProductInfo />
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

import ProductInfo from '../../../../../components/admin/InformationCorrections/productInfo'
export default {
  name: 'Edit',
  components: { ProductInfo },
  middleware: 'Auth'
}
</script>

<style scoped>
  .main {
    background-color: #8e8e8e;
  }
</style>
