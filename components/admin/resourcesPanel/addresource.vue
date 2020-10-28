<template>
  <v-card>
    <v-card-title>
      + درج منبع جدید
    </v-card-title>
    <v-row>
      <v-col>
        <v-text-field
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

<style scoped>
  .main {
    background-color: #8e8e8e;
  }
</style>
