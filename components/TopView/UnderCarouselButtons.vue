<template>
  <div class="row under-carousel-buttons">
    <a href="#" class="under-carousel-button">
      <img src="https://www.chibekhoonam.net/wp-content/themes/chibekhoonam/img/free-delivery.svg" alt=""><p>ارسال سریع</p>
      <p class="after-hover-text">بیشتر بدانید</p>
    </a>
    <a href="#" class="under-carousel-button">
      <img src="https://www.chibekhoonam.net/wp-content/themes/chibekhoonam/img/tag.svg" alt=""><p>تخفیف های جذاب</p>
      <p class="after-hover-text">بیشتر بدانید</p>
    </a>
    <a href="#" class="under-carousel-button">
      <img src="https://www.chibekhoonam.net/wp-content/themes/chibekhoonam/img/24-hours.svg" alt=""><p>پشتیبانی</p>
      <p class="after-hover-text">بیشتر hh</p>
    </a>
    <a href="#" class="under-carousel-button">
      <img src="https://www.chibekhoonam.net/wp-content/themes/chibekhoonam/img/customer-service.svg" alt=""><p>خدمات مشتریان</p>
      <p class="after-hover-text">بیشتر بدانید</p>
    </a>
    <a href="#" class="under-carousel-button type2">
      بیشتر بدانید ...
    </a>
  </div>
</template>

<style scoped>
  .under-carousel-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 15px;
    padding-right: 6px;
    padding-left: 5%;
  }

  .under-carousel-buttons .type2 {
    justify-content: center !important;
    width: 16% !important;
    background-color: #ededed;
    box-shadow: none;
  }

  .under-carousel-button {
    width: 19.8%;
    height: 60px;
    background-color: #fff;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    color: black !important;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    position: relative;
  }

  .under-carousel-button:hover {
    color: #000;
    text-decoration: none;
  }

  .under-carousel-button p {
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
    margin-right: 10px;
    font-size: 0.8rem;
  }

  .under-carousel-button:hover p {
    margin-right: 49px;
    font-size: 1px;
    opacity: 0;
  }

  .under-carousel-button .after-hover-text {
    color: #269b24;
    font-size: 1px;
    margin-right: 49px;
    position: absolute;
    height: 100%;
    top: 50%;
    right: 65px;
    opacity: 0;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  .under-carousel-button:hover .after-hover-text {
    font-size: 0.9rem;
    margin-right: 0;
    opacity: 1;
    top: 30%;
    right: 65px;
  }

  .under-carousel-button img {
    height: 38px;
    width: auto;
    margin-right: 10px;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
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
