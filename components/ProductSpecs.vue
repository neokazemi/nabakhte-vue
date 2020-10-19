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
    align-items: center;
    box-shadow: 0 1px 0 #e8e8e8;
    display: flex;
    flex-direction: row;
    font-size: 0.9rem;
    line-height: 40px;
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
  }

  .specs:hover {
    box-shadow: 0 0 12px rgba(4, 5, 5, 0.1);
    margin: 0 -30px;
    padding: 0 30px;
  }

  .subject {
    font-size: 0.9rem;
    width: 30%;
  }

  .specs .subject {
    margin: 0;
  }

</style>
