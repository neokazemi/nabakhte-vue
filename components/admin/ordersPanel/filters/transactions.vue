<template>
  <v-card class="the-card">
    <div class="the-div">
      <v-row class="the-row">
        <v-col>
          <v-text-field
            class="the-text-field"
            label="نام"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            class="the-text-field"
            label="نام خانوادگی"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            class="the-text-field"
            label="شماره موبایل"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            class="the-text-field"
            label="کد ملی"
            outlined
            dense
          />
        </v-col>
      </v-row>

      <v-row class="the-row">
        <v-col>
          <v-select
            class="the-select"
            :items="items"
            label="وضعیت سفارش"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-select
            class="the-select"
            :items="items"
            label="نحوه پرداخت"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-select
            class="the-select"
            :items="items"
            label="وضعیت پرداخت"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-select
            class="the-select"
            :items="items"
            label="درگاه پرداخت"
            solo
            dense
          />
        </v-col>
      </v-row>
      <v-row class="the-row">
        <v-col>
          <p
            class="the-p2"
          >
            وضعیت تراکنش:
          </p>
        </v-col>
        <v-col>
          <v-select
            class="the-last-select"
            :items="items"
            label="موفق / ناموفق"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            class="the-text-field"
            label="کد تراکنش"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            class="the-text-field"
            label="توضیح مدیریتی"
            outlined
            dense
          />
        </v-col>
      </v-row>
      <v-row class="the-row2">
        <v-col cols="1">
          <v-switch
            v-model="switch1"
            class="the-switch"
          />
        </v-col>
        <v-col>
          <v-col>
            <p class="the-p">
              تاریخ پرداخت:
            </p>
          </v-col>
        </v-col>
        <v-col>
          <v-text-field
            class="the-filled-text-field"
            label="از تاریخ"
            filled
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            class="the-filled-text-field"
            label="تا تاریخ"
            filled
            dense
          />
        </v-col>
      </v-row>
      <v-row class="the-row">
        <v-col cols="1">
          <v-switch
            v-model="switch1"
            class="the-switch"
          />
        </v-col>
        <v-col>
          <v-col>
            <p class="the-p">
              مهلت پرداخت:
            </p>
          </v-col>
        </v-col>
        <v-col>
          <v-text-field
            class="the-filled-text-field"
            label="از تاریخ"
            filled
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            class="the-filled-text-field"
            label="تا تاریخ"
            filled
            dense
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-select
            class="the-select1"
            :items="items"
            label="انتخاب ستون های اصلی"
            solo
            dense
          />
        </v-col>
      </v-row>
      <v-row />
      <v-row />
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
.the-last-select {
  float: right;
  margin-top: 12px;
  transform: scale(0.875);
  transform-origin: left;
}

.the-p2 {
  float: right;
  margin-top: 25px;
  margin-right: 10px;
  width: 100%;
  transform: scale(0.875);
  transform-origin: left;
}

.the-row {
  height: 50px;
  margin-top: 2px;
  margin-bottom: 2px;
}

.the-row2 {
  height: 50px;
  margin-top: 4px;
  margin-bottom: 2px;
}

.the-card {
  margin-bottom: 20px;
}

.the-switch {
  float: right;
  width: 10%;
}

.the-select {
  float: right;
  transform: scale(0.875);
  transform-origin: left;
}

.the-select1 {
  float: right;
  width: 80%;
  margin-top: 9px;
  transform: scale(0.875);
  transform-origin: left;
}

.the-text-field {
  float: right;
  margin-top: 9px;
  transform: scale(0.875);
  transform-origin: left;
}

.the-div {
  margin: 10px;
}

.the-p {
  float: right;
  margin-top: 7px;
  margin-right: 10px;
  transform: scale(0.875);
  transform-origin: left;
}

.the-filled-text-field {
  float: right;
  height: 50%;
  transform: scale(0.875);
  transform-origin: left;
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
</style>
