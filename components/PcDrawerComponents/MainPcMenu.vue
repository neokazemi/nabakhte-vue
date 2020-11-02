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
              {{ item.title }}
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
              {{ listItem.title }}
            </v-list-item-content>
            <v-list-item-icon v-if="listItem.children.list.length !== 0" @click="rightDrawerStep = listItem.id">
              <v-icon color="#000" small :style="listItem.style">
                mdi-chevron-left
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content v-else :style="listItem.style">
              <nuxt-link :to="listItem.link" :style="listItem.style">
                {{ listItem.title }}
              </nuxt-link>
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
          title: 'موضوعات فروشگاه',
          link: '#',
          type: '',
          style: {},
          children: [
            {
              id: 1,
              title: 'کتاب کمک آموزشی بر اساس پایه',
              link: '#',
              type: '',
              style: {},
              children: [
                {
                  id: 2,
                  title: 'دوازدهم ریاضی',
                  link: '#',
                  type: '',
                  style: {},
                  children: [
                    {
                      id: 3,
                      title: 'حسابان دوازدهم',
                      link: '#',
                      type: '',
                      style: {},
                      children: []
                    },
                    {
                      id: 4,
                      title: 'هندسه دوازدهم',
                      link: '#',
                      type: '',
                      style: {},
                      children: []
                    },
                    {
                      id: 5,
                      title: 'گسسته دوازدهم',
                      link: '#',
                      type: '',
                      style: {},
                      children: []
                    },
                    {
                      id: 6,
                      title: 'فیزیک دوازدهم',
                      link: '#',
                      type: '',
                      style: {},
                      children: []
                    },
                    {
                      id: 7,
                      title: 'شیمی دوازدهم',
                      link: '#',
                      type: '',
                      style: {},
                      children: []
                    },
                    {
                      id: 8,
                      title: 'فارسی دوازدهم',
                      link: '#',
                      type: '',
                      style: {},
                      children: []
                    },
                    {
                      id: 9,
                      title: 'عربی دوازدهم',
                      link: '#',
                      type: '',
                      style: {},
                      children: []
                    },
                    {
                      id: 10,
                      title: 'دین و زندگی دوازدهم',
                      link: '#',
                      type: '',
                      style: {},
                      children: []
                    },
                    {
                      id: 11,
                      title: 'انگلیسی دوازدهم',
                      link: '#',
                      type: '',
                      style: {},
                      children: []
                    },
                    {
                      id: 12,
                      title: 'نگارش دوازدهم',
                      link: '#',
                      type: '',
                      style: {},
                      children: []
                    }
                  ]
                },
                {
                  id: 13,
                  title: 'دوازدهم تجربی',
                  link: '#',
                  type: '',
                  style: {},
                  children: [
                    {
                      id: 14,
                      title: 'ریاضی دوازدهم',
                      link: '#',
                      type: '',
                      style: {},
                      children: []
                    }
                  ]
                }
              ]
            },
            {
              id: 15,
              title: 'بهترین کتاب های کنکور 1400',
              link: '#',
              type: '',
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
