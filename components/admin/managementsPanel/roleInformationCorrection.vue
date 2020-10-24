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

    <v-row>
      <v-col>
        <v-card class="cards-margin px-5">
          <v-card-title>
            اطلاعات الزامی
          </v-card-title>
          <v-row>
            <v-col>
              <v-text-field
                v-model="name"
                class="input-elements"
                label="نام"
                outlined
                dense
              />
              <v-text-field
                v-model="rolename"
                class="input-elements"
                label="نام قابل نمایش "
                outlined
                dense
              />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card
          class="cards-margin px-5 "
        >
          <v-card-title>
            اطلاعات اختیاری
          </v-card-title>
          <v-row>
            <v-col>
              <v-textarea
                class="input-elements"
                label="توضیح نقش"
                outlined
                dense
              />
              <v-select
                class="input-elements"
                label="دسترسی "
                solo
                dense
                items="items"
              />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <div class="d-flex justify-end">
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
export default {
  name: 'RoleInformationCorrection',
  data: () => ({
    items: ['پنل ادمین', 'درج دسترسی', 'نمایش دسترسی'],
    name: 'employmentSupportDepartment',
    rolename: 'پشتیبان استخدام'
  })

}
</script>

<style lang="scss" scoped>
@import url('~/assets/scss/components/admin/managementsPanel/roleInformationCorrection.scss');
</style>
