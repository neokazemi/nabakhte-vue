<template>
  <draggable class="dragArea" tag="ul" :list="children" :group="{ name: 'g1' }" @change="onListChange">
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
      <v-card-title :style="{ display: 'flex', 'justify-content': 'space-between' }">
        <div class="menu-name-parent">
          <v-container v-if="item.editMode" :fluid="true" class="menu-name">
            <v-row class="main-data">
              <v-col :md="6">
                <v-text-field
                  v-model="item.data_buffer.title"
                  label="نام"
                  outlined
                  dense
                  @keydown="item.needSave = true"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                  v-model="item.data_buffer.link"
                  label="لینک"
                  outlined
                  dense
                  @keydown="item.needSave = true"
                />
              </v-col>
              <v-col>
                <v-checkbox
                  v-model="item.data_buffer.newTab"
                  label="باز کردن در زبانه جدید"
                  hide-details
                />
              </v-col>
            </v-row>
          </v-container>
          <div v-else class="static-menu-name">
            <p>{{ item.data.title }}</p>
            <a :href="item.data.link" target="_blank">
              {{ item.data.link }}
            </a>
          </div>
        </div>
        <div class="buttons">
          <v-chip
            color="green"
            outlined
          >
            {{ item.type }}
          </v-chip>
          <v-btn v-if="item.needSave" icon @click="save(item)">
            <v-icon color="#2bbb28">
              mdi-content-save
            </v-icon>
          </v-btn>
          <v-btn v-if="!item.editMode" icon @click="enableEditMode(item)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn v-if="item.editMode" icon color="red" @click="cancelEditMode(item)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon @click="deleteItem(item.id)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
      </v-card-title>
      <nested-draggable :children="item.children.list" @listChanged="onListChange" @deleteItem="deleteItem" />
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
    children: {
      type: Array,
      required: true
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
    },
    deleteItem (id) {
      this.$emit('deleteItem', id)
    },
    enableEditMode (item) {
      item.buffer()
      item.editMode = true
      // this.$emit('listChanged')
    },
    cancelEditMode (item) {
      item.editMode = false
      item.needSave = false
    },
    save (item) {
      item.apply()
      item.editMode = false
    }
  }
}
</script>

<style scoped>
  .dragArea {
    min-height: 24px;
  }

  .buttons {
    display: flex;
    align-self: flex-start;
    margin-top: 6px;
    margin-right: 15px;
  }
</style>

<style>
  .menu-name .v-text-field__details {
    display: none;
  }

  .menu-name-parent .v-input--checkbox {
    margin-top: 9px;
    padding-top: 0;
  }

  .menu-name-parent {
    width: calc(100% - 190px);
  }

  .static-menu-name {
    display: flex;
    flex-direction: row;
  }

  .static-menu-name * {
    font-size: 16px;
    line-height: 44px;
  }

  .menu-name-parent .menu-name .v-input {
    margin-left: 10px;
  }
</style>
