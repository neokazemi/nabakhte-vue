<template>
  <Menu />
</template>

<script>
import Menu from '~/components/admin/menu'
export default {
  name: 'Index',
  middleware: 'Auth',
  components: { Menu }
}
</script>

<style scoped>
.main {
  background-color: #8e8e8e;
}
</style>
