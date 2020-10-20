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
      :footer-props="{
        showFirstLastPage: true,
        firstIcon: 'mdi-arrow-collapse-left',
        lastIcon: 'mdi-arrow-collapse-right',
        itemsPerPageText: 'تعداد ردیف در هر صفحه',
        pageText: '',
        itemsPerPageAllText: 'همه'
      }"
      :headers="headers"
      :items="coupons"
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
                افزودن بن
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
                      label="نام کاربر"
                    />
                  </v-col>
                  <v-col
                    class="form-elements-column-width"
                  >
                    <v-text-field
                      v-model="editedItem.couponscount"
                      class="form-elements-size ma-3"
                      label="تعداد بن تخصیص داده شده"
                    />
                  </v-col>
                  <v-col
                    class="form-elements-column-width"
                  >
                    <v-text-field
                      v-model="editedItem.couponstatus"
                      class="form-elements-size ma-3"
                      label="وضعیت بن"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    class="form-elements-column-width"
                  >
                    <v-text-field
                      v-model="editedItem.functions"
                      class="form-elements-size ma-3"
                      label="عملیات"
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
                آیا از حذف این بن مطمئن هستید؟
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
            <span>تغییر بن</span>
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
            <span>حذف بن</span>
          </v-tooltip>
        </v-row>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: 'CouponsTable',
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
        text: 'نام کاربر',
        align: 'start',
        sortable: false,
        value: 'name'
      },
      { text: 'تعداد بن تخصیص داده شده', value: 'couponscount', sortable: false },
      { text: 'وضعیت بن', value: 'couponstatus', sortable: false },
      { text: 'عملیات', value: 'functions', sortable: false },
      { text: 'فعالیت ها', value: 'actions', sortable: false }

    ],

    coupons: [],

    editedIndex: -1,

    editedItem: {
      name: '',
      couponscount: null,
      couponstatus: '',
      functions: ''
    },

    defaultItem: {
      name: '',
      couponscount: null,
      couponstatus: '',
      functions: ''
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
      this.editedIndex = this.coupons.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
      this.changeshow = true
      this.detailshow = false
    },

    detailItem (item) {
      this.editedIndex = this.coupons.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
      this.detailshow = true
      this.changeshow = false
    },

    deleteItem (item) {
      this.editedIndex = this.coupons.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    deleteItemConfirm () {
      this.coupons.splice(this.editedIndex, 1)
      this.closeDelete()
    },
    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.coupons[this.editedIndex], this.editedItem)
      } else {
        this.coupons.push(this.editedItem)
      }
      this.close()
    },
    initialize () {
      this.coupons = [
        {
          name: 'هلیا محمدی',
          couponscount: 10,
          couponstatus: '',
          functions: ''
        },
        {
          name: 'هلیا محمدی',
          couponscount: 10,
          couponstatus: '',
          functions: ''
        },
        {
          name: 'هلیا محمدی',
          couponscount: 10,
          couponstatus: '',
          functions: ''
        }
      ]
    }

  }
}
</script>

<style lang="scss" scoped>
  @import url('~/assets/scss/components/admin/ordersPanel/tables/couponsTable.scss');
</style>
