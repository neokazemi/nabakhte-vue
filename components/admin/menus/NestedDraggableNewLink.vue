<template>
  <draggable v-if="children.length" class="dragArea" tag="ul" :list="children" :group="{ name: 'g1', pull: 'clone', put: false }">
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
    <v-card v-for="(item, index) in children" :key="index" outlined elevation="4" class="ma-3 menu-button">
      <v-card-title :style="{ display: 'flex', 'justify-content': 'space-between', padding: '6px' }">
        <div class="menu-name-on-new-link">
          <v-text-field
            v-model="item.data.title"
            label="نام"
            outlined
            dense
          />
          <v-text-field
            v-model="item.data.link"
            label="لینک"
            outlined
            dense
          />
        </div>
        <div class="buttons">
          <v-btn icon @click="addItem(children[0])">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>
      </v-card-title>
    </v-card>
  </draggable>
  <draggable v-else class="dragArea" tag="ul" :list="children" :group="{ name: 'g1', pull: 'clone', put: false }">
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
    <v-card v-for="(item, index) in children" :key="index" outlined elevation="4" class="ma-3 menu-button">
      <v-card-title :style="{ display: 'flex', 'justify-content': 'space-between', padding: '6px' }">
        <div class="menu-name-on-new-link">
          <v-text-field
            v-model="item.data.title"
            label="نام"
            outlined
            dense
          />
          <v-text-field
            v-model="item.data.link"
            label="لینک"
            outlined
            dense
          />
        </div>
        <div class="buttons">
          <v-btn icon @click="addItem(children[0])">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>
      </v-card-title>
    </v-card>
  </draggable>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'NestedDraggableNewLink',
  components: {
    draggable
  },
  props: {
    children: {
      required: true
    }
  },
  data () {
    return {
      nameChange: false
    }
  },
  methods: {
    addItem (object) {
      this.$emit('addItem', object)
    }
  }
}
</script>

<style scoped>
  .dragArea {
    min-height: 24px;
    padding-left: 0;
  }
</style>

<style>
.menu-name-on-new-link {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80%;
}

.menu-name-on-new-link .v-text-field__details {
  display: none;
}
</style>
