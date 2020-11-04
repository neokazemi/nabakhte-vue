<template>
  <v-container :fluid="true">
    <v-row>
      <v-col :md="3">
        <nested-draggable-new-link :tasks="newLink" @addItem="addItem" />
      </v-col>
      <v-col :md="9" class="menu-tree">
        <nested-draggable :tasks="list2" @listChanged="onListChange" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NestedDraggable from '../../../components/admin/menus/NestedDraggable'
import NestedDraggableNewLink from '../../../components/admin/menus/NestedDraggableNewLink'
export default {
  components: { NestedDraggableNewLink, NestedDraggable },
  data () {
    return {
      list2: [
        {
          id: 0,
          name: 'موضوعات فروشگاه',
          link: '#',
          type: 'link',
          style: {},
          editMode: false,
          needSave: false,
          tasks: [
            {
              id: 1,
              name: 'کتاب کمک آموزشی بر اساس پایه',
              link: '#',
              type: 'link',
              style: {},
              editMode: false,
              needSave: false,
              tasks: [
                {
                  id: 2,
                  name: 'دوازدهم ریاضی',
                  link: '#',
                  type: 'link',
                  style: {},
                  editMode: false,
                  needSave: false,
                  tasks: [
                    {
                      id: 3,
                      name: 'حسابان دوازدهم',
                      link: '#',
                      type: 'link',
                      style: {},
                      editMode: false,
                      needSave: false,
                      tasks: []
                    },
                    {
                      id: 4,
                      name: 'هندسه دوازدهم',
                      link: '#',
                      type: 'link',
                      style: {},
                      editMode: false,
                      needSave: false,
                      tasks: []
                    },
                    {
                      id: 5,
                      name: 'گسسته دوازدهم',
                      link: '#',
                      type: 'link',
                      style: {},
                      editMode: false,
                      needSave: false,
                      tasks: []
                    },
                    {
                      id: 6,
                      name: 'فیزیک دوازدهم',
                      link: '#',
                      type: 'link',
                      style: {},
                      editMode: false,
                      needSave: false,
                      tasks: []
                    },
                    {
                      id: 7,
                      name: 'شیمی دوازدهم',
                      link: '#',
                      type: 'link',
                      style: {},
                      editMode: false,
                      needSave: false,
                      tasks: []
                    },
                    {
                      id: 8,
                      name: 'فارسی دوازدهم',
                      link: '#',
                      type: 'link',
                      style: {},
                      editMode: false,
                      needSave: false,
                      tasks: []
                    },
                    {
                      id: 9,
                      name: 'عربی دوازدهم',
                      link: '#',
                      type: 'link',
                      style: {},
                      editMode: false,
                      needSave: false,
                      tasks: []
                    },
                    {
                      id: 10,
                      name: 'دین و زندگی دوازدهم',
                      link: '#',
                      type: 'link',
                      style: {},
                      editMode: false,
                      needSave: false,
                      tasks: []
                    },
                    {
                      id: 11,
                      name: 'انگلیسی دوازدهم',
                      link: '#',
                      type: 'link',
                      style: {},
                      editMode: false,
                      needSave: false,
                      tasks: []
                    },
                    {
                      id: 12,
                      name: 'نگارش دوازدهم',
                      link: '#',
                      type: 'link',
                      style: {},
                      editMode: false,
                      needSave: false,
                      tasks: []
                    }
                  ]
                },
                {
                  id: 13,
                  name: 'دوازدهم تجربی',
                  link: '#',
                  type: 'link',
                  style: {},
                  editMode: false,
                  needSave: false,
                  tasks: [
                    {
                      id: 14,
                      name: 'ریاضی دوازدهم',
                      link: '#',
                      type: 'link',
                      style: {},
                      editMode: false,
                      needSave: false,
                      tasks: []
                    }
                  ]
                }
              ]
            },
            {
              id: 15,
              name: 'بهترین کتاب های کنکور 1400',
              link: '#',
              type: 'link',
              style: { color: 'red' },
              tasks: []
            }
          ]
        }
      ],
      newLink: [
        {
          id: 0,
          name: '',
          link: '',
          type: 'link',
          style: {},
          editMode: false,
          needSave: false,
          tasks: []
        }
      ]
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
  methods: {
    onListChange () {
      this.list2 = JSON.parse(JSON.stringify(this.list2))
    },
    addItem (event) {
      this.list2.push(event)
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
