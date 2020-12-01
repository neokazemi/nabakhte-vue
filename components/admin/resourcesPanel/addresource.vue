<template>
  <v-card class="mr-2 ml-2">
    <v-card-title>
      + درج منبع جدید
    </v-card-title>
    <v-row>
      <v-col cols="4">
        <v-text-field
          class="mr-3"
          label="نام"
          outlined
          dense
        />
      </v-col>
      <v-col>
        <v-btn>
          انتخاب فایل
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  name: 'Addresource'
}
</script>
