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
      </v-row>
      <v-row>
        <v-col>
          <v-select
            class=" the-row"
            :items="items"
            label="انتخاب جنسیت"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-select
            class=" the-row  "
            :items="items"
            label="انتخاب پروفایل"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-select
            class=" the-row  "
            :items="items"
            label="انتخاب شماره"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-select
            class=" the-row  "
            :items="items"
            label="انتخاب وضعیت"
            solo
            dense
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-select
            class=" the-row "
            :items="items"
            label="انتخاب ستون های اصلی"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-select
            class=" the-row  "
            :items="items"
            label="مرتب سازی بر اساس"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-select
            class=" the-row  "
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

            class="the-switch mt-2 "
          />
        </v-col>

        <v-col>
          <v-select
            class=" the-row "
            :items="items"
            label="محصولات دیده شده"
            solo
            dense
          />
        </v-col>
        <v-col cols="1">
          <v-switch
            v-model="switch1"

            class="the-switch mt-2 "
          />
        </v-col>
        <v-col>
          <v-select
            class=" the-row  "
            :items="items"
            label="محصولات سفارش داده شده"
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
          <v-select
            class=" the-row  "
            :items="items"
            label="وضعیت سفارش"
            solo
            dense
          />
        </v-col>

        <v-col cols="1">
          <v-switch
            v-model="switch1"

            class="the-switch "
          />
        </v-col>
        <v-col>
          <v-select
            class=" the-row  "
            :items="items"
            label="وضعیت  پرداخت"
            solo
            dense
          />
        </v-col>
        <v-col cols="1">
          <v-switch
            v-model="switch1"

            class="the-switch "
          />
        </v-col>
        <v-col>
          <v-select
            class=" the-row  "
            :items="items"
            label="وضعیت تسویه"
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
          <v-select
            class=" the-row  "
            :items="items"
            label="نقش ها"
            solo
            dense
          />
        </v-col>

        <v-col cols="1">
          <v-switch
            v-model="switch1"

            class="the-switch "
          />
        </v-col>
        <v-col>
          <v-select
            class=" the-row  "
            :items="items"
            label="رشته ها"
            solo
            dense
          />
        </v-col>
        <v-col cols="1">
          <v-switch
            v-model="switch1"

            class="the-switch "
          />
        </v-col>
        <v-col>
          <v-select
            class=" the-row  "
            :items="items"
            label="انتخاب کپن"
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
            class="the-switch "
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
            class="the-switch "
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
        <v-col cols="1">
          <v-switch
            v-model="switch1"
            class="the-switch "
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
        <v-col cols="1">
          <v-switch
            v-model="switch1"
            class="the-switch "
          />
        </v-col>
        <v-col>
          <v-text-field
            class=" the-row"
            label="ایمیل"
            outlined
            dense
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
          تاریخ ثبت نام:
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
          تاریخ اصلاح:
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
@import "../../../../assets/scss/components/admin/usersPanel/tables/users.scss";

</style>
