<template>
  <div>
    <v-row>
      <v-col>
        <Menu />

        <v-expansion-panels focusable multiple>
          <v-expansion-panel>
            <v-expansion-panel-header>مدیریت سفارش ها</v-expansion-panel-header>
            <v-expansion-panel-content>
              <Orders />
              <OrdersTable />
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header>مدیریت تراکنش ها</v-expansion-panel-header>
            <v-expansion-panel-content>
              <transactions />
              <TransactionsTable />
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel>
            <v-expansion-panel-header>مدیریت بن کاربران</v-expansion-panel-header>
            <v-expansion-panel-content>
              <coupons />
              <CouponsTable />
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Menu from '~/components/admin/menu'
import Orders from '~/components/admin/ordersPanel/filters/orders'
import OrdersTable from '~/components/admin/ordersPanel/tables/ordersTable'
import TransactionsTable from '~/components/admin/ordersPanel/tables/transactionsTable'
import CouponsTable from '~/components/admin/ordersPanel/tables/couponsTable'
import Transactions from '~/components/admin/ordersPanel/filters/transactions'
import Coupons from '~/components/admin/ordersPanel/filters/coupons'
export default {
  name: 'Index',
  components: { Menu, Orders, CouponsTable, TransactionsTable, OrdersTable, Coupons, Transactions }
}
</script>

<style scoped>
.main {
  background-color: #8e8e8e;
}
</style>
