<template>
  <div>
    <v-card

      class="card-size"
    >
      <v-card-title>
        تغییر کاربر سفارش
      </v-card-title>
      <v-row>
        <v-col class="columns-display">
          <v-text-field
            v-model="userfirstname"
            label="نام"
            outlined
            dense
            class="card1-input-elements mr-14"
          />
        </v-col>
        <v-col class="columns-display">
          <v-text-field
            v-model="userlastname"
            label="نام خانوادگی"
            outlined
            dense
            class="card1-input-elements ml-14"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="columns-display">
          <v-text-field
            v-model="userphone"
            label="شماره تلفن"
            outlined
            dense
            class="card1-input-elements mr-14"
          />
        </v-col>
        <v-col class="columns-display">
          <v-text-field
            v-model="usercode"
            label="کد ملی"
            outlined
            dense
            class="card1-input-elements ml-14"
          />
        </v-col>
      </v-row>

      <div class="d-flex justify-end">
        <v-btn
          color="#b2dfdb"
          elevation="3"
          class="ml-5 mt-5 mb-5"
        >
          بررسی
        </v-btn>
      </div>
    </v-card>
    <v-card class="card-size">
      <v-card-title>
        تغییر سفارش
      </v-card-title>
      <v-toolbar
        flat
        color="#e0f2f1"
        height="20px"
      >
        <template v-slot:extension>
          <v-tabs
            v-model="tab"
            color="black"
          >
            <v-tabs-slider color="black" />

            <v-tab
              v-for="item in items"
              :key="item"
            >
              {{ item }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-row>
                تاریخ ثبت نهایی
              </v-row>
              <v-row>
                <v-col class="columns-display">
                  <v-text-field
                    class="card2-input-elements"
                    label="مبلغ خام سفارش (تومان)"
                    outlined
                    dense
                  />
                </v-col>
                <v-col class="columns-display">
                  <v-text-field
                    class="card2-input-elements"
                    label="قابل پرداخت (تومان)"
                    outlined
                    dense
                  />
                </v-col>
                <v-col class="columns-display">
                  <v-text-field
                    class="card2-input-elements"
                    label="پرداخت شده (تومان)"
                    outlined
                    dense
                  />
                </v-col>
                <v-col class="columns-display">
                  <v-text-field
                    class="card2-input-elements"
                    label="تخفیف کلی (تومان)"
                    outlined
                    dense
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col class="columns-display">
                  <v-select
                    class="card2-input-elements"
                    label="وضعیت سفارش"
                    dense
                    solo
                  />
                </v-col>
                <v-col class="columns-display">
                  <v-select
                    class="card2-input-elements"
                    label="وضعیت پرداخت"
                    dense
                    solo
                  />
                </v-col><v-col class="columns-display">
                  <v-select
                    class="card2-input-elements"
                    label="کپن"
                    dense
                    solo
                  />
                </v-col><v-col class="columns-display">
                  <v-select
                    class="card2-input-elements"
                    label="کد رهگیری مرسوله"
                    dense
                    solo
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col class="columns-display">
                  <v-textarea
                    solo
                    dense
                    label="توضیحات مسئول سایت"
                  />
                </v-col>
                <v-col class="columns-display">
                  <v-textarea
                    solo
                    dense
                    label="توضیحات مشتری"
                  />
                </v-col>
                <v-col class="columns-display">
                  <v-btn>
                    انتخاب فایل
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <OrdersInformationTable />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <deleted-orders-information-table />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <transactions-of-orders />
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <transactions-of-successful-orders />
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
    <div class="d-flex justify-end">
      <v-btn
        color="#b2dfdb"
        elevation="3"
        class="ml-5 mt-5 mb-5"
      >
        اعمال تغییرات
      </v-btn>
    </div>
  </div>
</template>

<script>

import OrdersInformationTable from './ordersInformationTables/allorders'
import DeletedOrdersInformationTable from './ordersInformationTables/deletedOrders'
import TransactionsOfOrders from './ordersInformationTables/transactionsOfOrders'
import TransactionsOfSuccessfulOrders from './ordersInformationTables/transactionsOfSuccessfulOrders'
export default {
  name: 'OrderInformationCorrection',
  components: { TransactionsOfSuccessfulOrders, TransactionsOfOrders, DeletedOrdersInformationTable, OrdersInformationTable },
  data: () => ({
    userfirstname: 'هلیا',
    userlastname: 'محمدی',
    userphone: '09365491835',
    usercode: '0020890222',
    tab: null,
    items: [
      'اطلاعات سفارش', 'محصولات ', 'آیتم های پاک شده', 'تراکنش های موفق', 'کل تراکنش ها'
    ],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  })

}
</script>

<style lang="scss" scoped>
  @import url('~/assets/scss/components/admin/managementsPanel/orderInformationCorrection.scss');

</style>
