<template>
  <v-card class="mb-20 pa-3">
    <tables-header :inputData.sync="search" />
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
      class="elevation-1 data-table-width mt-30"
    >
      <template v-slot:item.status="{ item }">
        <v-chip
          :color="getColor(item.status)"
          dark
        >
          {{ item.status }}
        </v-chip>
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
                    class="form-elements-column-width"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      class="form-elements-size ma-3"
                      label="نام و نام خانوادگی"
                    />
                  </v-col>
                  <v-col
                    class="form-elements-column-width"
                  >
                    <v-text-field
                      v-model="editedItem.phone"
                      class="form-elements-size ma-3"
                      label="موبایل"
                    />
                  </v-col>
                  <v-col
                    class="form-elements-column-width"
                  >
                    <v-text-field
                      v-model="editedItem.city"
                      class="form-elements-size ma-3"
                      label="شهر"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    class="form-elements-column-width"
                  >
                    <v-text-field
                      v-model="editedItem.code"
                      class="form-elements-size ma-3"
                      label="کد ملی"
                    />
                  </v-col>
                  <v-col
                    class="form-elements-column-width"
                  >
                    <v-text-field
                      v-model="editedItem.city"
                      class="form-elements-size ma-3"
                      label="مبلغ"
                    />
                  </v-col>
                  <v-col
                    class="form-elements-column-width"
                  >
                    <v-text-field
                      v-model="editedItem.ispayed"
                      class="form-elements-size ma-3"
                      label="پرداخت شده"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    v-if="changeshow"
                    class="form-elements-column-width"
                  >
                    <v-text-field
                      v-model="editedItem.description"
                      class="form-elements-size ma-3"
                      label="توضیخات مسئول"
                    />
                  </v-col>
                  <v-col
                    v-if="changeshow"
                    class="form-elements-column-width"
                  >
                    <v-text-field
                      v-model="editedItem.orderstatus"
                      class="form-elements-size ma-3"
                      label="وضعیت سفارش"
                    />
                  </v-col>
                  <v-col
                    v-if="changeshow"
                    class="form-elements-column-width"
                  >
                    <v-text-field
                      v-model="editedItem.paymentstatus"
                      class="form-elements-size ma-3"
                      label="وضعیت پرداخت"
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
        <v-row>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                :to=" `/admin/orders/` + item.id + `/edit`"
                v-bind="attrs"
                class="mx-2 edit-delete-btns"
                fab
                dark
                x-small
                color="#9575CD"
                v-on="on"
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
            <span>حذف سفارش</span>
          </v-tooltip>
        </v-row>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import TablesHeader from '../../tablesHeader'
export default {
  name: 'OrdersTable',
  components: { TablesHeader },
  data: () => ({
    items: ['item1', 'item2', 'item3', 'item4'],
    switch1: false,

    changeshow: false,
    detailshow: false,
    search: '',
    dialog: false,

    dialogDelete: false,

    headers: [
      {
        text: 'نام و نام خانوادگی',
        align: 'start',
        sortable: false,
        value: 'name'
      },
      { text: 'موبایل', value: 'phone', sortable: false },
      { text: 'شهر', value: 'city', sortable: false },
      { text: 'کد ملی', value: 'code', sortable: false },
      { text: 'مبلغ', value: 'price', sortable: false },
      { text: 'پرداخت شده', value: 'ispayed', sortable: false },
      { text: 'توضیحات مسئول', value: 'description', sortable: false },
      { text: 'وضعیت سفارش', value: 'orderstatus', sortable: false },
      { text: 'وضعیت پرداخت', value: 'paymentstatus', sortable: false },
      { text: 'فعالیت ها', value: 'actions', sortable: false }

    ],

    orders: [],

    editedIndex: -1,

    editedItem: {
      name: '',
      city: '',
      phone: '',
      code: '',
      price: null,
      ispayed: '',
      description: '',
      paymentstatus: '',
      orderstatus: ''
    },

    defaultItem: {
      name: '',
      city: '',
      phone: '',
      code: '',
      price: null,
      ispayed: '',
      description: '',
      paymentstatus: '',
      orderstatus: ''
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
    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    editItem (item) {
      this.editedIndex = this.orders.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
      this.changeshow = true
      this.detailshow = false
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
          name: 'هلیا محمدی',
          phone: '9365491835',
          city: 'تهران',
          ispayed: '',
          price: 300,
          code: '20890222',
          description: '',
          orderstatus: '',
          paymentstatus: 'تایید شده',
          id: 1
        },
        {
          name: 'هلیا محمدی',
          phone: '9365491835',
          city: 'تهران',
          ispayed: '',
          price: 300,
          code: '20890222',
          description: '',
          orderstatus: '',
          paymentstatus: 'تایید شده',
          id: 2
        },
        {
          name: 'هلیا محمدی',
          phone: '9365491835',
          city: 'تهران',
          ispayed: '',
          price: 300,
          code: '20890222',
          description: '',
          orderstatus: '',
          paymentstatus: 'تایید شده',
          id: 3
        }
      ]
    }

  }
}
</script>

<style lang="scss" scoped>
  @import url('~/assets/scss/components/admin/ordersPanel/tables/ordersTable.scss');
</style>
