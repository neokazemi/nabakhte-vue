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
      type: Object
    }
  }
}
</script>

<style scoped>
  .comment {
    background-color: #f8f8f8;
    border: 1px dashed #d4d4d4;
    padding: 15px;
    margin: 25px 0;
    border-radius: 14px;
    display: flex;
    flex-direction: row;
  }

  .comment-details {
    background-color: #9b9b9b;
    box-shadow: 0 2px 3px rgba(4, 5, 5, 0.15);
    border-radius: 4px;
    color: #fff;
    margin-left: 20px;
    display: flex;
    flex-direction: row;
    padding: 7px;
  }

  .likes {
    width: 50px;
    text-align: center;
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
    text-decoration: none;
    color: #fff;
    font-size: 0.7rem;
    font-weight: bold;
    margin: 0 10px;
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
