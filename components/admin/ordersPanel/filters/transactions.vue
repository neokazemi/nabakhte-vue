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
        <v-col>
          <p
            class="the-p mt-4 mr-10"
          >
            وضعیت تراکنش:
          </p>
        </v-col>
        <v-col>
          <v-select
            class="filter-elements mb-2.5 mt-2.5 pr-0"
            :items="items"
            label="موفق / ناموفق"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            class="filter-elements mb-2.5 mt-2.5 pr-0"
            label="کد تراکنش"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            class="filter-elements mb-2.5 mt-2.5 pr-0"
            label="توضیح مدیریتی"
            outlined
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
        <p class="mt-8 ml-8 the-p mr-6">
          تاریخ پرداخت:
        </p>
        <v-col cols="2">
          <v-text-field
            class="filter-elements mb-2.5 mt-2.5 pr-0"
            label="از تاریخ"
            filled
            dense
          />
        </v-col>
        <v-col cols="2">
          <v-text-field
            class="filter-elements mb-2.5 mt-2.5 pr-0"
            label="تا تاریخ"
            filled
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
        <p class="mt-8 ml-8 the-p mr-6">
          مهلت پرداخت:
        </p>
        <v-col cols="2">
          <v-text-field
            class="filter-elements mb-2.5 mt-2.5 pr-0"
            label="از تاریخ"
            filled
            dense
          />
        </v-col>
        <v-col cols="2">
          <v-text-field
            class="filter-elements mb-2.5 mt-2.5 pr-0"
            label="تا تاریخ"
            filled
            dense
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
      <v-row>
        <v-col />
        <v-col />
        <v-col />
        <v-col>
          <v-btn
            color="white"
            class="the-btn"
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
          <v-card class="the-card2 pa-5">
            مجموع مبالغ تراکنش ها
          </v-card>
        </v-col>
        <v-col>
          <v-btn
            class="the-btn-2"
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
  name: 'Transactions'
}
</script>

<style scoped>
/* @import "assets/scss/components/admin/ordersPanel/filters/transactions.scss"; */
</style>
