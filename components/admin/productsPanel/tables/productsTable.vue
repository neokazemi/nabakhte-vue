<template>
  <v-card class="mb-20 pa-8">
    <tables-header v-model="search" />

    <v-data-table
      hide-default-footer
      :items-per-page="5"

      :headers="headers"
      :items="showproducts"
      :search="search"
      class="elevation-1 data-table-width mt-30"
    >
      <!--      :footer-props="{-->
      <!--        showFirstLastPage: true,-->
      <!--        firstIcon: 'mdi-arrow-collapse-left',-->
      <!--        lastIcon: 'mdi-arrow-collapse-right',-->
      <!--        itemsPerPageText: 'تعداد ردیف در هر صفحه',-->
      <!--        pageText: '',-->
      <!--        itemsPerPageAllText: 'همه'-->
      <!--      }"-->

      <!--      <template v-slot:item.status="{ item }">-->
      <!--        <v-chip-->
      <!--          :color="getColor(item.status)"-->
      <!--          dark-->
      <!--        >-->
      <!--          {{ item.status }}-->
      <!--        </v-chip>-->
      <!--      </template>-->
      <template v-slot:item.pic="{ item }">
        <v-img :src="item.photo" width="100" height="100" class="mt-3 mb-3" />
      </template>

      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-spacer />
          <v-dialog

            v-model="dialog"
            class="dialog-width"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="ma-30"
                v-bind="attrs"
                @click="addItem"
                v-on="on"
              >
                افزودن محصول
              </v-btn>
            </template>

            <v-card>
              <v-card-actions>
                <v-btn
                  class="mx-2"
                  icon
                  small
                  color="primary"
                  @click="close"
                >
                  <v-icon dark>
                    mdi-close-circle
                  </v-icon>
                </v-btn>
              </v-card-actions>
              <ProductInformationCorrection :notfilled="true" :dialog="true" />
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  انصراف
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                >
                  ذخیره
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">
                آیا از حذف این محصول مطمئن هستید؟
              </v-card-title>
              <v-card-actions>
                <v-spacer />
                <v-btn color="blue darken-1" text @click="closeDelete">
                  انصراف
                </v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">
                  بله
                </v-btn>
                <v-spacer />
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-row>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                class="mx-2 edit-delete-btns"
                fab
                dark
                x-small
                color="#9575CD"
                v-on="on"
                @click="editItem(item)"
              >
                <v-icon dark>
                  mdi-pencil
                </v-icon>
              </v-btn>
            </template>
            <span> تغییر محصول در دیالوگ</span>
          </v-tooltip>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                class="mx-2 edit-delete-btns"
                fab
                dark
                x-small
                color="#9575CD"
                :href="'products-coupons-attributes/product/' + item.id + '/edit'"

                v-on="on"
              >
                <v-icon dark>
                  mdi-pencil
                </v-icon>
              </v-btn>
            </template>
            <span> تغییر محصول </span>
          </v-tooltip>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                class="mx-2 edit-delete-btns"
                fab
                dark
                x-small
                color="#455A64"
                v-on="on"
                @click="deleteItem(item)"
              >
                <v-icon dark>
                  mdi-delete
                </v-icon>
              </v-btn>
            </template>
            <span>حذف محصول</span>
          </v-tooltip>
        </v-row>
      </template>
    </v-data-table>
    <v-pagination v-model="currentPage" :length="5" :total-visible="6" />
  </v-card>
</template>

<script>
import { ProductList } from '../../../../models/Product'
import TablesHeader from '../../tablesHeader'
import mixinProduct from '~/plugins/mixin/api/Product'
import ProductInformationCorrection from '~/components/admin/managementsPanel/productInformationCorrection'

export default {
  name: 'ProductsTable',
  components: { TablesHeader, ProductInformationCorrection },
  mixins: [mixinProduct],
  data: () => ({
    emptyarray: [],
    emptyarray2: [],
    allproducts: [],

    showproducts: [],
    currentPage: 1,
    pageNumberList: [1],
    products2: new ProductList(),
    pagenumber: 1,
    shownextpage: false,
    items: ['item1', 'item2', 'item3', 'item4'],
    switch1: false,
    test: {},

    changeshow: false,
    detailshow: false,
    search: '',
    dialog: false,

    dialogDelete: false,

    headers: [
      {
        text: 'نام کالا',
        align: 'start',
        sortable: false,
        value: 'title'
      },
      { text: 'قیمت پایه', value: 'price.base', sortable: false },
      { text: 'تخفیف', value: 'price.discount', sortable: false },
      {
        text: 'عکس',
        value: 'pic',
        sortable: false
      },
      {
        text: 'توضیحات کوتاه',
        value: 'description',
        sortable: false
      },
      {
        text: 'نوع',
        value: 'type',
        sortable: false
      },
      {
        text: 'فعال/غیر فعال',
        value: 'status',
        sortable: false
      },
      {
        text: 'عملیات',
        value: 'actions',
        sortable: false
      }

    ],
    nextProducts: [],
    product: {},

    products: new ProductList(),

    editedIndex: -1,

    editedItem: {
      title: '',
      price: { base: null, discount: null }
    },

    defaultItem: {
      title: '',
      price: { base: null, discount: null }
    }

  }),

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
    currentPage (newVal, oldVal) {
      if (!this.pageNumberList.includes(newVal)) {
        this.paginatepage(newVal)
      } else if (newVal !== 1) {
        this.showproducts = this.products.list.slice((newVal - 1) * 5, (newVal - 1) * 5 + 5)
      } else {
        this.showproducts = this.products.list.slice(0, 5)
      }
    }
  },
  mounted () {
    const that = this
    this.api_product_list(1)
      .then((response) => {
        that.products2 = new ProductList(response.data.data, response.data.meta)
        that.products2.loading = false
        that.products.list.push(that.products2.list[0])
        that.products.list.push(that.products2.list[1])
        that.products.list.push(that.products2.list[2])
        that.products.list.push(that.products2.list[3])
        that.products.list.push(that.products2.list[4])
        let i

        for (i = 1; i < 10; i++) {
          that.products.list.push(1)
        }
        that.showproducts = that.products.list
      })
      .catch(() => {
        that.products2.loading = false
      }
      )
  },
  methods: {
    paginatepage (pageNumber) {
      const that = this
      this.api_product_list(pageNumber)
        .then((response) => {
          that.showproducts = []
          that.pageNumberList.unshift(pageNumber)
          that.products2 = new ProductList(response.data.data, response.data.meta)
          that.products2.loading = false
          that.products.list[(pageNumber - 1) * 5] = that.products2.list[0]
          that.products.list[(pageNumber - 1) * 5 + 1] = that.products2.list[1]
          that.products.list[(pageNumber - 1) * 5 + 2] = that.products2.list[2]
          that.products.list[(pageNumber - 1) * 5 + 3] = that.products2.list[3]
          that.products.list[(pageNumber - 1) * 5 + 4] = that.products2.list[4]

          that.showproducts = that.products.list
          that.showproducts = that.showproducts.slice((pageNumber - 1) * 5, (pageNumber - 1) * 5 + 5)
        })
        .catch(() => {
          that.products2.loading = false
        })
    },
    addItem () {
      this.dialog = true
      this.changeshow = true
      this.detailshow = false
    },
    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    getColor (status) {
      if (status === 'فعال') {
        return 'green'
      } else {
        return 'red'
      }
    },
    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    editItem (item) {
      this.editedIndex = this.products.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
      this.changeshow = true
      this.detailshow = false
    },
    editItem2 (item) {
      this.$router.push('products-coupons-attributes/product/' + item.id + '/edit')
    },

    detailItem (item) {
      this.editedIndex = this.products.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
      this.detailshow = true
      this.changeshow = false
    },

    deleteItem (item) {
      this.editedIndex = this.products.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    deleteItemConfirm () {
      this.products.splice(this.editedIndex, 1)
      this.closeDelete()
    },
    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.products[this.editedIndex], this.editedItem)
      } else {
        this.products.push(this.editedItem)
      }
      this.close()
    }

  }

}

</script>

<style lang="scss" scoped>
@import url('~/assets/scss/components/admin/productsPanel/tables/productsTable.scss');
</style>
