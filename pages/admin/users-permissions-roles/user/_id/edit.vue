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
    <user-information-correction :editmode="true" :filled="true"/>
  </div>
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
