import { Collection, Model } from 'js-abstract-model'
import { Product } from './Product'
import Price from './Price'

class CartItem extends Model {
  constructor (data) {
    super(data, [
      { key: 'id' },
      { key: 'count' },
      {
        key: 'product',
        relatedModel: Product
      }
    ])
  }

  totalPrice () {
    return new Price({
      base: this.product.price.base * this.count,
      discount: this.product.price.discount * this.count,
      final: this.product.price.final * this.count
    })
  }

  unitPrice () {
    return this.product.price
  }
}

class CartItemList extends Collection {
  model () {
    return CartItem
  }

  getType (type) {
    return this.list.filter(item => parseInt(item.type) === parseInt(type))
  }

  sortByOrder (sort) {
    this.list.sort(function (a, b) {
      if (isNaN(a.order) || a.order === null || isNaN(b.order) || b.order === null) {
        return 1
      }
      if (sort === 'asc') {
        return a.order - b.order
      } else if (sort === 'des') {
        return b.order - a.order
      }
    })
  }

  videos (sort) {
    if (typeof sort !== 'undefined') {
      this.sortByOrder(sort)
    }
    return this.getType(8)
  }

  pamphlets (sort) {
    if (typeof sort !== 'undefined') {
      // this.sortByOrder(sort);
    }
    return this.getType(1)
  }
}

export { CartItem, CartItemList }
