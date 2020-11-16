<template>
  <v-card
    class="mb-20 pa-8"
  >
    <tables-header v-model="search" />
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
            v-model="dialog3"
            max-width="500px"
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
                افزودن نقش
              </v-btn>
            </template>
            <v-card>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col>
                      <v-text-field
                        v-model="editedRoles.name"
                        class="text-fields-size ma-10"
                        label="نام اصلی"
                      />
                    </v-col>
                    <v-col>
                      <v-text-field
                        v-model="editedRoles.rolename"
                        class="text-fields-size ma-10"
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
              :to=" `/admin/users-permissions-roles/role/` + item.id + `/edit` "
              v-bind="attrs"
              class="mx-2"
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
import TablesHeader from '../../tablesHeader'
export default {
  name: 'Roles',
  components: { TablesHeader },
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
      rolename: '',
      id: null
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
          rolename: 'پشتیبان استخدام',
          id: 1
        },
        {
          name: 'publicRelationManager',
          rolename: 'مدیر روابط عمومی',
          id: 2
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('~assets/scss/components/admin/usersPanel/tables/roles.scss');
</style>
