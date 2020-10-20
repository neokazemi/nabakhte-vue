<template>
  <div>
    <div v-if="isFromPc" class="mobile-box">
      <div class="category">
        <p>مقالات</p>
      </div>
      <div class="post-title">
        <p>
          {{ post.title | limitLength(70) }}
        </p>
      </div>
      <div class="excerpt">
        <p>
          {{ post.excerpt | limitLength(150) }}
        </p>
      </div>
    </div>
    <v-card
      v-else
      :link="true"
      :href="'#'"
      hover
      class="mx-auto mb-5 post"
      @mouseenter="toggleSubtitleVisibility"
      @mouseleave="toggleSubtitleVisibility"
    >
      <v-img
        class="white--text align-end"
        src="https://media.chibekhoonam.net/2020/08/entekhab-reshte-motevasete-1.jpg"
      />
      <v-card-title>
        {{ post.title }}
      </v-card-title>
      <div class="post-meta">
        <div class="date">
          {{ post.date.replace('T', ' ') }}
        <!--        {{ post.shamsiDate(post.date.replace('T', ' ')).date }}-->
        </div>
        <div class="category">
          مقالات
        </div>
        <div class="comments">
          بدون دیدگاه
        </div>
        <div class="author">
          توسط مشاور آموزشی
        </div>
      </div>
      <transition name="slide-fade">
        <v-card-subtitle
          class="pb-0"
        >
          <a href="#" class="more-info">ادامه مطلب</a>
          {{ post.excerpt | limitLength(200) }}
        </v-card-subtitle>
      </transition>
      <v-card-actions />
    </v-card>
  </div>
</template>

<script>
import '~/assets/css/components/PostItem.css'

export default {
  name: 'PostItem',
  filters: {
    limitLength (input, limit) {
      if (input.length > limit) {
        let subtitle = input.substring(0, limit)
        subtitle = subtitle.substr(0, Math.min(subtitle.length, subtitle.lastIndexOf(' ')))
        return subtitle + ' ...'
      } else { return input }
    }
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      showSub: false
    }
  },
  computed: {
    isFromPc () {
      return this.$store.getters.isFromPc
    }
  },
  methods: {
    toggleSubtitleVisibility () {
      this.showSub = !this.showSub
    }
  }
}
</script>

<style scoped>
  @import url('~/assets/css/components/PostItemScoped.css');
</style>
