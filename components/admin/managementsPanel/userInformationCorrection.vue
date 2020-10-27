<template>
  <div>
    <div
      v-if="editmode"
      class="d-flex justify-end"
    >
      <v-btn
        color="#b2dfdb"
        elevation="3"
        class="ml-5 mt-5 mb-5"
        @click="$router.go(-1)"
      >
        بازگشت >>
      </v-btn>
    </div>
    <v-row>
      <v-col>
        <v-card class="mr-3 ml-3 cards-size pb-5">
          <v-card-title>
            اطلاعات الزامی کاربر
          </v-card-title>
          <v-row>
            <v-col class="columns-display">
              <v-text-field
                v-if="editmode"
                v-model="user.firstname"
                label="نام"
                outlined
                dense
                class="card1-input-elements mr-3"
              />
              <div v-else class="card1-input-elements mr-3">
                نام
                <hr>
                {{ firstname }}
              </div>
            </v-col>
            <v-col class="columns-display">
              <v-text-field
                v-if="editmode"
                v-model="user.lastname"
                label=" نام خانوادگی"
                outlined
                dense
                class="card1-input-elements ml-3"
              />
              <div v-else class="card1-input-elements mr-3">
                نام خانوادگی
                <hr>
                {{ lastname }}
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="columns-display">
              <v-text-field
                v-if="editmode"
                v-model="user.phone"
                label="شماره موبایل"
                outlined
                dense
                class="card1-input-elements mr-3"
              />
              <div v-else class="card1-input-elements mr-3">
                شماره موبایل
                <hr>
                {{ phone }}
              </div>
            </v-col>
            <v-col class="columns-display">
              <v-text-field
                v-if="editmode"
                v-model="user.code"
                label="کد ملی"
                outlined
                dense
                class="card1-input-elements ml-3"
              />

              <div v-else class="card1-input-elements mr-3">
                کد ملی
                <hr>
                {{ code }}
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="columns-display">
              <v-select
                v-if="editmode"
                :items="user.items"
                dense
                solo
                class="card1-input-elements mr-3"
                label="وضعیت حساب کاربری"
              />
              <div v-else class="card1-input-elements mr-3">
                وضعیت حساب کاربری
                <hr>
                {{ items[0] }}
              </div>
            </v-col>
            <v-col />
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="mr-3 ml-3 cards-size">
          <v-card-title>
            اطلاعات اختیاری کاربر
          </v-card-title>
          <v-row>
            <v-col>
              <v-row>
                <v-img
                  width="200px"
                  height="200px"
                  class="mx-10 px-10"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAKlBMVEXm5uampqajo6Pp6ena2trW1ta8vLzg4ODExMStra2wsLDIyMi2trbOzs7VYdZ0AAAEMElEQVR4nO2cyZaCMBBFCUEZxP//3SYItgIOkErVi+fdnTvvSWrIQIqCEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBAD/EBR1IH5xw8x6FTXpm+dKwPOtX1zrYpfsRzsLr0bxR4Iv/vLYGn996Lx9aVb2j1Ydpc6b0dfDaO3aXe3dH2Vr+Pg92L0nkcyV0dfdZ/1JskuQ0dfNF+M3/84NrnlHH9qv/cbHdtTVoq+2ec3Ojb5KPqi3y84KPa5zFRffagQLxVdHgnHnw7p3cghGP3p2ABOw4iv6KsYwUERfaLGCuIr1pF+gdpa4i1fN2pvBrGzlniDP8cLDopn2Hkal0YfFHETqohfwFrkBTJzNAA6T6Xm6KiIOU87MUHnEPOpv8oN4TCIV8BBbAUFnWutdVZIRmEALxK9ZBQGOjTD6I57SVlZKz0jVwvvhmg1UdgvYK30jHCeCZQna6lHjuwefjTE2l2UzqQBqL5GYmm/BmixL13ubyAVfX9JYngBMhSvhqMhUkVMkWiwUk0SQaSanyaVIiVT8bb7BlDzTcOjhjidaZKCT0NVGIf5G/5+Pfz9nkZ4N3gGaFfYH7oh9Imyx1lbpNimwdqokT2VuRsinc4kKRdAxaJIk2qAEk2abQyoTYwkgQgVhmm6GqCOpggVUVwQqBqOiC+ggJZON7ywoHNgQyi+7Y204T0jKgi1rpiQ7U2RetI7sgUDq1TckIxExCgMyDWnUC3pP/G32Gdgb7NLJRvINDMhcJEd/Cq7TD5FzKMzElcWkC4obBC/UARbFq6JzTbIWWYiTjEDwTjFLARj2jfUZm2FPx36TLbM4gvSG74+UPrLLq8nMnYHY9lY/+Wd7HxyILcHBwJ+z5Fb2Wf3Go+vm13ZpnRNVlHoq/OOZz8mx/KMuipc8d2zNFuOeTxU4+tjfpMj/Fzd9yzNliP4QzW7n6XZcESuG74Q+loddRgPv9qyUgR9xeX3d4RFj/LL3lpnia+jU8xCscWqG2Ih+KAIFYyDYApwFNN82AW0c5pKEEYxnSCIYqIYnAGIxVR3vGfsj2lEDtReY37UlubbyidF2yuKaT6PXSha9qhyJ/dvFS2zTZqvEJbY3cxIc0V/jd2JlMocHRWt7rTrzNGAzTzVyKMzNvm01hMcFA1am/S1/snQoO6rpZlJUT3Z6A6hxSAqD6H+IGoPof4gpl4VbqGaTjVr4YxuTZT/fuQbNA3V80xAM9fo55nRUDPXGPgF9AQT7pC+Q+9zNptJqjpN9RaGz6gtE00yaUArm6Z5X+ArQ6Vb7lZhqBiIVmGoFogWXfeMTvdtlmi0Uo1dotFKNVo73ZuGKrvfdqlUK5mKvy+/B5W36G1WvzMqBdHUUENQdTd/icruPg1piG9o2LQptW11aYlK611ZoiFICCGEEEIIIYQQQgghhBBCCCG58gf0kT01WC/S1QAAAABJRU5ErkJggg=="
                />
              </v-row>
              <v-row>
                <v-speed-dial
                  v-if="editmode"
                  v-model="fab"
                  class="mr-8 mt-10"
                  :top="top"
                  :bottom="bottom"
                  :right="right"
                  :left="left"
                  :direction="direction"
                  :open-on-hover="hover"
                  :transition="transition"
                >
                  <template v-slot:activator>
                    <v-btn
                      v-model="fab"
                      color="blue darken-2"
                      dark
                      fab
                    >
                      <v-icon v-if="fab">
                        mdi-close
                      </v-icon>
                      <v-icon v-else>
                        mdi-account-circle
                      </v-icon>
                    </v-btn>
                  </template>
                  <v-btn
                    fab
                    dark
                    small
                    color="green"
                  >
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn
                    fab
                    dark
                    small
                    color="indigo"
                  >
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                  <v-btn
                    fab
                    dark
                    small
                    color="red"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-speed-dial>
              </v-row>
            </v-col>
            <v-col>
              <v-row class="columns-display">
                <v-checkbox
                  v-if="editmode"
                  v-model="user.checkbox"
                  class="checkbox-size mt-0 card2-input-elements"
                  dense
                  :label="`قفل کردن ویرایش اطلاعات شخصی`"
                />
                <v-checkbox
                  v-else
                  v-model="checkbox"
                  disabled
                  class="checkbox-size mt-0 card2-input-elements"
                  dense
                  :label="`قفل کردن ویرایش اطلاعات شخصی`"
                />
              </v-row>
              <v-row class="columns-display">
                <v-select
                  v-if="editmode"
                  :items="user.items2"
                  dense
                  solo
                  class=" ml-3 card2-input-elements"
                  label="رشته"
                />
                <div v-else class="ml-3 card2-input-elements">
                  رشته
                  <hr>
                  {{ items2[0] }}
                </div>
              </v-row>
              <v-row class="columns-display">
                <v-text-field
                  v-if="editmode"
                  v-model="user.city"
                  label=" شهر"
                  outlined
                  dense
                  class=" ml-3 card2-input-elements"
                />

                <div v-else class="ml-3 card2-input-elements">
                  شهر
                  <hr>
                  {{ city }}
                </div>
              </v-row>
              <v-row class="columns-display">
                <v-text-field
                  v-if="editmode"
                  v-model="user.school"
                  label="مدرسه"
                  outlined
                  dense
                  class=" ml-3 card2-input-elements"
                />
                <div v-else class="ml-3 card2-input-elements">
                  مدرسه
                  <hr>
                  {{ school }}
                </div>
              </v-row>
              <v-row class="columns-display">
                <v-text-field
                  v-if="editmode"
                  v-model="user.email"
                  label="ایمیل"
                  outlined
                  dense
                  class=" ml-3 card2-input-elements"
                />
                <div v-else class="ml-3 card2-input-elements">
                  ایمیل
                  <hr>
                  {{ email }}
                </div>
              </v-row>
              <v-row class="columns-display">
                <v-text-field
                  v-if="editmode"
                  label="رمز عبور"
                  outlined
                  dense
                  class=" ml-3 card2-input-elements"
                />
                <div v-else class="ml-3 card2-input-elements">
                  رمز عبور
                  <hr>
                </div>
              </v-row>
            </v-col>
            <v-col>
              <v-row class="columns-display">
                <v-checkbox
                  v-if="editmode"
                  v-model="user.checkbox"
                  class="checkbox-size mt-0 ml-5 card2-input-elements"
                  dense
                  :label="`تایید شماره موبایل`"
                />
                <v-checkbox
                  v-else
                  v-model="checkbox"
                  disabled
                  class="checkbox-size mt-0 card2-input-elements"
                  dense
                  :label="`تایید شماره موبایل`"
                />
              </v-row>
              <v-row class="columns-display">
                <v-select
                  v-if="editmode"
                  :items="user.items3"
                  dense
                  solo
                  class=" ml-5 card2-input-elements"
                  label="جنسیت"
                />
                <div v-else class="ml-3 card2-input-elements">
                  جنسیت
                  <hr>
                </div>
              </v-row>
              <v-row class="columns-display">
                <v-text-field
                  v-if="editmode"
                  label="استان"
                  outlined
                  dense
                  class=" ml-5 card2-input-elements"
                />
                <div v-else class="ml-3 card2-input-elements">
                  استان
                  <hr>
                </div>
              </v-row>
              <v-row class="columns-display">
                <v-text-field
                  v-if="editmode"
                  v-model="user.code"
                  label="کد پستی"
                  outlined
                  dense
                  class=" ml-5 card2-input-elements"
                />
                <div v-else class="ml-3 card2-input-elements">
                  کد پستی
                  <hr>
                </div>
              </v-row>
              <v-row class="columns-display">
                <v-text-field
                  v-if="editmode"
                  v-model="user.address"
                  label="آدرس"
                  outlined
                  dense
                  class=" ml-5 card2-input-elements"
                />
                <div v-else class="ml-3 card2-input-elements">
                  آدرس
                  <hr>
                  {{ address }}
                </div>
              </v-row>
              <v-row class="columns-display">
                <v-text-field
                  v-if="editmode"
                  label="تکرار رمز عبور"
                  outlined
                  dense
                  class=" ml-5 card2-input-elements"
                />
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="columns-display">
              <v-textarea
                v-if="editmode"
                class="mr-3 mt-3"
                label="درباره من"
                dense
                outlined
              />
              <div v-else class="mr-5 card2-input-elements">
                درباره من
                <hr>
              </div>
            </v-col>
            <v-col>
              <double-select

                v-if="editmode"
                searchable-placeholder="جستجو"
                text-items="نقش "
                :text-selected-items="user.selectedItemsText"
                :items="user.Roles"
                :selected-items="user.selectedRoles"
                :searchable="true"
                :sorteable="true"
                :limit-selected-items="4"
                :order-by="'name'"
                text-field="name"
                value-field="id"
              />
              <div v-else class=" card2-input-elements">
                نقش های انتخاب شده
                <hr>
                مشاور - ارسال کننده کتاب
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <div v-if="editmode" class="d-flex justify-end">
      <v-btn
        color="#b2dfdb"
        elevation="3"
        class="ml-5 mt-5 mb-5"
      >
        اعمال تغییرات
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserInformationCorrection',
  components: {
    DoubleSelect: () => import('vue-double-select')
  },

  props: ['editmode', 'filled'],
  data: () => ({
    changeshow: true,
    items: ['فعال', 'غیر فعال', 'نامشخص'],
    items2: ['ریاضی', 'تجربی'],
    items3: [],
    checkbox: false,
    lastname: 'محمدی',
    firstname: 'هلیا',
    phone: '9365491835',
    city: 'تهران',
    address: 'شهران-خیابان مدرسه-کوچه دانش',
    email: 'helia.mhmdi@gmail.com',
    status: 'فعال',
    field: 'ریاضی',
    code: '20890222',
    changetime: '۱۳۹۹/۰۷/۱۹',
    function: 'ثبت نام',
    phonestatus: 'تایید شده',
    school: 'فرزانگان',
    signdate: '۱۳۹۹/۰۷/۱۹',
    accesses: 'ادمین',
    id: 1,
    direction: 'left',
    fab: false,
    fling: false,
    hover: true,
    tabs: null,
    top: false,
    right: true,
    bottom: true,
    left: false,
    transition: 'slide-y-reverse-transition',
    user: {},
    toggle: true,
    Roles: [
      {
        id: 1,
        name: 'مشاور'
      },
      {
        id: 2,
        name: 'مدیر محصول'
      },
      {
        id: 3,
        name: 'آموزش کل'
      },
      {
        id: 4,
        name: 'کارمند'
      },
      {
        id: 5,
        name: 'ارسال کننده کتاب '
      }
    ],
    selectedRoles: [
      {
        id: 1,
        name: 'مشاور'
      },
      {
        id: 5,
        name: 'ارسال کننده کتاب '
      }
    ],

    selectedItemsText: { one: 'نقش انتخاب شده', greaterThanOne: 'نقش انتخاب شده' }
  }),
  computed: {
    activeFab () {
      switch (this.tabs) {
        case 'one': return { class: 'purple', icon: 'account_circle' }
        case 'two': return { class: 'red', icon: 'edit' }
        case 'three': return { class: 'green', icon: 'keyboard_arrow_up' }
        default: return {}
      }
    }
  },
  watch: {
    top (val) {
      this.bottom = !val
    },
    right (val) {
      this.left = !val
    },
    bottom (val) {
      this.top = !val
    },
    left (val) {
      this.right = !val
    }
  },
  created () {
    if (this.filled) {
      this.initializeEdit()
    } else {
      this.initializeAdd()
    }
  },
  methods: {
    initializeEdit () {
      this.user = {
        lastname: 'محمدی',
        firstname: 'هلیا',
        phone: '9365491835',
        city: 'تهران',
        address: 'شهران-خیابان مدرسه-کوچه دانش',
        email: 'helia.mhmdi@gmail.com',
        status: 'فعال',
        field: 'ریاضی',
        code: '20890222',
        changetime: '۱۳۹۹/۰۷/۱۹',
        function: 'ثبت نام',
        phonestatus: 'تایید شده',
        school: 'فرزانگان',
        signdate: '۱۳۹۹/۰۷/۱۹',
        accesses: 'ادمین',
        id: 1,
        toggle: true,
        Roles: [
          {
            id: 1,
            name: 'مشاور'
          },
          {
            id: 2,
            name: 'مدیر محصول'
          },
          {
            id: 3,
            name: 'آموزش کل'
          },
          {
            id: 4,
            name: 'کارمند'
          },
          {
            id: 5,
            name: 'ارسال کننده کتاب '
          }
        ],
        selectedRoles: [
          {
            id: 1,
            name: 'مشاور'
          },
          {
            id: 5,
            name: 'ارسال کننده کتاب '
          }
        ],
        selectedItemsText: { one: 'نقش انتخاب شده', greaterThanOne: 'نقش انتخاب شده' }
      }
    },

    initializeAdd () {
      this.user = {
        lastname: '',
        firstname: '',
        phone: '',
        city: '',
        address: '',
        email: '',
        status: '',
        field: '',
        code: '',
        changetime: '',
        function: '',
        phonestatus: '',
        school: '',
        signdate: '',
        accesses: '',
        toggle: true,
        Roles: [
          {
            id: 1,
            name: 'مشاور'
          },
          {
            id: 2,
            name: 'مدیر محصول'
          },
          {
            id: 3,
            name: 'آموزش کل'
          },
          {
            id: 4,
            name: 'کارمند'
          },
          {
            id: 5,
            name: 'ارسال کننده کتاب '
          }
        ],
        selectedRoles: [
        ],
        selectedItemsText: { one: 'نقش انتخاب شده', greaterThanOne: 'نقش انتخاب شده' }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('~/assets/scss/components/admin/managementsPanel/userInformationCorrection.scss');
</style>
