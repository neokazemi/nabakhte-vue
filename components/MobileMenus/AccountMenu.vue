<template>
  <div class="menu">
    <div class="mobile-drawer-header-container">
      <div class="header-info">
        <v-img src="https://www.chibekhoonam.net/wp-content/litespeed/avatar/30386c98510eeaeb22ce6728c6f58cd9.jpg" :width="45" :height="45" contain />
        <p>سلام neo.kazemi168 عزیز<br>خوش آمدید</p>
      </div>
      <div class="close-button" @click="closeDrawer">
        <p>✕</p>
      </div>
    </div>
    <div class="mobile-drawer-content">
      <nuxt-link to="/my-account/orders" class="drawer-item" @click="closeDrawer">
        سفارش ها
      </nuxt-link>
      <nuxt-link to="/my-account/edit-address" class="drawer-item">
        آدرس ها
      </nuxt-link>
      <nuxt-link to="/my-account/edit-account" class="drawer-item">
        اطلاعات حساب کاربری
      </nuxt-link>
      <nuxt-link to="/my-account/my-comments" class="drawer-item">
        نظرات من
      </nuxt-link>
      <nuxt-link to="#" class="drawer-item">
        خروج
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountMenu',
  methods: {
    closeDrawer () {
      this.$store.commit('updateDrawer', false)
    }
  }
}
</script>

<style scoped>
  @import url('../../assets/css/components/AccountMenuScoped.css');
</style>
