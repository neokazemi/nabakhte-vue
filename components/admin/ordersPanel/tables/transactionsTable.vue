<template>
  <v-card class="mb-20 pa-8">
    <v-row>
      <v-col />
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
      :footer-props="{
        showFirstLastPage: true,
        firstIcon: 'mdi-arrow-collapse-left',
        lastIcon: 'mdi-arrow-collapse-right',
        itemsPerPageText: 'تعداد ردیف در هر صفحه',
        pageText: '',
        itemsPerPageAllText: 'همه'
      }"
      :headers="headers"
      :items="transactions"
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
                class="ma-30"
                v-bind="attrs"
                @click="addItem"
                v-on="on"
              >
                افزودن تراکنش
              </v-btn>
              <v-text-field
                v-model="search"
                class="the-card-search ml-120 mt-25"
                append-icon="mdi-magnify"
                label="جستجو"
                single-line
                hide-details
              />
            </template>
            <v-card>
              <div>
                <v-row>
                  <v-col
                    class="form-elements-column-width"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      class="form-elements-size ma-10"
                      label="نام مشتری"
                    />
                  </v-col>
                  <v-col
                    class="form-elements-column-width"
                  >
                    <v-text-field
                      v-model="editedItem.phone"
                      class="form-elements-size ma-10"
                      label="موبایل"
                    />
                  </v-col>
                  <v-col
                    class="form-elements-column-width"
                  >
                    <v-text-field
                      v-model="editedItem.price"
                      class="form-elements-size ma-10"
                      label="مبلغ سفارش"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    class="form-elements-column-width"
                  >
                    <v-text-field
                      v-model="editedItem.transactionprice"
                      class="form-elements-size ma-10"
                      label="مبلغ تراکنش"
                    />
                  </v-col>
                  <v-col
                    class="form-elements-column-width"
                  >
                    <v-text-field
                      v-model="editedItem.transactioncode"
                      class="form-elements-size ma-10"
                      label="کد تراکنش"
                    />
                  </v-col>
                  <v-col />
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
                  دخیره
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">
                آیا از حذف این تراکنش مطمئن هستید؟
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
            <span>تغییر تراکنش</span>
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
            <span>حذف تراکنش</span>
          </v-tooltip>
        </v-row>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: 'TransactionsTable',
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
        text: 'نام مشتری',
        align: 'start',
        sortable: false,
        value: 'name'
      },
      { text: 'موبایل', value: 'phone', sortable: false },
      { text: 'مبلغ سفارش', value: 'price', sortable: false },
      { text: 'مبلغ تراکنش', value: 'transactionprice', sortable: false },
      { text: 'کد تراکنش', value: 'transactioncode', sortable: false },
      { text: 'فعالیت ها', value: 'actions', sortable: false }

    ],

    transactions: [],

    editedIndex: -1,

    editedItem: {
      name: '',
      phone: '',
      price: null,
      transactionprice: '',
      transactioncode: ''
    },

    defaultItem: {
      name: '',
      phone: '',
      price: null,
      transactionprice: '',
      transactioncode: ''
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
      this.editedIndex = this.transactions.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
      this.changeshow = true
      this.detailshow = false
    },

    detailItem (item) {
      this.editedIndex = this.transactions.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
      this.detailshow = true
      this.changeshow = false
    },

    deleteItem (item) {
      this.editedIndex = this.transactions.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    deleteItemConfirm () {
      this.transactions.splice(this.editedIndex, 1)
      this.closeDelete()
    },
    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.transactions[this.editedIndex], this.editedItem)
      } else {
        this.transactions.push(this.editedItem)
      }
      this.close()
    },
    initialize () {
      this.transactions = [
        {
          name: 'هلیا محمدی',
          phone: '۰۹۳۶۵۴۹۱۸۳۵',
          price: 300,
          transactionprice: '',
          transactioncode: ''
        },
        {
          name: 'هلیا محمدی',
          phone: '۰۹۳۶۵۴۹۱۸۳۵',
          price: 300,
          transactionprice: '',
          transactioncode: ''
        }
      ]
    }

  }
}
</script>

<style scoped>
/* @import "assets/scss/components/admin/ordersPanel/tables/transactionsTable.scss"; */
</style>
