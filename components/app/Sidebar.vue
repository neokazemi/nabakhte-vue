<template>
  <v-sheet
    :tile="true"
    :elevation="5"
    :color="'white'"
  >
    <v-container>
      <v-row
        no-gutters
      >
        <v-col>
          <template>
            <v-treeview
              :open-all="true"
              :items="treeView"
              :dense="true"
            >
              <template slot="label" slot-scope="props">
                <nuxt-link v-if="props.item.slug" :to="'/blog/category/' + props.item.slug">
                  {{ props.item.name }}
                </nuxt-link>
                <span v-else>{{ props.item.name }}</span>
              </template>
            </v-treeview>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    treeView: {
      type: Array,
      required: false
    }
  }
}
</script>

<style>
  .v-treeview {
    font-weight: bold;
    font-size: 1rem;
  }

  .v-treeview .v-treeview-node .v-icon {
    display: none;
  }

  .v-treeview .v-treeview-node__level {
    width: 10px;
  }

  .v-treeview a {
    color: #000;
  }

  .v-treeview a:hover {
    color: #d81816;
  }

  .v-treeview-node__children .v-treeview-node__root {
    font-size: 0.8rem;
  }

</style>
