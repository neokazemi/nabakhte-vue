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
    <content-add />
  </div>
</template>

<script>
import ContentAdd from '~/components/admin/contentPanel/contentAdd'
export default {

  name: 'Index',
  components: { ContentAdd },
  middleware: 'auth'
}
</script>

<style scoped>
.main {
  background-color: #8e8e8e;
}
</style>
