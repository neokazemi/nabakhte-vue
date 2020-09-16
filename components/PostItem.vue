<template>
  <v-card
    :link="true"
    :href="'#'"
    hover
    class="mx-auto mb-5"
  >
    <v-img
      class="white--text align-end"
      src="https://media.chibekhoonam.net/2020/08/entekhab-reshte-motevasete-1.jpg"
    />
    <v-card-title>
      {{ post.title }}
    </v-card-title>
    <v-card-subtitle class="pb-0">
      {{ post.excerpt }}
    </v-card-subtitle>
    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>
      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'PostItem',
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<!--<style scoped>-->
<!--</style>-->
