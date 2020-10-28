<template>
  <v-card class="main-card-height mb-20">
    <div class="ma-10">
      <v-row>
        <v-col>
          <v-text-field
            class=" filter-elements mb-2.5 mt-2.5 pr-0"
            label="نام"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            class=" filter-elements mb-2.5 mt-2.5 pr-0"
            label="نام خانوادگی"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            class=" filter-elements mb-2.5 mt-2.5 pr-0"
            label="شماره موبایل"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            class=" filter-elements mb-2.5 mt-2.5 pr-0"
            label="کد ملی"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-select
            class=" filter-elements mb-2.5 mt-2.5 pr-0"
            :items="items"
            label="رشته"
            solo
            dense
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="columns-display">
          <v-switch
            v-model="switch1"
            class="switches-position mt-1"
          />

          <v-select
            class=" filter-elements mb-2.5 mt-2.5 pr-0 ml-1"
            :items="items"
            label="انتخاب محصول سفارش داده شده"
            solo
            dense
          />

          <v-select
            class=" filter-elements mb-2.5 mt-2.5 pr-0"
            :items="items"
            label="انتخاب ویژگی افزوده"
            solo
            dense
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-select
            class=" filter-elements mb-2.5 mt-2.5 pr-0"
            :items="items"
            label="وضعیت سفارش"
            solo
            dense
          />
        </v-col>

        <v-col>
          <v-select
            class=" filter-elements mb-2.5 mt-2.5 pr-0"
            :items="items"
            label="وضعیت پرداخت"
            solo
            dense
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="columns-display">
          <v-switch
            v-model="switch1"
            class="switches-position mt-1"
          />
          <v-select
            class=" filter-elements mb-2.5 mt-2.5 pr-0"
            :items="items"
            label="وضعیت تراکنش"
            solo
            dense
          />
        </v-col>
        <v-col class="columns-display">
          <v-switch
            v-model="switch1"

            class="switches-position mt-1"
          />
          <v-select
            class=" filter-elements mb-2.5 mt-2.5 pr-0"
            :items="items"
            label="وضعیت تسویه"
            solo
            dense
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-select
            class=" filter-elements mb-2.5 mt-2.5 pr-0"
            :items="items"
            label="انتخاب ستون های اصلی"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-select
            class=" filter-elements mb-2.5 mt-2.5 pr-0"
            :items="items"
            label="مرتب سازی بر اساس"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-select
            class=" filter-elements mb-2.5 mt-2.5 pr-0"
            :items="items"
            label="نزولی/صعودی"
            solo
            dense
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col class="columns-display">
          <v-switch
            v-model="switch1"
            class="switches-position mt-1"
          />

          <v-text-field
            class=" filter-elements mb-2.5 mt-2.5 pr-0"
            label="کد پستی"
            outlined
            dense
          />
        </v-col>
        <v-col class="columns-display">
          <v-switch
            v-model="switch1"
            class="switches-position mt-1"
          />

          <v-text-field
            class=" filter-elements mb-2.5 mt-2.5 pr-0"
            label="استان"
            outlined
            dense
          />
        </v-col>
        <v-col class="columns-display">
          <v-switch
            v-model="switch1"
            class="switches-position mt-1"
          />

          <v-text-field
            class=" filter-elements mb-2.5 mt-2.5 pr-0"
            label="شهر"
            outlined
            dense
          />
        </v-col>
        <v-col class="columns-display">
          <v-switch
            v-model="switch1"
            class="switches-position mt-1"
          />

          <v-text-field
            class=" filter-elements mb-2.5 mt-2.5 pr-0"
            label="مدرسه"
            outlined
            dense
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="columns-display">
          <v-switch
            v-model="switch1"
            class="switches-position mt-1"
          />

          <v-text-field
            class=" filter-elements mb-2.5 mt-2.5 pr-0"
            label="آدرس"
            outlined
            dense
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="columns-display">
          <v-switch
            v-model="switch1"
            class="switches-position mt-1"
          />

          <v-textarea
            class="text-areas-size mt-2 mb-0"
            solo
            dense
            label="توضیحات مشتری"
          />
        </v-col>
        <v-col class="columns-display">
          <v-switch
            v-model="switch1"
            class="switches-position mt-1"
          />

          <v-textarea
            class="text-areas-size mt-2 mb-0"
            solo
            dense
            label="توضیحات مدیر"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col class="columns-display">
          <v-switch
            v-model="switch1"
            class="switches-position mt-2"
          />
          <p class="mt-3 p-tag-size">
            تاریخ ثبت اولیه:
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
      <v-row>
        <v-col class="columns-display">
          <v-switch
            v-model="switch1"
            class="switches-position mt-2"
          />
          <p class="mt-3 p-tag-size">
            تاریخ اصلاح مدیریتی:
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
      <v-row>
        <v-col class="columns-display">
          <v-switch
            v-model="switch1"
            class="switches-position mt-2"
          />
          <p class="mt-3 p-tag-size">
            تاریخ ثبت نهایی:
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
      <v-row>
        <v-col class="columns-display">
          <p class="mt-2 last-line-p-tags">
            قیمت سفارش:
          </p>
          <v-select
            class=" mb-2.5 mt-2.5 pr-0 last-line-inputs"
            :items="items"
            label="برابر با"
            solo
            dense
          />
          <v-text-field
            class=" mb-2.5 mt-2.5 pr-0 mr-2 last-line-inputs"
            solo
            dense
          />
        </v-col>
        <v-col class="columns-display">
          <p class="last-line-p-tags mt-2">
            تخفیف سفارش:
          </p>
          <v-select
            class=" mb-2.5 mt-2.5 pr-0 last-line-inputs"
            :items="items"
            label="برابر با"
            solo
            dense
          />
          <v-text-field
            class=" mb-2.5 mt-2.5 pr-0 mr-2 last-line-inputs"
            solo
            dense
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
  name: 'Orders',
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
@import url('~/assets/scss/components/admin/ordersPanel/filters/orders.scss');
</style>
