<template>
  <div v-if="ispwa" class="pwa-container page-content">
    <Breadcrumbs :items="breadcrumbsItems" class="pwa-breadcrumbs" />
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
    <div v-if="currentTab === 'edit-address'" />
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
                <nuxt-link to="#">
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
                </nuxt-link>
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
import Breadcrumbs from '../../components/Breadcrumbs'

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
    ispwa () {
      return this.$store.getters.ispwa
    }
  }
}
</script>

<style scoped>
  .page-content {
    background-color: #fff;
    font-size: 14px;
  }

  .pwa-container p {
    line-height: 24px;
    font-size: 14px;
  }

  .input-field p {
    font-weight: bold;
  }

  .page-content .tab-content p {
    line-height: 25px;
    margin-bottom: 10px;
  }

  .pwa-container a {
    color: #e42828;
    font-weight: bold;
    font-size: 14px;
  }

  .page-content .tab-content a {
    color: #fb1616;
  }

  .complete-info {
    background-color: #2bbb28;
    border-right: 10px solid #036e01;
    padding: 10px 25px;
    border-radius: 5px;
    font-weight: bold;
    color: #fff;
    width: fit-content;
  }

  .xs-font {
    font-size: 0.6rem;
  }

  .info-box {
    background-color: #2bbb28;
    border-right: 8px solid rgba(0, 0, 0, 0.15);
    border-radius: 2px;
    padding: 1rem 1.6rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .pwa-container .info-box {
    margin-top: 10px;
  }

  .shop-button button {
    font-weight: bold;
    color: #fff;
  }

  .page-content .tab-content .info-box p {
    margin: 0;
    color: #fff;
  }

  .address-bar {
    border-bottom: 1px solid #e7e7e7;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    margin-bottom: 10px;
  }

  .address-bar h3 {
    color: #1c9b1a;
  }

  .address-bar button {
    color: #fff;
    font-weight: bold;
  }

  .half-width {
    width: 50%;
    box-sizing: border-box;
    margin: 20px;
  }

  .input-field p span {
    color: #f00;
  }

  .input-fields-top {
    display: flex;
    flex-direction: column;
  }

  .input-fields-top .input-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .full-width {
    width: 100%;
  }

  .input-field input {
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.125);
    padding: 0.6rem;
    border-radius: 2px;
    line-height: 1.15;
  }

  .input-field input:focus {
    outline: none;
  }

  .page-content .tab-content .input-field-radio p {
    margin-bottom: 0;
  }

  .password-box {
    padding: 20px;
  }

  .pwa-container {
    margin: 20px;
  }

  .pwa-breadcrumbs {
    margin-bottom: 20px;
  }

  .pwa-container .margin-top {
    margin-top: 20px;
  }

  .submit-address {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .submit-address button {
    color: #fff;
  }

  @media only screen and (max-width: 960px) {
    .half-width {
      width: 95%;
      margin: 0 20px;
    }

    .input-fields-top .input-row {
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 600px) {
    .page-content {
      flex-direction: column;
    }

    .page-content .v-navigation-drawer {
      width: 100% !important;
    }

    .address-box {
      margin-bottom: 40px;
    }
  }

  @media only screen and (max-width: 400px) {
    .pwa-container .info-box {
      flex-direction: column;
    }

    .pwa-container .info-box a {
      width: 100%;
    }

    .pwa-container .info-box button {
      width: 100%;
    }
  }
</style>

<style>
  .page-content {
    font-size: 0.9rem;
  }

  .page-content .v-list-item__content {
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.05);
    border-top: 0.5px solid rgba(0, 0, 0, 0.05);
    height: 55px;
  }

  .bold {
    font-weight: bold;
  }

  .page-content .input-field .v-label {
    font-size: 1rem;
  }

  .v-application--is-ltr .v-text-field .v-label {
    transform-origin: top right !important;
  }

  .input-field .v-text-field .v-label {
    left: auto !important;
    right: 5px !important;
  }

  .input-field .v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input {
    background-color: transparent;
  }

  .input-field .v-select.v-text-field--outlined:not(.v-text-field--single-line) .v-select__selections input {
    display: none;
  }

  .input-field .v-text-field > .v-input__control > .v-input__slot > .v-text-field__slot label {
    right: 5px !important;
    left: auto !important;
  }

  .input-field .v-text-field__details .v-messages .v-messages__wrapper {
    text-align: right;
  }

  .input-field .v-text-field > .v-input__control > .v-input__slot > .v-text-field__slot input {
    background-color: transparent;
  }

  .input-field .v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--enclosed.v-input--dense .v-select__selections input {
    display: none;
  }

  .input-field .v-text-field--filled .v-label--active {
    transform: translateY(-10px) scale(0.75);
  }

  .input-field .v-text-field.v-text-field--enclosed:not(.v-text-field--rounded) > .v-input__control > .v-input__slot .v-select__slot label {
    left: auto !important;
    right: 5px !important;
  }

  .input-field .v-select.v-input--dense .v-chip {
    margin: 2px 4px;
  }

  .page-content .input-field .v-text-field--filled > .v-input__control > .v-input__slot {
    min-height: 30px;
  }
</style>
