<template>
  <div>
    <v-container class="menu-maker" :fluid="true">
      <div>
      <!--    <v-row>-->
      <!--      <v-col :md="2">-->
      <!--        <p>hi</p>-->
      <!--      </v-col>-->
      <!--      <v-col :md="5">-->
      <!--        <h3>Nested draggable</h3>-->
      <!--        <nested-draggable :tasks="list1" />-->
      <!--      </v-col>-->
      <!--      <v-col :md="5">-->
      <!--        <v-expansion-panels>-->
      <!--          <v-expansion-panel>-->
      <!--            <v-expansion-panel-header>-->
      <!--              test-->
      <!--            </v-expansion-panel-header>-->
      <!--            <v-expansion-panel-content>-->
      <!--              <nested-draggable :tasks="list2" />-->
      <!--            </v-expansion-panel-content>-->
      <!--          </v-expansion-panel>-->
      <!--        </v-expansion-panels>-->
      <!--      </v-col>-->
      <!--    </v-row>-->
      <!--    <v-row>-->
      <!--      <v-btn block color="primary" @click="save">-->
      <!--        Save-->
      <!--      </v-btn>-->
      <!--    </v-row>-->
      </div>
      <v-row>
        <v-col :md="3" />
        <v-col :md="9">
          <div class="d-flex flex-row">
            <v-text-field v-model="newMenuName" label="نام منو" outlined dense />
            <v-btn color="primary" @click="addMenu">
              اضافه کردن منو
            </v-btn>
          </div>
          <div v-for="(item, index) in menus.list" :key="index" class="menu-button">
            <div class="menu-name">
              <v-text-field
                v-model="item.title"
                outlined
                dense
                color="#2bbb28"
                @keydown="nameHasBeenChanged(item.id)"
              />
            </div>
            <div class="buttons">
              <v-btn v-if="item.needSave" icon @click="saveName(item.id)">
                <v-icon color="#2bbb28">
                  mdi-content-save
                </v-icon>
              </v-btn>
              <nuxt-link :to="'/admin/menus/' + item.title.split(' ').join('-')">
                <v-btn icon>
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </nuxt-link>
              <v-btn icon>
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </div>
          </div>
        <!--        <nested-draggable :tasks="list1" />-->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import NestedDraggable from '~/components/admin/menus/NestedDraggable'
import mixinMenu from '~/plugins/mixin/menu'
import { Menu } from '~/models/Menu'
let id = 1

export default {
  name: 'NestedWithVmodel',
  display: 'Nested (v-model & vuex)',
  middleware: 'auth',
  mixins: [mixinMenu],
  order: 16,
  // components: { NestedDraggable },
  data () {
    return {
      value: null,
      enabled: true,
      list2: [
        {
          id: 0,
          name: 'موضوعات فروشگاه',
          link: '#',
          type: 'pcRightDrawer',
          style: {},
          tasks: [
            {
              id: 1,
              name: 'کتاب کمک آموزشی بر اساس پایه',
              link: '#',
              type: 'pcRightDrawer',
              style: {},
              tasks: [
                {
                  id: 2,
                  name: 'دوازدهم ریاضی',
                  link: '#',
                  type: 'pcRightDrawer',
                  style: {},
                  tasks: [
                    {
                      id: 3,
                      name: 'حسابان دوازدهم',
                      link: '#',
                      type: 'pcRightDrawer',
                      style: {},
                      tasks: []
                    },
                    {
                      id: 4,
                      name: 'هندسه دوازدهم',
                      link: '#',
                      type: 'pcRightDrawer',
                      style: {},
                      tasks: []
                    },
                    {
                      id: 5,
                      name: 'گسسته دوازدهم',
                      link: '#',
                      type: 'pcRightDrawer',
                      style: {},
                      tasks: []
                    },
                    {
                      id: 6,
                      name: 'فیزیک دوازدهم',
                      link: '#',
                      type: 'pcRightDrawer',
                      style: {},
                      tasks: []
                    },
                    {
                      id: 7,
                      name: 'شیمی دوازدهم',
                      link: '#',
                      type: 'pcRightDrawer',
                      style: {},
                      tasks: []
                    },
                    {
                      id: 8,
                      name: 'فارسی دوازدهم',
                      link: '#',
                      type: 'pcRightDrawer',
                      style: {},
                      tasks: []
                    },
                    {
                      id: 9,
                      name: 'عربی دوازدهم',
                      link: '#',
                      type: 'pcRightDrawer',
                      style: {},
                      tasks: []
                    },
                    {
                      id: 10,
                      name: 'دین و زندگی دوازدهم',
                      link: '#',
                      type: 'pcRightDrawer',
                      style: {},
                      tasks: []
                    },
                    {
                      id: 11,
                      name: 'انگلیسی دوازدهم',
                      link: '#',
                      type: 'pcRightDrawer',
                      style: {},
                      tasks: []
                    },
                    {
                      id: 12,
                      name: 'نگارش دوازدهم',
                      link: '#',
                      type: 'pcRightDrawer',
                      style: {},
                      tasks: []
                    }
                  ]
                },
                {
                  id: 13,
                  name: 'دوازدهم تجربی',
                  link: '#',
                  type: 'pcRightDrawer',
                  style: {},
                  tasks: [
                    {
                      id: 14,
                      name: 'ریاضی دوازدهم',
                      link: '#',
                      type: 'pcRightDrawer',
                      style: {},
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
              type: 'pcRightDrawer',
              style: { color: 'red' },
              tasks: []
            }
          ]
        }
      ],
      dragging: false,
      newMenuName: '',
      lastId: 0
    }
  },
  computed: {
    dragOptions () {
      return {
        animation: 0,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
      }
    },
    // this.value when input = v-model
    // this.list  when input != v-model
    realValue () {
      return this.value ? this.value : this.list
    },
    draggingInfo () {
      return this.dragging ? 'under drag' : ''
    }
  },
  methods: {
    emitter (value) {
      this.$emit('input', value)
    },
    add () {
      this.list.push({ name: 'Juan ' + id, id: id++ })
    },
    replace () {
      this.list = [{ name: 'Edgard', id: id++ }]
    },
    checkMove (e) {
      window.console.log('Future index: ' + e.draggedContext.futureIndex)
    },
    // save () {
    //   this.menu = this.list1
    //   this.convertMenuObjectToMenuModel(this.menu)
    // },
    // saveName (id) {
    //   for (let i = 0; i < this.list1.length; i++) {
    //     if (this.list1[i].id === id) {
    //       this.list1[i].needSave = false
    //     }
    //   }
    // },
    // nameHasBeenChanged (id) {
    //   for (let i = 0; i < this.list1.length; i++) {
    //     if (this.list1[i].id === id) {
    //       this.list1[i].needSave = true
    //     }
    //   }
    // },
    deleteItem () {
    },
    convertMenuObjectToMenuModel (array) {
      for (let i = 0; i < array.length; i++) {
        Object.defineProperty(array[i], 'title',
          Object.getOwnPropertyDescriptor(array[i], 'name'))
        delete array[i].name
        Object.defineProperty(array[i], 'children',
          Object.getOwnPropertyDescriptor(array[i], 'tasks'))
        delete array[i].tasks
        if (array[i].children.length) {
          this.convertMenuObjectToMenuModel(array[i].children)
        }
      }
    },
    addMenu () {
      const name = this.newMenuName
      if (name) {
        this.menus.list.push(new Menu(
          {
            id: this.lastId,
            title: name,
            children: []
          }
        ))
      }
      this.lastId++
      this.newMenuName = ''
    }
  }
}
</script>

<style scoped>
  .item-container {
    max-width: 20rem;
    margin: 0;
  }

  .item {
    padding: 1rem;
    border: solid 1px #000;
    background-color: #fefefe;
  }

  .item-sub {
    margin: 0 0 0 1rem;
  }
</style>

<style>
  .menu-maker .dragArea {
    min-height: 24px;
    padding-left: 0 !important;
  }

  .menu-maker .v-card__title {
    font-size: 16px;
    padding: 4px 16px;
  }

  .menu-maker .menu-button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 0;
    padding: 10px 16px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    background-color: #fff;
  }

  .menu-maker .menu-button .menu-name .v-input {
    margin-top: 0;
    padding-top: 0;
  }

  .menu-maker .menu-button .menu-name .v-input .v-input__slot fieldset {
    display: none;
  }

  .menu-maker .menu-button .menu-name .v-text-field__details {
    display: none;
  }

  .menu-maker .menu-button .buttons {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }

  .menu-maker .menu-name .v-input__control > .v-input__slot {
    margin-bottom: 0;
  }
</style>
