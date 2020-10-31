<template>
  <div>
    <v-card class="mr-2 ml-2 pr-5 pl-5">
      <v-card-title>
        اصلاح اطلاعات محصول
      </v-card-title>
      <v-row>
        <v-col>
          <v-text-field
            v-model="name"
            class="input-elements "
            label=" نام کالا"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            v-model="name"
            class="input-elements"
            label=" دسته کالا"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            v-model="name"
            class="input-elements "
            label=" ترتیب"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-select
            v-model="name"
            class="input-elements "
            label="نوع محصول"
            outlined
            dense
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field
            v-model="name"
            class="input-elements "
            label=" قیمت پایه"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            v-model="name"
            class="input-elements"
            label="تخفیف (%)"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            v-model="name"
            class="input-elements "
            label=" تعداد موجود"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-select
            v-model="name"
            class="input-elements "
            label=" وضعیت"
            outlined
            dense
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field
            v-model="name"
            class="input-elements"
            label="دسته صفت"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            v-model="name"
            class="input-elements"
            label="تامبنیل کلیپ معرفی"
            outlined
            dense
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="name"
            class="input-elements"
            label="آدرس ریدایرکت"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            v-model="name"
            class="input-elements"
            label="لینک فیلم معرفی"
            outlined
            dense
          />
        </v-col>
      </v-row>
      <br>
      <br>
      <v-row>
        <v-col>
          <v-img
            width="200px"
            height="200px"
            class="mt-3 "
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAKlBMVEXm5uampqajo6Pp6ena2trW1ta8vLzg4ODExMStra2wsLDIyMi2trbOzs7VYdZ0AAAEMElEQVR4nO2cyZaCMBBFCUEZxP//3SYItgIOkErVi+fdnTvvSWrIQIqCEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBAD/EBR1IH5xw8x6FTXpm+dKwPOtX1zrYpfsRzsLr0bxR4Iv/vLYGn996Lx9aVb2j1Ydpc6b0dfDaO3aXe3dH2Vr+Pg92L0nkcyV0dfdZ/1JskuQ0dfNF+M3/84NrnlHH9qv/cbHdtTVoq+2ec3Ojb5KPqi3y84KPa5zFRffagQLxVdHgnHnw7p3cghGP3p2ABOw4iv6KsYwUERfaLGCuIr1pF+gdpa4i1fN2pvBrGzlniDP8cLDopn2Hkal0YfFHETqohfwFrkBTJzNAA6T6Xm6KiIOU87MUHnEPOpv8oN4TCIV8BBbAUFnWutdVZIRmEALxK9ZBQGOjTD6I57SVlZKz0jVwvvhmg1UdgvYK30jHCeCZQna6lHjuwefjTE2l2UzqQBqL5GYmm/BmixL13ubyAVfX9JYngBMhSvhqMhUkVMkWiwUk0SQaSanyaVIiVT8bb7BlDzTcOjhjidaZKCT0NVGIf5G/5+Pfz9nkZ4N3gGaFfYH7oh9Imyx1lbpNimwdqokT2VuRsinc4kKRdAxaJIk2qAEk2abQyoTYwkgQgVhmm6GqCOpggVUVwQqBqOiC+ggJZON7ywoHNgQyi+7Y204T0jKgi1rpiQ7U2RetI7sgUDq1TckIxExCgMyDWnUC3pP/G32Gdgb7NLJRvINDMhcJEd/Cq7TD5FzKMzElcWkC4obBC/UARbFq6JzTbIWWYiTjEDwTjFLARj2jfUZm2FPx36TLbM4gvSG74+UPrLLq8nMnYHY9lY/+Wd7HxyILcHBwJ+z5Fb2Wf3Go+vm13ZpnRNVlHoq/OOZz8mx/KMuipc8d2zNFuOeTxU4+tjfpMj/Fzd9yzNliP4QzW7n6XZcESuG74Q+loddRgPv9qyUgR9xeX3d4RFj/LL3lpnia+jU8xCscWqG2Ih+KAIFYyDYApwFNN82AW0c5pKEEYxnSCIYqIYnAGIxVR3vGfsj2lEDtReY37UlubbyidF2yuKaT6PXSha9qhyJ/dvFS2zTZqvEJbY3cxIc0V/jd2JlMocHRWt7rTrzNGAzTzVyKMzNvm01hMcFA1am/S1/snQoO6rpZlJUT3Z6A6hxSAqD6H+IGoPof4gpl4VbqGaTjVr4YxuTZT/fuQbNA3V80xAM9fo55nRUDPXGPgF9AQT7pC+Q+9zNptJqjpN9RaGz6gtE00yaUArm6Z5X+ArQ6Vb7lZhqBiIVmGoFogWXfeMTvdtlmi0Uo1dotFKNVo73ZuGKrvfdqlUK5mKvy+/B5W36G1WvzMqBdHUUENQdTd/icruPg1piG9o2LQptW11aYlK611ZoiFICCGEEEIIIYQQQgghhBBCCCG58gf0kT01WC/S1QAAAABJRU5ErkJggg=="
          />
          <v-btn
            class="mt-3 mr-5"
          >
            تغییر عکس
          </v-btn>
        </v-col>
        <v-col>
          <v-row>
            <p class="mt-2">
              کاتالوگ :
            </p>
          </v-row>
          <v-row>
            <v-btn
              class="catalog-btn"
            >
              انتخاب فایل
            </v-btn>
          </v-row>
        </v-col>
        <v-col cols="6">
          <client-only>
            <vue-tags-input
              v-model="tag"
              class="vue-tags-input"
              :tags="tags"
              placeholder="تگ ها"

              :allow-edit-tags="true"
              @tags-changed="newTags => tags = newTags"
            />
          </client-only>
          <v-text-field
            class="mt-3"
            label="کانتنت های معرفی کننده محصول"
          />
          <v-text-field
            label="کانتنت های پیشنهاد دهنده محصول"
          />
          <v-text-field
            label="ست های دارای کانتنت های پیشنهاد دهنده محصول"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="px-5">
          <v-col>
            <p class="p-tag-size ">
              توضیحات مختصر :
            </p>
          </v-col>
          <v-col>
            <editor
              :init="{
                height: 400}"
            />
          </v-col>
        </v-col>
        <v-col class="px-5">
          <v-col>
            <p class="p-tag-size ">
              توضیحات اجمالی :
            </p>
          </v-col>
          <v-col>
            <editor
              :init="{
                height: 400}"
            />
          </v-col>
        </v-col>        <v-col class="px-5">
          <v-col class="px-5">
            <v-col>
              <p class="p-tag-size ">
                توضیحات خاص :
              </p>
            </v-col>
            <v-col>
              <editor
                :init="{
                  height: 400}"
              />
            </v-col>
          </v-col>
        </v-col>
      </v-row>
      <v-row>
        <v-col />
        <v-col>
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
            :items="products"
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
                  <v-card>
                    <div>
                      <v-row>
                        <v-col
                          class="form-elements-column-width"
                        >
                          <v-text-field
                            v-model="editedItem.name"
                            class="text-fields-size"
                            label="نام کالا"
                          />
                        </v-col>
                        <v-col
                          class="form-elements-column-width"
                        >
                          <v-text-field
                            v-model="editedItem.price"
                            class="text-fields-size"
                            label="قیمت پایه"
                          />
                        </v-col>
                        <v-col
                          class="form-elements-column-width"
                        >
                          <v-text-field
                            v-model="editedItem.discount"
                            class="text-fields-size"
                            label="تخفیف"
                          />
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col
                          class="form-elements-column-width"
                        >
                          <v-text-field
                            v-model="editedItem.pic"
                            class="thetextfield"
                            label="عکس"
                          />
                        </v-col>
                        <v-col
                          class="form-elements-column-width"
                        >
                          <v-text-field
                            v-model="editedItem.description"
                            class="text-fields-size"
                            label="توضیحات کوتاه"
                          />
                        </v-col>
                        <v-col
                          class="form-elements-column-width"
                        >
                          <v-text-field
                            v-model="editedItem.type"
                            class="text-fields-size"
                            label="نوع"
                          />
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col
                          v-if="changeshow"
                          class="form-elements-column-width"
                        >
                          <v-text-field
                            v-model="editedItem.status"
                            class="text-fields-size"
                            label="فعال/غیر فعال"
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
                  <span>اصلاح</span>
                </v-tooltip>
                <v-tooltip v-if="item.status === 'غیر فعال'" top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      class="mx-2 edit-delete-btns"
                      fab
                      dark
                      x-small
                      color="green"
                      v-on="on"
                      @click="changestatus(item)"
                    >
                      <v-icon dark>
                        mdi-wrench
                      </v-icon>
                    </v-btn>
                  </template>
                  <span>فعال کردن محصول</span>
                </v-tooltip>
                <v-tooltip v-if="item.status === 'فعال'" top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      class="mx-2 edit-delete-btns"
                      fab
                      dark
                      x-small
                      color="red"
                      v-on="on"
                      @click="changestatus(item)"
                    >
                      <v-icon dark>
                        mdi-wrench
                      </v-icon>
                    </v-btn>
                  </template>
                  <span>غیر فعال کردن محصول</span>
                </v-tooltip>
              </v-row>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'ProductInformationCorrection',
  components: {
    Editor: () => import('@tinymce/tinymce-vue'),
    VueTagsInput: () => import('@johmun/vue-tags-input')
  },
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
        text: 'نام محصول',
        align: 'start',
        sortable: false,
        value: 'name'
      },
      { text: 'قیمت پایه', value: 'price', sortable: false },
      { text: 'عملیات', value: 'actions', sortable: false }

    ],

    products: [],

    editedIndex: -1,

    editedItem: {
      name: '',
      price: null,
      status: ''
    },

    defaultItem: {
      name: '',
      price: null
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
      this.editedIndex = this.products.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
      this.changeshow = true
      this.detailshow = false
    },

    detailItem (item) {
      this.editedIndex = this.products.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
      this.detailshow = true
      this.changeshow = false
    },

    deleteItem (item) {
      this.editedIndex = this.products.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    deleteItemConfirm () {
      this.products.splice(this.editedIndex, 1)
      this.closeDelete()
    },
    changestatus (item) {
      this.editedIndex = this.products.indexOf(item)
      if (this.products[this.editedIndex].status === 'فعال') {
        this.products[this.editedIndex].status = 'غیر فعال'
      } else {
        this.products[this.editedIndex].status = 'فعال'
      }
    },
    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.products[this.editedIndex], this.editedItem)
      } else {
        this.products.push(this.editedItem)
      }
      this.close()
    },
    initialize () {
      this.products = [
        {
          name: 'جزوات آمار و احتمال یازدهم',
          price: 7000,
          status: 'فعال'
        },

        {
          name: 'جزوات فیزیک دوازدهم',
          price: 7000,
          status: 'غیر فعال'

        },
        {
          name: 'جزوات ریاضی دهم',
          price: 7000,
          status: 'فعال'

        }
      ]
    }

  }
}
</script>

<style lang="scss" scoped>
@import url('~/assets/scss/components/admin/managementsPanel/productInformationCorrection.scss');

</style>
