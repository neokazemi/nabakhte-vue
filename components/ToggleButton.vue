<template>
  <div class="toggle-button-container">
    <div v-for="(item, index) in data" :key="index" class="toggle-button-item">
      <p>{{ item.name }}</p>
      <v-switch />
    </div>
  </div>
</template>
<script>
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

<style>
  .toggle-button-container {
    display: flex;
    flex-direction: column;
  }

  .toggle-button-item {
    font-weight: bold;
    color: #7b7777;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }

  .toggle-button-container .v-input--switch {
    direction: ltr;
    float: left;
  }
</style>
