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
          label="نام کالایی که از خرید آن بن دریافت کرده است"
          solo
          dense
        />
      </v-col>
      <v-col>
        <v-select
          class="the-select"
          :items="items"
          label="وضعیت بن"
          solo
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
          <p style="float: right; margin-top: 7px; margin-right: 10px;">
            تاریخ درج:
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
.the-card {
  margin-bottom: 20px;
  padding: 10px;
}

.the-text-field {
  float: right;
  margin-top: 9px;
  margin-right: 7px;
}

.the-select {
  float: right;
  margin-top: 5px;
  width: 100%;
}

.the-select1 {
  float: right;
  margin-top: 5px;
  width: 50%;
}

.the-switch {
  float: right;
}

.the-btn {
  background-color: #004d40;
  width: 100%;
}
</style>
