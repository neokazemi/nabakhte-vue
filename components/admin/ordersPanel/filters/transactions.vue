<template>
  <v-card class="the-card">
    <div class="the-div">
      <v-row>
        <v-col>
          <v-text-field
            class="the-row"
            label="نام"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            class="the-row"
            label="نام خانوادگی"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            class="the-row"
            label="شماره موبایل"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            class="the-row"
            label="کد ملی"
            outlined
            dense
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-select
            class="the-row"
            :items="items"
            label="وضعیت سفارش"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-select
            class="the-row"
            :items="items"
            label="نحوه پرداخت"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-select
            class="the-row"
            :items="items"
            label="وضعیت پرداخت"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-select
            class="the-row"
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
            class="the-row"
            :items="items"
            label="موفق / ناموفق"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            class="the-row"
            label="کد تراکنش"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            class="the-row"
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
            class="the-switch mt-4"
          />
        </v-col>
        <p class="mt-8 ml-8 the-p mr-6">
          تاریخ پرداخت:
        </p>
        <v-col cols="2">
          <v-text-field
            class="the-row"
            label="از تاریخ"
            filled
            dense
          />
        </v-col>
        <v-col cols="2">
          <v-text-field
            class="the-row"
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
            class="the-switch mt-4"
          />
        </v-col>
        <p class="mt-8 ml-8 the-p mr-6">
          مهلت پرداخت:
        </p>
        <v-col cols="2">
          <v-text-field
            class="the-row"
            label="از تاریخ"
            filled
            dense
          />
        </v-col>
        <v-col cols="2">
          <v-text-field
            class="the-row"
            label="تا تاریخ"
            filled
            dense
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-select
            class="the-row"
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
          <v-card class="the-card2">
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
.the-card {
  margin-bottom: 20px;
}

.the-div {
  margin: 10px;
}

.the-p {
  font-size: 14px;
  width: 120px;
}

.the-btn-2 {
  background-color: #e57373;
  width: 100%;
}

.the-btn {
  background-color: #00bfa5;
  width: 100%;
}

.the-card2 {
  height: 50px;
  padding: 5px;
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
