<template>
  <div class="specs">
    <p class="subject">
      {{ title }}
    </p>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ProductSpecs',
  props: {
    title: {
      type: String,
      default: 'Title',
      required: true
    }
  }
}
</script>

<style scoped>
  .specs {
    display: flex;
    flex-direction: row;
    box-shadow: 0 1px 0 #e8e8e8;
    font-size: 0.9rem;
    align-items: center;
    line-height: 40px;
  }

  .specs:hover {
    box-shadow: 0 0 12px rgba(4, 5, 5, 0.1);
    margin: 0 -30px;
    padding: 0 30px;
  }

  .subject {
    width: 30%;
    font-size: 0.9rem;
  }

  .specs .subject {
    margin: 0;
  }

</style>
