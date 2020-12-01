<template>
  <Menu />
</template>

<script>
import Menu from '~/components/admin/menu'

export default {
  name: 'Index',
  middleware: 'auth',
  components: { Menu }
}
</script>
