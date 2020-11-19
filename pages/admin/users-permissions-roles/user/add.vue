<template>
  <UserInfo :editmode="true" />
</template>

<script>
import UserInfo from '../../../../components/admin/InformationCorrections/userInfo'
export default {
  name: 'Add',
  components: { UserInfo },
  middleware: 'Auth'

}
</script>

<style scoped>
.main {
  background-color: #8e8e8e;
}
</style>
