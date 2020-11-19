<template>
  <div>
    <v-row>
      <v-col>
        <Menu />
        <v-expansion-panels focusable multiple>
          <v-expansion-panel>
            <v-expansion-panel-header>مدیریت محصولات</v-expansion-panel-header>
            <v-expansion-panel-content>
              <ProductsTable />
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>مدیریت کپن ها</v-expansion-panel-header>
            <v-expansion-panel-content>
              <coupons-management-table />
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>مدیریت صفت ها</v-expansion-panel-header>
            <v-expansion-panel-content>
              <attributes-table />
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>مدیریت دسته صفت ها</v-expansion-panel-header>
            <v-expansion-panel-content>
              <attribute-groups-table />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </div>
</template>

<script>

import Menu from '~/components/admin/menu'
import ProductsTable from '~/components/admin/productsPanel/tables/productsTable'
import CouponsManagementTable from '~/components/admin/productsPanel/tables/couponsManagementTable'
import AttributesTable from '~/components/admin/productsPanel/tables/attributesTable'
import AttributeGroupsTable from '~/components/admin/productsPanel/tables/attributeGroupsTable'
export default {
  name: 'Index',
  components: { Menu, AttributeGroupsTable, AttributesTable, CouponsManagementTable, ProductsTable },
  middleware: 'auth'

}
</script>

<style scoped>
  .main {
    background-color: #8e8e8e;
  }
</style>
