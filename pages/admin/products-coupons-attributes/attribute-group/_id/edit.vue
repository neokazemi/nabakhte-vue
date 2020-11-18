<template>
  <div>
    <div
      class="d-flex justify-end"
    >
      <v-btn
        color="#b2dfdb"
        elevation="3"
        class="ml-5 mt-5 mb-5"
        @click="$router.go(-1)"
      >
        بازگشت >>
      </v-btn>
    </div>
    <v-expansion-panels focusable multiple>
      <v-expansion-panel>
        <v-expansion-panel-header>اصلاح اطلاعات صفت خدمات دریافتی</v-expansion-panel-header>
        <v-expansion-panel-content>
          <attribute-category-information-correction />

          <div class="d-flex justify-end">
            <v-btn
              color="#b2dfdb"
              elevation="3"
              class="ml-5 mt-5 mb-5"
            >
              اعمال تغییرات
            </v-btn>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>اصلاح اطلاعات مقدار صفت خدمات دریافتی</v-expansion-panel-header>
        <v-expansion-panel-content>
          <attribute-group-information-correction />

          <div class="d-flex justify-end">
            <v-btn
              color="#b2dfdb"
              elevation="3"
              class="ml-5 mt-5 mb-5"
            >
              اعمال تغییرات
            </v-btn>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import AttributeCategoryInformationCorrection
  from '~/components/admin/managementsPanel/attributeCategoryInformationCorrection'
import AttributeGroupInformationCorrection
  from '~/components/admin/managementsPanel/attributeGroupInformationCorrection'
export default {
  name: 'Edit',
  middleware: 'Auth',
  components: { AttributeGroupInformationCorrection, AttributeCategoryInformationCorrection }
}
</script>

<style scoped>
  .main {
    background-color: #8e8e8e;
  }
</style>
