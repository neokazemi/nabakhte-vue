<template>
  <div>
    {{ thenumber }}
  </div>
</template>

<script>
export default {
  name: 'Test',
  props: {
    thenumber: Number
  },

  data: () => ({
    test: Number

  })
}
</script>

<style scoped>
  .main {
    background-color: #8e8e8e;
  }

</style>
