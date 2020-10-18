<template>
  <v-container>
    <v-row>
      <v-col>
        <v-treeview
          :open-all="true"
          :items="treeView"
          :dense="true"
          :class="{ 'mobile-treeview': isFromPc }"
        >
          <template slot="label" slot-scope="props">
            <nuxt-link v-if="props.item.slug" :to="'/blog/category/' + props.item.slug">
              {{ props.item.name }}
            </nuxt-link>
            <span v-else>{{ props.item.name }}</span>
          </template>
        </v-treeview>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Treeview',
  props: {
    treeView: {
      type: Array,
      required: false,
      default () {
        return []
      }
    }
  },
  computed: {
    isFromPc () {
      return this.$store.getters.isFromPc
    }
  }
}
</script>

<style>
  .v-treeview {
    font-weight: bold;
    font-size: 1rem;
  }

  .mobile-treeview {
    text-align: right;
    color: #fff;
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

  .mobile-treeview a {
    color: #fff;
  }

  .v-treeview a:hover {
    color: #d81816;
  }

  .v-treeview-node__children .v-treeview-node__root {
    font-size: 0.8rem;
  }

</style>
