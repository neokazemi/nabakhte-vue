<template>
  <div>
    <TopView v-if="!isFromPc" :products="products" :main-carousel-slides="mainCarouselSlides" />
    <v-layout
      v-else
      column
      justify-center
      align-center
    >
      <v-row
        justify="center"
        no-gutters
      >
        <v-col
          cols="12"
        >
          <TopView :products="products" :main-carousel-slides="mainCarouselSlides" />
        </v-col>
      </v-row>
    </v-layout>
    <div v-if="!isFromPc">
      <ProductSliderCarousel :products="products" :type="3" main-bg="#000">
        جدید ترین کتاب های کمک آموزشی
      </ProductSliderCarousel>
      <ProductSliderCarousel :products="products" :type="3" main-bg="#000">
        جدید ترین نوشت افزار ها
      </ProductSliderCarousel>
      <ProductSliderCarousel :products="products" :type="3" main-bg="#000">
        محبوب ترین محصولات
      </ProductSliderCarousel>
    </div>
    <div v-else>
      <ProductSliderCarousel :products="products">
        جدید ترین کتاب های کمک آموزشی
      </ProductSliderCarousel>
      <ProductSliderCarousel :products="products">
        جدید ترین نوشت افزار ها
      </ProductSliderCarousel>
      <ProductSliderCarousel :products="products" main-bg="#6130a4" bottom-bg="#6d3ab3">
        محبوب ترین محصولات
      </ProductSliderCarousel>
      <v-container>
        <v-row>
          <v-col :md="4" class="recent-articles">
            <div class="recent-articles-header">
              <h4>مقالات اخیر</h4>
              <nuxt-link class="more-info" to="/blog/category/maghalat">
                مشاهده بیشتر
              </nuxt-link>
            </div>
            <div class="recent-articles-content">
              <div class="item">
                <nuxt-link to="#">
                  بهترین کتاب های کمک آموزشی پایه دوازدهم بر اساس نظرسنجی مهرماه 1399
                </nuxt-link>
              </div>
              <div class="item">
                <nuxt-link to="#">
                  بهترین کتاب های کمک آموزشی پایه یازدهم بر اساس نظرسنجی مهرماه 1399
                </nuxt-link>
              </div>
              <div class="item">
                <nuxt-link to="#">
                  بهترین کتاب های کمک آموزشی پایه دهم بر اساس نظرسنجی مهرماه 1399
                </nuxt-link>
              </div>
              <div class="item">
                <nuxt-link to="#">
                  چگونه در مقطع متوسطه اول (دبیرستان) انتخاب رشته کنیم؟
                </nuxt-link>
              </div>
            </div>
          </v-col>
          <v-col :md="8" class="left-side-bottom">
            <div>
              <LogoCarousel :items="logoSwiperItems" />
            </div>
            <div>
              <nuxt-link to="#">
                <v-img contain src="https://media.chibekhoonam.net/2019/06/mikhonam-natije-nemigiram.jpg" />
              </nuxt-link>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <ExpandTransition>
              <div class="buy-book-guide">
                <h3>خرید کتاب کمک آموزشی و کمک درسی</h3>
                <p>حتما الان که این مطلب را می خوانید همین دغدغه را دارید، یعنی خرید کتاب کمک درسی مناسب. احتمالا از خرید های اشتباه قبلی حسابی ضربه خورده اید. کتاب هایی که خریده اید، در کتابخانه خاک می خورند، چون مناسب شما نبودند و نتوانستند مشکلات شما را حل کنند. حالا ما قرار است چطور این مشکل شما را حل کنیم؟</p>
                <h3>چی بخونم، یک بانک کتاب واقعی</h3>
                <p>ما قرار نیست کتاب خاصی را به شما معرفی یا توصیه کنیم. ما بانکی از اطلاعات بدرد بخور شامل نقد، بررسی و تحلیل کتاب های کمک آموزشی و کمک درسی را همراه با اطلاعات کمّی مثل تعداد تست ها، تمارین و همچنین نظر بقیه کاربران سایت را در اختیار شما قرار می دهیم. می توانید نقد و بررسی کتاب های کمک آموزشی را به دقت بخوانید و بهترین کتاب را خودتان انتخاب کنید. پوشش اطلاعاتی چی بخونم بسیار کامل است و سعی شده تا ضمن رعایت انصاف در تحلیل و بررسی کتاب ها، اطلاعات آنها تکمیل باشد. شما می توانید اطلاعات دقیق و نقد و بررسی کتاب های انتشارات های گاج، خیلی سبز، مبتکران، قلم چی، مهروماه، نشر الگو و … در چی بخونم بخوانید.</p>
                <h3>دانلود پی دی اف (PDF) بخشی از کتاب های کمک آموزشی و کمک درسی</h3>
                <p>یکی از امکاناتی که در چی بخونم میسر شده، دانلود بخشی از هر کتاب به شکل فایل پی دی اف (PDF) است که می توانید یک آشنایی و شناخت اولیه نسبت به کتاب های کمک آموزشی و امکان مقایسه آنها باهم را برای شما ایجاد کند. نمونه فایل کتاب های انتشارات های گاج، خیلی سبز، مبتکران، قلم چی، مهروماه، نشر الگو و … از پایه اول دبستان تا مقطع متوسطه دوم، دوازدهم و کنکور، در چی بخونم فراهم شده است.</p>
                <h3>خرید اینترنتی (آنلاین) کتاب های کمک آموزشی</h3>
                <p>با پیشرفت تکنولوژی راه افتادن در خیابان ها و اتلاف وقت، انرژی و پول برای خرید کالا، کار بیهوده ای بنظر می رسد؛ مخصوصا وقتی که با اطلاعات کافی خرید می کنیم و می دانیم می خواهیم کدام کتاب را بخریم. در چی بخونم امکان خرید اینترنتی کتاب های کمک آموزشی و کمک درسی انتشارات های گاج، خیلی سبز، قلم چی، مبتکران، نشر الگو، مهروماه و … از طریق سفارشگذاری آنلاین فراهم شده است و می توانید به راحتی و از طریق رمز دومِ همه کارت های عضو شتاب، عملیات پرداخت را تکمیل کنید.</p>
                <h3>ارسال سریع کتاب های کمک آموزشی</h3>
                <p>ارسال سریع و سلامت مرسوله یکی از مهم ترین دغدغه های کسی است که برای خرید اینترنتی کتاب کمک آموزشی و کمک درسی اقدام می کند. چی بخونم دارای بسته بندی ویژه ای است که برای مرسولات خود آن را به کار می برد تا به سلامت به دست مشتری برسند. ارسال سریع مرسوله ها با استفاده از روش های متنوع پستی (پیک موتوری، پست سفارشی و پست پیشتاز) انجام می گیرد و بعد از ارسال بسته های پستی، کد رهگیری مرسوله پستی در بخش پیگیری سفارش و همچنین ناحیه کاربری مشتری (بخش سفارش ها) نمایش داده می شود. این کد امکان پیگیری لحظه ای مرسوله را از سایت پست فراهم می کند. لازم به ذکر است هزینه ارسال کتاب های کمک آموزشی با توجه به وزن و مسافت و دقیقا طبق تعرفه های شرکت ملی پست ایران محاسبه می شود.</p>
                <h3>خرید کتاب های کمک درسی با تخفیف ویژه</h3>
                <p>با افزایش قیمت کاغذ و بالا رفتن قیمت کتاب های کمک آموزشی به تبع آن، بسیاری از افراد در خرید کتاب های کمک آموزشی دچار مشکل شدند و یکی از دغدغه های فکری دانش آموزان تخفیف کتاب های کمک آموزشی است. چی بخونم در همه ایام سال دارای تخفیف های متنوع و قابل توجهی بر روی کتاب های کمک آموزشی است. این تخفیف ها در مناسبت ها، اعیاد و روزهای خاص به بیشترین تخفیف می رسند و کد تخفیف های چی بخونم از طریق سایت و شبکه های مجازی به اطلاع مشتریان بزرگوار چی بخونم می رسند.</p>
              </div>
            </ExpandTransition>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import LogoCarousel from '../components/LogoCarousel'
import ExpandTransition from '~/components/ExpandTransition'
import mixinProduct from '~/plugins/mixinProduct'
import ProductSliderCarousel from '~/components/ProductSliderCarousel'
import TopView from '~/components/TopView/TopView'
import mixinDetectDevice from '~/plugins/mixinDetectDevice'

export default {
  components: {
    LogoCarousel,
    ExpandTransition,
    TopView,
    ProductSliderCarousel
  },
  mixins: [mixinProduct, mixinDetectDevice],
  data () {
    return {
      mainCarouselSlides: [
        {
          imgurl: 'https://media.chibekhoonam.net/2020/09/nazarsanji-hafte3-shahrivar.jpg',
          url: '#'
        },
        {
          imgurl: 'https://media.chibekhoonam.net/2020/08/%D8%A7%D8%B3%D9%84%D8%A7%DB%8C%D8%AF-%D8%B4%D9%88.jpg',
          url: '#'
        }
      ],
      logoSwiperItems: [
        {
          imageUrl: 'https://media.chibekhoonam.net/2020/02/ghalamchi-min.png',
          link: 'https://www.chibekhoonam.net/entesharat/%d9%82%d9%84%d9%85-%da%86%db%8c/'
        },
        {
          imageUrl: 'https://media.chibekhoonam.net/2020/02/ghalamchi-min.png',
          link: 'https://www.chibekhoonam.net/entesharat/%d9%82%d9%84%d9%85-%da%86%db%8c/'
        },
        {
          imageUrl: 'https://media.chibekhoonam.net/2020/02/ghalamchi-min.png',
          link: 'https://www.chibekhoonam.net/entesharat/%d9%82%d9%84%d9%85-%da%86%db%8c/'
        },
        {
          imageUrl: 'https://media.chibekhoonam.net/2020/02/ghalamchi-min.png',
          link: 'https://www.chibekhoonam.net/entesharat/%d9%82%d9%84%d9%85-%da%86%db%8c/'
        },
        {
          imageUrl: 'https://media.chibekhoonam.net/2020/02/ghalamchi-min.png',
          link: 'https://www.chibekhoonam.net/entesharat/%d9%82%d9%84%d9%85-%da%86%db%8c/'
        },
        {
          imageUrl: 'https://media.chibekhoonam.net/2020/02/ghalamchi-min.png',
          link: 'https://www.chibekhoonam.net/entesharat/%d9%82%d9%84%d9%85-%da%86%db%8c/'
        },
        {
          imageUrl: 'https://media.chibekhoonam.net/2020/02/ghalamchi-min.png',
          link: 'https://www.chibekhoonam.net/entesharat/%d9%82%d9%84%d9%85-%da%86%db%8c/'
        }
      ],
      expanded: false
    }
  }
}
</script>

<style scoped>
  @import url('~/assets/css/pages/Main.css');
</style>

<style>
  .buy-book-guide {
    overflow: hidden;
    max-height: 100%;
  }
</style>
