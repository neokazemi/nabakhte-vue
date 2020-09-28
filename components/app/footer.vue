<template>
  <div class="full-width">
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
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  .full-width {
    width: 100%;
  }

  .v-footer {
    position: relative;
  }

  .logo-container {
    width: 190px;
    padding: 0 15px;
  }

  .footer-info {
    font-size: 0.75rem;
    color: #525252;
  }

  .footer .text-h6 {
    font-size: 0.9rem !important;
    font-weight: bold;
    margin: 10px auto;
  }

  .footer .text--secondary {
    color: #646464;
    font-size: 0.7rem;
  }

  .footer-dir {
    padding: 5px 12px;
  }

  .ft-contact-us-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .phone {
    margin-top: 5px;
    font-size: 1.2rem;
    text-align: center;
  }

  .email {
    font-size: 0.9rem;
    text-align: center;
  }

  .e-namad {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .copy-right {
    display: flex;
    flex-direction: column;
  }

  .rights,
  .contact-us {
    width: 100%;
    display: flex;
    flex-direction: row;
    text-align: left;
    font-size: 0.6rem;
    height: 50%;
    justify-content: flex-end;
  }

  .under-footer {
    background-color: #f8f8f8;
  }

  @media only screen and (max-width: 960px) {
    .footer-navigation {
      flex-direction: column;
    }
  }

  @media only screen and (max-width: 600px) {
    .footer-content {
      flex-direction: column;
    }
  }
</style>
