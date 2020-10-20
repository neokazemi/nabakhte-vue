<template>
  <div v-if="!isFromPc" class="mobile-container page-content">
    <Breadcrumbs :items="breadcrumbsItems" class="mobile-breadcrumbs" />
    <p>
      برای استفاده بهینه از خدمات سایت اطلاعات <nuxt-link to="/my-account/edit-address">
        حساب کاربری
      </nuxt-link> خود را تکمیل کنید.
    </p>
    <div v-if="currentTab === ''">
      <p>سلام <span class="bold">{{ username }} ({{ username }}</span> نیستید؟ <a href="#">خارج شوید</a>)</p>
      <p class="margin-top">
        به حساب کاربری خود در چی بخونم خوش آمدید . در این بخش می توانید <nuxt-link to="/my-account/orders">
          سفارش های قبلی خود
        </nuxt-link> را ببینید و یا, <nuxt-link to="/my-account/edit-address">
          آدرس ها
        </nuxt-link> و <nuxt-link to="/my-account/edit-account">
          سایر اطلاعات
        </nuxt-link> خود را ویرایش کنید.
      </p>
    </div>
    <div v-if="currentTab === 'orders'" class="orders">
      <a>
        پیگیری مرسوله های پستی (شهرستان)
      </a>
      <div class="info-box">
        <p>هیچ سفارشی در اینجا یافت نشد</p>
        <nuxt-link class="shop-button" to="/shop">
          <v-btn depressed rounded color="#43454b" class="bold">
            نمایش محصولات
          </v-btn>
        </nuxt-link>
      </div>
    </div>
    <div v-if="currentTab === 'edit-address'">
      <p>آدرس‌های زیر برای ارسال فاکتور و صورت حساب استفاده خواهند شد.</p>
      <div class="address-box">
        <div class="d-flex flex-row address-bar">
          <h3>آدرس صورتحساب</h3>
          <v-dialog
            v-model="billingDialog"
            :max-width="800"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="#2bbb28"
                tile
                :elevation="3"
                v-bind="attrs"
                v-on="on"
              >
                افزودن
              </v-btn>
            </template>
            <v-card>
              <v-btn icon class="close-button-address-dialog" @click="closeModal">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-card-title>
                آدرس صورت حساب
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row class="flex-column flex-sm-row">
                    <v-col :sm="6" class="input-field">
                      <v-text-field required label="نام" :rules="notEmptyRule" />
                    </v-col>
                    <v-col :sm="6" class="input-field">
                      <v-text-field required label="نام خانوادگی" :rules="notEmptyRule" />
                    </v-col>
                    <v-col :sm="6" class="input-field">
                      <v-autocomplete label="استان" :items="states" :rules="notEmptyRule" required />
                    </v-col>
                    <v-col :sm="6" class="input-field">
                      <v-autocomplete label="شهر" :items="states" :rules="notEmptyRule" required />
                    </v-col>
                    <v-col :sm="12" class="input-field">
                      <v-text-field required label="آدرس پستی" :rules="notEmptyRule" />
                    </v-col>
                    <v-col :sm="6" class="input-field">
                      <v-text-field required label="کد پستی" :rules="notEmptyRule" />
                    </v-col>
                    <v-col :sm="6" class="input-field">
                      <v-text-field required label="تلفن همراه" :rules="notEmptyRule" />
                    </v-col>
                    <v-col :sm="6" class="input-field">
                      <v-text-field label="آدرس ایمیل" hint="اختیاری" />
                    </v-col>
                    <v-col :sm="6" class="input-field submit-address">
                      <v-btn color="rgb(43, 187, 40)">
                        ذخیره آدرس
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-dialog>
        </div>
        <p>شما هنوز آدرسی ثبت نکرده اید.</p>
      </div>
      <div class="address-box">
        <div class="d-flex flex-row address-bar">
          <h3>آدرس برای ارسال بار</h3>
          <v-dialog
            v-model="shippingDialog"
            :max-width="800"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="#2bbb28"
                tile
                :elevation="3"
                v-bind="attrs"
                v-on="on"
              >
                افزودن
              </v-btn>
            </template>
            <v-card>
              <v-btn icon class="close-button-address-dialog" @click="closeModal">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-card-title>
                آدرس برای ارسال بار
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row class="flex-column flex-sm-row">
                    <v-col :sm="6" class="input-field">
                      <v-text-field required label="نام" :rules="notEmptyRule" />
                    </v-col>
                    <v-col :sm="6" class="input-field">
                      <v-text-field required label="نام خانوادگی" :rules="notEmptyRule" />
                    </v-col>
                    <v-col :sm="12" class="input-field">
                      <v-text-field label="نام شرکت" hint="اختیاری" />
                    </v-col>
                    <v-col :sm="12" class="input-field">
                      <v-text-field label="منطقه / کشور" value="ایران" readonly />
                    </v-col>
                    <v-col :sm="6" class="input-field">
                      <v-autocomplete label="استان" :items="states" :rules="notEmptyRule" required />
                    </v-col>
                    <v-col :sm="6" class="input-field">
                      <v-autocomplete label="شهر" :items="states" :rules="notEmptyRule" required />
                    </v-col>
                    <v-col :sm="12" class="input-field">
                      <v-text-field required label="آدرس پستی" :rules="notEmptyRule" />
                    </v-col>
                    <v-col :sm="6" class="input-field">
                      <v-text-field required label="کد پستی" :rules="notEmptyRule" />
                    </v-col>
                    <v-col :sm="6" class="input-field submit-address">
                      <v-btn color="rgb(43, 187, 40)">
                        ذخیره آدرس
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-dialog>
        </div>
        <p>شما هنوز آدرسی ثبت نکرده اید.</p>
      </div>
    </div>
    <div v-if="currentTab === 'edit-account'">
      <v-container>
        <v-row class="flex-column">
          <v-col>
            <v-text-field required label="نام" :rules="notEmptyRule" />
          </v-col>
          <v-col>
            <v-text-field required label="نام خانوادگی" :rules="notEmptyRule" />
          </v-col>
          <v-col>
            <v-text-field required label="نام خانوادگی" :rules="notEmptyRule" value="neo.kazemi79" hint="به این صورت اسم شما در حساب کاربری و نظرات دیده خواهد شد" />
          </v-col>
          <v-col>
            <v-text-field required label="آدرس ایمیل" :rules="notEmptyRule" value="neo.kazemi79@gmail.com" />
          </v-col>
          <v-col>
            <v-text-field label="شمار همراه" />
          </v-col>
          <v-col>
            <div class="input-row">
              <div class="input-field-radio">
                <p>نقش شما</p>
                <v-radio-group v-model="selectedRadio" row dense>
                  <v-radio v-for="(item, index) in radioOptions" :key="index" :label="item.name" :value="item.value" />
                </v-radio-group>
              </div>
            </div>
          </v-col>
          <v-col>
            <div v-if="selectedRadio !== '' && selectedRadio !== 'other'" class="input-row">
              <div v-if="selectedRadio === 'student'" class="input-field">
                <p>
                  پايه و رشته تحصيلي براي دانش آموزان
                </p>
                <div class="full-width">
                  <v-select :items="studentSelectItems" outlined :value="studentSelectItems[0]" dense eager />
                </div>
              </div>
              <div v-if="selectedRadio === 'teacher'" class="input-field">
                <div class="full-width">
                  <v-select
                    :items="studentSelectItems"
                    label="درس هایی که تدریس می کنید"
                    dense
                    multiple
                    chips
                    eager
                  />
                </div>
              </div>
              <div v-if="selectedRadio === 'counselor'" class="input-field">
                <div class="full-width">
                  <v-select
                    :items="studentSelectItems"
                    label="پایه و رشته تحصیلی برای مشاوران"
                    dense
                    multiple
                    chips
                    eager
                  />
                </div>
              </div>
            </div>
          </v-col>
          <v-col>
            <v-text-field label="رمز عبور پیشین" type="password" hint="(در صورتی که قصد تغییر ندارید خالی بگذارید)" />
          </v-col>
          <v-col>
            <v-text-field label="رمز عبور جدید" type="password" hint="(در صورتی که قصد تغییر ندارید خالی بگذارید)" />
          </v-col>
          <v-col>
            <v-text-field label="تکرار رمز عبور" type="password" />
          </v-col>
          <v-col class="submit">
            <v-btn block color="#2bbb28">
              ذخیره تغییرات
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
  <v-container v-else>
    <v-row>
      <v-col>
        <Breadcrumbs :items="breadcrumbsItems" />
      </v-col>
    </v-row>
    <v-row class="page-content">
      <v-col :md="3" :sm="4">
        <v-navigation-drawer permanent floating :width="'fit-content'">
          <v-list>
            <v-list-item v-for="(item, index) in navItems" :key="index" link :to="item.url">
              <v-list-item-content>
                {{ item.name }}
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-col>
      <v-col :md="9" :sm="8" class="tab-content">
        <p class="complete-info">
          برای استفاده بهینه از خدمات سایت اطلاعات <nuxt-link to="/my-account/edit-address">
            حساب کاربری
          </nuxt-link> خود را تکمیل کنید.
        </p>
        <div v-if="currentTab === ''" class="default">
          <p>سلام <span class="bold">{{ username }} ({{ username }}</span> نیستید؟ <a href="#">خارج شوید</a>)</p>
          <p>از پیشخوان حساب کاربری خود می توانید <a href="#">اخرین سفارش ها</a> را ببینید ، به راحتی <a href="#">آدرس حمل و نقل و صورت حساب</a> را مدیریت کنید و <a href="#">اطلاعات حساب کاربری و رمز عبور</a> را تغییر دهید.</p>
        </div>
        <div v-if="currentTab === 'orders'" class="orders">
          <a class="xs-font bold">
            پیگیری مرسوله های پستی (شهرستان)
          </a>
          <div class="info-box">
            <p>هیچ سفارشی در اینجا یافت نشد</p>
            <nuxt-link class="shop-button" to="/shop">
              <v-btn depressed tile color="#43454b" class="bold">
                نمایش محصولات
              </v-btn>
            </nuxt-link>
          </div>
        </div>
        <div v-if="currentTab === 'edit-address'" class="edit-address">
          <p>آدرس‌های زیر برای ارسال فاکتور و صورت حساب استفاده خواهند شد.</p>
          <div class="full-width flex-sm-row flex-column d-flex">
            <div class="half-width address-box">
              <div class="d-flex flex-row address-bar">
                <h3>آدرس صورتحساب</h3>
                <v-dialog
                  v-model="billingDialog"
                  :max-width="800"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="#2bbb28"
                      tile
                      :elevation="3"
                      v-bind="attrs"
                      v-on="on"
                    >
                      افزودن
                    </v-btn>
                  </template>
                  <v-card>
                    <v-btn icon class="close-button-address-dialog" @click="closeModal">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-card-title>
                      آدرس صورت حساب
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row class="flex-column flex-sm-row">
                          <v-col :sm="6" class="input-field">
                            <v-text-field required label="نام" :rules="notEmptyRule" />
                          </v-col>
                          <v-col :sm="6" class="input-field">
                            <v-text-field required label="نام خانوادگی" :rules="notEmptyRule" />
                          </v-col>
                          <v-col :sm="6" class="input-field">
                            <v-autocomplete label="استان" :items="states" :rules="notEmptyRule" required />
                          </v-col>
                          <v-col :sm="6" class="input-field">
                            <v-autocomplete label="شهر" :items="states" :rules="notEmptyRule" required />
                          </v-col>
                          <v-col :sm="12" class="input-field">
                            <v-text-field required label="آدرس پستی" :rules="notEmptyRule" />
                          </v-col>
                          <v-col :sm="6" class="input-field">
                            <v-text-field required label="کد پستی" :rules="notEmptyRule" />
                          </v-col>
                          <v-col :sm="6" class="input-field">
                            <v-text-field required label="تلفن همراه" :rules="notEmptyRule" />
                          </v-col>
                          <v-col :sm="6" class="input-field">
                            <v-text-field label="آدرس ایمیل" hint="اختیاری" />
                          </v-col>
                          <v-col :sm="6" class="input-field submit-address">
                            <v-btn color="rgb(43, 187, 40)">
                              ذخیره آدرس
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-dialog>
              </div>
              <p>شما هنوز آدرسی ثبت نکرده اید.</p>
            </div>
            <div class="half-width address-box">
              <div class="d-flex flex-row address-bar">
                <h3>آدرس برای ارسال بار</h3>
                <v-dialog
                  v-model="shippingDialog"
                  :max-width="800"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="#2bbb28"
                      tile
                      :elevation="3"
                      v-bind="attrs"
                      v-on="on"
                    >
                      افزودن
                    </v-btn>
                  </template>
                  <v-card>
                    <v-btn icon class="close-button-address-dialog" @click="closeModal">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-card-title>
                      آدرس برای ارسال بار
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-row class="flex-column flex-sm-row">
                          <v-col :sm="6" class="input-field">
                            <v-text-field required label="نام" :rules="notEmptyRule" />
                          </v-col>
                          <v-col :sm="6" class="input-field">
                            <v-text-field required label="نام خانوادگی" :rules="notEmptyRule" />
                          </v-col>
                          <v-col :sm="12" class="input-field">
                            <v-text-field label="نام شرکت" hint="اختیاری" />
                          </v-col>
                          <v-col :sm="12" class="input-field">
                            <v-text-field label="منطقه / کشور" value="ایران" readonly />
                          </v-col>
                          <v-col :sm="6" class="input-field">
                            <v-autocomplete label="استان" :items="states" :rules="notEmptyRule" required />
                          </v-col>
                          <v-col :sm="6" class="input-field">
                            <v-autocomplete label="شهر" :items="states" :rules="notEmptyRule" required />
                          </v-col>
                          <v-col :sm="12" class="input-field">
                            <v-text-field required label="آدرس پستی" :rules="notEmptyRule" />
                          </v-col>
                          <v-col :sm="6" class="input-field">
                            <v-text-field required label="کد پستی" :rules="notEmptyRule" />
                          </v-col>
                          <v-col :sm="6" class="input-field submit-address">
                            <v-btn color="rgb(43, 187, 40)">
                              ذخیره آدرس
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-dialog>
              </div>
              <p>شما هنوز آدرسی ثبت نکرده اید.</p>
            </div>
          </div>
        </div>
        <div v-if="currentTab === 'edit-account'" class="edit-account">
          <div class="input-fields-top">
            <div class="input-row">
              <div class="input-field half-width">
                <v-text-field required label="نام" :rules="notEmptyRule" filled />
              </div>
              <div class="input-field half-width">
                <v-text-field required label="نام خانوادگی" :rules="notEmptyRule" filled />
              </div>
            </div>
            <div class="input-row">
              <div class="input-field half-width">
                <v-text-field required label="نام نمایشی" :rules="notEmptyRule" filled value="neo.kazemi79" />
              </div>
              <div class="input-field half-width">
                <v-text-field required label="آدرس ایمیل" :rules="notEmptyRule" filled value="neo.kazemi79@gmail.com" />
              </div>
            </div>
            <div class="input-row">
              <div class="input-field half-width">
                <v-text-field label="شماره همراه" filled />
              </div>
              <div class="input-field-radio half-width">
                <p>نقش شما</p>
                <v-radio-group v-model="selectedRadio" row dense>
                  <v-radio v-for="(item, index) in radioOptions" :key="index" :label="item.name" :value="item.value" />
                </v-radio-group>
              </div>
            </div>
            <div v-if="selectedRadio !== '' && selectedRadio !== 'other'" class="input-row">
              <div v-if="selectedRadio === 'student'" class="input-field half-width">
                <p>
                  پايه و رشته تحصيلي براي دانش آموزان
                </p>
                <div class="full-width">
                  <v-select :items="studentSelectItems" outlined :value="studentSelectItems[0]" dense eager />
                </div>
              </div>
              <div v-if="selectedRadio === 'teacher'" class="input-field half-width">
                <div class="full-width">
                  <v-select
                    :items="studentSelectItems"
                    label="درس هایی که تدریس می کنید"
                    dense
                    multiple
                    chips
                    filled
                    eager
                  />
                </div>
              </div>
              <div v-if="selectedRadio === 'counselor'" class="input-field half-width">
                <div class="full-width">
                  <v-select
                    :items="studentSelectItems"
                    label="پایه و رشته تحصیلی برای مشاوران"
                    dense
                    multiple
                    chips
                    filled
                    eager
                  />
                </div>
              </div>
              <div class="input-field half-width" />
            </div>
            <div class="full-width password-box">
              <p class="bold">
                تغییر گذرواژه
              </p>
              <div class="input-field">
                <v-text-field label="رمز عبور پیشین" filled type="password" hint="(در صورتی که قصد تغییر ندارید خالی بگذارید)" />
              </div>
              <div class="input-field">
                <v-text-field label="رمز عبور جدید" filled type="password" hint="(در صورتی که قصد تغییر ندارید خالی بگذارید)" />
              </div>
              <div class="input-field">
                <v-text-field label="تکرار رمز عبور" filled type="password" />
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Breadcrumbs from '~/components/Breadcrumbs'
import '~/assets/css/pages/MyAccount.css'

export default {
  name: 'MyAccount',
  components: {
    Breadcrumbs
  },
  data () {
    return {
      breadcrumbsItems: [
        {
          disabled: false,
          exact: false,
          href: '#',
          link: false,
          text: 'چی بخونم',
          to: '#'
        },
        {
          disabled: true,
          exact: false,
          href: '#',
          link: false,
          text: 'پنل کاربری من',
          to: '#'
        }
      ],
      navItems: [
        {
          name: 'سفارش ها',
          url: '/my-account/orders'
        },
        {
          name: 'آدرس ها',
          url: '/my-account/edit-address'
        },
        {
          name: 'اطلاعات حساب کاربری',
          url: '/my-account/edit-account'
        },
        {
          name: 'نظرات من',
          url: '/my-account/my-comments'
        },
        {
          name: 'خروج',
          url: '#'
        }
      ],
      username: 'neo.kazemi79',
      radioOptions: [
        {
          name: ' دانش آموز',
          value: 'student'
        },
        {
          name: ' معلم',
          value: 'teacher'
        },
        {
          name: ' مشاور',
          value: 'counselor'
        },
        {
          name: ' سایر',
          value: 'other'
        }
      ],
      selectedRadio: '',
      studentSelectItems: [
        'دوازدهم ریاضی',
        'دوازدهم تجربی',
        'دوازدهم انسانی',
        'یازدهم ریاضی',
        'یازدهم تجربی',
        'یازدهم انسانی',
        'دهم ریاضی',
        'دهم تجربی',
        'دهم انسانی',
        'نهم',
        'هشتم',
        'هفتم'
      ],
      notEmptyRule: [
        v => !!v || 'پر کردن این فیلد الزامی میباشد'
      ],
      billingDialog: false,
      shippingDialog: false,
      states: ['تهران', 'خراسان رضوی', 'اصفهان', 'فارس', 'خوزستان', 'آذربایجان شرقی', 'مازندران', 'آذربایجان غربی', 'کرمان', 'سیستان و بلوچستان', 'البرز']
    }
  },
  computed: {
    currentTab () {
      if (typeof this.$route.params.account !== 'undefined') {
        return this.$route.params.account
      } else {
        return ''
      }
    },
    isFromPc () {
      return this.$store.getters.isFromPc
    }
  },
  methods: {
    closeModal () {
      this.shippingDialog = false
      this.billingDialog = false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import url('~/assets/css/pages/MyAccountScoped.css');
</style>
