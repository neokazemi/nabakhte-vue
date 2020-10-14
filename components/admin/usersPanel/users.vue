<template>
  <div>
    <Filter />
    <v-card>
      <div class="the-div">
        <v-row>
          <v-col>
            <v-text-field
              class="the-text-field"
              label="نام"
              outlined
              dense
            />
          </v-col>
          <v-col>
            <v-text-field
              class="the-text-field"
              label="نام خانوادگی"
              outlined
              dense
            />
          </v-col>
          <v-col>
            <v-text-field
              class="the-text-field"
              label="شماره موبایل"
              outlined
              dense
            />
          </v-col>
          <v-col>
            <v-text-field
              class="the-text-field"
              label="کد ملی"
              outlined
              dense
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-select
              class="the-select"
              :items="items"
              label="انتخاب جنسیت"
              solo
              dense
            />
          </v-col>
          <v-col>
            <v-select
              class="the-select"
              :items="items"
              label="انتخاب پروفایل"
              solo
              dense
            />
          </v-col>
          <v-col>
            <v-select
              class="the-select"
              :items="items"
              label="انتخاب شماره"
              solo
              dense
            />
          </v-col>
          <v-col>
            <v-select
              class="the-select"
              :items="items"
              label="انتخاب وضعیت"
              solo
              dense
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-select
              class="the-select2"
              :items="items"
              label="انتخاب ستون های اصلی"
              solo
              dense
            />
          </v-col>
          <v-col>
            <v-select
              class="the-select2"
              :items="items"
              label="مرتب سازی بر اساس"
              solo
              dense
            />
          </v-col>
          <v-col>
            <v-select
              class="the-select2"
              :items="items"
              label="نزولی/صعودی"
              solo
              dense
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-switch
              v-model="switch1"
              class="the-switch"
            />
            <v-select
              class="the-select1"
              :items="items"
              label="محصولات دیده شده"
              solo
              dense
            />
          </v-col>
          <v-col>
            <v-switch
              v-model="switch1"

              class="the-switch"
            />
            <v-select
              class="the-select1"
              :items="items"
              label="محصولات سفارش داده شده"
              solo
              dense
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-switch
              v-model="switch1"
              class="the-switch"
            />
            <v-select
              class="the-select3"
              :items="items"
              label="وضعیت سفارش"
              solo
              dense
            />
          </v-col>
          <v-col>
            <v-switch
              v-model="switch1"

              class="the-switch"
            />
            <v-select
              class="the-select3"
              :items="items"
              label="وضعیت پرداخت"
              solo
              dense
            />
          </v-col>
          <v-col>
            <v-switch
              v-model="switch1"

              class="the-switch"
            />
            <v-select
              class="the-select3"
              :items="items"
              label="وضعیت تسویه"
              solo
              dense
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-switch
              v-model="switch1"
              class="the-switch"
            />
            <v-select
              class="the-select3"
              :items="items"
              label="نقش ها"
              solo
              dense
            />
          </v-col>
          <v-col>
            <v-switch
              v-model="switch1"

              class="the-switch"
            />
            <v-select
              class="the-select3"
              :items="items"
              label="رشته ها"
              solo
              dense
            />
          </v-col>
          <v-col>
            <v-switch
              v-model="switch1"

              class="the-switch"
            />
            <v-select
              class="the-select3"
              :items="items"
              label="انتخاب کپن"
              solo
              dense
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-switch
              v-model="switch1"
              class="the-switch"
            />
            <v-text-field
              class="the-text-field"
              label="کد پستی"
              outlined
              dense
            />
          </v-col>
          <v-col>
            <v-switch
              v-model="switch1"
              class="the-switch"
            />
            <v-text-field
              class="the-text-field"
              label="استان"
              outlined
              dense
            />
          </v-col>
          <v-col>
            <v-switch
              v-model="switch1"
              class="the-switch"
            />
            <v-text-field
              class="the-text-field"
              label="شهر"
              outlined
              dense
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-switch
              v-model="switch1"
              class="the-switch"
            />
            <v-text-field
              class="the-text-field"
              label="آدرس"
              outlined
              dense
            />
          </v-col>
          <v-col>
            <v-switch
              v-model="switch1"
              class="the-switch"
            />
            <v-text-field
              class="the-text-field"
              label="مدرسه"
              outlined
              dense
            />
          </v-col>
          <v-col>
            <v-switch
              v-model="switch1"
              class="the-switch"
            />
            <v-text-field
              class="the-text-field"
              label="ایمیل"
              outlined
              dense
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-switch
              v-model="switch1"
              class="the-switch"
            />
            <v-col>
              <p class="the-p">
                تاریخ ثبت نام:
              </p>
            </v-col>
          </v-col>
          <v-col>
            <v-text-field
              class="the-filled-text-field"
              label="از تاریخ"
              filled
              dense
            />
          </v-col>
          <v-col>
            <v-text-field
              class="the-filled-text-field"
              label="تا تاریخ"
              filled
              dense
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-switch
              v-model="switch1"
              class="the-switch"
            />
            <v-col>
              <p class="the-p">
                تاریخ اصلاح:
              </p>
            </v-col>
          </v-col>
          <v-col>
            <v-text-field
              class="the-filled-text-field"
              label="از تاریخ"
              filled
              dense
            />
          </v-col>
          <v-col>
            <v-text-field
              class="the-filled-text-field"
              label="تا تاریخ"
              filled
              dense
            />
          </v-col>
        </v-row>
      </div>
    </v-card>
    <v-card>
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
            <v-spacer />
            <v-dialog
              v-model="dialog"
              class="thedialog"
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
                  افزودن کاربر
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
                <v-card-title v-if="detailshow">
                  <span class="headline">جزییات اطلاعات کاربر</span>
                </v-card-title>
                <div>
                  <v-row>
                    <v-col
                      v-if="changeshow"
                      class="thetd"
                    >
                      <v-text-field
                        v-model="editedItem.name"
                        class="thetextfield"
                        label="نام کاربر"
                      />
                    </v-col>
                    <v-col
                      v-if="detailshow"
                      class="thetd"
                    >
                      <div
                        class="thetextfield"
                      >
                        نام کاربر
                        <hr>
                        {{ editedItem.name }}
                      </div>
                    </v-col>
                    <v-col
                      v-if="changeshow"
                      class="thetd"
                    >
                      <v-text-field
                        v-model="editedItem.phone"
                        class="thetextfield"
                        label="شماره تلفن"
                      />
                    </v-col>
                    <v-col
                      v-if="detailshow"
                      class="thetd"
                    >
                      <div
                        class="thetextfield"
                      >
                        موبایل
                        <hr>
                        {{ editedItem.phone }}
                      </div>
                    </v-col>
                    <v-col
                      v-if="changeshow"
                      class="thetd"
                    >
                      <v-text-field
                        v-model="editedItem.address"
                        class="thetextfield"
                        label="آدرس"
                      />
                    </v-col>
                    <v-col
                      v-if="detailshow"
                      class="thetd"
                    >
                      <div
                        class="thetextfield"
                      >
                        آدرس
                        <hr>
                        {{ editedItem.address }}
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col
                      v-if="changeshow"
                      class="thetd"
                    >
                      <v-text-field
                        v-model="editedItem.email"
                        class="thetextfield"
                        label="ایمیل"
                      />
                    </v-col>
                    <v-col
                      v-if="detailshow"
                      class="thetd"
                    >
                      <div
                        class="thetextfield"
                      >
                        ایمیل
                        <hr>
                        {{ editedItem.email }}
                      </div>
                    </v-col>
                    <v-col
                      v-if="changeshow"
                      class="thetd"
                    >
                      <v-text-field
                        v-model="editedItem.status"
                        class="thetextfield"
                        label="وضعیت"
                      />
                    </v-col>
                    <v-col
                      v-if="detailshow"
                      class="thetd"
                    >
                      <div
                        class="thetextfield"
                      >
                        وضعیت
                        <hr>
                        {{ editedItem.status }}
                      </div>
                    </v-col>
                    <v-col
                      v-if="changeshow"
                      class="thetd"
                    >
                      <v-text-field
                        v-model="editedItem.signdate"
                        class="thetextfield"
                        label="زمان ثبت نام"
                      />
                    </v-col>
                    <v-col
                      v-if="detailshow"
                      class="thetd"
                    >
                      <div
                        class="thetextfield"
                      >
                        زمان ثبت نام
                        <hr>
                        {{ editedItem.signdate }}
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col
                      v-if="changeshow"
                      class="thetd"
                    >
                      <v-text-field
                        v-model="editedItem.school"
                        class="thetextfield"
                        label="مدرسه"
                      />
                    </v-col>
                    <v-col
                      v-if="detailshow"
                      class="thetd"
                    >
                      <div
                        class="thetextfield"
                      >
                        مدرسه
                        <hr>
                        {{ editedItem.school }}
                      </div>
                    </v-col>
                    <v-col
                      v-if="changeshow"
                      class="thetd"
                    >
                      <v-text-field
                        v-model="editedItem.code"
                        class="thetextfield"
                        label="کد ملی"
                      />
                    </v-col>
                    <v-col
                      v-if="detailshow"
                      class="thetd"
                    >
                      <div
                        class="thetextfield"
                      >
                        کد ملی
                        <hr>
                        {{ editedItem.code }}
                      </div>
                    </v-col>
                    <v-col
                      v-if="changeshow"
                      class="thetd"
                    >
                      <v-text-field
                        v-model="editedItem.field"
                        class="thetextfield"
                        label="رشته"
                      />
                    </v-col>
                    <v-col
                      v-if="detailshow"
                      class="thetd"
                    >
                      <div
                        class="thetextfield"
                      >
                        رشته
                        <hr>
                        {{ editedItem.field }}
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col
                      v-if="changeshow"
                      class="thetd"
                    >
                      <v-text-field
                        v-model="editedItem.function"
                        class="thetextfield"
                        label="عملیات"
                      />
                    </v-col>
                    <v-col
                      v-if="detailshow"
                      class="thetd"
                    >
                      <div
                        class="thetextfield"
                      >
                        عملیات
                        <hr>
                        {{ editedItem.function }}
                      </div>
                    </v-col>
                    <v-col
                      v-if="changeshow"
                      class="thetd"
                    >
                      <v-text-field
                        v-model="editedItem.changetime"
                        class="thetextfield"
                        label="زمان آخرین تغییر"
                      />
                    </v-col>
                    <v-col
                      v-if="detailshow"
                      class="thetd"
                    >
                      <div
                        class="thetextfield"
                      >
                        زمان آخرین تغییر
                        <hr>
                        {{ editedItem.changetime }}
                      </div>
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
                  آیا از حذف این کاربر مطمئن هستید؟
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
                color="#FFCA28"
                v-on="on"
                @click="detailItem(item)"
              >
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
            <span>تغییر کاربر</span>
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
            <span>حذف کاربر</span>
          </v-tooltip>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>

import Filter from './filter'
export default {
  name: 'Users',
  components: { Filter },
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
  padding: 8px;
  float: top;
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

.the-switch {
  float: right;
}

.the-select {
  float: right;
  margin-top: 5px;
}

.the-select1 {
  float: right;
  width: 80%;
  margin-top: 9px;
}

.the-select3 {
  float: right;
  margin-top: 9px;
  width: 70%;
}

.the-select2 {
  float: right;
  margin-top: 9px;
  width: 100%;
}

.the-text-field {
  float: right;
  margin-top: 9px;
}

.the-div {
  margin: 40px;
}

.the-p {
  float: right;
  margin-top: 7px;
  margin-right: 10px;
}

.the-filled-text-field {
  float: right;
}
</style>
