<template>
  <v-window v-model="rightDrawerStep" :style="{ position: 'relative' }">
    <v-window-item v-for="(item, index) in rightDrawerFlatted" :key="index" :value="item.id">
      <v-icon color="#000" class="right-drawer-close-button" @click="closeDrawer">
        mdi-close
      </v-icon>
      <v-list dense>
        <v-list-item-group>
          <v-list-item disabled>
            <v-list-item-content class="right-drawer-header">
              {{ item.data.title }}
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-if="item.id > 1">
            <v-list-item-content @click="rightDrawerStep = 0">
              بازگشت به صفحه اصلی
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon color="#000" small>
                mdi-home
              </v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item v-if="item.id !== 0">
            <v-list-item-content @click="drawerGoToParent(item.id)">
              بازگشت
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon color="#000" small>
                mdi-chevron-right
              </v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item v-for="(listItem, listIndex) in item.children.list" :key="listIndex">
            <v-list-item-content v-if="listItem.children.list.length !== 0" :style="listItem.style" @click="rightDrawerStep = listItem.id">
              {{ listItem.data.title }}
            </v-list-item-content>
            <v-list-item-icon v-if="listItem.children.list.length !== 0" @click="rightDrawerStep = listItem.id">
              <v-icon color="#000" small :style="listItem.style">
                mdi-chevron-left
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content v-else :style="listItem.style">
              <nuxt-link v-if="!listItem.data.newTab" :to="listItem.data.link" :style="listItem.style">
                {{ listItem.data.title }}
              </nuxt-link>
              <a v-else :href="listItem.data.link" :style="listItem.style" target="_blank">
                {{ listItem.data.title }}
              </a>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-window-item>
  </v-window>
</template>

<script>
import { MenuList } from '~/models/Menu'

export default {
  name: 'MainPcMenu',
  data () {
    return {
      rightDrawerStep: 0,
      rightDrawerItems: [
        {
          id: 0,
          data: {
            title: 'موضوعات فروشگاه',
            link: '#',
            newTab: false
          },
          type: 'link',
          style: {},
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
                  children: [
                    {
                      id: 3,
                      data: {
                        title: 'حسابان دوازدهم',
                        link: '#',
                        newTab: true
                      },
                      type: 'link',
                      style: {},
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
      rightDrawerObject: new MenuList()
    }
  },
  computed: {
    rightDrawerFlatted () {
      return this.rightDrawerObject.getItemsWithoutDepth()
    }
  },
  created () {
    this.rightDrawerObject = new MenuList(this.rightDrawerItems)
  },
  methods: {
    drawerGoToParent (id) {
      const parent = this.rightDrawerObject.getItemParent(id)
      this.rightDrawerStep = parent.id
    },
    closeDrawer () {
      this.$emit('close')
    }
  }
}
</script>
