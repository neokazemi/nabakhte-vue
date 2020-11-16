<template>
  <div class="comment">
    <div class="comment-details">
      <div class="likes">
        {{ data.likes }}
      </div>
      <div class="author-details">
        <p class="author-name">
          {{ data.name }}
        </p>
        <div>
          <a href="#">پاسخ دهید</a>
          <p>{{ data.date }}</p>
        </div>
      </div>
    </div>
    <div class="comment-text">
      {{ data.text }}
    </div>
  </div>
</template>

<script>
import '~/assets/scss/components/header/CommentScoped.scss'
export default {
  name: 'Comment',
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import '~/assets/scss/components/header/CommentScoped.scss';
</style>
