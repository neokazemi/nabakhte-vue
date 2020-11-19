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
    <ContentInfo /><div class="d-flex justify-end">
      <v-btn
        color="#b2dfdb"
        elevation="3"
        class="ml-5 mt-5 mb-5"
      >
        اعمال تغییرات
      </v-btn>
    </div>
  </div>
</template>

<script>
import ContentInfo from '../../../../components/admin/InformationCorrections/contentInfo'
export default {
  name: 'Edit',
  components: { ContentInfo }
}
</script>

<style scoped>
  .main {
    background-color: #8e8e8e;

  }

</style>
