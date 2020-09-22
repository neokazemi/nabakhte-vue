<template>
  <v-container>
    <v-row>
      <v-col>
        <Breadcrumbs :items="breadcrumbsItems" />
      </v-col>
    </v-row>
    <v-row>
      <v-col />
    </v-row>
  </v-container>
</template>

<script>
import Breadcrumbs from '../../components/Breadcrumbs'
export default {
  name: 'Cart',
  components: {
    Breadcrumbs
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
          disabled: true,
          exact: false,
          href: '#',
          link: false,
          text: 'سبد خرید',
          to: '#'
        }
      ]
    }
  }
}

</script>
