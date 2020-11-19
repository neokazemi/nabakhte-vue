<template>
  <div>
    <v-card class="card-height mr-2 ml-2">
      <v-card-title v-if="!dialog">
        درج محتوای آموزشی
      </v-card-title>
      <v-card-title v-if="dialog">
        افزودن محتوای آموزشی
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
                v-model="content.order"
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
                v-if="!notfilled"
                v-model="content.title"
                class="filter-elements mr-5"
                label="نام کامل فایل"
                outlined
                dense
              /><v-text-field
                v-if="notfilled"

                v-model="content.title"
                class="filter-elements mr-5"
                label="نام کامل فایل"
                outlined
                dense
              />
            </v-col>
            <v-col>
              <v-text-field
                v-if="content.author"
                v-model="content.author.id"
                class="filter-elements mr-5"
                label="آیدی دبیر"
                outlined
                dense
              />
              <v-text-field
                v-if="notfilled"
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
            v-model="isFree"
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
              v-if="content.tags"
              v-model="tag"
              class="vue-tags-input"
              :tags="content.tags"
              placeholder="تگ ها"
              :allow-edit-tags="true"

              @tags-changed="newTags => tags = newTags"
            />
          </client-only>
          <client-only v-if="notfilled">
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
  </div>
</template>

<script>
import mixinContent from '../../../plugins/mixin/api/Content'
import { Content } from '../../../models/Content'
export default {
  name: 'ContentInfo',

  components: {
    Editor: () => import('@tinymce/tinymce-vue'),

    VueTagsInput: () => import('@johmun/vue-tags-input')

  },

  mixins: [mixinContent],
  props: {
    editmode: Boolean,
    notfilled: Boolean,
    dialog: Boolean

  },

  data () {
    return {
      isFree: false,

      tag: '',
      tags: [],
      content: new Content()
    }
  },
  mounted () {
    const that = this
    this.api_content_show(this.$route.params.id)
      .then((response) => {
        that.content = new Content(response.data.data)
        if (that.content.is_free === 1) {
          that.isFree = true
        }
      })
      .catch(() => {
      })
  }
}
</script>

<style scoped>
  @import url('~assets/scss/components/admin/contentPanel/contentAdd.scss');
</style>
