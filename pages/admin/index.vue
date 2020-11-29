<template>
  <div>
    <Menu />
  </div>
</template>

<script>
import Menu from '~/components/admin/menu'

export default {
  name: 'Index',
  middleware: 'auth',
  components: { Menu }
}
</script>

<style scoped>
.main {
  background-color: #8e8e8e;
}
</style>
