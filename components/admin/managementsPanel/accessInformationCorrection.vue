<template>
  <div>
    <div class="d-flex justify-end">
      <v-btn
        color="#b2dfdb"
        elevation="3"
        class="ml-5 mt-5 mb-5"
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
                label="نام دسترسی"
                outlined
                dense
              />
              <v-text-field
                v-model="available_name"
                class="input-elements"
                label="نام قابل نمایش دسترسی"
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
            <v-textarea
              class="input-elements"
              label="توضیح دسترسی"
              outlined
              dense
            />
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
  name: 'AccessInformationCorrection',
  data: () => ({
    name: 'access1',
    available_name: 'دانلود فایل کارنامه نتایج کنکور'

  })
}
</script>
<style lang="scss" scoped>
@import url('~/assets/scss/components/admin/managementsPanel/accessInformationCorrection.scss');
</style>
