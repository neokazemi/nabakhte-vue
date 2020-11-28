<template>
  <access-information-correction />
</template>

<script>
import AccessInformationCorrection from '~/components/admin/InformationCorrections/accessInfo'
export default {
  name: 'Edit',
  components: { AccessInformationCorrection },
  middleware: 'Auth'
}
</script>

<style scoped>
.main {
  background-color: #8e8e8e;
}
</style>
