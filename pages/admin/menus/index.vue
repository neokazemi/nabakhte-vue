<template>
  <div class="row">
    <div class="col" dir="ltr">
      <h3>Nested draggable</h3>
      <nested-draggable :tasks="list1" />
    </div>
  </div>
  <!--
    <draggable-->
  <!--    :list="list"-->
  <!--    :disabled="!enabled"-->
  <!--    class="list-group"-->
  <!--    ghost-class="ghost"-->
  <!--    :move="checkMove"-->
  <!--    @start="dragging = true"-->
  <!--    @end="dragging = false"-->
  <!--  >-->
  <!--    <div-->
  <!--      v-for="element in list"-->
  <!--      :key="element.name"-->
  <!--      class="list-group-item"-->
  <!--    >-->
  <!--      {{ element.name }}-->
  <!--    </div>-->
  <!--  </draggable>-->
</template>

<script>
import NestedDraggable from '~/components/admin/menus/NestedDraggable'
let id = 1

export default {
  name: 'NestedWithVmodel',
  display: 'Nested (v-model & vuex)',
  order: 16,
  components: {
    NestedDraggable
  },
  data () {
    return {
      value: null,

      enabled: true,
      list: [
        { name: 'John', id: 0 },
        { name: 'Joao', id: 1 },
        { name: 'Jean', id: 2 }
      ],
      list1: [
        {
          name: 'task 1',
          tasks: [
            {
              name: 'task 2',
              tasks: []
            }
          ]
        },
        {
          name: 'task 3',
          tasks: [
            {
              name: 'task 4',
              tasks: []
            }
          ]
        },
        {
          name: 'task 5',
          tasks: []
        }
      ],
      dragging: false
    }
  },
  computed: {
    dragOptions () {
      return {
        animation: 0,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
      }
    },
    // this.value when input = v-model
    // this.list  when input != v-model
    realValue () {
      return this.value ? this.value : this.list
    },
    draggingInfo () {
      return this.dragging ? 'under drag' : ''
    }
  },
  methods: {
    emitter (value) {
      this.$emit('input', value)
    },
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

<style scoped>
  .item-container {
    max-width: 20rem;
    margin: 0;
  }

  .item {
    padding: 1rem;
    border: solid 1px #000;
    background-color: #fefefe;
  }

  .item-sub {
    margin: 0 0 0 1rem;
  }
</style>
