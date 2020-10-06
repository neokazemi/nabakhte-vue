<template>
  <div class="product-card6">
    <div class="image-container">
      <v-img :src="details.image.url" contain :width="52" :height="63" />
    </div>
    <div class="product-info-container">
      <div class="product-title">
        <slot />
      </div>
      <div class="product-buy-info">
        <div class="quantity">
          <v-select
            :items="quantity"
            :value="quantity[0]"
            dense
            outlined
            :height="25"
          />
          <nuxt-link to="#" class="delete-button">
            حذف
          </nuxt-link>
        </div>
        <div class="price">
          {{ 80000 | price }} تومان
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard6',
  filters: {
    price (value) {
      return value.toLocaleString('ar-SA')
    }
  },
  props: {
    details: {
      type: Object,
      default () {
        return {
          oldPrice: 100000,
          newPrice: 80000,
          off: 20,
          imgURL: 'https://media.chibekhoonam.net/2020/09/golbarg-olom6.jpg',
          productURL: '#'
        }
      }
    },
    type: {
      type: Number,
      required: false,
      default: 1
    }
  },
  data () {
    return {
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
  }
}
</script>

<style scoped>
  .product-card6 {
    padding: 13px 14px 13px 19px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.24);
    background-color: #fff;
    border-radius: 8px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    height: 105px;
  }

  .image-container {
    display: flex;
    align-items: center;
  }

  .product-info-container {
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }

  .product-title {
    font-weight: bold;
    font-size: 12px;
  }

  .product-buy-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .quantity {
    width: 100%;
    display: flex;
  }

  .price {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    font-size: 15px;
    font-weight: bold;
  }

  .quantity .delete-button {
    border-radius: 6px;
    border: 1px solid #e3e3e3;
    width: 41px;
    height: 25px;
    font-size: 12px;
    color: #8d8d8d;
    padding: 1px 5px;
    margin: 0 5px;
  }
</style>

<style>
  .product-card6 .quantity .v-input__control .v-text-field__details {
    display: none;
  }

  .product-card6 .quantity .v-input__control .v-input__slot .v-select__slot .v-select__selections input {
    display: none;
  }

  .product-card6 .quantity .v-input__slot .v-select__selection {
    font-size: 13px;
  }

  .product-card6 .quantity .v-text-field--enclosed.v-input--dense:not(.v-text-field--solo).v-text-field--outlined .v-input__append-inner,
  .product-card6 .quantity .v-text-field.v-text-field--enclosed:not(.v-text-field--rounded) > .v-input__control > .v-input__slot,
  .product-card6 .quantity .v-select.v-text-field--outlined:not(.v-text-field--single-line).v-input--dense .v-select__selections {
    padding: 0;
    margin: 0;
  }

  .product-card6 .quantity .v-text-field--outlined.v-input--is-focused fieldset {
    max-height: 30px;
    padding: 0;
  }

  .product-card6 .quantity .theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state) > .v-input__control > .v-input__slot fieldset {
    height: 30px;
  }

  .product-card6 .quantity .v-select.v-input--dense .v-select__selection--comma {
    margin: 4px 5px 0 0;
  }

  .product-card6 .quantity .v-input {
    max-width: 70px;
    margin: 0;
    max-height: 25px;
  }

  .product-card6 .quantity .v-select__slot {
    align-items: flex-start;
  }
</style>
