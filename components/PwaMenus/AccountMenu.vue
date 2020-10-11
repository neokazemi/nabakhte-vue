<template>
  <div class="menu">
    <div class="pwa-drawer-header-container">
      <div class="header-info">
        <v-img src="https://www.chibekhoonam.net/wp-content/litespeed/avatar/30386c98510eeaeb22ce6728c6f58cd9.jpg" :width="45" :height="45" contain />
        <p>سلام neo.kazemi168 عزیز<br>خوش آمدید</p>
      </div>
      <div class="close-button" @click="closeDrawer">
        <p>✕</p>
      </div>
    </div>
    <div class="pwa-drawer-content">
      <nuxt-link to="/my-account" class="drawer-item" @click="closeDrawer">
        سفارش ها
      </nuxt-link>
      <nuxt-link to="#" class="drawer-item">
        آدرس ها
      </nuxt-link>
      <nuxt-link to="#" class="drawer-item">
        اطلاعات حساب کاربری
      </nuxt-link>
      <nuxt-link to="#" class="drawer-item">
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
    padding: 16px;
    opacity: 0.9;
  }

  .menu .pwa-drawer-header-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .menu .pwa-drawer-header-container .header-info {
    display: flex;
    align-content: flex-start;
    flex-direction: row;
  }

  .menu .pwa-drawer-header-container .header-info p {
    margin-right: 5px;
    font-size: 12px;
  }

  .menu .pwa-drawer-header-container .close-button p {
    font-weight: bold;
    font-size: 24px;
  }

  .menu .pwa-drawer-content {
    display: flex;
    flex-direction: column;
  }

  .menu .pwa-drawer-content .drawer-item {
    font-size: 13px;
    font-weight: bold;
    border-bottom: 1px solid #e4e4e4;
    height: 42px;
    color: #000;
    display: flex;
    align-items: center;
    margin: 0 8px 0 12px;
  }

  .menu .pwa-drawer-content . {
    color: #f00;
  }
</style>
