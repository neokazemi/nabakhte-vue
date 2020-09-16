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
          v-for="(item, index) in posts.list"
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
            {{ item.title }}
          </v-card-title>
          <v-card-subtitle class="pb-0">
            {{ item.excerpt }}
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
import Sidebar from '~/components/app/Sidebar'
import Breadcrumbs from '~/components/Breadcrumbs'
import { PostList } from '~/models/Post'
export default {
  name: 'Category',
  components: {
    Breadcrumbs,
    Sidebar
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
