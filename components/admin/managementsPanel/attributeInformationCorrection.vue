<template>
  <div>
    <v-row>
      <v-col>
        <v-card class="mr-3 ml-3">
          <v-card-title>
            اطلاعات الزامی
          </v-card-title>
          <v-row>
            <v-col>
              <v-text-field class="input-elements mx-3" label="نام صفت" dense outlined />

              <v-text-field class="input-elements mx-3" label="نام قابل نمایش" dense outlined />

              <v-select class="input-elements mx-3" label="نوع کنترل صفت" dense solo />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="ml-3">
          <v-card-title>
            اطلاعات اختیاری
          </v-card-title>

          <v-textarea
            class="mt-3
         mx-3"
            label="توضیح صفت"
            dense
            outlined
          />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'AttributeInformationCorrection'
}
</script>

<style lang="scss" scoped>
@import url('~/assets/scss/components/admin/managementsPanel/attributeInformationCorrection.scss');

</style>
