<template>
  <v-container>
    <v-row>
      <v-col :md="1" />
      <v-col :md="11" class="checkout-items">
        <v-expansion-panels>
          <v-expansion-panel class="account">
            <v-expansion-panel-header>
              <p class="header-title">
                حساب کاربری
              </p>
              <p class="header-details">
                براي خريد از چی بخونم نیازی به ورود یا ثبت نام نیست. ولی با ورود یا ثبت نام، در خرید های بعدی نیازی به وارد کردن مشخصات و آدرس ندارید.
              </p>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <v-col class="login-form">
                  <h3 class="login-header">
                    ورود
                  </h3>
                  <v-text-field outlined label="کلمه کاربری یا ایمیل" dense />
                  <v-text-field outlined label="کلمه عبور" type="password" dense />
                  <div class="login-buttons">
                    <nuxt-link to="#" class="forget-password">
                      رمز عبور خود را فراموش کردید؟
                    </nuxt-link>
                    <v-btn outlined color="#25a522" :width="120">
                      <p>ورود</p>
                      <v-icon color="#25a522" small>
                        mdi-arrow-left
                      </v-icon>
                    </v-btn>
                  </div>
                </v-col>
                <v-col class="login-info">
                  <div class="profile-pic">
                    <v-icon color="#fff" size="75">
                      mdi-account
                    </v-icon>
                  </div>
                  <div class="profile-pic-under" />
                  <p class="login-info-guide">
                    اگر از فروشگاه ما قبلا خریدی داشته اید مشخصات ورود خود را وارد نمائید در غیر این صورت به تکمیل فرم تسویه حساب بپردازید
                  </p>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-expansion-panels>
          <v-expansion-panel class="discount-container">
            <v-expansion-panel-header>
              <p class="header-title">
                کد تخفیف دارید؟
              </p>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="d-flex flex-column">
                <p>اگر شما کد تخفیف دارید ، برای ثبت آن از طریق زیر اقدام کنید.</p>
                <div class="discount">
                  <v-text-field outlined label="کد تخفیف" dense />
                  <v-btn outlined color="#25a522" :width="120" class="discount-button">
                    اعمال تخفیف
                  </v-btn>
                </div>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-expansion-panels v-model="openPanel" multiple>
          <v-expansion-panel class="cart">
            <v-expansion-panel-header>
              <p class="header-title">
                سفارش شما
              </p>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="cart-list">
              <div v-for="(item, index) in cart.list" :key="index" class="cart-item">
                <div class="item-name">
                  <p>{{ item.product.name }}<span v-if="item.qty > 1">({{ item.qty }} عدد)</span></p>
                </div>
                <div class="item-price">
                  {{ item.totalPrice().toman('final', true) }}
                </div>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-container :fluid="true">
          <v-row class="user-info">
            <v-col :md="8" class="user-address">
              <v-sheet color="#fff" rounded :elevation="3">
                <v-container :fluid="true">
                  <v-row>
                    <v-col :md="6">
                      <v-text-field
                        required
                        label="نام"
                        :rules="notEmptyRule"
                        outlined
                        dense
                        hint="پر کردن این فیلد الزامی میباشد"
                      />
                    </v-col>
                    <v-col :md="6">
                      <v-text-field
                        required
                        label="نام خانوادگی"
                        :rules="notEmptyRule"
                        outlined
                        dense
                        hint="پر کردن این فیلد الزامی میباشد"
                      />
                    </v-col>
                    <v-col :sm="6">
                      <v-autocomplete
                        label="استان"
                        :items="states"
                        :rules="notEmptyRule"
                        required
                        dense
                        outlined
                        :value="states[0]"
                        hint="پر کردن این فیلد الزامی میباشد"
                      />
                    </v-col>
                    <v-col :sm="6">
                      <v-autocomplete
                        label="شهر"
                        :items="states"
                        :rules="notEmptyRule"
                        required
                        dense
                        outlined
                        hint="پر کردن این فیلد الزامی میباشد"
                      />
                    </v-col>
                    <v-col :md="6">
                      <v-text-field label="آدرس پستی" outlined dense />
                    </v-col>
                    <v-col :md="6">
                      <v-text-field
                        required
                        label="کد پستی"
                        :rules="notEmptyRule"
                        outlined
                        dense
                        hint="پر کردن این فیلد الزامی میباشد"
                      />
                    </v-col>
                    <v-col :md="6">
                      <v-text-field
                        required
                        label="تلفن همراه"
                        :rules="notEmptyRule"
                        outlined
                        dense
                        hint="پر کردن این فیلد الزامی میباشد"
                      />
                    </v-col>
                    <v-col :md="6">
                      <v-text-field label="آدرس ایمیل" outlined dense />
                    </v-col>
                    <v-col :md="12">
                      <v-checkbox v-model="createNewAccount" hide-details color="#2bbb28" label="می خواهید یک حساب کاربری ایجاد کنید؟" />
                    </v-col>
                    <!--                    ToDo: make this work with expand transition component-->
                    <v-row :class="{ 'new-account-opened': createNewAccount, 'new-account-closed': !createNewAccount }">
                      <v-col>
                        <v-text-field
                          label="کلمه عبور"
                          outlined
                          dense
                        />
                      </v-col>
                      <v-col>
                        <v-text-field
                          label="تکرار کلمه عبور"
                          outlined
                          dense
                        />
                      </v-col>
                    </v-row>
                    <v-col :md="12">
                      <v-checkbox v-model="deliverToAnotherAddress" hide-details color="#2bbb28" label="سفارش به آدرس دیگری حمل شود؟" />
                    </v-col>
                    <v-row :class="{ 'new-address-opened': deliverToAnotherAddress, 'new-address-closed': !deliverToAnotherAddress }">
                      <v-col :md="6">
                        <v-text-field
                          required
                          label="نام"
                          :rules="notEmptyRule"
                          outlined
                          dense
                          hint="پر کردن این فیلد الزامی میباشد"
                        />
                      </v-col>
                      <v-col :md="6">
                        <v-text-field
                          required
                          label="نام خانوادگی"
                          :rules="notEmptyRule"
                          outlined
                          dense
                          hint="پر کردن این فیلد الزامی میباشد"
                        />
                      </v-col>
                      <v-col :sm="6">
                        <v-autocomplete
                          label="استان"
                          :items="states"
                          :rules="notEmptyRule"
                          required
                          dense
                          outlined
                          :value="states[0]"
                          hint="پر کردن این فیلد الزامی میباشد"
                        />
                      </v-col>
                      <v-col :sm="6">
                        <v-autocomplete
                          label="شهر"
                          :items="states"
                          :rules="notEmptyRule"
                          required
                          dense
                          outlined
                          :value="states[0]"
                          hint="پر کردن این فیلد الزامی میباشد"
                        />
                      </v-col>
                      <v-col :md="6">
                        <v-text-field label="آدرس پستی" outlined dense />
                      </v-col>
                      <v-col :md="6">
                        <v-text-field
                          required
                          label="کد پستی"
                          :rules="notEmptyRule"
                          outlined
                          dense
                          hint="پر کردن این فیلد الزامی میباشد"
                        />
                      </v-col>
                    </v-row>
                    <v-col :md="12">
                      <v-textarea filled label="یادداشت ها درباره سفارش شما ، برای مثال نکات مهم برای تحویل بار" />
                    </v-col>
                  </v-row>
                </v-container>
              </v-sheet>
            </v-col>
            <v-col :md="4" class="delivery-cost">
              <v-sheet color="#fff" rounded :elevation="3">
                <div class="total-price">
                  <p>مجموع کل سبد خرید</p>
                  <p>{{ cart.totalPrice().toman('final', true) }}</p>
                </div>
                <div class="delivery">
                  <div class="delivery-options">
                    <v-radio-group v-model="deliveryOption">
                      <v-radio value="pishtaz" label="پست پیشتاز:" color="#2bbb28" />
                      <v-radio value="sefareshi" label="پست سفارشی:" color="#2bbb28" />
                    </v-radio-group>
                  </div>
                  <div class="delivery-price">
                    <p>27,000 تومان</p>
                    <p>12,000 تومان</p>
                  </div>
                </div>
              </v-sheet>
            </v-col>
          </v-row>
        </v-container>
        <v-container :fluid="true">
          <v-row>
            <v-col :style="{ padding: 0 }">
              <v-card>
                <v-card-title :style="{ 'font-weight': 'bold' }">
                  انتخاب درگاه
                </v-card-title>
                <v-card-text>
                  <v-container :fluid="true">
                    <v-row>
                      <v-col>
                        <v-row :style="{ 'padding-left': 30 }">
                          <v-col @click="selectedBank = 'pasargad'">
                            <div :class="{ bank: true, selected: selectedBank === 'pasargad' }">
                              <v-icon class="check" :color="selectedBank === 'pasargad' ? '#2bbb28' : '#e0e0e0'">
                                mdi-check-circle
                              </v-icon>
                              <v-img :width="19" height="19" contain src="https://www.chibekhoonam.net/wp-content/plugins/a-gateway-for-pasargad-bank-on-woocommerce/images/logo.png" />
                              <p>بانک پاسارگاد</p>
                            </div>
                          </v-col>
                          <v-col @click="selectedBank = 'saman'">
                            <div :class="{ bank: true, selected: selectedBank === 'saman' }">
                              <v-icon class="check" :color="selectedBank === 'saman' ? '#2bbb28' : '#e0e0e0'">
                                mdi-check-circle
                              </v-icon>
                              <v-img :width="19" height="19" contain src="https://www.chibekhoonam.net/wp-content/plugins/Woocommerce_Saman/assets/images/logo.png" />
                              <p>بانک سامان</p>
                            </div>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col class="important-points">
                        <h3 class="important-title">
                          چند نکته مهم در هنگام خرید کتاب
                        </h3>
                        <p :style="{ color: '#696969', 'line-height': 2 }">
                          پرداخت از طریق همه کارت های عضو شتاب امکانپذیر است.<br>
                          پشتیبانی فروش از طریق تلگرام: https://t.me/chisupport
                        </p>
                        <v-checkbox color="#2bbb28" :value="true">
                          <template v-slot:label>
                            <p>
                              من قوانین و مقررات <nuxt-link to="#">
                                شرایط و مقررات
                              </nuxt-link> را خواندم و آن را می پذیرم.
                            </p>
                          </template>
                        </v-checkbox>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import mixinStore from '~/plugins/mixinStore'

export default {
  name: 'Checkout',
  mixins: [mixinStore],
  data () {
    return {
      step: 1,
      openPanel: [0],
      notEmptyRule: [
        v => !!v || 'پر کردن این فیلد الزامی میباشد'
      ],
      states: ['تهران', 'خراسان رضوی', 'اصفهان', 'فارس', 'خوزستان', 'آذربایجان شرقی', 'مازندران', 'آذربایجان غربی', 'کرمان', 'سیستان و بلوچستان', 'البرز'],
      createNewAccount: false,
      deliverToAnotherAddress: false,
      deliveryOption: 'pishtaz',
      selectedBank: 'pasargad'
    }
  }
}
</script>

<style>
.checkout-items .v-expansion-panels {
  margin-bottom: 20px;
}

.checkout-items .v-expansion-panels .v-expansion-panel .v-expansion-panel-header .header-title {
  font-size: 18px;
  font-weight: bold;
  max-width: fit-content;
  margin-left: 20px;
}

.checkout-items .v-expansion-panel .v-expansion-panel-header__icon i {
  font-size: 30px;
  color: #2bbb28 !important;
}

.checkout-items .v-expansion-panels .v-expansion-panel .v-expansion-panel-header .header-details{
  font-size: 13px;
}

.checkout-items .v-text-field--outlined.v-input--dense .v-label {
  font-size: 14px;
}

.checkout-items .account .v-text-field__details {
  display: none;
}

.checkout-items .account .v-input {
  margin-bottom: 10px;
}

.checkout-items .account .v-btn .v-btn__content {
  justify-content: space-between;
}

.cart-list .v-expansion-panel-content__wrap {
  padding: 0;
}

.cart-list .v-expansion-panel-content__wrap .cart-item:nth-child( 2n ) {
  background-color: #f8f8f8;
}

.checkout-items .user-info .col.user-address {
  padding: 0 0 0 12px;
}

.checkout-items .user-info .col.delivery-cost {
  padding: 0 12px 0 0;
}

.checkout-items .user-info .col .v-sheet {
  padding: 12px;
}

.checkout-items .user-info .v-input--checkbox .v-label {
  color: #000;
}

.checkout-items .user-info .user-address .v-select .v-input__icon {
  color: #2bbb28;
}

.checkout-items .user-info .new-account-opened .v-text-field__details {
  display: none;
}

.checkout-items .important-points a {
  color: #fb1616;
}
</style>

<style scoped>
.checkout-items .account .login-form {
  display: flex;
  flex-direction: column;
  padding-right: 150px;
  padding-left: 60px;
}

.checkout-items .account .login-info {
  display: flex;
  flex-direction: column;
  padding-right: 60px;
  padding-left: 150px;
  border-right: 1px solid #eee;
}

.checkout-items .account .login-info-guide {
  font-size: 15px;
  line-height: 30px;
  color: #868686;
}

.checkout-items .account .login-header {
  color: #5d5d5d;
  margin-bottom: 10px;
}

.checkout-items .account .login-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.checkout-items .account .forget-password {
  font-size: 12px;
  color: #5d5d5d;
}

.checkout-items .account .profile-pic {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 82px;
  height: 82px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #e7e7e7;
}

.checkout-items .account .profile-pic-under {
  margin: 0 auto;
  border: 14px solid transparent;
  border-top: 14px solid #e7e7e7;
}

.discount-container .discount {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0 275px;
}

.discount-container .discount-button {
  height: 40px;
  margin-right: 10px;
}

.checkout-items .cart .cart-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 60px;
  padding: 0 16px;
}

.checkout-items .cart .cart-item .item-name {
  align-content: center;
  width: 75%;
}

.checkout-items .cart .cart-item .item-name span {
  font-size: 12px;
  color: #a8a8a8;
  margin-right: 5px;
}

.checkout-items .cart .cart-item .item-price {
  text-align: left;
  align-content: center;
  width: 25%;
}

.new-account-closed,
.new-address-closed {
  overflow: hidden;
  height: 0;
  transition: all 0.3s ease;
}

.new-account-opened,
.new-address-opened {
  overflow: hidden;
  height: 60px;
  padding: 0 12px;
  transition: all 0.3s ease;
}

.new-address-opened {
  height: 270px;
}

.total-price {
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #dfdfdf;
}

.delivery {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #dfdfdf;
}

.delivery-options {
  width: fit-content;
}

.bank {
  position: relative;
  width: 100%;
  height: 115px;
  padding: 17px;
  cursor: pointer;
  border: 1px dashed #999;
  border-radius: 7px;
}

.bank .check {
  position: absolute;
  top: 17px;
  right: 10px;
}

.bank .v-image {
  margin: 0 auto 30px;
}

.bank p {
  font-size: 12px;
  font-weight: bold;
  color: #999;
  text-align: center;
  position: relative;
  margin: 40px auto 0;
}

.bank.selected {
  border: 1px solid #2bbb28;
}

.bank.selected p {
  color: #31b42e;
}

.important-title {
  color: #2bbb28;
  margin-bottom: 10px;
}
</style>
