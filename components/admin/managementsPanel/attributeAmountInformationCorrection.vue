<template>
  <div class="pt-10">
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
      :items="attributeCategory"
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
          <!--          <v-dialog-->
          <!--            v-model="dialog"-->
          <!--            class="dialog-width"-->
          <!--          >-->
          <!--            <v-card>-->
          <!--              <div>-->
          <!--                <v-row>-->
          <!--                  <v-col-->
          <!--                    class="form-elements-column-width"-->
          <!--                  >-->
          <!--                    <v-text-field-->
          <!--                      v-model="editedItem.name"-->
          <!--                      class="text-fields-size"-->
          <!--                      label="نام کالا"-->
          <!--                    />-->
          <!--                  </v-col>-->
          <!--                  <v-col-->
          <!--                    class="form-elements-column-width"-->
          <!--                  >-->
          <!--                    <v-text-field-->
          <!--                      v-model="editedItem.price"-->
          <!--                      class="text-fields-size"-->
          <!--                      label="قیمت پایه"-->
          <!--                    />-->
          <!--                  </v-col>-->
          <!--                  <v-col-->
          <!--                    class="form-elements-column-width"-->
          <!--                  >-->
          <!--                    <v-text-field-->
          <!--                      v-model="editedItem.discount"-->
          <!--                      class="text-fields-size"-->
          <!--                      label="تخفیف"-->
          <!--                    />-->
          <!--                  </v-col>-->
          <!--                </v-row>-->
          <!--                <v-row>-->
          <!--                  <v-col-->
          <!--                    class="form-elements-column-width"-->
          <!--                  >-->
          <!--                    <v-text-field-->
          <!--                      v-model="editedItem.pic"-->
          <!--                      class="thetextfield"-->
          <!--                      label="عکس"-->
          <!--                    />-->
          <!--                  </v-col>-->
          <!--                  <v-col-->
          <!--                    class="form-elements-column-width"-->
          <!--                  >-->
          <!--                    <v-text-field-->
          <!--                      v-model="editedItem.description"-->
          <!--                      class="text-fields-size"-->
          <!--                      label="توضیحات کوتاه"-->
          <!--                    />-->
          <!--                  </v-col>-->
          <!--                  <v-col-->
          <!--                    class="form-elements-column-width"-->
          <!--                  >-->
          <!--                    <v-text-field-->
          <!--                      v-model="editedItem.type"-->
          <!--                      class="text-fields-size"-->
          <!--                      label="نوع"-->
          <!--                    />-->
          <!--                  </v-col>-->
          <!--                </v-row>-->
          <!--                <v-row>-->
          <!--                  <v-col-->
          <!--                    v-if="changeshow"-->
          <!--                    class="form-elements-column-width"-->
          <!--                  >-->
          <!--                    <v-text-field-->
          <!--                      v-model="editedItem.status"-->
          <!--                      class="text-fields-size"-->
          <!--                      label="فعال/غیر فعال"-->
          <!--                    />-->
          <!--                  </v-col>-->
          <!--                </v-row>-->
          <!--              </div>-->
          <!--              <v-card-actions>-->
          <!--                <v-spacer />-->
          <!--                <v-btn-->
          <!--                  color="blue darken-1"-->
          <!--                  text-->
          <!--                  @click="close"-->
          <!--                >-->
          <!--                  انصراف-->
          <!--                </v-btn>-->
          <!--                <v-btn-->
          <!--                  v-if="changeshow"-->
          <!--                  color="blue darken-1"-->
          <!--                  text-->
          <!--                  @click="save"-->
          <!--                >-->
          <!--                  ذخیره-->
          <!--                </v-btn>-->
          <!--              </v-card-actions>-->
          <!--            </v-card>-->
          <!--          </v-dialog>-->

          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">
                آیا از حذف این محصول مطمئن هستید؟
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
      <!--      <template v-slot:item.actions="{ item }">-->
      <!--        <v-row>-->
      <!--          <v-tooltip top>-->
      <!--            <template v-slot:activator="{ on, attrs }">-->
      <!--              <v-btn-->
      <!--                v-bind="attrs"-->
      <!--                class="mx-2 edit-delete-btns"-->
      <!--                fab-->
      <!--                dark-->
      <!--                x-small-->
      <!--                color="#9575CD"-->
      <!--                v-on="on"-->
      <!--                @click="editItem(item)"-->
      <!--              >-->
      <!--                <v-icon dark>-->
      <!--                  mdi-pencil-->
      <!--                </v-icon>-->
      <!--              </v-btn>-->
      <!--            </template>-->
      <!--            <span>اصلاح</span>-->
      <!--          </v-tooltip>-->

      <!--        </v-row>-->
      <!--      </template>-->
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'AttributeAmountInformationCorrection',
  data: () => ({
    items: ['item1', 'item2', 'item3', 'item4'],
    switch1: false,
    tag: '',
    tags: [],

    changeshow: false,
    detailshow: false,

    search: '',
    dialog: false,

    dialogDelete: false,

    headers: [
      {
        text: 'مقدار',
        align: 'start',
        sortable: false,
        value: 'amount'
      },
      { text: 'توضیح', value: 'description', sortable: false },
      { text: 'عملیات', value: 'actions', sortable: false }

    ],

    attributeCategory: [],

    editedIndex: -1,

    editedItem: {
      amount: '',
      description: ''
    },

    defaultItem: {
      amount: '',
      description: ''
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
    // editItem (item) {
    //   this.editedIndex = this.products.indexOf(item)
    //   this.editedItem = Object.assign({}, item)
    //   this.dialog = true
    //   this.changeshow = true
    //   this.detailshow = false
    // },

    detailItem (item) {
      this.editedIndex = this.attributeCategory.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
      this.detailshow = true
      this.changeshow = false
    },

    deleteItem (item) {
      this.editedIndex = this.attributeCategory.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    deleteItemConfirm () {
      this.attributeCategory.splice(this.editedIndex, 1)
      this.closeDelete()
    },
    changestatus (item) {
      this.editedIndex = this.attributeCategory.indexOf(item)
      if (this.attributeCategory[this.editedIndex].status === 'فعال') {
        this.attributeCategory[this.editedIndex].status = 'غیر فعال'
      } else {
        this.attributeCategory[this.editedIndex].status = 'فعال'
      }
    },
    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.attributeCategory[this.editedIndex], this.editedItem)
      } else {
        this.attributeCategory.push(this.editedItem)
      }
      this.close()
    },
    initialize () {
      this.attributeCategory = [
        {
          amount: 'دریافت 5000 تومان هدیه کیف پول',
          description: 'درج نشده'
        },

        {
          amount: 'دریافت 5000 تومان هدیه کیف پول',
          description: 'درج نشده'

        },
        {
          amount: 'دریافت 5000 تومان هدیه کیف پول',
          description: 'درج نشده'

        }
      ]
    }

  }
}
</script>

<style lang="scss" scoped>
  @import url('~/assets/scss/components/admin/managementsPanel/attributeInformationCorrection.scss');

</style>
