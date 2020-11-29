<template>
  <div>
    <Menu />
    <v-row>
      <v-col>
        <content-filter />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <content-table />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ContentFilter from '~/components/admin/contentPanel/contentFilter'
import ContentTable from '~/components/admin/contentPanel/contentTable'
import Menu from '~/components/admin/menu'
export default {
  name: 'Index',
  components: { Menu, ContentTable, ContentFilter },
  middleware: 'auth'
}
</script>

<style scoped>
.main {
  background-color: #8e8e8e;
}
</style>
