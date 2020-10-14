<template>
  <div>
    <v-expansion-panels focusable multiple>
      <v-expansion-panel>
        <v-expansion-panel-header>مدیریت کاربران</v-expansion-panel-header>
        <v-expansion-panel-content>
          <users />
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>مدیریت دسترسی ها</v-expansion-panel-header>
        <v-expansion-panel-content>
          <access />
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>مدیریت نقش ها</v-expansion-panel-header>
        <v-expansion-panel-content>
          <roles />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import Users from '~/components/admin/usersPanel/users'
import Access from '~/components/admin/usersPanel/access'
import Roles from '~/components/admin/usersPanel/roles'

export default {
  components: { Roles, Access, Users }
}
</script>
<style scoped>
.main {
  background-color: #8e8e8e;
}
</style>
