<template>
  <v-container>
    <v-row>
      <v-col>
        <flickity ref="flickity" :options="flickityOptions">
          <div class="carousel-cell">
            1
          </div>
          <div class="carousel-cell">
            2
          </div>
          <div class="carousel-cell">
            3
          </div>
          <div class="carousel-cell">
            4
          </div>
          <div class="carousel-cell">
            5
          </div>
          <div class="carousel-cell">
            1
          </div>
          <div class="carousel-cell">
            2
          </div>
          <div class="carousel-cell">
            3
          </div>
          <div class="carousel-cell">
            4
          </div>
          <div class="carousel-cell">
            5
          </div>
        </flickity>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Flickity from 'vue-flickity'

export default {
  name: 'Index',
  components: {
    Flickity
  },
  data () {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true
      }
    }
  },
  methods: {
    next () {
      this.$refs.flickity.next()
    },

    previous () {
      this.$refs.flickity.previous()
    }
  }
}
</script>
