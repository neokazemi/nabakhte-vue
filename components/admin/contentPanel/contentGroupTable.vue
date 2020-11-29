<template>
  <v-card class="mr-2 ml-2">
    <v-card-title>
      ست ها
    </v-card-title>
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
      :items="sets.list"
      no-data-text="لطفا منتظر بمانید..."

      :search="search"
      class="elevation-1 mt-50"
    >
      <template v-slot:item.pic="{ item }">
        <v-img :src="item.inputData.photo" max-width="150" max-height="150" contain class="mt-3 mb-3" />
      </template>

      <!--      <template v-slot:item.status="{ item }">-->
      <!--        <v-chip-->
      <!--          :color="getColor(item.status)"-->
      <!--          dark-->
      <!--        >-->
      <!--          {{ item.status }}-->
      <!--        </v-chip>-->
      <!--      </template>-->

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
                افزودن دسته محتوا
              </v-btn>
            </template>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">
                آیا از حذف این دسته محتوا مطمئن هستید؟
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
            >
              <v-icon dark>
                mdi-pencil
              </v-icon>
            </v-btn>
          </template>
          <span>تغییر دسته محتوا</span>
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
          <span>حذف دسته محتوا</span>
        </v-tooltip>
      </template>
    </v-data-table>
    <v-pagination v-model="currentPage" :length="totalpages" :total-visible="6" />
  </v-card>
</template>

<script>
import TablesHeader from '~/components/admin/tablesHeader'
import { SetList } from '~/models/Set'
import mixinSet from '~/plugins/mixin/api/Set'

export default {
  name: 'ContentGroupTable',
  components: { TablesHeader },
  mixins: [mixinSet],

  data: () => ({
    currentPage: 1,
    totalpages: null,
    showsets: [],
    sets: new SetList(),
    pageNumberList: [1],

    items: ['item1', 'item2', 'item3', 'item4'],
    switch1: false,
    changeshow: false,
    detailshow: false,
    search: '',
    dialog: false,

    dialogDelete: false,

    headers: [
      // {
      //   text: 'آیدی ',
      //   align: 'start',
      //   sortable: false,
      //   value: 'id'
      // },
      { text: 'عکس', value: 'pic', sortable: false },
      { text: 'تیتر', value: 'title', sortable: false },

      // { text: 'فعال', value: 'active', sortable: false },
      //
      // { text: 'نمایش', value: 'show', sortable: false },
      { text: 'عملیات', value: 'actions', sortable: false }
    ],

    contentGroup: [],

    editedIndex: -1,

    editedItem: {
      name: '',
      link: '',
      image: ''
    },

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
    this.api_set_list(1).then((result) => {
      that.sets = new SetList(result.data, result.meta)
      that.totalpages = that.sets.paginate.last_page
      that.sets.loading = false
    })
  },

  created () {
    this.initialize()
  },

  methods: {
    paginatepage (pageNumber) {
      const that = this
      this.api_set_list(pageNumber)
        .then((result) => {
          that.sets = new SetList(result.data, result.meta)
          that.sets.loading = false
        })
    },

    addItem () {
      this.$router.push('content-group/add')
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
      this.editedIndex = this.contentGroup.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
      this.detailshow = true
      this.changeshow = false
    },
    changeItem2 (item) {
      this.editedIndex = this.contentGroup.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
      this.detailshow = false
      this.changeshow = true
    },
    // changeItem (item) {
    //   this.$router.push('users-permissions-roles/user/' + item.id + '/edit')
    // },
    // detailItem (item) {
    //   this.$router.push('users-permissions-roles/user/' + item.id)
    // },

    deleteItem (item) {
      this.editedIndex = this.contentGroup.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    deleteItemConfirm () {
      this.contentGroup.splice(this.editedIndex, 1)
      this.closeDelete()
    },
    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.contentGroup[this.editedIndex], this.editedItem)
      } else {
        this.contentGroup.push(this.editedItem)
      }
      this.close()
    },
    initialize () {
      this.contentGroup = [
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
@import url('~assets/scss/components/admin/contentPanel/contentGroupTable.scss');
</style>
