<template>
  <div>
    <v-expansion-panels focusable multiple>
      <users />
      <access />
      <roles />
    </v-expansion-panels>
  </div>
</template>

<script>
import Users from '../../../components/admin/users'
import Access from '../../../components/admin/access'
import Roles from '../../../components/admin/roles'

export default {
  components: { Roles, Access, Users }
}
</script>
<style scoped>
.main {
  background-color: #8e8e8e;
}
</style>
