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
