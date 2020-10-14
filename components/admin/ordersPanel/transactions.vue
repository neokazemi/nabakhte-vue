<template>
  <v-card class="the-card">
    <v-row>
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

    <v-row>
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
    <v-row>
      <v-col>
        <p class="the-p">
          وضعیت تراکنش:
        </p>
      </v-col>
      <v-col>
        <v-select
          class="the-select"
          :items="items"
          label="موفق/ناموفق"
          solo
          dense
        />
      </v-col>
      <v-col>
        <v-text-field
          class="the-text-field1"
          label="کد تراکنش"
          outlined
          dense
        />
      </v-col>
      <v-col>
        <v-text-field
          class="the-text-field1"
          label="توضیح مدیریتی"
          outlined
          dense
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-switch
          v-model="switch1"
          class="the-switch"
        />
        <v-col>
          <p class="the-p">
            تاریخ پرداخت:
          </p>
        </v-col>
      </v-col>
      <v-col>
        <v-text-field
          class="the-text-field"
          label="از تاریخ"
          filled
          dense
        />
      </v-col>
      <v-col>
        <v-text-field
          class="the-text-field"
          label="تا تاریخ"
          filled
          dense
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-switch
          v-model="switch1"
          class="the-switch"
        />
        <v-col>
          <p class="the-p">
            مهلت پرداخت:
          </p>
        </v-col>
      </v-col>
      <v-col>
        <v-text-field
          class="the-text-field"
          label="از تاریخ"
          filled
          dense
        />
      </v-col>
      <v-col>
        <v-text-field
          class="the-text-field"
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
        <v-card>
          <br>
          مجموع مبالغ تراکنش ها
          <br>
          <br>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-btn
            class="the-btn-2"
            color="white"
            elevation="3"
            x-large
            outlined
          >
            لیست تراکنش های تایید نشده زرین پال
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'Transactions',
  data: () => ({
    items: ['item1', 'item2', 'item3', 'item4'],
    switch1: false
  })
}
</script>

<style scoped>
.the-card {
  margin-bottom: 20px;
  padding: 10px;
}

.the-text-field {
  float: right;
  margin-top: 9px;
  margin-right: 7px;
}

.the-text-field1 {
  float: right;
  margin-top: 9px;
  margin-right: 9px;
  width: 70%;
}

.the-select {
  float: right;
  margin-top: 5px;
}

.the-select1 {
  float: right;
  margin-top: 5px;
  width: 50%;
}

.the-switch {
  float: right;
}

.the-p {
  float: right;
  margin-top: 9px;
  margin-right: 10px;
}

.the-btn {
  background-color: #004d40;
  width: 100%;
}

.the-btn-2 {
  background-color: darkkhaki;
  width: 100%;
}
</style>
