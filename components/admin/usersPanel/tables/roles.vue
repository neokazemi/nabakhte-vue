<template>
  <v-card
    class="the-card"
  >
    <v-row>
      <v-col />
      <v-col>
        <v-btn
          class="the-btns"
          small
          elevation="2"
          outlined
          rounded
          color="#212121"
        >
          Print
        </v-btn>
        <v-btn
          class="the-btns"
          small
          elevation="2"
          outlined
          rounded
          color="#c62828"
        >
          Copy
        </v-btn>
        <v-btn
          class="the-btns"
          small
          elevation="2"
          outlined
          rounded
          color="#00e676"
        >
          PDF
        </v-btn>
        <v-btn
          class="the-btns"
          small
          elevation="2"
          outlined
          rounded
          color="#ff6f00"
        >
          Excel
        </v-btn>
        <v-btn
          class="the-btns"
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
          <v-spacer />
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
                @click="addItem"
                v-on="on"
              >
                افزودن نقش
              </v-btn>
              <v-text-field
                v-model="search"
                class="the-card-search"
                append-icon="mdi-magnify"
                label="جستجو"
                single-line
                hide-details
              />
            </template>
            <v-card>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col>
                      <v-text-field
                        v-model="editedRoles.name"
                        class="thetextfield"
                        label="نام اصلی"
                      />
                    </v-col>
                    <v-col>
                      <v-text-field
                        v-model="editedRoles.rolename"
                        class="thetextfield"
                        label="نام نقش"
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
                  @click="closerole"
                >
                  انصراف
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="saverole"
                >
                  ذخیره
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">
                آیا از حذف این نقش مطمئن هستید؟
              </v-card-title>
              <v-card-actions>
                <v-spacer />
                <v-btn color="blue darken-1" text @click="closeDelete">
                  انصراف
                </v-btn>
                <v-btn color="blue darken-1" text @click="deleterolesConfirm">
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
          <span>تغییر نقش</span>
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
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: 'Roles',
  data: () => ({
    changeshow: false,
    detailshow: false,
    search: '',
    dialog: false,

    dialog3: false,
    dialogDelete: false,

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

    roles: [],
    editedIndex: -1,
    editedAccessIndex: -1,
    editedRoleIndex: -1,

    editedRoles: {
      name: '',
      rolename: ''
    },

    defaultRole: {
      name: '',
      rolename: ''
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
    editItem (item) {
      this.editedIndex = this.roles.indexOf(item)
      this.editedRoles = Object.assign({}, item)
      this.dialog3 = true
      this.changeshow = true
      this.detailshow = false
    },
    addItem () {
      this.dialog3 = true
      this.changeshow = true
      this.detailshow = false
    },
    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedRoles = Object.assign({}, this.defaultRole)
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
    }

  }
}
</script>

<style scoped>
.thetextfield {
  font-size: small;
  margin: 10px;
  width: 500px;
}

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
  margin-top: 30px;
  width: 100%;
}

.adding-btn {
  margin: 30px;
}

.the-btns {
  width: 15%;
}

</style>
