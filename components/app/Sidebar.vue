<template>
  <v-sheet
    :tile="true"
    :elevation="5"
    :color="'white'"
  >
    <template>
      <slot>
        This is default text
      </slot>
    </template>
  </v-sheet>
</template>

<script>

export default {
  name: 'Sidebar'
}
</script>
