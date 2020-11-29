<template>
  <div>
    <Menu />
    <content-group-table />
  </div>
</template>

<script>

import ContentGroupTable from '~/components/admin/contentPanel/contentGroupTable'
import Menu from '~/components/admin/menu'
export default {
  name: 'Index',
  components: { Menu, ContentGroupTable },
  middleware: 'auth'
}
</script>

<style scoped>
  .main {
    background-color: #8e8e8e;
  }
</style>
