<template>
  <v-card class="mb-20">
    <div class="ma-5">
      <v-row>
        <v-col>
          <v-text-field
            class=" filter-elements"
            label="نام"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            class=" filter-elements"
            label="نام خانوادگی"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            class=" filter-elements"
            label="شماره موبایل"
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-text-field
            class=" filter-elements"
            label="کد ملی"
            outlined
            dense
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-select
            class=" filter-elements"
            :items="items"
            label="انتخاب جنسیت"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-select
            class=" filter-elements  "
            :items="items"
            label="انتخاب پروفایل"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-select
            class=" filter-elements  "
            :items="items"
            label="انتخاب شماره"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-select
            class=" filter-elements  "
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
            class=" filter-elements "
            :items="items"
            label="انتخاب ستون های اصلی"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-select
            class=" filter-elements  "
            :items="items"
            label="مرتب سازی بر اساس"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-select
            class=" filter-elements  "
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

            class="switches-position mt-10 "
          />
        </v-col>

        <v-col>
          <v-select
            class=" filter-elements "
            :items="items"
            label="محصولات دیده شده"
            solo
            dense
          />
        </v-col>
        <v-col cols="1">
          <v-switch
            v-model="switch1"

            class="switches-position mt-10 "
          />
        </v-col>
        <v-col>
          <v-select
            class=" filter-elements  "
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
            class="switches-position mt-8 "
          />
        </v-col>
        <v-col>
          <v-select
            class=" filter-elements  "
            :items="items"
            label="وضعیت سفارش"
            solo
            dense
          />
        </v-col>

        <v-col cols="1">
          <v-switch
            v-model="switch1"

            class="switches-position mt-8"
          />
        </v-col>
        <v-col>
          <v-select
            class=" filter-elements  "
            :items="items"
            label="وضعیت  پرداخت"
            solo
            dense
          />
        </v-col>
        <v-col cols="1">
          <v-switch
            v-model="switch1"

            class="switches-position mt-8"
          />
        </v-col>
        <v-col>
          <v-select
            class=" filter-elements  "
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
            class="switches-position mt-8"
          />
        </v-col>
        <v-col>
          <v-select
            class=" filter-elements  "
            :items="items"
            label="نقش ها"
            solo
            dense
          />
        </v-col>

        <v-col cols="1">
          <v-switch
            v-model="switch1"

            class="switches-position mt-8"
          />
        </v-col>
        <v-col>
          <v-select
            class=" filter-elements  "
            :items="items"
            label="رشته ها"
            solo
            dense
          />
        </v-col>
        <v-col cols="1">
          <v-switch
            v-model="switch1"

            class="switches-position mt-8"
          />
        </v-col>
        <v-col>
          <v-select
            class=" filter-elements  "
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
            class="switches-position mt-8"
          />
        </v-col>
        <v-col>
          <v-text-field
            class=" filter-elements"
            label="کد پستی"
            outlined
            dense
          />
        </v-col>
        <v-col cols="1">
          <v-switch
            v-model="switch1"
            class="switches-position mt-8"
          />
        </v-col>
        <v-col>
          <v-text-field
            class=" filter-elements"
            label="استان"
            outlined
            dense
          />
        </v-col>
        <v-col cols="1">
          <v-switch
            v-model="switch1"
            class="switches-position mt-8"
          />
        </v-col>
        <v-col>
          <v-text-field
            class=" filter-elements"
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
            class="switches-position mt-8"
          />
        </v-col>
        <v-col>
          <v-text-field
            class=" filter-elements"
            label="آدرس"
            outlined
            dense
          />
        </v-col>
        <v-col cols="1">
          <v-switch
            v-model="switch1"
            class="switches-position mt-8"
          />
        </v-col>
        <v-col>
          <v-text-field
            class=" filter-elements"
            label="مدرسه"
            outlined
            dense
          />
        </v-col>
        <v-col cols="1">
          <v-switch
            v-model="switch1"
            class="switches-position mt-8"
          />
        </v-col>
        <v-col>
          <v-text-field
            class=" filter-elements"
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
            class="switches-position mt-12 "
          />
        </v-col>
        <p class="mt-8 ml-8 p-tag-size mr-6">
          تاریخ ثبت نام:
        </p>
        <v-col cols="2">
          <v-text-field
            class="the-filled-text-field filter-elements"
            label="از تاریخ"
            filled
            dense
          />
        </v-col>
        <v-col cols="2">
          <v-text-field
            class="the-filled-text-field filter-elements"
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
            class="switches-position mt-12 "
          />
        </v-col>
        <p class="mt-8 ml-8 p-tag-size mr-6">
          تاریخ اصلاح:
        </p>
        <v-col cols="2">
          <v-text-field
            class="the-filled-text-field filter-elements"
            label="از تاریخ"
            filled
            dense
          />
        </v-col>
        <v-col cols="2">
          <v-text-field
            class="the-filled-text-field filter-elements"
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
            class="filter-btn"
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
/* @import '../../../../assets/scss/components/admin/usersPanel/filters/userListFilter.scss'; */
</style>
