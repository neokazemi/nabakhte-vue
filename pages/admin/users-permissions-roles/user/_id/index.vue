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

    <UserInfo />
  </div>
</template>

<script>
import UserInfo from '../../../../../components/admin/InformationCorrections/userInfo'
export default {
  components: { UserInfo },
  // name: '_id',
  middleware: 'Auth'
}
</script>

<style scoped>
.main {
  background-color: #8e8e8e;
}
</style>
