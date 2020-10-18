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
  .menu {
    display: flex;
    flex-direction: column;
    opacity: 0.9;
    padding: 16px;
  }

  .menu .mobile-drawer-header-container {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .menu .mobile-drawer-header-container .header-info {
    align-content: flex-start;
    display: flex;
    flex-direction: row;
  }

  .menu .mobile-drawer-header-container .header-info p {
    font-size: 12px;
    margin-right: 5px;
  }

  .menu .mobile-drawer-header-container .close-button p {
    font-size: 24px;
    font-weight: bold;
  }

  .menu .mobile-drawer-content {
    display: flex;
    flex-direction: column;
  }

  .menu .mobile-drawer-content .drawer-item {
    align-items: center;
    border-bottom: 1px solid #e4e4e4;
    color: #000;
    display: flex;
    font-size: 13px;
    font-weight: bold;
    height: 42px;
    margin: 0 8px 0 12px;
  }

  .menu .mobile-drawer-content . {
    color: #f00;
  }
</style>
