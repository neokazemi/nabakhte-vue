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
    <order-information-correction />
  </div>
</template>
<script>
import OrderInformationCorrection from '~/components/admin/InformationCorrections/orderInfo'
export default {
  name: 'Edit',
  components: { OrderInformationCorrection },
  middleware: 'auth'
}
</script>
