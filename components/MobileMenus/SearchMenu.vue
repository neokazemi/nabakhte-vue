<template>
  <div class="menu">
    <div class="mobile-drawer-header-container">
      <div class="close-button" @click="closeDrawer">
        <p>✕</p>
      </div>
      <div class="header-info">
        <v-img src="https://www.chibekhoonam.net/wp-content/themes/chib-pwa/assets/images/logo-site-mobile.svg" :width="89" :height="34" contain />
      </div>
    </div>
    <div class="mobile-drawer-content">
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
  @import url('~/assets/css/components/SearchMenuScoped.css');
</style>
