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
    <product-information-correction />
  </div>
</template>

<script>
import ProductInformationCorrection from '~/components/admin/InformationCorrections/productInfo'
export default {
  name: 'Edit',
  components: { ProductInformationCorrection },
  middleware: 'auth'
}

</script>
