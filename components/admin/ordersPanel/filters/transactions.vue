<template>
  <v-card class="mb-20">
    <div class="ma-10">
      <v-row>
        <v-col>
          <v-text-field
            class="filter-elements mb-2.5 mt-2.5 pr-0"
            label="نام"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            class="filter-elements mb-2.5 mt-2.5 pr-0"
            label="نام خانوادگی"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            class="filter-elements mb-2.5 mt-2.5 pr-0"
            label="شماره موبایل"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            class="filter-elements mb-2.5 mt-2.5 pr-0"
            label="کد ملی"
            outlined
            dense
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-select
            class="filter-elements mb-2.5 mt-2.5 pr-0"
            :items="items"
            label="وضعیت سفارش"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-select
            class="filter-elements mb-2.5 mt-2.5 pr-0"
            :items="items"
            label="نحوه پرداخت"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-select
            class="filter-elements mb-2.5 mt-2.5 pr-0"
            :items="items"
            label="وضعیت پرداخت"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-select
            class="filter-elements mb-2.5 mt-2.5 pr-0"
            :items="items"
            label="درگاه پرداخت"
            solo
            dense
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="columns-display">
          <p
            class="p-tag-size mt-4 mr-6"
          >
            وضعیت تراکنش:
          </p>
          <v-select
            class="filter-elements mb-2.5 mt-2.5 pr-0 mr-2"
            :items="items"
            label="موفق / ناموفق"
            solo
            dense
          />
          <v-text-field
            class="filter-elements mb-2.5 mt-2.5 pr-0 mr-2"
            label="کد تراکنش"
            outlined
            dense
          />
          <v-text-field
            class="filter-elements mb-2.5 mt-2.5 pr-0 mr-2"
            label="توضیح مدیریتی"
            outlined
            dense
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="columns-display">
          <v-switch
            v-model="switch1"
            class="switches-position mt-2"
          />
          <p class="mt-3 date-p-tag-size">
            تاریخ پرداخت:
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
        <v-col class="columns-display">
          <v-switch
            v-model="switch1"
            class="switches-position mt-2"
          />
          <p class="mt-3 date-p-tag-size">
            مهلت پرداخت:
          </p>
          <v-text-field
            id="my-custom-input3"
            v-model="date3"
            placeholder="از تاریخ"
            outlined
            dense
            class="filter-elements ml-2"
          />
          <date-picker
            v-model="date3"
            format="jYYYY/jMM/jDD"
            element="my-custom-input3"
            width="10px"
          /> <v-text-field
            id="my-custom-input4"
            v-model="date4"
            placeholder="تا تاریخ"
            outlined
            dense
            class="filter-elements"
          />
          <date-picker
            v-model="date4"
            format="jYYYY/jMM/jDD"
            element="my-custom-input4"
            width="10px"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-select
            class="filter-elements mb-2.5 mt-2.5 pr-0"
            :items="items"
            label="انتخاب ستون های اصلی"
            solo
            dense
          />
        </v-col>
        <v-col />
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
      <v-row>
        <v-col>
          <v-card class="sum-card pa-5">
            مجموع مبالغ تراکنش ها
          </v-card>
        </v-col>
        <v-col>
          <v-btn
            class="zarinpal-btn"
            color="white"
            elevation="3"
            x-large
            outlined
          >
            لیست تراکنش های تایید نشده زرین پال
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'Transactions',
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
@import url('~/assets/scss/components/admin/ordersPanel/filters/transactions.scss');
</style>
