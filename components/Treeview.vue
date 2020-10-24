<template>
  <v-container>
    <v-row>
      <v-col>
        <v-treeview
          :open-all="true"
          :items="treeView"
          :dense="true"
          :class="{ 'mobile-treeview': !isFromPc }"
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
import '~/assets/css/components/Treeview.css'
import mixinDetectDevice from '~/plugins/mixinDetectDevice'

export default {
  name: 'Treeview',
  mixins: [mixinDetectDevice],
  props: {
    treeView: {
      type: Array,
      required: false,
      default () {
        return []
      }
    }
  }
}
</script>
