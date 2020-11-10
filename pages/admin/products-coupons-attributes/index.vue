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
import mixinProduct1 from '~/plugins/mixin/product'
import mixinProduct from '~/plugins/mixin/api/Product'

import { Product, ProductList } from '~/models/Product'

import Menu from '~/components/admin/menu'
import ProductsTable from '~/components/admin/productsPanel/tables/productsTable'
import CouponsManagementTable from '~/components/admin/productsPanel/tables/couponsManagementTable'
import AttributesTable from '~/components/admin/productsPanel/tables/attributesTable'
import AttributeGroupsTable from '~/components/admin/productsPanel/tables/attributeGroupsTable'
export default {
  name: 'Index',
  components: { Menu, AttributeGroupsTable, AttributesTable, CouponsManagementTable, ProductsTable },
  mixins: [mixinProduct1, mixinProduct],
  async fetch () {
    if (this.pagenum === 2) {
      this.nextpageproducts = await fetch(

        'http://localhost/api/v2/product?doesntHaveGrand=1&active=1&productPage=' + this.pagenum

      ).then(res => res.json())
    }
  },
  data () {
    return {
      pagenum: 2,
      nextpageproducts: {},
      productList: new ProductList(),
      productShow: new Product()
    }
  },
  mounted () {
    const that = this
    this.productList.loading = true
    this.api_product_list(1)
      .then((response) => {
        that.productList = new ProductList(response.data.data, response.data.meta)
        that.productList.loading = false
      })
      .catch(() => {
        that.productList.loading = false
      })

    this.productShow.loading = true
    this.api_product_show(442)
      .then((response) => {
        that.productShow = new Product(response.data.data)
        that.productShow.loading = false
      })
      .catch(() => {
        that.productShow.loading = false
      })
  }
}
</script>

<style scoped>
  .main {
    background-color: #8e8e8e;
  }
</style>
