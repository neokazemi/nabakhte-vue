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
  .comment {
    background-color: #f8f8f8;
    border: 1px dashed #d4d4d4;
    border-radius: 14px;
    display: flex;
    flex-direction: row;
    margin: 25px 0;
    padding: 15px;
  }

  .comment-details {
    background-color: #9b9b9b;
    border-radius: 4px;
    box-shadow: 0 2px 3px rgba(4, 5, 5, 0.15);
    color: #fff;
    display: flex;
    flex-direction: row;
    margin-left: 20px;
    padding: 7px;
  }

  .likes {
    text-align: center;
    width: 50px;
  }

  .author-details {
    display: flex;
    flex-direction: column;
  }

  .author-details .author-name {
    font-size: 0.85rem;
    font-weight: bold;
  }

  .author-details a {
    color: #fff;
    font-size: 0.7rem;
    font-weight: bold;
    margin: 0 10px;
    text-decoration: none;
  }

  .author-details div p {
    font-size: 0.9rem;
  }

  .author-details div {
    display: flex;
    flex-direction: row;
  }

  .comment-text {
    font-size: 0.9rem;
    padding-top: 10px;
  }

  .comment .comment-details .author-details p {
    margin: 0;
  }

</style>
