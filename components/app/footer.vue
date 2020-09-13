<template>
  <v-row class="footer">
    <v-col>
      <v-sheet
        :tile="true"
        :elevation="5"
        :color="'white'"
      >
        <v-container>
          <v-row
            justify="center"
            no-gutters
          >
            <v-col>
              <v-row>
                <v-col
                  :md="3"
                  class="d-md-block d-sm-none"
                >
                  <div class="text-h6">
                    دسترسی به سایت
                  </div>
                  <v-row>
                    <v-col :md="6">
                      <p class="text--secondary">
                        خانه
                      </p>
                    </v-col>
                    <v-col :md="6">
                      <p class="text--secondary">
                        قوانین و شرایط
                      </p>
                    </v-col>
                    <v-col :md="6">
                      <p class="text--secondary">
                        قوانین و شرایط
                      </p>
                    </v-col>
                    <v-col :md="6">
                      <p class="text--secondary">
                        قوانین و شرایط
                      </p>
                    </v-col>
                    <v-col :md="6">
                      <p class="text--secondary">
                        قوانین و شرایط
                      </p>
                    </v-col>
                    <v-col :md="6">
                      <p class="text--secondary">
                        قوانین و شرایط
                      </p>
                    </v-col>
                    <v-col :md="6">
                      <p class="text--secondary">
                        قوانین و شرایط
                      </p>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col
                  :md="6"
                >
                  <div class="text-center">
                    <v-lazy>
                      <v-img src="https://www.chibekhoonam.net/wp-content/themes/chibekhoonam/img/logo.svg" :width="126" class="mx-auto" />
                    </v-lazy>
                    <div class="top-hlsp">
                      تحلیل، مقایسه و خرید آنلاین
                    </div>
                    <div class="bottom-hlsp">
                      کتاب های کمک آموزشی
                    </div>
                  </div>
                  <div>
                    <div>
                      چی بخونم، یک بانک کتاب واقعی و سرشار از اطلاعاتی بدردبخور است که قبل از خرید کتاب کمک آموزشی باید بدانید. بعد از یک انتخاب درست، با خیال راحت می توانید برای خرید اینترنتی کتاب از طریق همین سایت اقدام کنید.
                    </div>
                  </div>
                </v-col>
                <v-col
                  :md="3"
                >
                  دسترسی به سایت
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-sheet>

      <v-row>
        <v-col
          cols="12"
        >
          <v-lazy>
            <v-img src="https://www.chibekhoonam.net/wp-content/themes/chibekhoonam/img/logo.svg" :width="126" class="mx-auto" />
            <!--                <v-img src="https://www.chibekhoonam.net/wp-content/uploads/2019/07/NEMAD.png" :width="75" class="mx-auto" />-->
          </v-lazy>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  .v-footer {
    position: relative;
  }
</style>
