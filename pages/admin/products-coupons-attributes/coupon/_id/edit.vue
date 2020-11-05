<template>
  <product-information-correction />
</template>

<script>
import ProductInformationCorrection
  from '~/components/admin/managementsPanel/productInformationCorrection'
export default {
  name: 'Edit',
  components: { ProductInformationCorrection }
}

</script>

<style scoped>
  .main {
    background-color: #8e8e8e;
  }
</style>
