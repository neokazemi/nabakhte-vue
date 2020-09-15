<template>
  <v-carousel
    height="355"
    :hide-delimiters="true"
  >
    <v-carousel-item>
      <v-img src="https://media.chibekhoonam.net/2020/09/nazarsanji-hafte3-shahrivar.jpg" />
    </v-carousel-item>
    <v-carousel-item>
      <v-img src="https://media.chibekhoonam.net/2020/08/اسلاید-شو.jpg" />
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'mainCrousel'
}
</script>

<style>
  .big-carousel .v-window__prev,
  .big-carousel .v-window__next {
    border-radius: 0;
    background-color: #50cbb2;
    position: absolute;
    bottom: 0;
    top: auto;
    width: 20px;
    height: 20px;
  }

  .big-carousel .v-window__next {
    left: 21px;
    right: auto !important;
  }

  .big-carousel .v-btn--icon.v-size--default {
    width: 20px;
    height: 20px;
  }

  .big-carousel .v-btn--icon.v-size--default .v-icon {
    font-size: 20px !important;
  }
</style>
