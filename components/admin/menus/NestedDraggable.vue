<template>
  <draggable class="dragArea" tag="ul" :list="tasks" :group="{ name: 'g1' }">
    <v-card
      v-for="el in tasks"
      :key="el.name"
      outlined
      elevation="4"
      class="ma-3"
    >
      <v-card-title>
        {{ el.name }}
      </v-card-title>
      <nested-draggable :tasks="el.tasks" />
    </v-card>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'NestedDraggable',
  components: {
    draggable
  },
  props: {
    tasks: {
      required: true,
      type: Array
    }
  }
}
</script>

<style scoped>
  .dragArea {
    min-height: 12px;
  }
</style>
