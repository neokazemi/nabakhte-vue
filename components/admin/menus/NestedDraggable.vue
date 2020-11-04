<template>
  <draggable class="dragArea" tag="ul" :list="tasks" :group="{ name: 'g1' }" @change="onListChange">
    <!--    <v-card-->
    <!--      v-for="el in tasks"-->
    <!--      :key="el.name"-->
    <!--      outlined-->
    <!--      elevation="4"-->
    <!--      class="ma-3"-->
    <!--    >-->
    <!--      <v-card-title>-->
    <!--        {{ el.name }}-->
    <!--      </v-card-title>-->
    <!--      <nested-draggable :tasks="el.tasks" />-->
    <!--    </v-card>-->
    <v-card v-for="(item, index) in tasks" :key="index" outlined elevation="4" class="ma-3 menu-button">
      <v-card-title :style="{ display: 'flex', 'justify-content': 'space-between' }">
        <div>
          <div v-if="item.editMode" class="menu-name">
            <v-text-field
              v-model="item.name"
              label="نام"
              outlined
              dense
              @keydown="item.needSave = true"
            />
            <v-text-field
              v-model="item.link"
              label="لینک"
              outlined
              dense
              @keydown="item.needSave = true"
            />
          </div>
          <div v-else class="static-menu-name">
            <p>{{ item.name }}</p>
            <a :href="item.link" target="_blank">
              {{ item.link }}
            </a>
          </div>
        </div>
        <div class="buttons">
          <v-btn v-if="item.needSave" icon @click="item.editMode = false ; item.needSave = false">
            <v-icon color="#2bbb28">
              mdi-content-save
            </v-icon>
          </v-btn>
          <v-btn v-if="!item.needSave" icon @click="item.editMode = !item.editMode">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon @click="deleteItem(item.id)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
      </v-card-title>
      <nested-draggable :tasks="item.tasks" />
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
  },
  data () {
    return {
      nameChange: false
    }
  },
  methods: {
    onListChange () {
      this.$emit('listChanged')
    }
  }
}
</script>

<style scoped>
  .dragArea {
    min-height: 24px;
  }

  .menu-name {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 500px;
  }
</style>

<style>
  .menu-name .v-text-field__details {
    display: none;
  }

  .static-menu-name {
    display: flex;
    flex-direction: row;
  }

  .static-menu-name * {
    font-size: 16px;
    line-height: 44px;
  }
</style>
