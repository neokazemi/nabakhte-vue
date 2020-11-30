<template>
  <v-app dark>
    <div v-if="error && error.message">
      error message: {{ error.message }}
    </div>
    <Error>
      {{ otherError }}
    </Error>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  created () {
    console.log('created error', this.error)
  },
  mounted () {
    console.log('mounted error', this.error)
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
