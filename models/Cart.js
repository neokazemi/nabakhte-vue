import { Model } from 'js-abstract-model'
import { CartItemList } from './CartItem'

class Cart extends Model {
  constructor (data) {
    super(data, [
      {
        key: 'items',
        relatedModel: CartItemList
      }
    ])
  }

  add (item) {
    this.items.addItem(item)
  }

  toman (key, suffix) {
    if (this[key]) {
      let string = this[key].toLocaleString('fa')
      if (typeof suffix === 'undefined' || suffix) {
        string += ' تومان '
      }

      return string
    }
    return null
  }

  discountInPercent () {
    return Math.round(this.discount * 100 / this.base)
  }
}

export default Cart
