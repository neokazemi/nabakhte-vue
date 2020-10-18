<template>
  <v-card class="the-card">
    <div class="the-div">
      <v-row>
        <v-col>
          <v-text-field
            class=" the-row"
            label="نام"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            class=" the-row"
            label="نام خانوادگی"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            class=" the-row"
            label="شماره موبایل"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            class=" the-row"
            label="کد ملی"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-select
            class=" the-row"
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
            class="the-switch"
          />
        </v-col>

        <v-col>
          <v-select
            class=" the-row"
            :items="items"
            label="انتخاب محصول سفارش داده شده"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-select
            class=" the-row"
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
            class=" the-row"
            :items="items"
            label="وضعیت سفارش"
            solo
            dense
          />
        </v-col>

        <v-col>
          <v-select
            class=" the-row"
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
            class="the-switch"
          />
        </v-col>

        <v-col>
          <v-select
            class=" the-row"
            :items="items"
            label="وضعیت تراکنش"
            solo
            dense
          />
        </v-col>
        <v-col cols="1">
          <v-switch
            v-model="switch1"

            class="the-switch"
          />
        </v-col>
        <v-col>
          <v-select
            class=" the-row"
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
            class=" the-row"
            :items="items"
            label="انتخاب ستون های اصلی"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-select
            class=" the-row"
            :items="items"
            label="مرتب سازی بر اساس"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-select
            class=" the-row"
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
            class="the-switch "
          />
        </v-col>
        <v-col>
          <v-text-field
            class=" the-row"
            label="کد پستی"
            outlined
            dense
          />
        </v-col>
        <v-col cols="1">
          <v-switch
            v-model="switch1"
            class="the-switch"
          />
        </v-col>
        <v-col>
          <v-text-field
            class=" the-row"
            label="استان"
            outlined
            dense
          />
        </v-col>
        <v-col cols="1">
          <v-switch
            v-model="switch1"
            class="the-switch"
          />
        </v-col>
        <v-col>
          <v-text-field
            class=" the-row"
            label="شهر"
            outlined
            dense
          />
        </v-col>
        <v-col cols="1">
          <v-switch
            v-model="switch1"
            class="the-switch"
          />
        </v-col>
        <v-col>
          <v-text-field
            class=" the-row"
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
            class="the-switch "
          />
        </v-col>
        <v-col>
          <v-text-field
            class=" the-row"
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
            class="the-switch "
          />
        </v-col>
        <v-col>
          <v-textarea
            class="the-text-area mt-2 mb-0"
            solo
            dense
            label="توضیحات مشتری"
          />
        </v-col>
        <v-col cols="1">
          <v-switch
            v-model="switch1"
            class="the-switch"
          />
        </v-col>
        <v-col>
          <v-textarea
            class="the-text-area mt-2 mb-0"
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
            class="the-switch mt-4 "
          />
        </v-col>
        <p class="mt-8 ml-8 the-p mr-6">
          تاریخ ثبت اولیه:
        </p>
        <v-col cols="2">
          <v-text-field
            class="the-filled-text-field the-row"
            label="از تاریخ"
            filled
            dense
          />
        </v-col>
        <v-col cols="2">
          <v-text-field
            class="the-filled-text-field the-row"
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
            class="the-switch mt-4 "
          />
        </v-col>
        <p class="mt-8 ml-8 the-p mr-6">
          تاریخ اصلاح مدیریتی:
        </p>
        <v-col cols="2">
          <v-text-field
            class="the-filled-text-field the-row"
            label="از تاریخ"
            filled
            dense
          />
        </v-col>
        <v-col cols="2">
          <v-text-field
            class="the-filled-text-field the-row"
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
            class="the-switch mt-4 "
          />
        </v-col>
        <p class="mt-8 ml-8 the-p mr-6">
          تاریخ ثبت نهایی:
        </p>
        <v-col cols="2">
          <v-text-field
            class="the-filled-text-field the-row"
            label="از تاریخ"
            filled
            dense
          />
        </v-col>
        <v-col cols="2">
          <v-text-field
            class="the-filled-text-field the-row"
            label="تا تاریخ"
            filled
            dense
          />
        </v-col>
        <v-col />
      </v-row>
      <v-row>
        <p
          class="mt-10 ml-8 the-p mr-6"
        >
          قیمت سفارش:
        </p>
        <v-col>
          <v-select
            class=" the-row mt-4"
            :items="items"
            label="برابر با"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            class=" the-row mt-4"
            outlined
            dense
          />
        </v-col>
        <p
          class="mt-10 ml-8 the-p mr-6"
        >
          نخفیف سفارش:
        </p>
        <v-col>
          <v-select
            class=" the-row mt-4"
            :items="items"
            label="برابر با"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            class=" the-row mt-4"
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
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'Orders'
}
</script>

<style scoped>
.the-card {
  margin-bottom: 20px;
  height: 900px;
}

.the-btn {
  background-color: #00bfa5;
  width: 100%;
}

.the-div {
  margin: 10px;
}

.the-p {
  font-size: 14px;
  width: 120px;
}

.the-text-area {
  float: right;
  font-size: 14px;
  width: 100%;
}

.the-row {
  height: 20px;
  margin-top: 2.5px;
  margin-bottom: 2.5px;
  width: 100%;
  right: 0;
  padding-right: 0;
  float: right;
}

.the-switch {
  float: left;
  margin-top: 8px;
  height: 20px;
}

.v-text-field--filled > .v-input__control > .v-input__slot .the-row,
.v-text-field--full-width > .v-input__control > .v-input__slot .the-row,
.v-text-field--outlined > .v-input__control > .v-input__slot .the-row {
  min-height: 30px !important;
}

.v-text-field >>> input {
  font-size: 14px;
  font-weight: 100;
  text-transform: capitalize;
}

.v-text-field >>> label {
  font-size: 14px;
}
</style>
