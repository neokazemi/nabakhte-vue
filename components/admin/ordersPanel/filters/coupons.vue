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
            label="نام کالایی که از خرید آن بن دریافت کرده است"
            solo
            dense
          />
        </v-col>

        <v-col>
          <v-select
            class="the-row"
            :items="items"
            label="وضعیت  بن"
            solo
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
          تاریخ درج:
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
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'Coupons',
  data: () => ({
    items: ['item1', 'item2', 'item3', 'item4'],
    switch1: false
  })
}
</script>

<style scoped>
.the-btn {
  background-color: #00bfa5;
  width: 100%;
}

.the-card {
  margin-bottom: 20px;
}

.the-div {
  margin: 10px;
}

.the-row {
  float: right;
  height: 20px;
  margin-bottom: 2.5px;
  margin-top: 2.5px;
  padding-right: 0;
  right: 0;
  width: 100%;
}

.the-switch {
  float: left;
  height: 20px;
  margin-top: 8px;
}

.v-text-field--filled > .v-input__control > .v-input__slot,
.v-text-field--full-width > .v-input__control > .v-input__slot,
.v-text-field--outlined > .v-input__control > .v-input__slot {
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

.the-p {
  font-size: 14px;
  width: 120px;
}
</style>
