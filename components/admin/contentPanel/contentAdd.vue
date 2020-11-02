<template>
  <div>
    <v-card class="card-height mr-2 ml-2">
      <v-card-title>
        درج محتوای آموزشی
      </v-card-title>
      <v-row>
        <v-col>
          <v-row>
            <v-col>
              <v-select
                class="filter-elements mr-5"
                label="نوع محتوا"
                solo
                dense
              />
            </v-col>
            <v-col>
              <v-select
                class="filter-elements mr-5"
                label="ترتیب"
                solo
                dense
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                class="filter-elements mr-5"
                label="تاریخ نمایان شدن"
                outlined
                dense
              />
            </v-col>
            <v-col>
              <v-text-field
                class="filter-elements mr-5"
                label="نام کامل فایل"
                outlined
                dense
              />
            </v-col>
            <v-col>
              <v-text-field
                class="filter-elements mr-5"
                label="آیدی دبیر"
                outlined
                dense
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="2" class="pr-10">
          <v-checkbox
            class="filter-checkbox-elements"
            label="رایگان"
          />
          <v-checkbox
            class="filter-checkbox-elements"

            label="فعال بودن محتوا"
          />
          <v-checkbox
            class="filter-checkbox-elements"
            label="نمایش یا عدم نمایش در صفحه"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="pr-8">
          <v-text-field
            outlined
            filled
            label="نام"
            dense
          />
        </v-col>
        <v-col />
      </v-row>
      <v-row>
        <p class="p-tag-size mr-10">
          توضیح :
        </p>
      </v-row>
      <v-row>
        <v-col class="pr-8">
          <editor
            :init="{
              height: 500}"
          />
        </v-col>
        <v-col>
          <client-only>
            <vue-tags-input
              v-model="tag"
              class="vue-tags-input"
              :tags="tags"
              placeholder="تگ ها"

              :allow-edit-tags="true"
              @tags-changed="newTags => tags = newTags"
            />
          </client-only>
        </v-col>
      </v-row>
    </v-card>
    <div class="d-flex justify-end">
      <v-btn
        color="#b2dfdb"
        elevation="3"
        class="ml-5 mt-5 mb-5"
      >
        ثبت
      </v-btn>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ContentAdd',
  components: {
    Editor: () => import('@tinymce/tinymce-vue'),
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
@import url('~assets/scss/components/admin/contentPanel/contentAdd.scss');
</style>
