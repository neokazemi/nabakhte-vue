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
        <v-col class="columns-display">
          <v-switch
            v-model="switch1"
            class="switches-position mt-2"
          />
          <p class="mt-3 p-tag-size">
            تاریخ درج:
          </p>
          <v-text-field
            id="my-custom-input"
            v-model="date"
            placeholder="از تاریخ"
            outlined
            dense
            class="filter-elements ml-2"
          />

          <date-picker
            v-model="date"
            format="jYYYY/jMM/jDD"
            element="my-custom-input"
            width="10px"
          />
          <v-text-field
            id="my-custom-input2"
            v-model="date2"
            placeholder="تا تاریخ"
            outlined
            dense
            class="filter-elements "
          />
          <date-picker
            v-model="date2"
            format="jYYYY/jMM/jDD"
            element="my-custom-input2"
            width="10px"
          />
        </v-col>
      </v-row>

      <br>
      <br>
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
  components: {
    datePicker: () => import('vue-persian-datetime-picker')
  },
  data: () => ({
    items: ['item1', 'item2', 'item3', 'item4'],
    switch1: false,
    date: '',
    date2: '',
    date3: '',
    date4: ''
  })
}
</script>

<style lang="scss" scoped>
@import url('~/assets/scss/components/admin/ordersPanel/filters/coupons.scss');
</style>
