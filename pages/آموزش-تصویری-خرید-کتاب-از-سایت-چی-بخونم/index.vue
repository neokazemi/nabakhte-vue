<template>
  <v-container>
    <v-row>
      <v-col>
        <breadcrumbs :items="breadcrumbsItems" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-sheet
          :elevation="1"
          class="article-post-content"
        >
          <p>خرید از سایت چی بخونم خیلی راحته و نیازی به ثبت نام در سایت نیست. شما با انجام دادن چند مرحله به سادگی میتونید خریدتون رو انجام بدید:</p>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs'
export default {
  name: 'BuyHelp',
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
          text: 'آموزش تصویری خرید کتاب از سایت چی بخونم',
          to: '#'
        }
      ]
    }
  }
}
</script>
