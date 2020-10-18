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

<style>

  .product-data {
    display: flex;
    flex-direction: row;
  }

  .product-details {
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(4, 5, 5, 0.25);
    display: flex;
    flex-direction: row;
    margin-right: 1%;
    position: relative;
    width: 99%;
  }

  .product-details-col {
    padding-top: 30px;
    width: 100%;
  }

  .product-details-col button {
    background-color: #fff;
  }

  .v-rating {
    display: inline;
  }

  .product-details .first {
    text-align: center;
  }

  .product-details .middle {
    border-left: 1px solid #ebe4e4;
    border-right: 1px solid #ebe4e4;
    padding-right: 20px;
  }

  .product-details .last {
    font-size: 0.8rem;
    font-weight: bold;
    line-height: 2.5;
    padding: 25px 15px;
  }

  .price,
  .buy-options {
    display: flex;
    flex-direction: row;
    font-weight: bold;
    justify-content: center;
    margin-bottom: 8px;
  }

  .product-details .price * {
    margin: auto 10px;
  }

  .product-details .name {
    font-size: 0.8rem;
    font-weight: bold;
    margin-bottom: 18px;
  }

  .price .old-price {
    text-decoration: line-through;
  }

  .price .discount {
    background-color: #fb1616;
    border-radius: 3px;
    color: #fff;
    padding: 0 3px;
  }

  .price .new-price {
    font-size: 1.2rem;
  }

  .buy-options button {
    background-color: #2bbb28;
    border-radius: 5px;
    box-shadow: 0 2px 3px rgba(4, 5, 5, 0.15);
    color: #fff;
    font-size: 0.8rem;
    line-height: 30px;
    margin-left: 5px;
    padding: 0 10px;
  }

  .buy-options select {
    background-color: #fff;
    border: 1px solid #222;
    border-radius: 5px;
    font-size: 0.8rem;
    font-weight: normal;
    height: 30px;
    text-align: center;
    -moz-appearance: button;
    -moz-user-select: none;
    -webkit-appearance: button;
    -webkit-user-select: none;
  }

  .buy-options select:focus {
    outline: none;
  }

  .tab-content h3 {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 15px;
    margin-top: 30px;
  }

  .tab-content p {
    font-size: 0.9rem;
    font-weight: normal;
  }

  .product-details .middle p {
    font-size: 0.8rem;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .product-details .middle p span {
    color: #989898;
  }

  .product-details .share {
    background-color: #f8f8f8;
    bottom: 0;
    box-shadow: 0 1px 2px rgba(4, 5, 5, 0.25);
    height: 42px;
    position: absolute;
    width: 100%;
  }

  .related-books {
    display: flex;
    flex-direction: column;
    font-size: 0.85rem;
    font-weight: bold;
    padding: 20px 10px;
    text-align: right;
  }

  .related-book {
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.24);
    display: flex;
    flex-direction: row;
    font-size: 0.65rem;
    margin: 10px auto;
    padding: 10px;
    position: relative;
  }

  .related-book a {
    color: #000;
    margin: auto 5px;
    width: 85%;
  }

  .add-to-cart {
    background-color: rgb(43, 187, 40);
    border-radius: 50%;
    height: 20px;
    line-height: 23px;
    width: 20px;
  }

  .last ul {
    list-style: none;
  }

  .last ul li {
    color: #989898;
    font-size: 0.75rem;
    font-weight: normal;
  }

  .last ul li::before {
    color: #2bbb28;
    content: '\2714' !important;
    font-weight: bold;
    margin-left: 10px;
  }

  .v-tabs {
    border: 1px solid #f1eeee;
    border-bottom: 2px solid #f6f4f4;
  }

  .product .tabs .v-item-group .v-slide-group__wrapper .v-tabs-bar__content .v-tab {
    color: #000;
    font-size: 1.05rem;
    font-weight: bold;
  }

  .product .tabs .v-item-group .v-slide-group__wrapper .v-tabs-bar__content .v-tab:hover {
    color: #2bbb28;
  }

  .product .theme--light.v-tabs .v-tab::before,
  .product .theme--light.v-tabs .v-tab:hover::before {
    opacity: 0;
  }

  .tab-content {
    background-color: #fff;
    border: 1px solid #f1eeee;
    box-shadow: rgba(4, 5, 5, 0.15) 0 1px 2px;
    height: auto;
    min-height: 100px;
    overflow: hidden;
    padding: 0 30px;
  }

  .bold {
    font-weight: bold;
  }

  .product .tab-content .tall-line {
    margin: 10px 0;
  }

  .red-font {
    color: #f00;
  }

  .green-font {
    color: #0c3;
  }

  .dark-green-font {
    color: #1e971b;
  }

  .tab-content div {
    line-height: 30px;
  }

  .product .tab-content div p {
    margin-bottom: 10px;
  }

  .practice ol {
    margin: 15px;
  }

  .mobile-container .buy-options-and-price .quantity .v-input__control .v-input__slot .v-select__slot .v-select__selections input {
    display: none;
  }

  .mobile-container .buy-options-and-price .quantity .v-input__control .v-input__slot fieldset {
    border: 0;
  }

  .mobile-container .buy-options-and-price .quantity .v-input__control .v-text-field__details {
    display: none;
  }

  .mobile-container .buy-options-and-price .quantity .v-text-field.v-text-field--enclosed:not(.v-text-field--rounded) > .v-input__control > .v-input__slot {
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    padding: 0 5px;
  }

  .mobile-container .buy-options-and-price .quantity .v-input__control .v-input__slot .v-select__slot .v-select__selections .v-select__selection {
    color: #fff;
  }

  .mobile-container .buy-options-and-price .quantity .v-input__control .v-input__slot .v-select__slot .mdi-menu-down::before {
    color: #fff;
  }

  .mobile-container .v-tabs .v-slide-group__prev,
  .mobile-container .v-tabs .v-slide-group__next {
    display: none !important;
  }

  @media only screen and (max-width: 1260px) {
    .product {
      width: 950px;
    }
  }

  @media only screen and (max-width: 960px) {
    .product {
      width: 650px;
    }

    .product-data {
      flex-direction: column;
    }

    .product-data .v-image {
      height: auto !important;
      margin: auto auto 10px;
      width: 200px !important;
    }

    .product-data .first {
      padding: 25px 10px;
    }
  }

  @media only screen and (max-width: 600px) {
    .product {
      width: 90%;
    }

    .product-data .product-details {
      flex-direction: column;
    }

    .product-details .share {
      bottom: -42px;
    }
  }

</style>

<style scoped>

  .mobile-container {
    margin: 0 auto;
    width: 90%;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
  }

  .product-pic-container {
    background-color: #fff;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    position: relative;
  }

  .product-pic {
    border-radius: 5px;
    float: left;
    margin: 10px 0 10px 8%;
    overflow: hidden;
    width: 75%;
  }

  .discount {
    align-items: flex-start;
    background-color: #fb1616;
    border-radius: 5px 0 100px;
    color: #fff;
    display: flex;
    font-size: 1.7rem;
    font-weight: bold;
    height: 70px;
    justify-content: flex-end;
    left: 0;
    padding: 10px;
    position: absolute;
    top: 0;
    width: 70px;
  }

  .buy-options-and-price {
    align-items: center;
    background-color: #2bbb28;
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.24);
    display: flex;
    flex-direction: row;
    height: 50px;
    justify-content: space-between;
    margin-top: 20px;
  }

  .buy-options-and-price .quantity {
    align-items: center;
    background-color: rgb(38, 171, 36);
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
    display: flex;
    height: 100%;
    min-width: 75px;
    width: 100px;
  }

  .buy-options-and-price .buy-button {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 16px;
    width: 100%;
  }

  .mobile-container .plus-icon {
    align-items: center;
    background-color: #fff;
    border-radius: 50%;
    color: #2bbb28;
    display: flex;
    font-size: 2rem;
    font-weight: bold;
    height: 20px;
    justify-content: center;
    padding-top: 3px;
    width: 20px;
  }

  .buy-options-and-price .buy-button .price {
    align-items: center;
    color: #fff;
    display: flex;
    flex-direction: row;
    font-size: 16px;
    justify-content: center;
    height: 100%;
    margin: 0;
  }

  .mobile-container .price * {
    margin: auto 3px;
  }

  .mobile-container .price .old-price {
    color: #237521;
  }

  .mobile-container .price .new-price {
    font-size: 20px;
  }

  .mobile-container .product-details-container {
    background-color: #fff;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: bold;
    line-height: 3;
    margin-top: 20px;
    padding: 10px;
  }

  .mobile-container .product-details-container span {
    color: #676767;
  }

  .fixed-add-to-cart {
    align-items: center;
    background-color: #2bbb28;
    bottom: 0;
    color: #fff;
    display: flex;
    flex-direction: row;
    font-size: 16px;
    font-weight: bold;
    justify-content: center;
    left: 0;
    padding: 15px;
    position: fixed;
    right: 0;
    text-align: center;
    width: 100%;
    z-index: 20000;
  }

  .fixed-add-to-cart div {
    margin: 0 5px;
  }

  @media only screen and (max-width: 350px) {
    .buy-options-and-price .buy-button .price {
      font-size: 12px;
    }
  }
</style>
