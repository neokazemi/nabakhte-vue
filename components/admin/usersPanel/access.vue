<template>
  <v-card
    class="the-card"
  >
    <v-data-table
      :headers="headers2"
      :items="accesses"
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
          <v-spacer />
          <v-dialog
            v-model="dialog2"
            max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2 adding-btn"
                v-bind="attrs"
                @click="addItem"
                v-on="on"
              >
                افزودن دسترسی
              </v-btn>
              <v-text-field
                v-model="search"
                class="the-card-search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              />
            </template>
            <v-card>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedAccess.name"
                        label="نام دسترسی"
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
                  @click="closeaccess"
                >
                  انصراف
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="saveaccess"
                >
                  دخیره
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">
                آیا از حذف این دسترسی مطمئن هستید؟
              </v-card-title>
              <v-card-actions>
                <v-spacer />
                <v-btn color="blue darken-1" text @click="closeDelete">
                  انصراف
                </v-btn>
                <v-btn color="blue darken-1" text @click="deleteaccessConfirm">
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
              color="#455A64"
              v-on="on"
              @click="deleteAccess(item)"
            >
              <v-icon dark>
                mdi-delete
              </v-icon>
            </v-btn>
          </template>
          <span>حذف دسترسی</span>
        </v-tooltip>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: 'Access',
  data: () => ({
    changeshow: false,
    detailshow: false,
    search: '',
    dialog: false,
    dialog2: false,
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

    accesses: [],
    editedIndex: -1,
    editedAccessIndex: -1,
    editedRoleIndex: -1,

    editedAccess: {
      name: ''
    },

    defaultAccess: {
      name: ''
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
        this.editedAccess = Object.assign({}, this.defaultAccess)
        this.editedIndex = -1
      })
    },
    closeaccess () {
      this.dialog2 = false
      this.$nextTick(() => {
        this.editedAccess = Object.assign({}, this.defaultAccess)
        this.editedIndex = -1
      })
    },
    deleteAccess (item) {
      this.editedAccessIndex = this.accesses.indexOf(item)
      this.editedAccess = Object.assign({}, item)
      this.dialogDelete = true
    },
    deleteaccessConfirm () {
      this.accesses.splice(this.editedAccessIndex, 1)
      this.closeDelete()
    },
    saveaccess () {
      if (this.editedIndex > -1) {
        Object.assign(this.accesses[this.editedIndex], this.editedAccess)
      } else {
        this.accesses.push(this.editedAccess)
      }
      this.closeaccess()
    },
    initialize () {
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
    }

  }
}
</script>

<style scoped>
.the-card {
  margin-bottom: 20px;
  padding: 8px;
}

.the-card-search {
  margin-left: 120px;
  margin-top: 25px;
  width: 50px;
}

.the-data-table {
  width: 100%;
  margin-top: 30px;
}

.adding-btn {
  margin: 30px;
}
</style>
