<template>
  <v-card>
    <div class="the-div">
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

      <v-row>
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

      <v-row>
        <v-col>
          <v-switch
            v-model="switch1"
            class="the-switch"
          />
          <v-select
            class="the-select1"
            :items="items"
            label="محصولات دیده شده"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-switch
            v-model="switch1"

            class="the-switch"
          />
          <v-select
            class="the-select1"
            :items="items"
            label="محصولات سفارش داده شده"
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
          <v-select
            class="the-select3"
            :items="items"
            label="وضعیت سفارش"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-switch
            v-model="switch1"

            class="the-switch"
          />
          <v-select
            class="the-select3"
            :items="items"
            label="وضعیت پرداخت"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-switch
            v-model="switch1"

            class="the-switch"
          />
          <v-select
            class="the-select3"
            :items="items"
            label="وضعیت تسویه"
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
          <v-select
            class="the-select3"
            :items="items"
            label="نقش ها"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-switch
            v-model="switch1"

            class="the-switch"
          />
          <v-select
            class="the-select3"
            :items="items"
            label="رشته ها"
            solo
            dense
          />
        </v-col>
        <v-col>
          <v-switch
            v-model="switch1"

            class="the-switch"
          />
          <v-select
            class="the-select3"
            :items="items"
            label="انتخاب کپن"
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
          <v-text-field
            class="the-text-field"
            label="کد پستی"
            outlined
            dense
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
            dense
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
          <v-text-field
            class="the-text-field"
            label="آدرس"
            outlined
            dense
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
            dense
          />
        </v-col>
        <v-col>
          <v-switch
            v-model="switch1"
            class="the-switch"
          />
          <v-text-field
            class="the-text-field"
            label="ایمیل"
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
      <v-row>
        <v-col>
          <v-switch
            v-model="switch1"
            class="the-switch"
          />
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
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'UserListFilter'
}
</script>

<style scoped>
.the-div {
  margin: 40px;
}
</style>
