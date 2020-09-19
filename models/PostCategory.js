import { Model, Collection } from 'js-abstract-model'

class PostCategory extends Model {
  constructor (data) {
    super(data, [
      {
        key: 'baseRoute',
        default: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories?per_page=100'
      },
      { key: 'id' },
      { key: 'count' },
      { key: 'description' },
      { key: 'name' },
      { key: 'slug' },
      { key: 'parent' }
    ])
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

class PostCategoryList extends Collection {
  model () {
    return PostCategory
  }
}

export { PostCategory, PostCategoryList }
