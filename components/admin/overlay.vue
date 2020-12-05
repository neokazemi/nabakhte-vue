<template>
  <div>
    <v-overlay
      :absolute="absolute"
      :value="overlay"
    >
      <v-progress-circular
        :width="width"
        :color="color"
        indeterminate
      />
    </v-overlay>
  </div>
</template>

<script>
export default {
  name: 'Overlay',
  props: {
    overlay: Boolean,
    color: { type: String, default: '#64ffda' },
    width: { type: Number, default: 5 },
    absolute: { type: Boolean, default: true }

  }

}
</script>
