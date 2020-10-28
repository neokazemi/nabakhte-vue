<template>
  <v-card class="pt-5 pb-5">
    <v-row>
      <v-col class="columns-display">
        <p class="mt-3 p-tag-size">
          تاریخ ثبت نام:
        </p>
      </v-col>
      <v-col class="columns-display">
        <v-text-field
          id="my-custom-input"
          v-model="date"
          placeholder="از تاریخ"
          outlined
          dense
          class="filter-elements ml-2"
        />
      </v-col>
      <!--        <date-picker-->
      <!--          v-model="date"-->
      <!--          format="jYYYY/jMM/jDD"-->
      <!--          element="my-custom-input"-->
      <!--          width="10px"-->
      <!--        />-->
      <v-col class="columns-display">
        <v-text-field
          id="my-custom-input2"

          v-model="date2"
          placeholder="تا تاریخ"
          outlined
          dense
          class="filter-elements ml-3"
        />
        <!--
        />-->
        <!--        <date-picker-->
        <!--          v-model="date2"-->
        <!--          format="jYYYY/jMM/jDD"-->
        <!--          element="my-custom-input2"-->
        <!--          width="10px"-->
        <!--        />-->
      </v-col>
    </v-row>
    <br>
    <br>
    <v-row>
      <v-col />
      <v-col />
      <v-col />
      <v-col>
        <v-btn
          color="white"
          class="filter-btn"
          elevation="3"
          x-large
          outlined
          rounded
        >
          فیلتر
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'ContentFilter',
  // components: {
  //   datePicker: () => import('vue-persian-datetime-picker')
  // },
  data: () => ({
    items: ['item1', 'item2', 'item3', 'item4'],
    switch1: false,
    date: '',
    date2: '',
    date3: '',
    date4: ''
  })
}
</script>

<style lang="scss" scoped>
@import url('~assets/scss/components/admin/contentPanel/contentFilter.scss');
</style>
