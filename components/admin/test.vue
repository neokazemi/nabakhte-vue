<template>
  <div>
    <date-picker v-model="date"></date-picker>
  </div>
</template>

<script>
import VuePersianDatetimePicker from 'vue-persian-datetime-picker'
export default {
  name: 'test',
  data: () => ({
    date: ''
  }),
  components: {
    datePicker: () => import(VuePersianDatetimePicker)
  }
}
</script>

<style scoped>
.main {
  background-color: #8e8e8e;
}
</style>
