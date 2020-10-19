<template>
  <v-card class="mb-20">
    <div class="ma-10">
      <v-row>
        <v-col>
          <v-text-field
            class="form-elements-size mb-2.5 mt-2.5 pr-0"
            label="نام"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            class="form-elements-size mb-2.5 mt-2.5 pr-0"
            label="نام خانوادگی"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            class="form-elements-size mb-2.5 mt-2.5 pr-0"
            label="شماره موبایل"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            class="form-elements-size mb-2.5 mt-2.5 pr-0"
            label="کد ملی"
            outlined
            dense
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-select
            class="form-elements-size mb-2.5 mt-2.5 pr-0"
            :items="items"
            label="نام کالایی که از خرید آن بن دریافت کرده است"
            solo
            dense
          />
        </v-col>

        <v-col>
          <v-select
            class="form-elements-size mb-2.5 mt-2.5 pr-0"
            :items="items"
            label="وضعیت  بن"
            solo
            dense
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1">
          <v-switch
            v-model="switch1"
            class="switches-position mt-12"
          />
        </v-col>
        <p class="mt-8 ml-8 p-tag-size mr-6">
          تاریخ درج:
        </p>

        <v-col cols="2">
          <v-text-field
            class="form-elements-size mb-2.5 mt-2.5 pr-0"
            label="از تاریخ"
            filled
            dense
          />
        </v-col>
        <v-col cols="2">
          <v-text-field
            class="form-elements-size mb-2.5 mt-2.5 pr-0"
            label="تا تاریخ"
            filled
            dense
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-select
            class="form-elements-size mb-2.5 mt-2.5 pr-0"
            :items="items"
            label="انتخاب ستون های اصلی"
            solo
            dense
          />
        </v-col>
        <v-col />
      </v-row>
      <v-row>
        <v-col />
        <v-col />
        <v-col />
        <v-col>
          <v-btn
            color="white"
            class="filter-btn"
            elevation="3"
            x-large
            outlined
            rounded
          >
            فیلتر
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'Coupons',
  data: () => ({
    items: ['item1', 'item2', 'item3', 'item4'],
    switch1: false
  })
}
</script>

<style scoped>
/* @import "assets/scss/components/admin/ordersPanel/filters/coupons.scss"; */
</style>
