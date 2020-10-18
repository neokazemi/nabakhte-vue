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
  .details {
    color: #000;
    font-size: 0.75rem;
    font-weight: bold;
    max-height: 300px;
    overflow-y: auto;
  }

  button {
    background-color: #fff !important;
  }

  .v-expansion-panels {
    border-radius: 0;
  }

  .name {
    color: #7b7777;
    font-size: 1rem;
    font-weight: bold;
    line-height: 30px;
  }

  .v-expansion-panel::before {
    box-shadow: none;
  }
</style>

<style>
  .name .v-expansion-panel-header__icon {
    left: 10px;
    margin: 0;
    position: absolute;
  }

  .name .v-expansion-panel-header__icon i {
    font-size: 14px;
    font-style: normal;
  }

  .v-application .elevation-5 {
    box-shadow: none !important;
  }

  .v-expansion-panel:hover .name,
  .v-expansion-panels .v-expansion-panel:hover .name .v-expansion-panel-header__icon .v-icon {
    color: #2bbb28 !important;
  }
</style>
