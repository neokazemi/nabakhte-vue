<template>
  <v-expansion-panel>
    <v-expansion-panel-header>مدیریت نقش ها</v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-card
        class="the-card">
        <v-toolbar-title>
          <h3
            class="the-toolbar-title">
            مدیریت نقش ها
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
          :headers="headers3"
          :items="roles"
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
                v-model="dialog3"
                max-width="500px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    class="mb-2 adding-btn"
                    v-bind="attrs"
                    v-on="on"
                  >
                    افزودن نقش
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
                            v-model="editedRoles.name"
                            label="نام اصلی"
                          ></v-text-field>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="6"
                          md="4"
                        >
                          <v-text-field
                            v-model="editedRoles.rolename"
                            label="نام نقش"
                          ></v-text-field>
                        </v-col>

                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="closerole"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      color="blue darken-1"
                      text
                      @click="saverole"
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
                    <v-btn color="blue darken-1" text @click="deleterolesConfirm">OK</v-btn>
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
                  color="#455A64"
                  @click="deleteRole(item)"
                >
                  <v-icon dark>
                    mdi-delete
                  </v-icon>

                </v-btn>

              </template>
              <span>حذف نقش</span>
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
  name: 'roles',
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
    closerole () {
      this.dialog3 = false
      this.$nextTick(() => {
        this.editedRoles = Object.assign({}, this.defaultRole)
        this.editedIndex = -1
      })
    },
    deleteRole (item) {
      this.editedRoleIndex = this.roles.indexOf(item)
      this.editedRoles = Object.assign({}, item)
      this.dialogDelete = true
    },
    deleterolesConfirm () {
      this.roles.splice(this.editedRoleIndex, 1)
      this.closeDelete()
    },
    saverole () {
      if (this.editedIndex > -1) {
        Object.assign(this.roles[this.editedIndex], this.editedRoles)
      } else {
        this.roles.push(this.editedRoles)
      }
      this.closerole()
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

</style>
