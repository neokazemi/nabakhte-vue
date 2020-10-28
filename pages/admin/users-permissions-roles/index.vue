<template>
  <div>
    <v-row>
      <v-col>
        <Menu />
        <v-expansion-panels focusable multiple>
          <v-expansion-panel>
            <v-expansion-panel-header>مدیریت کاربران</v-expansion-panel-header>
            <v-expansion-panel-content>
              <UserListFilter />
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
      </v-col>
    </v-row>
    <br/>
    <br/>
  </div>
</template>

<script>
import Menu from '~/components/admin/menu'
import Users from '~/components/admin/usersPanel/tables/users'
import Access from '~/components/admin/usersPanel/tables/access'
import Roles from '~/components/admin/usersPanel/tables/roles'
import UserListFilter from '~/components/admin/usersPanel/filters/UserListFilter'

export default {
  components: { Menu, UserListFilter, Roles, Access, Users }
}

</script>
<style scoped>
.main {
  background-color: #8e8e8e;
}
</style>
