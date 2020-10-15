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
            label="انتخاب جنسیت"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-select
            class="the-select"
            :items="items"
            label="انتخاب پروفایل"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-select
            class="the-select"
            :items="items"
            label="انتخاب شماره"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-select
            class="the-select"
            :items="items"
            label="انتخاب وضعیت"
            solo
            dense
          />
        </v-col>
      </v-row>

      <v-row class="the-row">
        <v-col>
          <v-select
            class="the-select2"
            :items="items"
            label="انتخاب ستون های اصلی"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-select
            class="the-select2"
            :items="items"
            label="مرتب سازی بر اساس"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-select
            class="the-select2"
            :items="items"
            label="نزولی/صعودی"
            solo
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
          <v-select
            class="the-select1"
            :items="items"
            label="محصولات دیده شده"
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
            class="the-select1"
            :items="items"
            label="محصولات سفارش داده شده"
            solo
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
          <v-select
            class="the-select3"
            :items="items"
            label="وضعیت سفارش"
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
            class="the-select3"
            :items="items"
            label="وضعیت  پرداخت"
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
            class="the-select3"
            :items="items"
            label="وضعیت تسویه"
            solo
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
          <v-select
            class="the-select3"
            :items="items"
            label="نقش ها"
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
            class="the-select3"
            :items="items"
            label="رشته ها"
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
            class="the-select3"
            :items="items"
            label="انتخاب کپن"
            solo
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
          <v-text-field
            class="the-text-field"
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
            class="the-text-field"
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
            class="the-text-field"
            label="شهر"
            outlined
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
          <v-text-field
            class="the-text-field"
            label="آدرس"
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
            class="the-text-field"
            label="مدرسه"
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
            class="the-text-field"
            label="ایمیل"
            outlined
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
              تاریخ ثبت نام:
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
              تاریخ اصلاح:
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
      <br>
      <br>
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
  name: 'UserListFilter'
}
</script>

<style scoped>
.the-row {
  height: 50px;
  margin-top: 2px;
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
  width: 100%;
  margin-top: 9px;
  transform: scale(0.875);
  transform-origin: left;
}

.the-select3 {
  float: right;
  margin-top: 9px;
  width: 100%;
  transform: scale(0.875);
  transform-origin: left;
}

.the-select2 {
  float: right;
  margin-top: 9px;
  width: 100%;
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

.the-btn {
  background-color: #00bfa5;
  width: 100%;
}
</style>
