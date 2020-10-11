<template>
  <v-card style="margin-bottom: 20px;">
    <v-toolbar-title>
      <h3 style="margin-top: 60px; margin-right: 100px;">
        لیست کاربران
      </h3>
    </v-toolbar-title>

    <v-card-title>
      <v-text-field
        v-model="search"
        style="margin-left: 120px;"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      />
    </v-card-title>
    <v-data-table
      style="width: fit-content; margin-top: 30px;"
      :headers="headers"
      :items="users"
      :search="search"
      class="elevation-1"
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
            max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                style="margin: 30px;"
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >
                افزودن کاربر
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.name"
                        label="نام کاربر"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.phone"
                        label="شماره تلفن"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.address"
                        label="آدرس"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.email"
                        label="ایمیل"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.status"
                        label="وضعیت"
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogdetail">
            <v-card>
              <v-card-title class="headline">
                <table>
                  <tr>
                    <td>
                      <div
                        class="text-left"
                        style="font-size: small; margin-left: 20px; margin-right: 20px;"
                      >
                        نام و نام خانوادگی
                      </div>
                    </td>
                    <td>
                      <div
                        class="text-left"
                        style="font-size: small; margin-left: 20px; margin-right: 20px;"
                      >
                        زمان تغییرات
                      </div>
                    </td>
                    <td>
                      <div
                        class="text-left"
                        style="font-size: small; margin-left: 20px; margin-right: 20px;"
                      >
                        عملیات
                      </div>
                    </td>
                    <td>
                      <div
                        class="text-left"
                        style="font-size: small; margin-left: 20px; margin-right: 20px;"
                      >
                        رشته
                      </div>
                    </td>
                    <td>
                      <div
                        class="text-left"
                        style="font-size: small; margin-left: 20px; margin-right: 20px;"
                      >
                        کد ملی
                      </div>
                    </td>
                    <td>
                      <div
                        class="text-left"
                        style="font-size: small; margin-left: 20px; margin-right: 20px;"
                      >
                        وضعیت شماره موبایل
                      </div>
                    </td>
                    <td>
                      <div
                        class="text-left"
                        style="font-size: small; margin-left: 20px; margin-right: 20px;"
                      >
                        مدرسه
                      </div>
                    </td>
                    <td>
                      <div
                        class="text-left"
                        style="font-size: small; margin-left: 20px; margin-right: 20px;"
                      >
                        زمان ثبت نام
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div
                        class="text-left"
                        style="font-size: small; margin-right: 20px; margin-left: 20px; text-align: center; justify-content: center;"
                      >
                        {{ editedItem.name }}
                      </div>
                    </td>
                    <td>
                      <div
                        class="text-left"
                        style="font-size: small; margin-right: 20px; margin-left: 20px; text-align: center; justify-content: center;"
                      >
                        {{ editedItem.changetime }}
                      </div>
                    </td>
                    <td>
                      <div
                        class="text-left"
                        style="font-size: small; margin-right: 20px; margin-left: 20px; text-align: center; justify-content: center;"
                      >
                        {{ editedItem.function }}
                      </div>
                    </td>
                    <td>
                      <div
                        class="text-left"
                        style="font-size: small; margin-right: 20px; margin-left: 20px; text-align: center; justify-content: center;"
                      >
                        {{ editedItem.field }}
                      </div>
                    </td>
                    <td>
                      <div
                        class="text-left"
                        style="font-size: small; margin-right: 20px; margin-left: 20px; text-align: center; justify-content: center;"
                      >
                        {{ editedItem.code }}
                      </div>
                    </td>
                    <td>
                      <div
                        class="text-left"
                        style="font-size: small; margin-right: 20px; margin-left: 20px; text-align: center; justify-content: center;"
                      >
                        {{ editedItem.phonestatus }}
                      </div>
                    </td>
                    <td>
                      <div
                        class="text-left"
                        style="font-size: small; margin-right: 20px; margin-left: 20px; text-align: center; justify-content: center;"
                      >
                        {{ editedItem.school }}
                      </div>
                    </td>
                    <td>
                      <div
                        class="text-left"
                        style="font-size: small; margin-right: 20px; margin-left: 20px; text-align: center; justify-content: center;"
                      >
                        {{ editedItem.signdate }}
                      </div>
                    </td>
                  </tr>
                </table>
              </v-card-title>
              <v-card-actions>
                <v-spacer />
                <v-btn color="blue darken-1" text @click="closedetail">
                  Cancel
                </v-btn>
                <v-spacer />
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">
                Are you sure you want to delete this item?
              </v-card-title>
              <v-card-actions>
                <v-spacer />
                <v-btn color="blue darken-1" text @click="closeDelete">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">
                  OK
                </v-btn>
                <v-spacer />
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="detailItem(item)"
        >
          نمایش جزییات
        </v-icon>
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize"
        >
          Reset
        </v-btn>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    search: '',
    dialog: false,
    dialogDelete: false,
    dialogdetail: false,
    headers: [
      {
        text: 'نام و نام خانوادگی',
        align: 'start',
        sortable: false,
        value: 'name'
      },
      { text: 'موبایل', value: 'phone', sortable: false },
      { text: 'آدرس', value: 'address', sortable: false },
      { text: 'ایمیل', value: 'email', sortable: false },
      { text: 'وضعیت', value: 'status', sortable: false },
      { text: 'فعالیت ها', value: 'actions', sortable: false }
    ],
    users: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      phone: 0,
      address: 0,
      email: 0,
      status: 0,
      code: 0,
      field: '',
      changetime: '',
      function: '',
      phonestatus: '',
      school: '',
      signdate: '',
      accesses: ''
    },
    defaultItem: {
      name: '',
      phone: 0,
      address: 0,
      email: 0,
      status: 0
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
    dialogdetail (val) {
      val || this.closedetail()
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    getColor (status) {
      if (status === 'فعال') {
        return 'green'
      } else {
        return 'red'
      }
    },
    initialize () {
      this.users = [
        {
          name: 'هلیا محمدی',
          phone: 9365491835,
          address: 'شهران-خیابان مدرسه-کوچه دانش',
          email: 'helia.mhmdi@gmail.com',
          status: 'فعال',
          field: 'ریاضی',
          code: 20890222,
          changetime: '۱۳۹۹/۰۷/۱۹',
          function: 'ثبت نام',
          phonestatus: 'تایید شده',
          school: 'فرزانگان',
          signdate: '۱۳۹۹/۰۷/۱۹',
          accesses: 'ادمین'

        },
        {
          name: 'هلیا محمدی',
          phone: 9365491835,
          address: 'شهران-خیابان مدرسه-کوچه دانش',
          email: 'helia.mhmdi@gmail.com',
          status: 'فعال',
          field: 'ریاضی',
          code: 20890222
        },
        {
          name: 'هلیا محمدی',
          phone: 9365491835,
          address: 'شهران-خیابان مدرسه-کوچه دانش',
          email: 'helia.mhmdi@gmail.com',
          status: 'فعال'
        },
        {
          name: 'هلیا محمدی',
          phone: 9365491835,
          address: 'شهران-خیابان مدرسه-کوچه دانش',
          email: 'helia.mhmdi@gmail.com',
          status: 'فعال'
        }
      ]
    },

    editItem (item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    detailItem (item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogdetail = true
    },

    deleteItem (item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.users.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closedetail () {
      this.dialogdetail = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.users[this.editedIndex], this.editedItem)
      } else {
        this.users.push(this.editedItem)
      }
      this.close()
    }
  }

}
</script>
<style scoped>
  .main header {
    background-color: #00b722;
  }
</style>
