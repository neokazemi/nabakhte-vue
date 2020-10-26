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
                  <v-btn outlined color="#25a522" :width="120" :style="{ height: 40, 'margin-right': 10 }">
                    اعمال تخفیف
                  </v-btn>
                </div>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Checkout',
  data () {
    return {
      step: 1
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
  color: #2bbb28;
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
</style>
