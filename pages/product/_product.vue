<template>
  <div class="product-page">
    <div v-if="!isFromPc" class="mobile-container">
      <Breadcrumbs :items="breadcrumbsItems" />
      <div class="product-info">
        <h2 class="product-title">
          {{ productData.name }}
        </h2>
        <div class="product-pic-container">
          <div class="product-pic">
            <v-img :src="productData.image.url" contain />
          </div>
          <div class="discount">
            {{ productData.price.discount }}%
          </div>
        </div>
        <div class="buy-options-and-price">
          <div class="buy-button">
            <div class="plus-icon">
              +
            </div>
            <div class="price">
              <p class="old-price">
                {{ productData.price.base | price }}
              </p>
              <p class="new-price">
                {{ productData.price.final | price }}
              </p>
              <p>تومان</p>
            </div>
          </div>
          <div class="quantity">
            <v-select dense outlined color="#fff" :items="quantity" :value="quantity[0]" />
          </div>
        </div>
        <div
          class="product-details-container"
        >
          <p><span>نوع محصول: </span>کتاب کمک آموزشی</p>
          <p><span>مولف: </span>مرتضی شکری، محمد یاوری</p>
          <p><span>سال چاپ: </span>1399</p>
          <p><span>تعداد صفحه: </span>255</p>
          <p><span>تجدید چاپ: </span><v-rating readonly :value="3" dense background-color="#2bbb28" color="#2bbb28" /></p>
          <p><span>امتیاز کاربران: </span><v-rating readonly :value="3" dense background-color="#2bbb28" color="#2bbb28" /></p>
        </div>
        <div class="product-slider">
          <ProductSliderCarousel :products="products.list" main-bg="#fff" bottom-bg="#fff" :type="3" :box-shadow="true" />
        </div>
        <v-tabs centered grow color="#1FBD3D" class="tabs">
          <v-tab @click="selectTab(1)">
            نقد و بررسی
          </v-tab>
          <v-tab @click="selectTab(2)">
            مشخصات
          </v-tab>
          <v-tab @click="selectTab(3)">
            نظرات
          </v-tab>
        </v-tabs>
        <div class="tab-content">
          <div v-if="selectedTab === 1" class="review">
            <h3>
              نقد و بررسی
            </h3>
            <p>کتاب کمک آموزشی {{ productData.name }}</p>
            <p class="tall-line">
              <span class="bold red-font">توجه: </span>این تحلیل و بررسی، بر اساس چاپ سال <span class="bold green-font">1398</span> این کتاب صورت گرفته است.
            </p>
            <div class="intro">
              <h3>مقدمه</h3>
              <p>
                اهمیت شبیه سازی شرایط کنکور قبل از حاضر شدن در جلسه کنکور برای هیچ داوطلب کنکوری پوشیده نیست. برای این کار معمولا داوطلبین کنکور، سوالات سال های گذشته را از خود امتحان می گیرند. مجموعه چند کنکور رشته تجربی <a href="#"><span class="green-font">خیلی سبز</span></a> نسبت به سال گذشته تغییر ظاهری و محتوایی داشته است و آن این است که سوالات به شکل دفترچه های جداگانه عمومی و اختصاصی به چاپ رسیده اند تا حال و هوای یک کنکور واقعی را برای داوطلب تداعی کنند.
              </p>
              <p>
                در مجموعه چند کنکور رشته تجربی خیلی سبز، 12 کنکور قرار گرفته که از کنکورهای سراسری سال های 93 تا 98 استفاده شده است. کنکورهای سال 93 تا 97 با کتاب های نظام جدید مطابقت داده شده اند و احیانا سوالات نامناسب جایگزین شده اند. سوالات کنکور 98 اما بدون تغییر آمده است. این مجموعه شامل 12 دفترچه کنکور عمومی، 12 دفترچه کنکور اختصاصی، 12 پاسخبرگ و یک دفترچه است که مقدمه و … در آن آمده است. این مجموعه در یک جعبه قرار گرفته است.
              </p>
            </div>
            <div class="text-book">
              <h3>آموزش (درسنامه)</h3>
              <p>مجموعه چند کنکور رشته تجربی خیلی سبز درس نامه ندارد.</p>
            </div>
            <div class="practice">
              <h3>تست (تمرین)</h3>
              <p>
                انتشارات خیلی سبز قبلا، یعنی در نظام قدیم این سری از کتاب ها را چاپ نمی کرد و با تغییر نظام آموزشی و در آستانه برگزاری اولین کنکور برای دانش آموزان نظام جدید، اقدام به تولید این سری از کتاب ها کرد. ولی امسال با یک تغییر ظاهری مجموعه چند کنکور رشته تجربی خیلی سبز را علاوه بر تقویت محتوایی به شکل دفترچه های کنکور به چاپ رسانید. همان طور که ذکر شد این کتاب شامل کنکورهای سراسری داخل و خارج از کشور 6 سال اخیر است که مجموعا شامل 12 کنکور می شود. البته می دانیم که چون کتاب های درسی نظام جدید نسبت به نظام قدیم دارای تغییراتی بوده است، همه سوالات کنکورهای سراسری چند سال اخیر قابل استفاده نیستند.
              </p>
              <p>
                بنابراین اگر سوالی با تغییرات اندکی با کتاب های جدید همسو میشده، این تغییرات در آن اعمال شده و در غیر این صورت آن سوال با سوالی تالیفی یا کنکورهای رشته های دیگر (یا سال های دیگر) جایگزین شده است. سوالاتی که تغییر کرده اند در پاسخنامه (نه در سوالات) مشخص شده اند. این یکی از محاسن مجموعه چند کنکور رشته تجربی خیلی سبز است که طی آزمون، حواس خواننده را پرت نمی کند. چرا که خیلی از دانش آموزان این آزمون ها را مشابه با شرایط کنکور و با هیجان و استرس زیادی از خودشان امتحان می گیرند. و اما درباره پاسخنامه تشریحی آزمون ها که در جلدی دیگر آن آمده است، باید به چند مورد اشاره کرد:
              </p>
              <ol>
                <li>
                  همان طور که اشاره شد، سوالات تغییر یافته در آن مشخص شده اند.
                </li>
                <li>
                  منبع طراحی سوالات با ذکر شماره صفحه آن در کتاب درسی مورد نظر در کنار جواب آن آمده است.
                </li>
                <li>
                  در پاسخ بعضی از سوالات نکاتی آمده است که بار آموزشی دارند.
                </li>
                <li>
                  تا جای ممکن گزینه های نادرست هم بررسی شده اند.
                </li>
              </ol>
            </div>
          </div>
          <div v-if="selectedTab === 2" class="specs">
            <h3>مشخصات</h3>
            <p>
              کتاب کمک آموزشی {{ productData.name }}
            </p>
            <ProductSpecs title="وزن">
              0.6 kg
            </ProductSpecs>
            <ProductSpecs title="دسته بندی کلی">
              پاسخنامه
            </ProductSpecs>
            <ProductSpecs title="انتشارات">
              قلمچی
            </ProductSpecs>
            <ProductSpecs title="مقطع تحصیلی">
              متوسطه دوم
            </ProductSpecs>
            <ProductSpecs title="پایه و رشته">
              دوازدهم تجربی
            </ProductSpecs>
            <ProductSpecs title="مولف یا مولفین">
              هیئت مولفان کانون
            </ProductSpecs>
            <ProductSpecs title="قطع کتاب">
              رحلی
            </ProductSpecs>
            <ProductSpecs title="تعداد صفحه">
              272
            </ProductSpecs>
            <ProductSpecs title="سال چاپ">
              1398
            </ProductSpecs>
            <ProductSpecs title="درس نامه">
              در پاسخ تشریحی
            </ProductSpecs>
            <ProductSpecs title="ضمیمه رایگان">
              ندارد
            </ProductSpecs>
            <ProductSpecs title="لوح فشرده">
              ندارد
            </ProductSpecs>
          </div>
          <div v-if="selectedTab === 3" class="comments">
            <h3 class="dark-green-font">
              2 دیدگاه
            </h3>
            <Comment :data="comments[0]" />
            <Comment :data="comments[1]" />
          </div>
        </div>
      </div>
      <div class="fixed-add-to-cart">
        <div>
          افزودن به سبد خرید
        </div>
        <div class="plus-icon">
          +
        </div>
      </div>
    </div>
    <v-container v-else class="product">
      <v-row>
        <v-col>
          <breadcrumbs :items="breadcrumbsItems" />
        </v-col>
      </v-row>
      <v-row>
        <v-col class="product-data">
          <v-img :src="productData.image.url" :width="productData.image.width" :height="productData.image.height" :contain="true" />
          <div class="product-details">
            <div class="product-details-col first">
              <p class="name">
                {{ productData.name }}
              </p>
              <div class="price">
                <p class="old-price">
                  {{ productData.price.base | price }}
                </p>
                <p class="discount">
                  {{ productData.price.discount }}%
                </p>
                <p class="new-price">
                  {{ productData.price.final | price }}
                </p>
              </div>
              <div class="buy-options">
                <button>افزودن به سبد خرید</button>
                <select>
                  <option value="1">
                    1 عدد
                  </option>
                  <option value="2">
                    2 عدد
                  </option>
                  <option value="3">
                    3 عدد
                  </option>
                  <option value="4">
                    4 عدد
                  </option>
                  <option value="5">
                    5 عدد
                  </option>
                  <option value="6">
                    6 عدد
                  </option>
                  <option value="7">
                    7 عدد
                  </option>
                  <option value="8">
                    8 عدد
                  </option>
                  <option value="9">
                    9 عدد
                  </option>
                  <option value="10">
                    10 عدد
                  </option>
                </select>
              </div>
              <div class="related-books">
                <p>
                  جلدهای مرتبط
                </p>
                <div class="related-book">
                  <a href="#">
                    فاگوزیست دوازدهم فصل چهارم (تغییر در اطلاعات وراثتی) فاگو
                  </a>
                  <div class="add-to-cart" />
                </div>
                <div class="related-book">
                  <a href="#">
                    فاگوزیست دوازدهم فصل اول (مولکول های اطلاعاتی) فاگو</a>
                  <div class="add-to-cart" />
                </div>
              </div>
            </div>
            <div class="product-details-col middle">
              <p><span>نوع محصول: </span>کتاب کمک آموزشی</p>
              <p><span>مولف: </span>مرتضی شکری، محمد یاوری</p>
              <p><span>سال چاپ: </span>1399</p>
              <p><span>تعداد صفحه: </span>255</p>
              <p><span>تجدید چاپ: </span><v-rating readonly :value="3" dense background-color="#2bbb28" color="#2bbb28" /></p>
              <p><span>امتیاز کاربران: </span><v-rating readonly :value="3" dense background-color="#2bbb28" color="#2bbb28" /></p>
            </div>
            <div class="product-details-col last">
              <p> کتاب کمک آموزشی {{ productData.name }} در یک نگاه:</p>
              <ul>
                <li>پوشش 6 سال کنکور های سراسری داخل و خارج کشور</li>
                <li>جایگزینی سوالات غیر منطبق با کتاب های جدید با سایر سوالات کنکور و سوالات تالیفی</li>
                <li>چاپ سوالات به شکل دفترچه کنکور</li>
                <li>پاسخ تشریحی کامل</li>
              </ul>
            </div>
            <div class="share" />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="similar-products">
          <ProductSliderCarousel :products="products.list" main-bg="#fff" bottom-bg="#fff" :type="2" />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-tabs centered grow color="#1FBD3D" class="tabs">
            <v-tab @click="selectTab(1)">
              نقد و بررسی
            </v-tab>
            <v-tab @click="selectTab(2)">
              مشخصات
            </v-tab>
            <v-tab @click="selectTab(3)">
              نظرات
            </v-tab>
          </v-tabs>
          <div class="tab-content">
            <div v-if="selectedTab === 1" class="review">
              <h3>
                نقد و بررسی
              </h3>
              <p>کتاب کمک آموزشی {{ productData.name }}</p>
              <p class="tall-line">
                <span class="bold red-font">توجه: </span>این تحلیل و بررسی، بر اساس چاپ سال <span class="bold green-font">1398</span> این کتاب صورت گرفته است.
              </p>
              <div class="intro">
                <h3>مقدمه</h3>
                <p>
                  اهمیت شبیه سازی شرایط کنکور قبل از حاضر شدن در جلسه کنکور برای هیچ داوطلب کنکوری پوشیده نیست. برای این کار معمولا داوطلبین کنکور، سوالات سال های گذشته را از خود امتحان می گیرند. مجموعه چند کنکور رشته تجربی <a href="#"><span class="green-font">خیلی سبز</span></a> نسبت به سال گذشته تغییر ظاهری و محتوایی داشته است و آن این است که سوالات به شکل دفترچه های جداگانه عمومی و اختصاصی به چاپ رسیده اند تا حال و هوای یک کنکور واقعی را برای داوطلب تداعی کنند.
                </p>
                <p>
                  در مجموعه چند کنکور رشته تجربی خیلی سبز، 12 کنکور قرار گرفته که از کنکورهای سراسری سال های 93 تا 98 استفاده شده است. کنکورهای سال 93 تا 97 با کتاب های نظام جدید مطابقت داده شده اند و احیانا سوالات نامناسب جایگزین شده اند. سوالات کنکور 98 اما بدون تغییر آمده است. این مجموعه شامل 12 دفترچه کنکور عمومی، 12 دفترچه کنکور اختصاصی، 12 پاسخبرگ و یک دفترچه است که مقدمه و … در آن آمده است. این مجموعه در یک جعبه قرار گرفته است.
                </p>
              </div>
              <div class="text-book">
                <h3>آموزش (درسنامه)</h3>
                <p>مجموعه چند کنکور رشته تجربی خیلی سبز درس نامه ندارد.</p>
              </div>
              <div class="practice">
                <h3>تست (تمرین)</h3>
                <p>
                  انتشارات خیلی سبز قبلا، یعنی در نظام قدیم این سری از کتاب ها را چاپ نمی کرد و با تغییر نظام آموزشی و در آستانه برگزاری اولین کنکور برای دانش آموزان نظام جدید، اقدام به تولید این سری از کتاب ها کرد. ولی امسال با یک تغییر ظاهری مجموعه چند کنکور رشته تجربی خیلی سبز را علاوه بر تقویت محتوایی به شکل دفترچه های کنکور به چاپ رسانید. همان طور که ذکر شد این کتاب شامل کنکورهای سراسری داخل و خارج از کشور 6 سال اخیر است که مجموعا شامل 12 کنکور می شود. البته می دانیم که چون کتاب های درسی نظام جدید نسبت به نظام قدیم دارای تغییراتی بوده است، همه سوالات کنکورهای سراسری چند سال اخیر قابل استفاده نیستند.
                </p>
                <p>
                  بنابراین اگر سوالی با تغییرات اندکی با کتاب های جدید همسو میشده، این تغییرات در آن اعمال شده و در غیر این صورت آن سوال با سوالی تالیفی یا کنکورهای رشته های دیگر (یا سال های دیگر) جایگزین شده است. سوالاتی که تغییر کرده اند در پاسخنامه (نه در سوالات) مشخص شده اند. این یکی از محاسن مجموعه چند کنکور رشته تجربی خیلی سبز است که طی آزمون، حواس خواننده را پرت نمی کند. چرا که خیلی از دانش آموزان این آزمون ها را مشابه با شرایط کنکور و با هیجان و استرس زیادی از خودشان امتحان می گیرند. و اما درباره پاسخنامه تشریحی آزمون ها که در جلدی دیگر آن آمده است، باید به چند مورد اشاره کرد:
                </p>
                <ol>
                  <li>
                    همان طور که اشاره شد، سوالات تغییر یافته در آن مشخص شده اند.
                  </li>
                  <li>
                    منبع طراحی سوالات با ذکر شماره صفحه آن در کتاب درسی مورد نظر در کنار جواب آن آمده است.
                  </li>
                  <li>
                    در پاسخ بعضی از سوالات نکاتی آمده است که بار آموزشی دارند.
                  </li>
                  <li>
                    تا جای ممکن گزینه های نادرست هم بررسی شده اند.
                  </li>
                </ol>
              </div>
            </div>
            <div v-if="selectedTab === 2" class="specs">
              <h3>مشخصات</h3>
              <p>
                کتاب کمک آموزشی {{ productData.name }}
              </p>
              <ProductSpecs title="وزن">
                0.6 kg
              </ProductSpecs>
              <ProductSpecs title="دسته بندی کلی">
                پاسخنامه
              </ProductSpecs>
              <ProductSpecs title="انتشارات">
                قلمچی
              </ProductSpecs>
              <ProductSpecs title="مقطع تحصیلی">
                متوسطه دوم
              </ProductSpecs>
              <ProductSpecs title="پایه و رشته">
                دوازدهم تجربی
              </ProductSpecs>
              <ProductSpecs title="درس های مرتبط">
                زیست شناسی دوازدهم, ریاضی دوازدهم تجربی, فیزیک دوازدهم تجربی, شیمی دوازدهم, فارسی دوازدهم, عربی دوازدهم, دین و زندگی دوازدهم, انگلیسی دوازدهم, زیست شناسی یازدهم, ریاضی یازدهم تجربی, فیزیک یازدهم تجربی, شیمی یازدهم, زمین شناسی یازدهم, فارسی یازدهم, عربی یازدهم, دین و زندگی یازدهم, انگلیسی یازدهم, زیست شناسی دهم, ریاضی دهم, فیزیک دهم تجربی, شیمی دهم, فارسی دهم, عربی دهم, دین و زندگی دهم, انگلیسی دهم
              </ProductSpecs>
              <ProductSpecs title="مولف یا مولفین">
                هیئت مولفان کانون
              </ProductSpecs>
              <ProductSpecs title="قطع کتاب">
                رحلی
              </ProductSpecs>
              <ProductSpecs title="تعداد صفحه">
                272
              </ProductSpecs>
              <ProductSpecs title="سال چاپ">
                1398
              </ProductSpecs>
              <ProductSpecs title="درس نامه">
                در پاسخ تشریحی
              </ProductSpecs>
              <ProductSpecs title="ضمیمه رایگان">
                ندارد
              </ProductSpecs>
              <ProductSpecs title="لوح فشرده">
                ندارد
              </ProductSpecs>
            </div>
            <div v-if="selectedTab === 3" class="comments">
              <h3 class="dark-green-font">
                2 دیدگاه
              </h3>
              <Comment :data="comments[0]" />
              <Comment :data="comments[1]" />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import mixinProduct from '~/plugins/mixinProduct'
import Breadcrumbs from '~/components/Breadcrumbs'
import ProductSliderCarousel from '~/components/ProductSliderCarousel'
import ProductSpecs from '~/components/ProductSpecs'
import Comment from '~/components/Comment'
import '~/assets/css/pages/Product.css'

export default {
  name: 'Product',
  filters: {
    price (value) {
      return value.toLocaleString('ar-SA')
    }
  },
  components: {
    ProductSliderCarousel,
    Breadcrumbs,
    ProductSpecs,
    Comment
  },
  mixins: [mixinProduct],
  props: {
    productData: {
      type: Object,
      default () {
        return {
          id: 1,
          name: 'شاهکار علوم نهم کلاغ سپید',
          image: {
            url: 'https://media.chibekhoonam.net/2020/09/shahkar-olom9.jpg',
            width: 280,
            height: 380
          },
          price: {
            base: 75000,
            discount: 20,
            final: 60000
          }
        }
      }
    }
  },
  data () {
    return {
      breadcrumbsItems: [
        {
          disabled: false,
          exact: false,
          href: '#',
          link: false,
          text: 'خانه',
          to: '#'
        },
        {
          disabled: false,
          exact: false,
          href: '#',
          link: false,
          text: 'کتاب',
          to: '#'
        },
        {
          disabled: false,
          exact: false,
          href: '#',
          link: false,
          text: 'کتاب کمک آموزشی',
          to: '#'
        },
        {
          disabled: true,
          exact: false,
          href: '#',
          link: false,
          text: 'کتاب کمک آموزشی',
          to: '#'
        }
      ],
      transition: 'expand',
      selectedTab: 1,
      comments: [
        {
          name: 'یه کنکوری',
          date: '26 / 6 / 1398',
          likes: 1,
          text: 'چرا برایه این کتاب مثله جلد اولش دانلود رایگان قسمتی از اون رو نذاشتین؟؟؟'
        },
        {
          name: 'مشاور آموزشی',
          date: '26 / 6 / 1398',
          likes: 0,
          text: 'سلام. خود سایت قلم چی هم نداشت متاسفانه…'
        }
      ],
      quantity: [
        '1 عدد',
        '2 عدد',
        '3 عدد',
        '4 عدد',
        '5 عدد',
        '6 عدد',
        '7 عدد',
        '100 عدد'
      ]
    }
  },
  computed: {
    isFromPc () {
      return this.$store.getters.isFromPc
    }
  },
  created () {
    this.$store.commit('updateFooterMargin', '54px')
  },
  destroyed () {
    this.$store.commit('updateFooterMargin', '0')
  },
  methods: {
    selectTab (number) {
      this.selectedTab = number
    }
  }
}
</script>

<style scoped>
  @import url('../../assets/css/pages/ProductScoped.css');
</style>
