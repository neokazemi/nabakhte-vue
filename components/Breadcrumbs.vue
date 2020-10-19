<template>
  <v-row class="bread-row">
    <v-col class="bread-col">
      <v-breadcrumbs :divider="divider" :items="items" />
    </v-col>
  </v-row>
</template>

<script>
import '~/assets/css/components/Breadcrumbs.css'

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
