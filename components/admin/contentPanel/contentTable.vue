<template>
  <v-card class="mr-2 ml-2">
    <div class="d-flex justify-start pt-3">
      <v-btn
        class="mr-3"
        elevation="5"
        outlined
        color="#e91e63"
        href="content/add"
      >
        افزودن محتوا
      </v-btn>
      <v-btn
        class="mr-3"
        elevation="5"
        outlined
        color="#4a148c"
      >
        افزودن مقاله
      </v-btn>
      <v-btn
        class="mr-3"
        elevation="5"
        outlined
        color="#1565c0"
      >
        محتوا های منتظر تایید
      </v-btn>
      <v-btn
        class="mr-3"
        elevation="5"
        outlined
        color="#00897b"
        href="content-group"
      >
        بخش ها
      </v-btn>
      <v-btn
        class="mr-3"
        elevation="5"
        outlined
        color="#e53935"
        href="content-group/add"
      >
        افزودن دسته محتوا
      </v-btn>
    </div>
    <br>
    <v-card-title>
      لیست محتوای آموزشی
    </v-card-title>
    <v-card class="mb-20 pa-8 mr-20">
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
        :headers="headers"
        :items="contents.list"
        :search="search"
        :no-data-text="noDataText"
        class="elevation-1 mt-50"
      >
        <template v-slot:item.pic="{ item }">
          <v-img :src="item.inputData.photo" max-width="150" max-height="150" contain class="mt-3 mb-3" />
        </template>

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
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  class="ma-30"
                  v-bind="attrs"
                  @click="addItem"
                >
                  افزودن محتوا
                </v-btn>
              </template>
              <v-card>
                <v-card-actions>
                  <v-btn
                    class="mx-2"
                    icon
                    small
                    color="primary"
                    @click="close"
                  >
                    <v-icon dark>
                      mdi-close-circle
                    </v-icon>
                  </v-btn>
                </v-card-actions>
                <ContentInfo :notfilled="true" :dialog="true" />
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
                  آیا از حذف این محتوا مطمئن هستید؟
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
                color="#9575CD"
                :href="'content/' + item.id + '/edit'"

                v-on="on"
              >
                <v-icon dark>
                  mdi-pencil
                </v-icon>
              </v-btn>
            </template>
            <span> ویرایش محتوا </span>
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
            <span>حذف محتوا</span>
          </v-tooltip>
        </template>
      </v-data-table>
      <v-pagination v-model="currentPage" :length="totalpages" :total-visible="6" />
      <overlay :overlay="contents.loading" />
    </v-card>
  </v-card>
</template>

<script>
import Overlay from '~/components/admin/overlay'
import TablesHeader from '~/components/admin/tablesHeader'

import { ContentList } from '~/models/Content'
import ContentInfo from '~/components/admin/InformationCorrections/contentInfo'
import mixinContent from '~/plugins/mixin/api/Content'

export default {
  name: 'ContentTable',
  components: { Overlay, ContentInfo, TablesHeader },
  mixins: [mixinContent],
  data: () => ({
    noDataText: '',
    totalpages: null,
    currentPage: 1,
    items: ['item1', 'item2', 'item3', 'item4'],
    switch1: false,
    changeshow: false,
    detailshow: false,
    search: '',
    dialog: false,

    dialogDelete: false,

    headers: [
      {
        text: 'نام ',
        align: 'start',
        sortable: false,
        value: 'title'
      },
      {
        text: 'عکس',
        value: 'pic',
        sortable: false
      },
      // { text: 'فعال / غیر فعال', value: 'link', sortable: false },
      // { text: 'عکس', value: 'image', sortable: false },
      // { text: 'نوع محتوا', value: 'image', sortable: false },
      //
      // { text: 'فایل ها', value: 'image', sortable: false },
      //
      // { text: 'توضیح', value: 'image', sortable: false },
      //
      // { text: 'زمان نمایان شدن', value: 'image', sortable: false },
      //
      // { text: 'زمان درج', value: 'image', sortable: false },
      // { text: 'زمان اصلاح', value: 'image', sortable: false },
      { text: 'عملیات', value: 'actions', sortable: false }
    ],

    contents: new ContentList(),
    showcontents: [],

    editedIndex: -1,

    editedItem: {
      name: '',

      link: '',
      image: ''
    },
    pageNumberList: [1],
    defaultItem: {
      name: '',
      link: '',
      image: ''
    }

  }),

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
    currentPage (newVal) {
      this.paginatepage(newVal)
    }
  },

  mounted () {
    const that = this

    this.api_content_search([], 1).then((result) => {
      that.contents = new ContentList(result.data, result.meta)
      that.totalpages = that.contents.paginate.last_page
      that.contents.loading = false
      if (result.data.list.length === 0) {
        that.noDataText = 'اطلاعاتی موجود نیست'
      }
    })
  },

  created () {
    this.contents.loading = true
    this.initialize()
  },

  methods: {
    paginatepage (pageNumber) {
      const that = this
      this.api_content_search([], pageNumber)
        .then((result) => {
          that.contents = new ContentList(result.data, result.meta)
          that.contents.loading = false
        })
    },

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
    detailItem2 (item) {
      this.editedIndex = this.content.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
      this.detailshow = true
      this.changeshow = false
    },
    changeItem2 (item) {
      this.editedIndex = this.content.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
      this.detailshow = false
      this.changeshow = true
    },
    changeItem (item) {
      this.$router.push('users-permissions-roles/user/' + item.id + '/edit')
    },
    detailItem (item) {
      this.$router.push('users-permissions-roles/user/' + item.id)
    },

    deleteItem (item) {
      this.editedIndex = this.content.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    deleteItemConfirm () {
      this.content.splice(this.editedIndex, 1)
      this.closeDelete()
    },
    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.content[this.editedIndex], this.editedItem)
      } else {
        this.content.push(this.editedItem)
      }
      this.close()
    },
    initialize () {
      this.content = [
        {
          name: '',
          link: '',
          image: '',
          id: 1
        },
        {
          name: '',
          link: '',
          image: '',
          id: 2
        },
        {
          name: '',
          link: '',
          image: '',
          id: 3
        },
        {
          name: '',
          link: '',
          image: '',
          id: 4
        }
      ]
    }

  }

}
</script>

<style lang="scss" scoped>
@import url('~assets/scss/components/admin/contentPanel/contentTable.scss');
</style>
