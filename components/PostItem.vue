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
import mixinDetectDevice from '~/plugins/mixinDetectDevice'
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
  mixins: [mixinDetectDevice],
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
  methods: {
    toggleSubtitleVisibility () {
      this.showSub = !this.showSub
    }
  }
}
</script>

<style>

  .post .v-card__title {
    font-size: 0.9rem;
  }

  .post .v-card__title,
  .post .v-card__subtitle,
  .post .post-meta {
    color: #fff !important;
    background-color: #d81816;
  }

  .post .post-meta {
    font-size: 0.65rem;
    line-height: 30px;
    padding-bottom: 20px;
  }

  .post .post-meta div {
    display: inline-block;
    margin: auto 20px auto 0;
  }

  .post .post-meta div::after {
    margin: auto 20px auto 0;
    content: '|';
  }

  .post .post-meta div:last-child::after {
    display: none;
  }

  .post .v-card__subtitle {
    font-size: 0.7rem;
    visibility: hidden;
    height: 0;
    padding-top: 0;
    opacity: 1;
    transition: all 0.3s ease;
  }

  .post:hover .v-card__subtitle {
    visibility: visible;
    height: 75px;
    opacity: 1;
  }

  .post .more-info {
    line-height: 28px;
    color: #000;
    display: block;
    float: left;
    height: 0;
    margin-top: 10px;
    margin-right: 50px;
    padding: 0 15px;
    opacity: 0;
    transition: all 0.3s ease;
    border-radius: 5px;
    background-color: #fff;
  }

  .post:hover .more-info {
    height: auto;
    opacity: 1;
  }

</style>

<style scoped>
  .mobile-box {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    padding: 28px 18px 29px 22px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);
    border-radius: 8px;
    background-color: #fff;
  }

  .mobile-box div {
    margin-bottom: 10px;
  }

  .mobile-box .category p {
    font-size: 12px;
    font-weight: bold;
    line-height: 20px;
    color: #fff;
    width: fit-content;
    height: 20px;
    padding: 0 4px;
    border-radius: 4px;
    background-color: #d81816;
  }

  .mobile-box .post-title p {
    font-size: 16px;
    font-weight: bold;
    line-height: 32px;
  }

  .mobile-box .excerpt p {
    font-size: 12px;
    line-height: 26px;
  }
</style>
