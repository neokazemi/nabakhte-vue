<template>
  <div>
    <v-card class="mr-2 ml-2">
      <v-card-title>
        ثبت دسته محتوای جدید
      </v-card-title>
      <v-row>
        <v-col>
          <v-row>
            <v-col>
              <v-text-field
                class="filter-elements mr-5"
                label="نام"
                outlined
                dense
              />
            </v-col>
            <v-col>
              <v-text-field
                class="filter-elements mr-5"
                label="نام کوتاه"
                outlined

                dense
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                class="filter-elements mr-5"
                label="لینک ریدایرکت"
                outlined
                dense
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="3" class="pr-10">
          <v-checkbox
            class="filter-checkbox-elements "
            label="فعال"
          />
          <v-checkbox
            class="filter-checkbox-elements "
            label="قابل نمایش برای کاربران"
          />
        </v-col>
        <v-col cols="3" class="pr-10">
          <v-checkbox
            class="filter-checkbox-elements "
            label="اضافه کردن منبع به محتواهای این ست"
          />
          <v-checkbox
            class="filter-checkbox-elements "
            label="ریدایرکت تمام محتوا ها"
          />
        </v-col>
      </v-row>
      <v-row>
        <p class="p-tag-size mr-15">
          توضیحات :
        </p>
      </v-row>
      <v-row>
        <v-col class="pr-8">
          <editor
            :init="{
              height: 500}"
          />
          <client-only>
            <vue-tags-input
              v-model="tag"
              class="vue-tags-input mt-5"
              :tags="tags"
              placeholder="تگ ها"

              :allow-edit-tags="true"
              @tags-changed="newTags => tags = newTags"
            />
          </client-only>
        </v-col>
        <v-col>
          <v-select
            v-model="e6"
            class="ml-5"
            outlined
            :items="source"
            label="سورس"
            multiple
            chips
            persistent-hint
          />
          <br>
          <v-select
            v-model="e7"
            class="ml-5"

            outlined
            :items="product"
            label="افزودن محصول جدید به این دسته محتوا"
            multiple
            chips
            persistent-hint
          />
          <br>
          <v-btn

            class="mr-5"
          >
            انتخاب عکس
          </v-btn>
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
  name: 'ContentGroupAdd',
  components: {
    Editor: () => import('@tinymce/tinymce-vue'),
    VueTagsInput: () => import('@johmun/vue-tags-input')
  },
  data () {
    return {
      e6: [],
      e7: [],
      source: [
        'شیمی دهم تست نشر الگو', 'هندسه کامل میکرو طلایی گاج', 'ریاضیات تجربی کامل کنکور '
      ],
      product: [
        'جزوات ریاضی دهم', 'جزوات هندسه یازدهم', 'جزوات نکته و تست آمار احتمال '
      ],
      tag: '',
      tags: []
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('~assets/scss/components/admin/contentPanel/contentGroupAdd.scss');
</style>
