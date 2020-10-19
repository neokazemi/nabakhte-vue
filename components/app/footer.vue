<template>
  <div class="full-width" :style="{ marginBottom: margin }">
    <div v-if="!isFromPc">
      <v-sheet
        tile
        :elevation="5"
        :color="'white'"
        class="mobile-footer"
      >
        <div class="mx-auto logo-container mobile-footer-box">
          <a class="logo" href="#">
            <v-lazy>
              <v-img src="https://www.chibekhoonam.net/wp-content/themes/chibekhoonam/img/logo.svg" :width="130" class="mx-auto logo-image" />
            </v-lazy>
            <div class="logo-info-1">
              تحلیل، مقایسه و خرید آنلاین
            </div>
            <div class="logo-info-2">
              کتاب های کمک آموزشی
            </div>
          </a>
        </div>
        <div class="mobile-footer-box">
          <p class="about-cb">
            چی بخونم، یک بانک کتاب واقعی و سرشار از اطلاعاتی بدردبخور است که قبل از خرید کتاب کمک آموزشی باید بدانید. بعد از یک انتخاب درست، با خیال راحت می توانید برای خرید اینترنتی کتاب از طریق همین سایت اقدام کنید.
          </p>
        </div>
        <div class="mobile-footer-box d-flex flex-row">
          <v-img src="https://www.chibekhoonam.net/wp-content/uploads/2019/07/NEMAD.png" :height="68" :max-width="75" :contain="true" />
          <v-img src="https://www.chibekhoonam.net/wp-content/uploads/2019/07/samandehi.png" :height="68" :max-width="75" :contain="true" />
        </div>
        <div class="mobile-footer-box">
          <v-container :fluid="true">
            <v-row>
              <v-col :cols="6" :sm="6">
                <nuxt-link to="/">
                  خانه
                </nuxt-link>
              </v-col>
              <v-col :cols="6" :sm="6">
                <nuxt-link to="/درباره-ما">
                  درباره ما
                </nuxt-link>
              </v-col>
              <v-col :cols="6" :sm="6">
                <nuxt-link to="#">
                  قوانین و شرایط
                </nuxt-link>
              </v-col>
              <v-col :cols="6" :sm="6">
                <nuxt-link to="#">
                  اخبار
                </nuxt-link>
              </v-col>
              <v-col :cols="6" :sm="6">
                <nuxt-link to="#">
                  همکاری با ما
                </nuxt-link>
              </v-col>
              <v-col :cols="6" :sm="6">
                <nuxt-link to="#">
                  مشاوره
                </nuxt-link>
              </v-col>
              <v-col :cols="6" :sm="6">
                <nuxt-link to="#">
                  پیگیری سفارش
                </nuxt-link>
              </v-col>
            </v-row>
          </v-container>
        </div>
        <div class="mobile-footer-box mobile-contact-us">
          <div class="mobile-contact-us-box">
            <p>021-66979455</p>
          </div>
          <div class="mobile-contact-us-box">
            <p>info@chibekhoonam.net</p>
          </div>
        </div>
      </v-sheet>
    </div>
    <div v-else>
      <v-sheet
        :tile="true"
        :elevation="5"
        :color="'white'"
      >
        <div />
        <v-container>
          <v-row
            justify="center"
            no-gutters
          >
            <v-col>
              <v-row class="footer-content">
                <v-col
                  :sm="3"
                  class="d-sm-block d-none"
                >
                  <div class="text-h6">
                    دسترسی به سایت
                  </div>
                  <v-row class="footer-navigation">
                    <v-col :md="6" class="footer-dir">
                      <a class="text--secondary">
                        خانه
                      </a>
                    </v-col>
                    <v-col :md="6" class="footer-dir">
                      <a class="text--secondary">
                        درباره ما
                      </a>
                    </v-col>
                    <v-col :md="6" class="footer-dir">
                      <a class="text--secondary">
                        قوانین و شرایط
                      </a>
                    </v-col>
                    <v-col :md="6" class="footer-dir">
                      <a class="text--secondary">
                        اخبار
                      </a>
                    </v-col>
                    <v-col :md="6" class="footer-dir">
                      <a class="text--secondary">
                        همکاری با ما
                      </a>
                    </v-col>
                    <v-col :md="6" class="footer-dir">
                      <a class="text--secondary">
                        مشاوره
                      </a>
                    </v-col>
                    <v-col :md="6" class="footer-dir">
                      <a class="text--secondary">
                        پیگیری سفارش
                      </a>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col
                  :sm="6"
                >
                  <div class="mx-auto logo-container">
                    <a class="logo" href="#">
                      <v-lazy>
                        <v-img src="https://www.chibekhoonam.net/wp-content/themes/chibekhoonam/img/logo.svg" :width="130" class="mx-auto logo-image" />
                      </v-lazy>
                      <div class="logo-info-1">
                        تحلیل، مقایسه و خرید آنلاین
                      </div>
                      <div class="logo-info-2">
                        کتاب های کمک آموزشی
                      </div>
                    </a>
                  </div>
                  <div>
                    <div class="footer-info">
                      چی بخونم، یک بانک کتاب واقعی و سرشار از اطلاعاتی بدردبخور است که قبل از خرید کتاب کمک آموزشی باید بدانید. بعد از یک انتخاب درست، با خیال راحت می توانید برای خرید اینترنتی کتاب از طریق همین سایت اقدام کنید.
                    </div>
                  </div>
                </v-col>
                <v-col
                  :sm="3"
                  class="text-center"
                >
                  <div class="ft-contact-us-container">
                    <v-img src="https://www.chibekhoonam.net/wp-content/themes/chibekhoonam/img/footlogo.png" :width="150" :max-height="79" :contain="true" />
                    <p class="phone">
                      021-66979455
                    </p>
                    <p class="email">
                      info@chibekhoonam.net
                    </p>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>
      <div class="full-width under-footer">
        <v-container>
          <v-row>
            <v-col :md="6" class="e-namad">
              <v-img src="https://www.chibekhoonam.net/wp-content/uploads/2019/07/NEMAD.png" :height="68" :max-width="75" :contain="true" />
              <v-img src="https://www.chibekhoonam.net/wp-content/uploads/2019/07/samandehi.png" :height="68" :max-width="75" :contain="true" />
            </v-col>
            <v-col :md="6" class="copy-right">
              <div class="contact-us" />
              <div class="rights">
                <p>
                  © 2020 Chibekhoonam
                  <br>
                  ivahid Specialized and Professional Web Design & Development Co
                </p>
                <v-img src="https://www.chibekhoonam.net/wp-content/themes/chibekhoonam/img/ivahid.svg" :max-height="33" :max-width="100" :contain="true" />
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    margin: {
      type: String,
      default: '0',
      required: false
    }
  },
  computed: {
    isFromPc () {
      return this.$store.getters.isFromPc
    }
  }
}
</script>

<style scoped>
  @import url('../../assets/css/components/FooterScoped.css');
</style>
