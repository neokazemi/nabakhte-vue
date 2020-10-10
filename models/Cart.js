import Vue from 'vue'
import { Collection, Model } from 'js-abstract-model'
import { Product } from './Product'
import Price from './Price'

class CartItem extends Model {
  constructor (data) {
    super(data, [
      { key: 'id' },
      {
        key: 'qty',
        default: 0
      },
      {
        key: 'product',
        relatedModel: Product
      }
    ])
  }

  totalPrice () {
    return new Price({
      base: this.product.price.base * this.qty,
      discount: this.product.price.discount * this.qty,
      final: this.product.price.final * this.qty
    })
  }

  unitPrice () {
    return this.product.price
  }
}

class Cart extends Collection {
  model () {
    return CartItem
  }

  addItem (item) {
    let product = null
    let availableCartItem = null

    if (item instanceof Product) {
      product = item
      availableCartItem = this.getCartItem(product)
      if (availableCartItem) {
        // eslint-disable-next-line
        // availableCartItem.qty++
        Vue.set(availableCartItem, 'qty', (availableCartItem.qty + 1))
      }
    } else if (item instanceof CartItem) {
      product = item.product
    } else {
      return
    }

    if (
      (item instanceof Product && !availableCartItem) ||
      item instanceof CartItem
    ) {
      super.addItem({
        product,
        qty: 1
      })
    }
  }

  remove (product) {
    const availableCartItem = this.getCartItem(product)

    if (availableCartItem.qty > 1) {
      // eslint-disable-next-line
      availableCartItem.qty--
    } else if (availableCartItem.qty === 1) {
      const availableItemIndex = this.list.findIndex(i => (i.product.id === product.id))
      this.list.splice(availableItemIndex, 1)
    }
  }

  totalPrice () {
    return new Price({
      base: this.list.reduce((accumulator, item) => { return accumulator + (item.product.price.base * item.qty) }, 0),
      discount: this.list.reduce((accumulator, item) => { return accumulator + (item.product.price.discount * item.qty) }, 0),
      final: this.list.reduce((accumulator, item) => { return accumulator + (item.product.price.final * item.qty) }, 0)
    })
  }

  getCartItem (product) {
    return this.list.find(i => (i.product.id === product.id))
  }

  qty () {
    return this.list.reduce((accumulator, item) => { return accumulator + item.qty }, 0)
  }
}

export { CartItem, Cart }
