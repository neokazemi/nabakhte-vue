<template>
  <v-row>
    <v-col>
      <v-text-field
        class="the-card-search"

        append-icon="mdi-magnify"
        label="جستجو"
        single-line
        hide-details

        @input="$emit('input', $event.target.value)"
      />
    </v-col>
    <v-col>
      <v-btn
        class="output-btns-width"
        small
        elevation="2"
        outlined
        rounded
        color="#212121"
      >
        Print
      </v-btn>
      <v-btn
        class="output-btns-width"
        small
        elevation="2"
        outlined
        rounded
        color="#c62828"
      >
        Copy
      </v-btn>
      <v-btn
        class="output-btns-width"
        small
        elevation="2"
        outlined
        rounded
        color="#00e676"
      >
        PDF
      </v-btn>
      <v-btn
        class="output-btns-width"
        small
        elevation="2"
        outlined
        rounded
        color="#ff6f00"
      >
        Excel
      </v-btn>
      <v-btn
        class="output-btns-width"
        small
        elevation="2"
        outlined
        rounded
        color="#03a9f4"
      >
        CSV
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'TablesHeader',
  props: ['value']
}
</script>
<style lang="scss" scoped>
@import url('~assets/scss/components/admin/usersPanel/tables/users.scss');
</style>
