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
        <PostItem v-for="(item, index) in posts.list" :key="index" :post="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PostItem from '../../../components/PostItem'
import Sidebar from '~/components/app/Sidebar'
import Breadcrumbs from '~/components/Breadcrumbs'
import { PostList } from '~/models/Post'
export default {
  name: 'Category',
  components: {
    Breadcrumbs,
    Sidebar,
    PostItem
  },
  asyncData (context) {
    return (new PostList()).fetch()
      .then((response) => {
        context.store.commit('updatePosts', new PostList(response.data))
      })
  },
  data () {
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
  },
  computed: {
    posts () {
      return this.$store.getters.posts
    }
  }
}
</script>
