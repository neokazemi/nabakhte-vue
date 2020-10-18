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
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    color: #7b7777;
    display: flex;
    flex-direction: row;
    font-weight: bold;
    justify-content: space-between;
    padding: 0 25px;
  }

  .toggle-button-container .v-input--switch {
    direction: ltr;
    float: left;
  }
</style>
