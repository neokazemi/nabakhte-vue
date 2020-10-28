<template>
  <div>
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
export default {
  name: 'Index',
  components: { ContentTable, ContentFilter }
}
</script>

<style scoped>
.main {
  background-color: #8e8e8e;
}
</style>
