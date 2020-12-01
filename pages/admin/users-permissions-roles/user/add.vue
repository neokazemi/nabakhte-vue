<template>
  <UserInfo :editmode="true" />
</template>

<script>
import UserInfo from '~/components/admin/InformationCorrections/userInfo'
export default {
  name: 'Add',
  components: { UserInfo },
  middleware: 'auth'

}
</script>
