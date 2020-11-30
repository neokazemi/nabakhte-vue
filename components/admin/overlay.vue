<template>
  <div>
    <v-overlay
      :absolute="true"
      :value="overlay"
    >
      <v-progress-circular
        :width="3"
        color="#263238"
        indeterminate
      />
    </v-overlay>
  </div>
</template>

<script>
export default {
  name: 'Overlay',
  props: { overlay: Boolean }

}
</script>
