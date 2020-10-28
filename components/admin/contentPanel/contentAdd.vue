<template>
  <v-card>
    <v-card-title>
      درج محتوای آموزشی
    </v-card-title>
    <v-row>
      <v-col>
        <v-checkbox
          label="رایگان"
        />
      </v-col>
      <v-col>
        <v-checkbox

          label="فعال بودن محتوا"
        />
      </v-col>
      <v-col>
        <v-checkbox
          label="نمایش یا عدم نمایش در صفحه"
        />
      </v-col>v-row>
    </v-row>
    <v-row>
      <v-col>
        <v-select
          label="نوع محتوا"
          solo
          dense
        />
      </v-col>
      <v-col>
        <v-text-field
          label="تاریخ نمایان شدن"
          outlined
          dense
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-select
          label="ترتیب"
          solo
          dense
        />
      </v-col>
      <v-col>
        <v-text-field
          label="نام کامل فایل"
          outlined
          dense
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          label="آیدی دبیر"
          outlined
          dense
        />
      </v-col>
      <v-col />
    </v-row>
    <v-row>
      <v-col>
        <vue-tags-input
          v-model="tag"
          :tags="tags"
          @tags-changed="newTags => tags = newTags"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'ContentAdd',
  components: {
    VueTagsInput: () => import('@johmun/vue-tags-input')
  },
  data () {
    return {
      tag: '',
      tags: []
    }
  }
}
</script>

<style scoped>
.main {
  background-color: #6f6f6f;
}
</style>
