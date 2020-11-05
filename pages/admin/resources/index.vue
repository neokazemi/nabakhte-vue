<template>
  <div>
    <Menu />
    <v-row>
      <v-col>
        <addresource />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <resources-table />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ResourcesTable from '~/components/admin/resourcesPanel/resourcesTable'
import Addresource from '~/components/admin/resourcesPanel/addresource'
import Menu from '~/components/admin/menu'
export default {
  name: 'Index',
  components: { Menu, Addresource, ResourcesTable }
}
</script>

<style scoped>
.main {
  background-color: #8e8e8e;
}
</style>
