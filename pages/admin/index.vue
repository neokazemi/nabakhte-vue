<template>
  <div>
    <Menu />
    <v-btn @click="logout">
      logout
    </v-btn>
  </div>
</template>

<script>
import Menu from '~/components/admin/menu'
export default {
  name: 'Index',
  middleware: 'Auth',
  components: { Menu },
  methods: {
    logout () {
      this.$store.dispatch('auth/logout')
        .then(() => {
          alert('logout')
        })
    }
  }
}
</script>

<style scoped>
.main {
  background-color: #8e8e8e;
}
</style>
