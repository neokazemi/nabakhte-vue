<template>
  <role-information-correction />
</template>

<script>
import RoleInformationCorrection from '~/components/admin/informationCorrections/roleInfo'
export default {
  name: 'Edit',
  components: { RoleInformationCorrection },
  middleware: 'auth'
}
</script>

<style scoped>
.main {
  background-color: #8e8e8e;
}
</style>
