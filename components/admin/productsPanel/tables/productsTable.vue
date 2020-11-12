<template>
  <v-card class="mb-20 pa-8">
    <v-row>
      <v-col>
        <v-text-field
          v-model="search"
          class="the-card-search"
          append-icon="mdi-magnify"
          label="جستجو"
          single-line
          hide-details
        />
      </v-col>
      <v-col>
        <v-btn
          class="output-btns-width"
          small
          elevation="2"
          outlined
          rounded
          color="#212121"
        >
          Print
        </v-btn>
        <v-btn
          class="output-btns-width"
          small
          elevation="2"
          outlined
          rounded
          color="#c62828"
        >
          Copy
        </v-btn>
        <v-btn
          class="output-btns-width"
          small
          elevation="2"
          outlined
          rounded
          color="#00e676"
        >
          PDF
        </v-btn>
        <v-btn
          class="output-btns-width"
          small
          elevation="2"
          outlined
          rounded
          color="#ff6f00"
        >
          Excel
        </v-btn>
        <v-btn
          class="output-btns-width"
          small
          elevation="2"
          outlined
          rounded
          color="#03a9f4"
        >
          CSV
        </v-btn>
      </v-col>
    </v-row>
    <v-data-table
      hide-default-footer
      :headers="headers"
      :items="products.list"
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
              <div>
                <ProductInformationCorrection :notfilled="true" />
                <!--                <v-row>-->
                <!--                  <v-col-->
                <!--                    class="form-elements-column-width"-->
                <!--                  >-->
                <!--                    <v-text-field-->
                <!--                      v-model="editedItem.title"-->
                <!--                      class="text-fields-size"-->
                <!--                      label="نام کالا"-->
                <!--                    />-->
                <!--                  </v-col>-->
                <!--                  <v-col-->
                <!--                    class="form-elements-column-width"-->
                <!--                  >-->
                <!--                    <v-text-field-->
                <!--                      v-model="editedItem.price.base"-->
                <!--                      class="text-fields-size"-->
                <!--                      label="قیمت پایه"-->
                <!--                    />-->
                <!--                  </v-col>-->
                <!--                  <v-col-->
                <!--                    class="form-elements-column-width"-->
                <!--                  >-->
                <!--                    <v-text-field-->
                <!--                      v-model="editedItem.price.discount"-->
                <!--                      class="text-fields-size"-->
                <!--                      label="تخفیف"-->
                <!--                    />-->
                <!--                  </v-col>-->
                <!--                </v-row>-->

                <!--                <v-row>-->
                <!--                  <v-col-->
                <!--                    class="form-elements-column-width"-->
                <!--                  >-->
                <!--                    <v-text-field-->
                <!--                      v-model="editedItem.pic"-->
                <!--                      class="thetextfield"-->
                <!--                      label="عکس"-->
                <!--                    />-->
                <!--                  </v-col>-->
                <!--                  <v-col-->
                <!--                    class="form-elements-column-width"-->
                <!--                  >-->
                <!--                    <v-text-field-->
                <!--                      v-model="editedItem.description"-->
                <!--                      class="text-fields-size"-->
                <!--                      label="توضیحات کوتاه"-->
                <!--                    />-->
                <!--                  </v-col>-->

                <!--                  <v-col-->
                <!--                    class="form-elements-column-width"-->
                <!--                  >-->
                <!--                    <v-text-field-->
                <!--                      v-model="editedItem.type"-->
                <!--                      class="text-fields-size"-->
                <!--                      label="نوع"-->
                <!--                    />-->
                <!--                  </v-col>-->
                <!--                </v-row>-->
                <!--                <v-row>-->
                <!--                  <v-col-->
                <!--                    v-if="changeshow"-->
                <!--                    class="form-elements-column-width"-->
                <!--                  >-->
                <!--                    <v-text-field-->
                <!--                      v-model="editedItem.status"-->
                <!--                      class="text-fields-size"-->
                <!--                      label="فعال/غیر فعال"-->
                <!--                    />-->
                <!--                  </v-col>-->
                <!--                </v-row>-->
              </div>
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
                  v-if="changeshow"
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
    <v-row>
      <v-col />
      <v-col />
      <v-col />
      <v-col cols="1">
        <div style="float: left; margin-bottom: 3px;">
          <v-btn
            color="black"
            text
            @click="loadpreviouspage"
          >
            <v-icon>
              mdi-arrow-right
            </v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-col cols="1">
        <div style="float: left; margin-bottom: 3px;">
          <v-btn
            color="black"
            text
            @click="loadnextpage"
          >
            <v-icon>
              mdi-arrow-left
            </v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { ProductList } from '../../../../models/Product'
import mixinProduct from '~/plugins/mixin/api/Product'
import ProductInformationCorrection from '~/components/admin/managementsPanel/productInformationCorrection'

export default {
  name: 'ProductsTable',
  components: { ProductInformationCorrection },
  mixins: [mixinProduct],
  data: () => ({
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
    }
  },
  mounted () {
    const that = this
    this.api_product_list(1)
      .then((response) => {
        that.products = new ProductList(response.data.data, response.data.meta)
        that.products.loading = false
      })
      .catch(() => {
        that.products.loading = false
      }
      )
  },
  methods: {
    loadpreviouspage () {
      this.pagenumber -= 1
      const that = this
      this.api_product_list(that.pagenumber)
        .then((response) => {
          that.products = new ProductList(response.data.data, response.data.meta)
          that.products.loading = false
        })
        .catch(() => {
          that.products.loading = false
        })
    },
    loadnextpage () {
      this.pagenumber += 1
      const that = this
      this.api_product_list(that.pagenumber)
        .then((response) => {
          that.products = new ProductList(response.data.data, response.data.meta)
          that.products.loading = false
        })
        .catch(() => {
          that.products.loading = false
        }

        )
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
