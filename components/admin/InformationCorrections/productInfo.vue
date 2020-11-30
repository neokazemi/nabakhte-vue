<template>
  <div>
    <v-card v-if="product" class="mr-2 ml-2 pr-5 pl-5">
      <v-card-title v-if="!dialog">
        اصلاح اطلاعات محصول
      </v-card-title>
      <v-card-title v-if="dialog">
        افزودن محصول
      </v-card-title>
      <div v-if="product">
        <div>
          <v-row>
            <v-col>
              <v-text-field
                v-model="product.title"

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
                v-if="product.price"
                v-model="product.price.base"
                class="input-elements "
                label=" قیمت پایه"
                outlined
                dense
              />
              <v-text-field
                v-if="notfilled"
                class="input-elements "
                label=" قیمت پایه"
                outlined
                dense
              />
            </v-col>
            <v-col>
              <v-text-field
                v-if="product.price"
                v-model="product.price.discount"
                class="input-elements"
                label="تخفیف (%)"
                outlined
                dense
              />
              <v-text-field
                v-if="notfilled"
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
              <v-row>
                <p class="mt-2 mr-8">
                  عکس محصول :
                </p>
              </v-row>
              <v-row>
                <client-only>
                  <vue2-dropzone id="dropzone" ref="myVueDropzone" class="mr-8" :options="dropzoneOptions" />
                </client-only>
              </v-row>
            </v-col>
            <v-col>
              <v-row>
                <p class="mt-2">
                  کاتالوگ :
                </p>
              </v-row>
              <v-row>
                <client-only>
                  <vue2-dropzone id="dropzone" ref="myVueDropzone" :options="dropzoneOptions" />
                </client-only>
              </v-row>
            </v-col>

            <v-col cols="6">
              <client-only v-if="!notfilled">
                <vue-tags-input
                  v-if="product.tags"
                  v-model="tag"
                  class="vue-tags-input"
                  :tags="product.tags"
                  placeholder="تگ ها"
                  :allow-edit-tags="true"

                  @tags-changed="newTags => tags = newTags"
                />
              </client-only><client-only v-if="notfilled">
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
        </div>
      </div>
      <overlay :overlay="product.loading" />
    </v-card>
  </div>
</template>

<script>
import { Product } from '~/models/Product'
import mixinProduct from '~/plugins/mixin/api/Product'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import Overlay from '~/components/admin/overlay'

export default {
  name: 'ProductInfo',
  components: {
    Overlay,
    Editor: () => import('@tinymce/tinymce-vue'),
    VueTagsInput: () => import('@johmun/vue-tags-input'),
    vue2Dropzone: () => import('vue2-dropzone')
  },
  mixins: [mixinProduct],
  props: {
    editmode: Boolean,
    notfilled: Boolean,
    dialog: Boolean
  },
  data: () => ({
    overlay: true,
    dropzoneOptions: {
      addRemoveLinks: true,
      url: 'https://httpbin.org/post',
      thumbnailWidth: 150,
      maxFilesize: 0.5,
      headers: { 'My-Awesome-Header': 'header value' },
      dictRemoveFile: 'حذف فایل',
      dictCancelUpload: 'انصراف'
    },

    base: null,
    items: ['item1', 'item2', 'item3', 'item4'],
    switch1: false,
    tag: '',
    tags: [],
    changeshow: false,
    detailshow: false,
    search: '',
    dialog: false,
    name: '',

    dialogDelete: false,
    headers: [
      {
        text: 'نام محصول',
        align: 'start',
        sortable: false,
        value: 'name'
      },
      { text: 'قیمت پایه', value: 'price.base', sortable: false },
      { text: 'عملیات', value: 'actions', sortable: false }

    ],
    product: new Product(),
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
    this.product.loading = true
  },
  mounted () {
    const that = this

    this.product.loading = true
    this.api_product_show(this.$route.params.id)
      .then((response) => {
        that.product = new Product(response.data.data)
        that.product.loading = false
      })
      .catch(() => {
        that.product.loading = false
      })
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
    }

  }
}
</script>

<style lang="scss" scoped>
  @import url('~/assets/scss/components/admin/managementsPanel/productInformationCorrection.scss');
</style>
