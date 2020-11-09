<template>
  <v-container>
    <v-row>
      <v-col>
        <Breadcrumbs
          :items="breadcrumbsItems"
        />
      </v-col>
    </v-row>
    <v-sheet :elevation="2" :style="{ margin: '20px 0' }">
      <v-row justify="center">
        <v-col :md="5">
          <Login />
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
import Login from '~/components/login/Login'
import Breadcrumbs from '~/components/Breadcrumbs'

export default {
  name: 'LoginPage',
  components: { Login, Breadcrumbs },
  data () {
    return {
      breadcrumbsItems: [
        {
          disabled: false,
          exact: false,
          href: '#',
          link: false,
          text: 'چی بخونم',
          to: '#'
        },
        {
          disabled: true,
          exact: false,
          href: '#',
          link: false,
          text: 'پنل کاربری من',
          to: '#'
        }
      ]
    }
  }
}
</script>
