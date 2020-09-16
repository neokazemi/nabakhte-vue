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
          <p style="text-align: center;">
            <strong>به نام خدا</strong>
          </p>
          <p>چی بخونم یک سایت فرهنگی برای افزایش آگاهی و اطلاع رسانی به دانش آموزان ایرانی است. بسیاری از ما کلی کتاب خاک خورده در کتابخانه هایمان داریم که ممکن است بدون اطلاعات کافی یا حتی با اطلاعات غلط خریده باشیم. بنابراین چی بخونم با هدف اطلاع رسانی در حوزه کتاب های کمک آموزشی پا به عرصه وجود گذاشت و تاکنون بخش هایی مثل مشاوره آفلاین، مقالات آموزشی و اخبار مرتبط به سایت اضافه شده اند. همچنین سایت چی بخونم با هدف دسترسی راحت همه دانش آموزان به منابع مناسب، اقدام به راه اندازی بخش فروش کرده است و محصولات را در اسرع وقت و با کمترین هزینه ممکن به دست مشتریان در سراسر ایران می رساند.</p>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs'
export default {
  name: 'AboutUs',
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
          text: 'درباره ما',
          to: '#'
        }
      ]
    }
  }
}
</script>
