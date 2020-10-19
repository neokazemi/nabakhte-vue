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

<style scoped>
  @import url('../assets/css/components/CommentScoped.css');
</style>
