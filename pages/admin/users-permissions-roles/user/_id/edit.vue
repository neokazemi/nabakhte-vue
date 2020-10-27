<template>
  <user-information-correction :editmode="true" :filled="true"/>
</template>

<script>
import UserInformationCorrection from '../../../../../components/admin/managementsPanel/userInformationCorrection'
export default {
  name: 'Edit',
  components: { UserInformationCorrection }
}
</script>

<style scoped>
.main {
  background-color: #8e8e8e;
}
</style>
