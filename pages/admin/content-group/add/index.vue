<template>
  <div>
    <div class="d-flex justify-end">
      <v-btn

        color="#b2dfdb"
        elevation="3"
        class="ml-5 mt-5 mb-5"
        @click="$router.go(-1)"
      >
        بازگشت >>
      </v-btn>
    </div>
    <content-group-add />
  </div>
</template>

<script>

import ContentGroupAdd from '~/components/admin/contentPanel/contentGroupAdd'
export default {
  name: 'Add',
  components: { ContentGroupAdd },
  middleware: 'Auth'
}
</script>

<style scoped>
  .main {
    background-color: #8e8e8e;
  }
</style>
