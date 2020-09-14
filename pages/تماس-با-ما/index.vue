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
          <p>آدرس ایمیل : <strong>info@chibekhoonam.net</strong></p>
          <p>آیدی تلگرام پشتیانی فروش : <strong>chisupport</strong></p>
          <p>تلفن ثابت : <strong>66979455-021</strong></p>
          <p>در ساعات اداری (9 صبح تا 6 عصر) پاسخگوی شما خواهیم بود.</p>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs'
export default {
  name: 'ContactUs',
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
          text: 'تماس با ما',
          to: '#'
        }
      ]
    }
  }
}
</script>
