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
    :headers="transactionsheaders"
    :items="transactions"
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
              افزودن تراکنش
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
                    v-model="editedItem.paymethod"
                    class="form-elements-size ma-3"
                    label="روش پرداخت"
                  />
                </v-col>
                <v-col
                  v-if="changeshow"
                  class="form-elements-column-width"
                >
                  <v-text-field
                    v-model="editedItem.port"
                    class="form-elements-size ma-3"
                    label="درگاه"
                  />
                </v-col>
                <v-col
                  v-if="changeshow"
                  class="form-elements-column-width"
                >
                  <v-text-field
                    v-model="editedItem.transactionstatus"
                    class="form-elements-size ma-3"
                    label="وضعیت تراکنش"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  v-if="changeshow"
                  class="form-elements-column-width"
                >
                  <v-text-field
                    v-model="editedItem.parenttransaction"
                    class="form-elements-size ma-3"
                    label="تراکنش والد"
                  />
                </v-col>
                <v-col
                  v-if="changeshow"
                  class="form-elements-column-width"
                >
                  <v-text-field
                    v-model="editedItem.price"
                    class="form-elements-size ma-3"
                    label="مبلغ (تومان)"
                  />
                </v-col>
                <v-col
                  v-if="changeshow"
                  class="form-elements-column-width"
                >
                  <v-text-field
                    v-model="editedItem.transactioncode"
                    class="form-elements-size ma-3"
                    label="شماره تراکنش"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  v-if="changeshow"
                  class="form-elements-column-width"
                >
                  <v-text-field
                    v-model="editedItem.refnum"
                    class="form-elements-size ma-3"
                    label="شماره مرجع"
                  />
                </v-col>
                <v-col
                  v-if="changeshow"
                  class="form-elements-column-width"
                >
                  <v-text-field
                    v-model="editedItem.follownum"
                    class="form-elements-size ma-3"
                    label="شماره پیگیری"
                  />
                </v-col>
                <v-col
                  v-if="changeshow"
                  class="form-elements-column-width"
                >
                  <v-text-field
                    v-model="editedItem.checknum"
                    class="form-elements-size ma-3"
                    label="شماره چک"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  v-if="changeshow"
                  class="form-elements-column-width"
                >
                  <v-text-field
                    v-model="editedItem.managerdes"
                    class="form-elements-size ma-3"
                    label="توضیح مدیریتی"
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
        <span>تغییر تراکنش</span>
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
  name: 'TransactionsOfSuccessfulOrders',

  data: () => ({
    changeshow: false,
    detailshow: false,
    search: '',
    dialog: false,

    dialogDelete: false,
    transactionsheaders: [
      {
        text: 'روش پرداخت',
        align: 'start',
        sortable: false,
        value: 'paymethod'
      },
      { text: 'درگاه', value: 'port', sortable: false },
      { text: 'وضعیت تراکنش', value: 'transactionstatus', sortable: false },
      { text: 'تراکنش والد', value: 'parenttransaction', sortable: false },
      { text: 'مبلغ (تومان)', value: 'price', sortable: false },
      { text: 'شماره تراکنش', value: 'transactioncode', sortable: false },
      { text: 'شماره مرجع', value: 'refnum', sortable: false },
      { text: 'شماره پیگیری', value: 'follownum', sortable: false },
      { text: 'شماره چک', value: 'checknum', sortable: false },
      { text: 'توضیح مدیریتی', value: 'managerdes', sortable: false },
      { text: 'عملیات', value: 'actions', sortable: false }],
    transactions: [],
    editedIndex: -1,

    editedItem: {
      paymethod: '',
      port: '',
      transactionstatus: '',
      parenttransaction: '',
      price: null,
      transactioncode: '',
      refnum: '',
      follownum: '',
      checknum: '',
      managerdes: ''
    },

    defaultItem: {
      paymethod: '',
      port: '',
      transactionstatus: '',
      parentystatus: '',
      price: null,
      transactioncode: '',
      refnum: '',
      follownum: '',
      checknum: '',
      managerdes: ''
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
    detailItem (item) {
      this.editedIndex = this.transactions.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
      this.detailshow = true
      this.changeshow = false
    },
    editItem (item) {
      this.editedIndex = this.transactions.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
      this.changeshow = true
      this.detailshow = false
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
          paymethod: '',
          port: '',
          transactionstatus: '',
          parenttransaction: '',
          price: null,
          transactioncode: '',
          refnum: '',
          follownum: '',
          checknum: '',
          managerdes: ''

        },
        {
          paymethod: '',
          port: '',
          transactionstatus: '',
          parenttransaction: '',
          price: null,
          transactioncode: '',
          refnum: '',
          follownum: '',
          checknum: '',
          managerdes: ''
        },
        {
          paymethod: '',
          port: '',
          transactionstatus: '',
          parenttransaction: '',
          price: null,
          transactioncode: '',
          refnum: '',
          follownum: '',
          checknum: '',
          managerdes: ''
        },
        {
          paymethod: '',
          port: '',
          transactionstatus: '',

          parenttransaction: '',
          price: null,
          transactioncode: '',
          refnum: '',
          follownum: '',
          checknum: '',
          managerdes: ''
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
