<template>
  <draggable
    v-bind="dragOptions"
    tag="div"
    class="item-container"
    :list="list"
    :value="value"
    @input="emitter"
  >
    <div v-for="el in realValue" :key="el.id" class="item-group">
      <div class="item">
        {{ el.name }}
      </div>
      <nested-test class="item-sub" :list="el.elements" />
    </div>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'NestedTest',
  components: {
    draggable
  },
  props: {
    value: {
      required: false,
      type: Array,
      default: null
    },
    list: {
      required: false,
      type: Array,
      default: null
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
    }
  },
  methods: {
    emitter (value) {
      this.$emit('input', value)
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
    border: solid #000 1px;
    background-color: #fefefe;
  }

  .item-sub {
    margin: 0 0 0 1rem;
  }
</style>
