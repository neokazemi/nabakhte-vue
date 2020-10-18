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

<style>

  .post .v-card__title {
    font-size: 0.9rem;
  }

  .post .v-card__title,
  .post .v-card__subtitle,
  .post .post-meta {
    background-color: #d81816;
    color: #fff !important;
  }

  .post .post-meta {
    font-size: 0.65rem;
    line-height: 30px;
    padding-bottom: 20px;
  }

  .post .post-meta div {
    margin: auto 20px auto 0;
    display: inline-block;
  }

  .post .post-meta div::after {
    content: "|";
    margin: auto 20px auto 0;
  }

  .post .post-meta div:last-child::after {
    display: none;
  }

  .post .v-card__subtitle {
    padding-top: 0;
    visibility: hidden;
    opacity: 1;
    height: 0;
    transition: all 0.3s ease;
    font-size: 0.7rem;
  }

  .post:hover .v-card__subtitle {
    visibility: visible;
    height: 75px;
    opacity: 1;
  }

  .post .more-info {
    transition: all 0.3s ease;
    opacity: 0;
    display: block;
    float: left;
    background-color: #fff;
    line-height: 28px;
    color: #000;
    padding: 0 15px;
    border-radius: 5px;
    margin-top: 10px;
    margin-right: 50px;
    height: 0;
  }

  .post:hover .more-info {
    opacity: 1;
    height: auto;
  }

</style>

<style scoped>
  .mobile-box {
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: #fff;
    padding: 28px 18px 29px 22px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12);
    margin-bottom: 10px;
  }

  .mobile-box div {
    margin-bottom: 10px;
  }

  .mobile-box .category p {
    background-color: #d81816;
    height: 20px;
    font-weight: bold;
    color: #fff;
    width: fit-content;
    font-size: 12px;
    border-radius: 4px;
    padding: 0 4px;
    line-height: 20px;
  }

  .mobile-box .post-title p {
    font-size: 16px;
    line-height: 32px;
    font-weight: bold;
  }

  .mobile-box .excerpt p {
    font-size: 12px;
    line-height: 26px;
  }
</style>
