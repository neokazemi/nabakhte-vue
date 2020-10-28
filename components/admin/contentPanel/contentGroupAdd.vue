<template>
  <v-card>
    <v-card-title>
      ثبت دسته محتوای جدید
    </v-card-title>
    <v-row>
      <v-col>
        <v-checkbox
          label="فعال"
        />
      </v-col>
      <v-col>
        <v-checkbox
          label="قابل نمایش برای کاربران"
        />
      </v-col><v-col>
        <v-checkbox
          label="اضافه کردن منبع به محتواهای این ست"
        />
      </v-col>
      <v-col>
        <v-checkbox
          label="ریدایرکت تمام محتوا ها"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          label="نام"
          outlined
          dense
        />
      </v-col>
      <v-col>
        <v-text-field
          label="نام کوتاه"
          outlined
          dense
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          label="لینک ریدایرکت"
          outlined
          dense
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-textarea
          label="توضیحات"
          outlined
          dense
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn>انتخاب عکس </v-btn>
      </v-col>
      <v-col>
        <v-text-field label="تگ ها" />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'ContentGroupAdd'
}
</script>

<style scoped>
.main {
  background-color: #6f6f6f;
}
</style>
