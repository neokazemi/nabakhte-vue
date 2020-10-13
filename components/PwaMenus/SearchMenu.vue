<template>
  <div class="menu">
    <div class="pwa-drawer-header-container">
      <div class="close-button" @click="closeDrawer">
        <p>✕</p>
      </div>
      <div class="header-info">
        <v-img src="https://www.chibekhoonam.net/wp-content/themes/chib-pwa/assets/images/logo-site-mobile.svg" :width="89" :height="34" contain />
      </div>
    </div>
    <div class="pwa-drawer-content">
      <v-text-field
        label="عنوان، انتشارات، درس یا ... (حداقل 3 حرف)"
        full-width
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchMenu',
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

  .menu .pwa-drawer-header-container .close-button p {
    font-weight: bold;
    font-size: 24px;
  }

  .menu .pwa-drawer-content .v-application--is-ltr .v-text-field .v-label {
    left: auto;
    right: 5px;
  }
</style>
