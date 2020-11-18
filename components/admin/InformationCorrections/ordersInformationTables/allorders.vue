<template>
  <v-data-table
    :footer-props="{
      showFirstLastPage: true,
      firstIcon: 'mdi-arrow-collapse-left',
      lastIcon: 'mdi-arrow-collapse-right',
      itemsPerPageText: 'تعداد ردیف در هر صفحه',
      pageText: '',
      itemsPerPageAllText: 'همه'
    }"
    :headers="headers"
    :items="orders"
    :search="search"
    class="elevation-1 mt-50"
  >
    <template v-slot:item.status="{ item }">
      {{ item.status }}
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
              افزودن سفارش
            </v-btn>
          </template>
          <v-card>
            <div>
              <v-row>
                <v-col
                  v-if="changeshow"
                  class="form-elements-column-width"
                >
                  <v-text-field
                    v-model="editedItem.name"
                    class="form-elements-size ma-3"
                    label="نام محصول"
                  />
                </v-col>
                <v-col
                  v-if="changeshow"
                  class="form-elements-column-width"
                >
                  <v-text-field
                    v-model="editedItem.features"
                    class="form-elements-size ma-3"
                    label="ویژگی ها"
                  />
                </v-col>
                <v-col
                  v-if="changeshow"
                  class="form-elements-column-width"
                >
                  <v-text-field
                    v-model="editedItem.lastprice"
                    class="form-elements-size ma-3"
                    label="قیمت تمام شده به تومان (با در نظر گرفتن تخفیف ها)"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  v-if="changeshow"
                  class="form-elements-column-width"
                >
                  <v-text-field
                    v-model="editedItem.price"
                    class="form-elements-size ma-3"
                    label="قیمت محصول به تومان (در زمان خرید)"
                  />
                </v-col>
                <v-col
                  v-if="changeshow"
                  class="form-elements-column-width"
                >
                  <v-text-field
                    v-model="editedItem.coupondiscount"
                    class="form-elements-size ma-3"
                    label="٪ تخفیف بن"
                  />
                </v-col>
                <v-col
                  v-if="changeshow"
                  class="form-elements-column-width"
                >
                  <v-text-field
                    v-model="editedItem.discount"
                    class="form-elements-size ma-3"
                    label="٪ تخفیف محصول"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  v-if="changeshow"
                  class="form-elements-column-width"
                >
                  <v-text-field
                    v-model="editedItem.discountpercent"
                    class="form-elements-size ma-3"
                    label="٪ تخفیف داده شده"
                  />
                </v-col>
                <v-col
                  v-if="changeshow"
                  class="form-elements-column-width"
                >
                  <v-text-field
                    v-model="editedItem.disc"
                    class="form-elements-size ma-3"
                    label="مبلغ تخفیف داده شده (تومان)"
                  />
                </v-col>
                <v-col
                  v-if="changeshow"
                  class="form-elements-column-width"
                >
                  <v-text-field
                    v-model="editedItem.field"
                    class="form-elements-size ma-3"
                    label="وضعیت تسویه"
                  />
                </v-col>
              </v-row>
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
              آیا از حذف این سفارش مطمئن هستید؟
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
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            class="mx-2"
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
        <span>تغییر سفارش</span>
      </v-tooltip>
      <v-tooltip top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            class="mx-2"
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
        <span>حذف سفارش</span>
      </v-tooltip>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'OrdersInformationTable',
  data: () => ({
    changeshow: false,
    detailshow: false,
    search: '',
    dialog: false,

    dialogDelete: false,

    headers: [
      {
        text: 'نام محصول',
        align: 'start',
        sortable: false,
        value: 'name'
      },
      { text: 'ویژگی ها', value: 'features', sortable: false },
      { text: 'قیمت تمام شده به تومان (با در نظر گرفتن تخفیف ها)', value: 'lastprice', sortable: false },
      { text: 'قیمت محصول به تومان (در زمان خرید)', value: 'price', sortable: false },
      { text: '٪ تخفیف بن', value: 'coupondiscount', sortable: false },
      { text: '٪ تخفیف محصول', value: 'discountpercent', sortable: false },
      { text: 'مبلغ تخفیف داده شده (تومان)', value: 'discount', sortable: false },
      { text: 'وضعیت تسویه', value: 'status', sortable: false },
      { text: 'عملیات', value: 'actions', sortable: false }

    ],
    orders: [],
    editedIndex: -1,

    editedItem: {
      name: '',
      features: '',
      lastprice: null,
      price: null,
      coupondiscount: null,
      discountpercent: null,
      discount: null,
      status: ''
    },

    defaultItem: {
      name: '',
      features: '',
      lastprice: null,
      price: null,
      coupondiscount: null,
      discountpercent: null,
      discount: null,
      status: ''
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

  created () {
    this.initialize()
  },

  methods: {
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
    editItem (item) {
      this.editedIndex = this.orders.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
      this.changeshow = true
      this.detailshow = false
    },
    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    detailItem (item) {
      this.editedIndex = this.orders.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
      this.detailshow = true
      this.changeshow = false
    },

    deleteItem (item) {
      this.editedIndex = this.orders.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    deleteItemConfirm () {
      this.orders.splice(this.editedIndex, 1)
      this.closeDelete()
    },
    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.orders[this.editedIndex], this.editedItem)
      } else {
        this.orders.push(this.editedItem)
      }
      this.close()
    },
    initialize () {
      this.orders = [
        {
          name: 'راه ابریشم ریاضی تجربی ',
          features: 'دبیر: محمد صادق ثابتی',
          lastprice: 0,
          price: 0,
          coupondiscount: 0,
          discountpercent: 0,
          discount: 0,
          status: 'نا مشخص'

        },
        {
          name: 'راه ابریشم ریاضی تجربی ',
          features: 'دبیر: محمد صادق ثابتی',
          lastprice: 0,
          price: 0,
          coupondiscount: 0,
          discountpercent: 0,
          discount: 0,
          status: 'نا مشخص'
        },
        {
          name: 'راه ابریشم ریاضی تجربی ',
          features: 'دبیر: محمد صادق ثابتی',
          lastprice: 0,
          price: 0,
          coupondiscount: 0,
          discountpercent: 0,
          discount: 0,
          status: 'نا مشخص'
        },
        {
          name: 'راه ابریشم ریاضی تجربی ',
          features: 'دبیر: محمد صادق ثابتی',
          lastprice: 0,
          price: 0,
          coupondiscount: 0,
          discountpercent: 0,
          discount: 0,
          status: 'نا مشخص'
        }
      ]
    }

  }
}
</script>

<style scoped>
  .main {
    background-color: #8e8e8e;
  }
</style>
