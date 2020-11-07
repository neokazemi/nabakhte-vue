<template>
  <v-container :fluid="true">
    <v-row>
      <v-col :md="3">
        <nested-draggable-new-link :children="newLink" @addItem="addItem" />
      </v-col>
      <v-col :md="9" class="menu-tree">
        <nested-draggable :children="MenuList.list" @listChanged="onListChange" @deleteItem="deleteItem" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { MenuList, MenuItem } from '~/models/Menu'
import NestedDraggable from '~/components/admin/menus/NestedDraggable'
import NestedDraggableNewLink from '~/components/admin/menus/NestedDraggableNewLink'
export default {
  components: { NestedDraggableNewLink, NestedDraggable },
  data () {
    return {
      list2: [
        {
          id: 0,
          data: {
            title: 'موضوعات فروشگاه',
            link: '#',
            newTab: false
          },
          type: 'link',
          style: {},
          editMode: false,
          needSave: false,
          children: [
            {
              id: 1,
              data: {
                title: 'کتاب کمک آموزشی بر اساس پایه',
                link: '#',
                newTab: false
              },
              type: 'link',
              style: {},
              editMode: false,
              needSave: false,
              children: [
                {
                  id: 2,
                  data: {
                    title: 'دوازدهم ریاضی',
                    link: '#',
                    newTab: false
                  },
                  type: 'link',
                  style: {},
                  editMode: false,
                  needSave: false,
                  children: [
                    {
                      id: 3,
                      data: {
                        title: 'حسابان دوازدهم',
                        link: '#',
                        newTab: false
                      },
                      type: 'link',
                      style: {},
                      editMode: false,
                      needSave: false,
                      children: []
                    },
                    {
                      id: 4,
                      data: {
                        title: 'هندسه دوازدهم',
                        link: '#',
                        newTab: false
                      },
                      type: 'link',
                      style: {},
                      editMode: false,
                      needSave: false,
                      children: []
                    },
                    {
                      id: 5,
                      data: {
                        title: 'گسسته دوازدهم',
                        link: '#',
                        newTab: false
                      },
                      type: 'link',
                      style: {},
                      editMode: false,
                      needSave: false,
                      children: []
                    },
                    {
                      id: 6,
                      data: {
                        title: 'فیزیک دوازدهم',
                        link: '#',
                        newTab: false
                      },
                      type: 'link',
                      style: {},
                      editMode: false,
                      needSave: false,
                      children: []
                    },
                    {
                      id: 7,
                      data: {
                        title: 'شیمی دوازدهم',
                        link: '#',
                        newTab: false
                      },
                      type: 'link',
                      style: {},
                      editMode: false,
                      needSave: false,
                      children: []
                    },
                    {
                      id: 8,
                      data: {
                        title: 'فارسی دوازدهم',
                        link: '#',
                        newTab: false
                      },
                      type: 'link',
                      style: {},
                      editMode: false,
                      needSave: false,
                      children: []
                    },
                    {
                      id: 9,
                      data: {
                        title: 'عربی دوازدهم',
                        link: '#',
                        newTab: false
                      },
                      type: 'link',
                      style: {},
                      editMode: false,
                      needSave: false,
                      children: []
                    },
                    {
                      id: 10,
                      data: {
                        title: 'دین و زندگی دوازدهم',
                        link: '#',
                        newTab: false
                      },
                      type: 'link',
                      style: {},
                      editMode: false,
                      needSave: false,
                      children: []
                    },
                    {
                      id: 11,
                      data: {
                        title: 'انگلیسی دوازدهم',
                        link: '#',
                        newTab: false
                      },
                      type: 'link',
                      style: {},
                      editMode: false,
                      needSave: false,
                      children: []
                    },
                    {
                      id: 12,
                      data: {
                        title: 'نگارش دوازدهم',
                        link: '#',
                        newTab: false
                      },
                      type: 'link',
                      style: {},
                      editMode: false,
                      needSave: false,
                      children: []
                    }
                  ]
                },
                {
                  id: 13,
                  data: {
                    title: 'دوازدهم تجربی',
                    link: '#',
                    newTab: false
                  },
                  type: 'link',
                  style: {},
                  editMode: false,
                  needSave: false,
                  children: [
                    {
                      id: 14,
                      data: {
                        title: 'ریاضی دوازدهم',
                        link: '#',
                        newTab: false
                      },
                      type: 'link',
                      style: {},
                      editMode: false,
                      needSave: false,
                      children: []
                    }
                  ]
                }
              ]
            },
            {
              id: 15,
              data: {
                title: 'بهترین کتاب های کنکور 1400',
                link: '#',
                newTab: false
              },
              type: 'link',
              style: { color: 'red' },
              children: []
            }
          ]
        }
      ],
      newLink: [
        {
          isNew: true,
          data: {
            title: '',
            link: '',
            newTab: false
          },
          type: 'link',
          editMode: false,
          needSave: false,
          style: {},
          children: []
        }
      ],
      MenuList: new MenuList()
    }
  },
  computed: {
    currentTab () {
      if (typeof this.$route.params.menu !== 'undefined') {
        return this.$route.params.menu
      } else {
        return ''
      }
    }
  },
  created () {
    this.MenuList = new MenuList(this.list2)
  },
  methods: {
    onListChange () {
      this.handleAddedChild()
      this.MenuList = JSON.parse(JSON.stringify(this.MenuList))
      this.MenuList = new MenuList(this.MenuList.list)
    },
    handleAddedChild (list = this.MenuList.list) {
      for (let i = 0; i < list.length; i++) {
        if (list[i].isNew) {
          list[i].id = -1
          list[i] = new MenuItem(list[i])
          list[i].id = this.MenuList.getLastId() + 1
        }
        this.handleAddedChild(list[i].children.list)
      }
    },
    addItem (event) {
      this.MenuList.list.push(new MenuItem(event))
      this.newLink[0].data = {
        title: '',
        link: ''
      }
    },
    deleteItem (event, list = this.MenuList.list) {
      for (let i = 0; i < list.length; i++) {
        if (list[i].id === event) {
          list.splice(i, 1)
        } else {
          this.deleteItem(event, list[i].children.list)
        }
      }
    }
  }
}
</script>

<style>
  .menu-tree .dragArea {
    min-height: 24px;
    padding-left: 0 !important;
  }
</style>
