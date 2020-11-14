<template>
  <user-information-correction :editmode="true" />
</template>

<script>
import UserInformationCorrection from '~/components/admin/managementsPanel/userInformationCorrection'
export default {
  name: 'Add',
  components: { UserInformationCorrection },
  middleware: 'Auth'

}
</script>

<style scoped>
.main {
  background-color: #8e8e8e;
}
</style>
