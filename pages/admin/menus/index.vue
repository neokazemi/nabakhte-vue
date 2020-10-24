<template>
  <draggable
    :list="list"
    :disabled="!enabled"
    class="list-group"
    ghost-class="ghost"
    :move="checkMove"
    @start="dragging = true"
    @end="dragging = false"
  >
    <div
      v-for="element in list"
      :key="element.name"
      class="list-group-item"
    >
      {{ element.name }}
    </div>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'
let id = 1
export default {
  name: 'NestedWithVmodel',
  display: 'Nested (v-model & vuex)',
  order: 16,
  components: {
    draggable
  },
  data () {
    return {
      enabled: true,
      list: [
        { name: 'John', id: 0 },
        { name: 'Joao', id: 1 },
        { name: 'Jean', id: 2 }
      ],
      dragging: false
    }
  },
  computed: {
    draggingInfo () {
      return this.dragging ? 'under drag' : ''
    }
  },
  methods: {
    add () {
      this.list.push({ name: 'Juan ' + id, id: id++ })
    },
    replace () {
      this.list = [{ name: 'Edgard', id: id++ }]
    },
    checkMove (e) {
      window.console.log('Future index: ' + e.draggedContext.futureIndex)
    }
  }
}
</script>
