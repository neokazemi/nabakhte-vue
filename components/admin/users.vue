<template>
  <v-expansion-panel>
    <v-expansion-panel-header>مدیریت کاربران</v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-card
        class="the-card">
        <v-toolbar-title>
          <h3
            class="the-toolbar-title">
            لیست کاربران
          </h3>
        </v-toolbar-title>
        <v-card-title>
          <v-text-field
            class="the-card-title"
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="users"
          :search="search"
          class="elevation-1 the-data-table"
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
              <v-spacer></v-spacer>
              <v-dialog
                class="thedialog"
                v-model="dialog"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    class="mb-2 adding-btn"
                    v-bind="attrs"
                    v-on="on"
                  >
                    افزودن کاربر
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title v-if="changeshow">
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>
                  <v-card-title v-if="detailshow">
                    <span class="headline">جزییات اطلاعات کاربر</span>
                  </v-card-title>
                  <table v-if="changeshow">
                    <tr>
                      <td
                        class="thetd">
                        <v-text-field
                          class="thetextfield"
                          v-model="editedItem.name"
                          label="نام کاربر"
                        ></v-text-field>
                      </td>
                      <td
                        class="thetd">
                        <v-text-field
                          class="thetextfield"
                          v-model="editedItem.phone"
                          label="شماره تلفن"
                        ></v-text-field>
                      </td>
                      <td
                        class="thetd">
                        <v-text-field
                          class="thetextfield"
                          v-model="editedItem.address"
                          label="آدرس"
                        ></v-text-field>
                      </td>

                    </tr>
                    <tr>
                      <td
                        class="thetd">
                        <v-text-field
                          class="thetextfield"
                          v-model="editedItem.email"
                          label="ایمیل"
                        ></v-text-field>
                      </td>
                      <td
                        class="thetd">
                        <v-text-field
                          class="thetextfield"
                          v-model="editedItem.status"
                          label="وضعیت"
                        ></v-text-field>
                      </td>
                      <td
                        class="thetd">
                        <v-text-field
                          class="thetextfield"
                          v-model="editedItem.signdate"
                          label="زمان ثبت نام"
                        ></v-text-field>
                      </td>

                    </tr>
                    <tr>
                      <td
                        class="thetd">
                        <v-text-field
                          class="thetextfield"
                          v-model="editedItem.school"
                          label="مدرسه"
                        ></v-text-field>
                      </td>
                      <td
                        class="thetd">
                        <v-text-field
                          class="thetextfield"
                          v-model="editedItem.code"
                          label="کد ملی"
                        ></v-text-field>
                      </td>
                      <td
                        class="thetd">
                        <v-text-field
                          class="thetextfield"
                          v-model="editedItem.field"
                          label="رشته"
                        ></v-text-field>
                      </td>
                    <tr>
                      <td
                        class="thetd">
                        <v-text-field
                          class="thetextfield"
                          v-model="editedItem.function"
                          label="عملیات"
                        ></v-text-field>
                      </td>
                      <td
                        class="thetd">
                        <v-text-field
                          class="thetextfield"
                          v-model="editedItem.changetime"
                          label="زمان آخرین تغییر"
                        ></v-text-field>
                      </td>
                    </tr>
                  </table>
                  <table v-if="detailshow">
                    <tr>
                      <td
                        class="thetd">
                        <div
                          class="thetextfield"
                        >
                          نام کاربر
                          <hr/>
                          {{editedItem.name}}
                        </div>
                      </td>
                      <td
                        class="thetd">
                        <div
                          class="thetextfield"
                        >
                          موبایل
                          <hr/>
                          {{editedItem.phone}}
                        </div>
                      </td>
                      <td
                        class="thetd">
                        <div
                          class="thetextfield"
                        >
                          آدرس
                          <hr/>
                          {{editedItem.address}}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="thetd">
                        <div
                          class="thetextfield"
                        >
                          ایمیل
                          <hr/>
                          {{editedItem.email}}
                        </div>
                      </td>
                      <td
                        class="thetd">
                        <div
                          class="thetextfield"
                        >
                          وضعیت
                          <hr/>
                          {{editedItem.status}}
                        </div>
                      </td>
                      <td
                        class="thetd">
                        <div
                          class="thetextfield"
                        >
                          زمان ثبت نام
                          <hr/>
                          {{editedItem.signdate}}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="thetd">
                        <div
                          class="thetextfield"
                        >
                          مدرسه
                          <hr/>
                          {{editedItem.school}}
                        </div>
                      </td>
                      <td
                        class="thetd">
                        <div
                          class="thetextfield"
                        >
                          کد ملی
                          <hr/>
                          {{editedItem.code}}
                        </div>
                      </td>
                      <td
                        class="thetd">
                        <div
                          class="thetextfield"
                        >
                          رشته
                          <hr/>
                          {{editedItem.field}}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="thetd">
                        <div
                          class="thetextfield"
                        >
                          عملیات
                          <hr/>
                          {{editedItem.function}}
                        </div>
                      </td>
                      <td
                        class="thetd">
                        <div
                          class="thetextfield"
                        >
                          زمان آخرین تغییر
                          <hr/>
                          {{editedItem.changetime}}
                        </div>
                      </td>
                    </tr>
                  </table>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="close"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      v-if="changeshow"
                      color="blue darken-1"
                      text
                      @click="save"
                    >
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                    <v-spacer></v-spacer>
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
                  v-on="on"
                  class="mx-2"
                  fab
                  dark
                  x-small
                  color="#FFCA28"
                  @click="detailItem(item)">
                  <v-icon dark>
                    mdi-format-list-bulleted-square
                  </v-icon>
                </v-btn>
              </template>
              <span>نمایش جزییات</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  class="mx-2"
                  fab
                  dark
                  x-small
                  color="#9575CD"
                  @click="editItem(item)"
                >
                  <v-icon dark>
                    mdi-pencil
                  </v-icon>
                </v-btn>

              </template>
              <span>تغییر کاربر</span>
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  v-bind="attrs"
                  v-on="on"
                  class="mx-2"
                  fab
                  dark
                  x-small
                  color="#455A64"
                  @click="deleteItem(item)"
                >
                  <v-icon dark>
                    mdi-delete
                  </v-icon>

                </v-btn>

              </template>
              <span>حذف کاربر</span>
            </v-tooltip>
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
    </v-expansion-panel-content>
  </v-expansion-panel>

</template>

<script>
export default {
  name: 'users',
  data: () => ({
    changeshow: false,
    detailshow: false,
    search: '',
    dialog: false,
    dialog2: false,
    dialog3: false,
    dialogDelete: false,
    headers2: [
      {
        text: 'نام دسترسی',
        align: 'start',
        sortable: false,
        value: 'name'
      },
      { text: 'زمان درج', value: 'entertime', sortable: false },

      { text: 'فعالیت ها', value: 'actions', sortable: false }
    ],
    headers3: [
      {
        text: 'نام (اصلی)',
        align: 'start',
        sortable: false,
        value: 'name'
      },
      { text: 'نام نقش', value: 'rolename', sortable: false },

      { text: 'فعالیت ها', value: 'actions', sortable: false }
    ],
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
    accesses: [],
    users: [],
    roles: [],
    editedIndex: -1,
    editedAccessIndex: -1,
    editedRoleIndex: -1,
    editedAccesc: {
      name: ''
    },
    editedRole: {
      name: '',
      rolename: ''
    },
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
    editedAccess: {
      name: ''
    },
    editedRoles: {
      name: '',
      rolename: ''
    },
    defaultItem: {
      name: '',
      phone: 0,
      address: 0,
      email: 0,
      status: 0
    },
    defaultAccess: {
      name: ''
    },
    defaultRole: {
      name: '',
      rolename: ''
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
    }
  },

  created () {
    this.initialize()
  },

  methods: {
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
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
      this.changeshow = true
      this.detailshow = false
    },

    detailItem (item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
      this.detailshow = true
      this.changeshow = false
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
    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.users[this.editedIndex], this.editedItem)
      } else {
        this.users.push(this.editedItem)
      }
      this.close()
    },
    initialize () {
      this.roles = [
        {
          name: 'employmentSupportDepartment',
          rolename: 'پشتیبان استخدام'

        },
        {
          name: 'publicRelationManager',
          rolename: 'مدیر روابط عمومی'

        }
      ]
      this.accesses = [
        {
          name: 'دانلود فایل کارنامه نتایج کنکور',
          entertime: '۱۳۹۹/۰۶/۲۶'
        },
        {
          name: 'مشاهده سفارش های یک کاربر دیگر',
          entertime: '۱۳۹۹/۰۵/۲۲'
        }
      ]
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
    }

  }
}
</script>

<style scoped>
.the-card {
  margin-bottom: 20px;
}

.the-toolbar-title {
  margin-top: 60px;
  margin-right: 100px;
}

.the-card-title {
  margin-left: 120px;
}

.the-data-table {
  width: fit-content;
  margin-top: 30px;
}

.adding-btn {
  margin: 30px;
}

.thetd {
  width: fit-content;
}

.thetextfield {
  margin: 10px;
  width: 260px;
  font-size: small;
}

.thedialog {
  width: fit-content;
}
</style>
