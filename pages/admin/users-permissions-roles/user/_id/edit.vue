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
    <UserInfo :editmode="true" :filled="true" />
  </div>
</template>

<script>
import UserInfo from '../../../../../components/admin/InformationCorrections/userInfo'
export default {
  name: 'Edit',
  components: { UserInfo },
  middleware: 'Auth'
}
</script>

<style scoped>
.main {
  background-color: #8e8e8e;
}
</style>
