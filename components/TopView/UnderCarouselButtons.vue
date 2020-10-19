<template>
  <div class="row under-carousel-buttons">
    <nuxt-link to="/خدمات-مشتریان" class="under-carousel-button">
      <img src="https://www.chibekhoonam.net/wp-content/themes/chibekhoonam/img/free-delivery.svg" alt=""><p>ارسال سریع</p>
      <p class="after-hover-text">
        بیشتر بدانید
      </p>
    </nuxt-link>
    <nuxt-link to="/خدمات-مشتریان" class="under-carousel-button">
      <img src="https://www.chibekhoonam.net/wp-content/themes/chibekhoonam/img/tag.svg" alt=""><p>تخفیف های جذاب</p>
      <p class="after-hover-text">
        بیشتر بدانید
      </p>
    </nuxt-link>
    <nuxt-link to="/خدمات-مشتریان" class="under-carousel-button">
      <img src="https://www.chibekhoonam.net/wp-content/themes/chibekhoonam/img/24-hours.svg" alt=""><p>پشتیبانی</p>
      <p class="after-hover-text">
        بیشتر بدانید
      </p>
    </nuxt-link>
    <nuxt-link to="/خدمات-مشتریان" class="under-carousel-button">
      <img src="https://www.chibekhoonam.net/wp-content/themes/chibekhoonam/img/customer-service.svg" alt=""><p>خدمات مشتریان</p>
      <p class="after-hover-text">
        بیشتر بدانید
      </p>
    </nuxt-link>
    <nuxt-link to="/خدمات-مشتریان" class="under-carousel-button type2">
      بیشتر بدانید ...
    </nuxt-link>
  </div>
</template>

<style scoped>
  .under-carousel-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 6px;
    padding-top: 15px;
  }

  .under-carousel-buttons .type2 {
    background-color: #ededed;
    box-shadow: none;
    justify-content: center !important;
    width: 16% !important;
  }

  .under-carousel-button {
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    color: #000 !important;
    display: flex;
    flex-direction: row;
    height: 60px;
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease;
    width: 19.8%;
  }

  .under-carousel-button:hover {
    color: #000;
    text-decoration: none;
  }

  .under-carousel-button p {
    font-size: 0.8rem;
    margin-right: 10px;
    transition: all 0.3s ease;
  }

  .under-carousel-button:hover p {
    font-size: 1px;
    margin-right: 49px;
    opacity: 0;
  }

  .under-carousel-button .after-hover-text {
    color: #269b24;
    font-size: 1px;
    height: 100%;
    margin-right: 49px;
    opacity: 0;
    position: absolute;
    right: 65px;
    top: 50%;
    transition: all 0.3s ease;
  }

  .under-carousel-button:hover .after-hover-text {
    font-size: 0.9rem;
    margin-right: 0;
    opacity: 1;
    right: 65px;
    top: 30%;
  }

  .under-carousel-button img {
    height: 38px;
    margin-right: 10px;
    transition: all 0.3s ease;
    width: auto;
  }

  .under-carousel-button:hover img {
    margin-right: 1px;
  }
</style>

<script>
export default {
  name: 'UnderCarouselButtons'
}
</script>
