<template>
  <div class="toggle-button-container">
    <div v-for="(item, index) in data" :key="index" class="toggle-button-item">
      <p>{{ item.name }}</p>
      <v-switch />
    </div>
  </div>
</template>
<script>
import '~/assets/css/components/ToggleButton.css'

export default {
  name: 'ToggleButton',
  props: {
    data: {
      type: Array,
      default () {
        return [
          {
            name: 'نمایش کالاهای موجود'
          },
          {
            name: 'تحلیل'
          }
        ]
      },
      required: false
    }
  }
}
</script>
