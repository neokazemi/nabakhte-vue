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
        <v-col class="columns-display">
          <v-switch
            v-model="switch1"

            class="switches-position mt-2 "
          />
          <v-select
            class=" filter-elements "
            :items="items"
            label="محصولات دیده شده"
            solo
            dense
          />
        </v-col>
        <v-col class="columns-display">
          <v-switch
            v-model="switch1"

            class="switches-position mt-2 "
          />
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
        <v-col class="columns-display">
          <v-switch
            v-model="switch1"
            class="switches-position mt-2 "
          />
          <v-select
            class=" filter-elements  "
            :items="items"
            label="وضعیت سفارش"
            solo
            dense
          />
        </v-col>

        <v-col class="columns-display">
          <v-switch
            v-model="switch1"

            class="switches-position mt-2"
          />
          <v-select
            class=" filter-elements  "
            :items="items"
            label="وضعیت  پرداخت"
            solo
            dense
          />
        </v-col>
        <v-col class="columns-display">
          <v-switch
            v-model="switch1"

            class="switches-position mt-2"
          />
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
        <v-col class="columns-display">
          <v-switch
            v-model="switch1"
            class="switches-position mt-2"
          />
          <v-select
            class=" filter-elements  "
            :items="items"
            label="نقش ها"
            solo
            dense
          />
        </v-col>

        <v-col class="columns-display">
          <v-switch
            v-model="switch1"

            class="switches-position mt-2"
          />
          <v-select
            class=" filter-elements  "
            :items="items"
            label="رشته ها"
            solo
            dense
          />
        </v-col>
        <v-col class="columns-display">
          <v-switch
            v-model="switch1"

            class="switches-position mt-2"
          />
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
        <v-col class="columns-display">
          <v-switch
            v-model="switch1"
            class="switches-position mt-2"
          />
          <v-text-field
            class=" filter-elements"
            label="کد پستی"
            outlined
            dense
          />
        </v-col>
        <v-col class="columns-display">
          <v-switch
            v-model="switch1"
            class="switches-position mt-2"
          />
          <v-text-field
            class=" filter-elements"
            label="استان"
            outlined
            dense
          />
        </v-col>
        <v-col class="columns-display">
          <v-switch
            v-model="switch1"
            class="switches-position mt-2"
          />
          <v-text-field
            class=" filter-elements"
            label="شهر"
            outlined
            dense
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="columns-display">
          <v-switch
            v-model="switch1"
            class="switches-position mt-2"
          />
          <v-text-field
            class=" filter-elements"
            label="آدرس"
            outlined
            dense
          />
        </v-col>
        <v-col class="columns-display">
          <v-switch
            v-model="switch1"
            class="switches-position mt-2"
          />
          <v-text-field
            class=" filter-elements"
            label="مدرسه"
            outlined
            dense
          />
        </v-col>
        <v-col class="columns-display">
          <v-switch
            v-model="switch1"
            class="switches-position mt-2"
          />

          <v-text-field
            class=" filter-elements"
            label="ایمیل"
            outlined
            dense
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="columns-display">
          <v-switch
            v-model="switch1"
            class="switches-position mt-4"
          />
          <p class="mt-5" style="float: right; width: 150px;">
            تاریخ ثبت نام:
          </p>
          <v-text-field
            style="float: right;"
            class=" mb-2.5 mt-2.5 pr-0"
            label="از تاریخ"
            filled
            dense
          />
          <v-text-field
            style="float: right;"
            class=" mb-2.5 mt-2.5 pr-0 mr-2"
            label="تا تاریخ"
            filled
            dense
          />
        </v-col>
        <v-col class="columns-display">
          <v-switch
            v-model="switch1"
            class="switches-position mt-4"
          />
          <p class="mt-5" style="float: right; width: 150px;">
            تاریخ اصلاح:
          </p>
          <v-text-field
            style="float: right;"
            class=" mb-2.5 mt-2.5 pr-0"
            label="از تاریخ"
            filled
            dense
          />
          <v-text-field
            style="float: right;"
            class=" mb-2.5 mt-2.5 pr-0 mr-2"
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
    <test />
  </v-card>
</template>

<script>
import Test from '~/components/admin/Test'

export default {
  name: 'UserListFilter',
  components: { Test },
  data: () => ({
    items: ['item1', 'item2', 'item3', 'item4'],
    switch1: false
  })
}

</script>

<style lang="scss" scoped>
@import url('~/assets/scss/components/admin/usersPanel/filters/userListFilter.scss');
</style>
