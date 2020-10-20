<template>
  <div>
    <date-picker v-model="date" />
  </div>
</template>

<script>
// import VuePersianDatetimePicker from 'vue-persian-datetime-picker'
export default {
  name: 'Test',
  components: {
    datePicker: () => import('vue-persian-datetime-picker')
  },
  data: () => ({
    date: ''
  })
}
</script>

<style scoped>
.main {
  background-color: #8e8e8e;
}
</style>
