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
        <v-col cols="1">
          <v-switch
            v-model="switch1"
            class="switches-position mt-8"
          />
        </v-col>

        <v-col>
          <v-select
            class=" filter-elements mb-2.5 mt-2.5 pr-0"
            :items="items"
            label="انتخاب محصول سفارش داده شده"
            solo
            dense
          />
        </v-col>
        <v-col>
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
        <v-col cols="1">
          <v-switch
            v-model="switch1"
            class="switches-position mt-8"
          />
        </v-col>

        <v-col>
          <v-select
            class=" filter-elements mb-2.5 mt-2.5 pr-0"
            :items="items"
            label="وضعیت تراکنش"
            solo
            dense
          />
        </v-col>
        <v-col cols="1">
          <v-switch
            v-model="switch1"

            class="switches-position mt-8"
          />
        </v-col>
        <v-col>
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
        <v-col cols="1">
          <v-switch
            v-model="switch1"
            class="switches-position mt-8"
          />
        </v-col>
        <v-col>
          <v-text-field
            class=" filter-elements mb-2.5 mt-2.5 pr-0"
            label="کد پستی"
            outlined
            dense
          />
        </v-col>
        <v-col cols="1">
          <v-switch
            v-model="switch1"
            class="switches-position mt-8"
          />
        </v-col>
        <v-col>
          <v-text-field
            class=" filter-elements mb-2.5 mt-2.5 pr-0"
            label="استان"
            outlined
            dense
          />
        </v-col>
        <v-col cols="1">
          <v-switch
            v-model="switch1"
            class="switches-position mt-8"
          />
        </v-col>
        <v-col>
          <v-text-field
            class=" filter-elements mb-2.5 mt-2.5 pr-0"
            label="شهر"
            outlined
            dense
          />
        </v-col>
        <v-col cols="1">
          <v-switch
            v-model="switch1"
            class="switches-position mt-8"
          />
        </v-col>
        <v-col>
          <v-text-field
            class=" filter-elements mb-2.5 mt-2.5 pr-0"
            label="مدرسه"
            outlined
            dense
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1">
          <v-switch
            v-model="switch1"
            class="switches-position mt-8"
          />
        </v-col>
        <v-col>
          <v-text-field
            class=" filter-elements mb-2.5 mt-2.5 pr-0"
            label="آدرس"
            outlined
            dense
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="1">
          <v-switch
            v-model="switch1"
            class="switches-position mt-8"
          />
        </v-col>
        <v-col>
          <v-textarea
            class="text-areas-size mt-2 mb-0"
            solo
            dense
            label="توضیحات مشتری"
          />
        </v-col>
        <v-col cols="1">
          <v-switch
            v-model="switch1"
            class="switches-position mt-8"
          />
        </v-col>
        <v-col>
          <v-textarea
            class="text-areas-size mt-2 mb-0"
            solo
            dense
            label="توضیحات مدیر"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="1">
          <v-switch
            v-model="switch1"
            class="switches-position mt-12 "
          />
        </v-col>
        <p class="mt-8 ml-8 p-tag-size mr-6">
          تاریخ ثبت اولیه:
        </p>
        <v-col cols="2">
          <v-text-field
            class="the-filled-text-field filter-elements mb-2.5 mt-2.5 pr-0"
            label="از تاریخ"
            filled
            dense
          />
        </v-col>
        <v-col cols="2">
          <v-text-field
            class="the-filled-text-field filter-elements mb-2.5 mt-2.5 pr-0"
            label="تا تاریخ"
            filled
            dense
          />
        </v-col>
        <v-col />
      </v-row>
      <v-row>
        <v-col cols="1">
          <v-switch
            v-model="switch1"
            class="switches-position mt-12 "
          />
        </v-col>
        <p class="mt-8 ml-8 p-tag-size mr-6">
          تاریخ اصلاح مدیریتی:
        </p>
        <v-col cols="2">
          <v-text-field
            class="the-filled-text-field filter-elements mb-2.5 mt-2.5 pr-0"
            label="از تاریخ"
            filled
            dense
          />
        </v-col>
        <v-col cols="2">
          <v-text-field
            class="the-filled-text-field filter-elements mb-2.5 mt-2.5 pr-0"
            label="تا تاریخ"
            filled
            dense
          />
        </v-col>
        <v-col />
      </v-row>
      <v-row>
        <v-col cols="1">
          <v-switch
            v-model="switch1"
            class="switches-position mt-12 "
          />
        </v-col>
        <p class="mt-8 ml-8 p-tag-size mr-6">
          تاریخ ثبت نهایی:
        </p>
        <v-col cols="2">
          <v-text-field
            class="the-filled-text-field filter-elements mb-2.5 mt-2.5 pr-0"
            label="از تاریخ"
            filled
            dense
          />
        </v-col>
        <v-col cols="2">
          <v-text-field
            class="the-filled-text-field filter-elements mb-2.5 mt-2.5 pr-0"
            label="تا تاریخ"
            filled
            dense
          />
        </v-col>
        <v-col />
      </v-row>
      <v-row>
        <p
          class="mt-10 ml-8 p-tag-size mr-6"
        >
          قیمت سفارش:
        </p>
        <v-col>
          <v-select
            class=" filter-elements mb-2.5 mt-6.5 pr-0"
            :items="items"
            label="برابر با"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            class=" filter-elements mb-2.5 mt-6.5 pr-0"
            outlined
            dense
          />
        </v-col>
        <p
          class="mt-10 ml-8 p-tag-sizep mr-6"
        >
          نخفیف سفارش:
        </p>
        <v-col>
          <v-select
            class=" filter-elements  mb-2.5 mt-6.5 pr-0"
            :items="items"
            label="برابر با"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            class=" filter-elements mb-2.5 mt-6.5 pr-0"
            outlined
            dense
          />
        </v-col>
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
  name: 'Orders'
}
</script>

<style scoped>
/* @import "assets/scss/components/admin/ordersPanel/filters/orders.scss"; */
</style>
