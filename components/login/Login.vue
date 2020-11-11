<template>
  <v-container :fluid="true" class="login">
    <v-row>
      <v-col>
        <v-banner single-line>
          ورود
        </v-banner>
      </v-col>
    </v-row>
    <v-form ref="loginForm" v-model="valid" lazy-validation>
      <v-row>
        <v-col>
          <v-row>
            <v-col>
              <v-text-field
                v-model="username"
                outlined
                label="شماره همراه"
                dense
                :rules="mobileNumberRule"
                dir="ltr"
                validate-on-blur
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="password"
                outlined
                label="کلمه عبور"
                dense
                type="password"
                :rules="notEmptyRule"
                dir="ltr"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col :md="6">
              <v-checkbox
                v-model="rememberMe"
                label="مرا به خاطر بسپار"
              />
            </v-col>
            <v-col :md="6" class="d-flex justify-end">
              <v-btn
                color="#2bbb28"
                medium
                :max-width="75"
                :max-height="32"
                :loading="loading"
                type="submit"
                @click.prevent="submit"
              >
                ورود
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <nuxt-link to="#" class="forgot-password">
                کلمه عبور خود را فراموش کرده اید؟
              </nuxt-link>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import mixinAuth from '@/plugins/mixin/api/Auth'
import mixinNotification from '~/plugins/mixin/notification'

export default {
  name: 'Login',
  mixins: [mixinAuth, mixinNotification],
  props: {
    isDialog: {
      required: false,
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
      username: null,
      password: null,
      notEmptyRule: [
        v => !!v || 'پر کردن این فیلد الزامی میباشد'
      ],
      mobileNumberRule: [
        v => /09\d{9}/.test(v) || 'شماره موبایل صحیح وارد کنید',
        v => !!v || 'پر کردن این فیلد الزامی میباشد'
      ],
      rememberMe: false,
      valid: true,
      loading: false
    }
  },
  methods: {
    submit () {
      this.loading = true
      if (this.validate()) {
        this.api_login(this.username, this.password)
          .then((response) => {
            this.loading = false
            this.enableNotification('عملیات ورود با موفقیت انجام شد', 2000)
            if (this.isDialog) {
              this.$store.commit('updateLoginDialog', false)
            } else {
              this.$router.go(-1)
            }
          }).catch((response) => {
            this.loading = false
            this.enableNotification('شماره همراه یا کلمه عبور اشتباه است', 5000, 'failure')
            this.password = ''
            this.$refs.loginForm.resetValidation()
          })
      }
    },
    validate () {
      this.$refs.loginForm.validate()
      return this.valid
    }
  }
}
</script>

<style>
  .login {
    padding: 30px 60px;
  }

  .login .v-input--checkbox {
    margin-top: 0;
    padding: 0;
  }

  .login .v-btn .v-btn__content {
    font-weight: bold;
    color: #fff;
  }

  .login .col {
    padding: 0;
  }

  .login .forgot-password {
    font-weight: bold;
    color: #fb1616;
  }

  .login .v-banner {
    margin: 0 -30px 50px;
  }

  .login .v-banner .v-banner__text {
    font-size: 24px;
    line-height: 30px;
    text-align: center;
  }
</style>
