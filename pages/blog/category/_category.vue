<template>
  <v-container>
    <v-row>
      <v-col>
        <breadcrumbs :items="breadcrumbsItems" />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="3"
      >
        <sidebar />
      </v-col>
      <v-col
        cols="9"
      >
        <v-card
          v-for="(item, index) in $store.getters.posts"
          :key="index"
          :link="true"
          :href="'#'"
          hover
          class="mx-auto mb-5"
        >
          <v-img
            class="white--text align-end"
            src="https://media.chibekhoonam.net/2020/08/entekhab-reshte-motevasete-1.jpg"
          />
          <v-card-title>
            {{ item.title.rendered }}
          </v-card-title>
          <v-card-subtitle class="pb-0">
            {{ item.excerpt.rendered }}
          </v-card-subtitle>
          <v-card-actions>
            <v-btn
              color="orange"
              text
            >
              Share
            </v-btn>
            <v-btn
              color="orange"
              text
            >
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
// import Post from '../../../models/Post'
// import * as Model from 'js-abstract-model'
import Sidebar from '~/components/app/Sidebar'
import Breadcrumbs from '~/components/Breadcrumbs'
// import { PostList } from '~/models/Post'
// import Post from '~/models/Post'
export default {
  name: 'Category',
  components: {
    Breadcrumbs,
    Sidebar
  },
  asyncData (context) {
    return axios.get('https://www.chibekhoonam.net/wp-json/wp/v2/posts?categories=929&per_page=10')
      .then((response) => {
        // const gg = new Post(response.data[0])
        // console.log('gg', gg)
        context.store.commit('updatePosts', response.data)
      })
  },
  data () {
    // console.log('Model', Model)
    return {
      breadcrumbsItems: [
        {
          disabled: false,
          exact: false,
          href: '#',
          link: false,
          text: 'خانه',
          to: '#'
        },
        {
          disabled: false,
          exact: false,
          href: '#',
          link: false,
          text: 'صفحه یک',
          to: '#'
        },
        {
          disabled: false,
          exact: false,
          href: '#',
          link: false,
          text: 'صفحه دو',
          to: '#'
        }
      ]
    }
  }
}
</script>
