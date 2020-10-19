<template>
  <v-row class="bread-row">
    <v-col class="bread-col">
      <v-breadcrumbs :divider="divider" :items="items" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  props: {
    items: {
      type: Array,
      required: true,
      default () {
        return []
      }
    },
    divider: {
      type: String,
      required: false,
      default: '>'
    }
  }
}
</script>

<style>
  .bread-col {
    padding: 0 12px;
  }

  .bread-col ul {
    padding: 0 12px;
  }

  .v-breadcrumbs .v-breadcrumbs__item {
    font-weight: bold;
    color: #000;
  }
</style>
