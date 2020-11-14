<template>
  <role-information-correction />
</template>

<script>
import RoleInformationCorrection from '~/components/admin/managementsPanel/roleInformationCorrection'
export default {
  name: 'Edit',
  components: { RoleInformationCorrection },
  middleware: 'Auth'
}
</script>

<style scoped>
.main {
  background-color: #8e8e8e;
}
</style>
