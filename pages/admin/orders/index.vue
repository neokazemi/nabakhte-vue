<template>
  <div>
    <v-expansion-panels focusable multiple>
      <v-expansion-panel>
        <v-expansion-panel-header>مدیریت سفارش ها</v-expansion-panel-header>
        <v-expansion-panel-content>
          <orders />
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header>مدیریت تراکنش ها</v-expansion-panel-header>
        <v-expansion-panel-content>
          <transactions />
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>مدیریت بن کاربران</v-expansion-panel-header>
        <v-expansion-panel-content>
          <coupons />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import Orders from '~/components/admin/ordersPanel/orders'
import Transactions from '~/components/admin/ordersPanel/transactions'
import Coupons from '~/components/admin/ordersPanel/coupons'
export default {
  name: 'Index',
  components: { Coupons, Transactions, Orders }
}
</script>

<style scoped>
.main {
  background-color: #8e8e8e;
}
</style>
