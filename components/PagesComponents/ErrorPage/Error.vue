<template>
  <v-container>
    <v-row>
      <v-col class="error-container">
        <div>
          <v-img
            src="https://www.chibekhoonam.net/wp-content/themes/chibekhoonam/img/404fag.png"
            contain
            :width="357"
            :height="416"
          />
        </div>
        <div class="d-flex flex-column data-container">
          <div class="item">
            <v-img
              src="https://www.chibekhoonam.net/wp-content/themes/chibekhoonam/img/chishod.svg"
              contain
              :width="349"
              :max-height="128"
            />
          </div>
          <div class="item">
            <slot />
          </div>
          <div class="search item">
            <v-text-field
              solo
              dense
              background-color="#fff"
              label="جست و جو ..."
            />
            <button class="search-button" />
          </div>
          <div class="links item">
            <div v-for="(item, index) in links" :key="index" class="link">
              <nuxt-link :to="item.link">
                {{ item.title }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Error',
  computed: {
    links () {
      return this.$store.getters.linksOf404
    }
  }
}
</script>

<style scoped>
  .error-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .data-container {
    justify-content: center;
  }

  .data-container .item {
    margin: 10px 0;
  }

  .data-container .search {
    position: relative;
    display: flex;
    flex-direction: row;
  }

  .data-container .links {
    display: flex;
    flex-direction: row;
    margin: 5px 0;
    padding: 0 5px;
  }

  .data-container .links .link {
    font-size: 11px;
    color: #000;
    width: 50%;
  }

  .links a {
    color: #848484;
  }

  .search .search-button {
    position: absolute;
    left: 0;
    width: 38px;
    height: 38px;
    border-right: 1px solid #ececec;
    background: transparent;
  }
</style>

<style>
  .error-container .search .v-text-field__details {
    display: none;
  }
</style>
