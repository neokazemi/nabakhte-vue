<template>
  <div>
    <v-row>
      <v-col>
        <Menu />
        <v-expansion-panels focusable multiple>
          <v-expansion-panel>
            <v-expansion-panel-header>مدیریت محصولات</v-expansion-panel-header>
            <v-expansion-panel-content>
              <ProductsTable
                :productslist="products"
                :nextpage-products="nextpageproducts.data"
              />
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
import mixinProduct from '~/plugins/mixinProduct'

import Menu from '~/components/admin/menu'
import ProductsTable from '~/components/admin/productsPanel/tables/productsTable'
import CouponsManagementTable from '~/components/admin/productsPanel/tables/couponsManagementTable'
import AttributesTable from '~/components/admin/productsPanel/tables/attributesTable'
import AttributeGroupsTable from '~/components/admin/productsPanel/tables/attributeGroupsTable'
export default {

  name: 'Index',
  components: { Menu, AttributeGroupsTable, AttributesTable, CouponsManagementTable, ProductsTable },
  mixins: [mixinProduct],

  async fetch () {
    if (this.pagenum === 2) {
      this.nextpageproducts = await fetch(

        'http://localhost/api/v2/product?doesntHaveGrand=1&active=1&productPage=' + this.pagenum

      ).then(res => res.json())
    }
  },

  data: () => ({

    pagenum: 2,
    nextpageproducts: {}
  })
}
</script>

<style scoped>
  .main {
    background-color: #8e8e8e;
  }
</style>
