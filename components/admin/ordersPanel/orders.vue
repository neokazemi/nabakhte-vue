<template>
  <v-card class="the-card">
    <v-row>
      <v-col>
        <v-text-field
          class="the-text-field"
          label="نام"
          outlined
        />
      </v-col>
      <v-col>
        <v-text-field
          class="the-text-field"
          label="نام خانوادگی"
          outlined
        />
      </v-col>
      <v-col>
        <v-text-field
          class="the-text-field"
          label="شماره موبایل"
          outlined
        />
      </v-col>
      <v-col>
        <v-text-field
          class="the-text-field"
          label="کد ملی"
          outlined
        />
      </v-col>
      <v-col>
        <v-select
          class="the-select"
          :items="items"
          label="رشته ها"
          solo
        />
      </v-col>
    </v-row>
    <hr>
    <v-row>
      <v-col>
        <v-select
          class="the-select"
          :items="items"
          label="وضعیت سفارش"
          solo
        />
      </v-col>
      <v-col>
        <v-select
          class="the-select"
          :items="items"
          label="وضعیت پرداخت"
          solo
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-switch
          v-model="switch1"
          class="the-switch"
        />
        <v-select
          class="the-select"
          :items="items"
          label="وضعیت تراکنش"
          solo
        />
      </v-col>
      <v-col>
        <v-switch
          v-model="switch1"
          class="the-switch"
        />
        <v-select
          class="the-select"
          :items="items"
          label="وضعیت تسویه"
          solo
        />
      </v-col>
    </v-row>
    <hr>
    <v-row>
      <v-col>
        <v-text-field
          class="the-text-field"
          label="آدرس"
          outlined
        />
      </v-col>
      <v-col>
        <v-switch
          v-model="switch1"
          class="the-switch"
        />
        <v-text-field
          class="the-text-field"
          label="مدرسه"
          outlined
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-switch
          v-model="switch1"
          class="the-switch"
        />
        <v-text-field
          class="the-text-field"
          label="کد پستی"
          outlined
        />
      </v-col>
      <v-col>
        <v-switch
          v-model="switch1"
          class="the-switch"
        />
        <v-text-field
          class="the-text-field"
          label="استان"
          outlined
        />
      </v-col>
      <v-col>
        <v-switch
          v-model="switch1"
          class="the-switch"
        />
        <v-text-field
          class="the-text-field"
          label="شهر"
          outlined
        />
      </v-col>
    </v-row>
    <hr>
    <v-row>
      <v-col>
        <v-switch
          v-model="switch1"
          class="the-switch"
        />
        <v-select
          class="the-select"
          :items="items"
          label="انتخاب ستون های اصلی"
          solo
        />
      </v-col>
      <v-col>
        <v-select
          class="the-select"
          :items="items"
          label="مرتب سازی بر اساس"
          solo
        />
      </v-col>
      <v-col>
        <v-select
          class="the-select"
          :items="items"
          label="نزولی/صعودی"
          solo
        />
      </v-col>
    </v-row>
    <hr>
    <v-row>
      <v-col>
        <v-switch
          v-model="switch1"
          class="the-switch"
        />
        <v-select
          class="the-select"
          :items="items"
          label="انتخاب محصول سفارش داده شده"
          solo
        />
      </v-col>
      <v-col>
        <v-switch
          v-model="switch1"
          class="the-switch"
        />
        <v-select
          class="the-select"
          :items="items"
          label="انتخاب ویژگی افزوده"
          solo
        />
      </v-col>
    </v-row>
    <hr>
    <v-row>
      <v-col>
        <v-switch
          v-model="switch1"
          class="the-switch"
        />
        <v-textarea
          solo
          name="input-7-4"
          label="نوضیحات مشتری"
        />
      </v-col>
      <v-col>
        <v-switch
          v-model="switch1"
          class="the-switch"
        />
        <v-textarea
          solo
          name="input-7-4"
          label="توضیحات مدیر"
        />
      </v-col>
    </v-row>
    <hr>
    <v-row>
      <v-col>
        <v-switch
          v-model="switch1"
          class="the-switch"
        />
        <v-col>
          <p style="float: right; margin-top: 7px; margin-right: 10px;">
            تاریخ ثبت اولیه:
          </p>
        </v-col>
      </v-col>
      <v-col>
        <v-text-field
          class="the-text-field"
          style="float: right;"
          label="از تاریخ"
          filled
          dense
        />
      </v-col>
      <v-col>
        <v-text-field
          class="the-text-field"
          style="float: right;"
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
          <p style="float: right; margin-top: 7px; margin-right: 7px;">
            تاریخ اصلاح مدیریتی:
          </p>
        </v-col>
      </v-col>
      <v-col>
        <v-text-field
          class="the-text-field"
          style="float: right;"
          label="از تاریخ"
          filled
          dense
        />
      </v-col>
      <v-col>
        <v-text-field
          class="the-text-field"
          style="float: right;"
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
          <p style="float: right; margin-top: 7px; margin-right: 7px;">
            تاریخ ثبت نهایی:
          </p>
        </v-col>
      </v-col>
      <v-col>
        <v-text-field
          class="the-text-field"
          style="float: right;"
          label="از تاریخ"
          filled
          dense
        />
      </v-col>
      <v-col>
        <v-text-field
          class="the-text-field"
          style="float: right;"
          label="تا تاریخ"
          filled
          dense
        />
      </v-col>
    </v-row>
    <v-row>
      <p>
        قیمت سفارش
      </p>
      <v-select
        :items="items"
        label="برابر با"
        solo
      />
      <v-text-field
        class="the-text-field"
        style="float: right;"
        filled
        dense
      />
      <p>
        تخفیف سفارش
      </p>
      <v-select
        class="the-select"
        :items="items"
        label="برابر با"
        solo
      />
      <v-text-field
        class="the-text-field"
        style="float: right;"
        filled
        dense
      />
    </v-row>
  </v-card>
</template>
<script>
export default {
  name: 'Orders',
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
}

.the-select {
  float: right;
  margin-top: 5px;
}

.the-switch {
  float: right;
}

</style>
