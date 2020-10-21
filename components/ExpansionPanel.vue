<template>
  <v-expansion-panels accordion>
    <v-expansion-panel v-for="(item, index) in data" :key="index">
      <v-expansion-panel-header class="name" expand-icon="+" disable-icon-rotate>
        {{ item.name }}
      </v-expansion-panel-header>
      <div class="details">
        <v-expansion-panel-content v-for="(itemDetails, detailsIndex) in item.details" :key="detailsIndex" eager>
          <label :for="detailsIndex">
            <input type="checkbox" :name="detailsIndex">
            {{ itemDetails }}
          </label>
        </v-expansion-panel-content>
      </div>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import '~/assets/css/components/ExpansionPanel.css'

export default {
  name: 'ExpansionPanel',
  props: {
    data: {
      type: Array,
      default () {
        return []
      },
      required: true
    }
  }
}
</script>

<style scoped>
  @import url('~/assets/css/components/ExpansionPanelScoped.css');
</style>
