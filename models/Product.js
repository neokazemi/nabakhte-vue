import { Model, Collection } from 'js-abstract-model'
import Price from './Price'
import Image from './Image'

class Product extends Model {
  constructor (data) {
    super(data, [
      {
        key: 'baseRoute',
        default: 'https://ads.alaatv.com/getAd?UUID=35b39d4b-517b-44bc-85c4-44f93242836f'
      },
      {
        key: 'id',
        default: Date.now()
      },
      { key: 'UUID' },
      { key: 'type' },
      { key: 'name' },
      {
        key: 'image',
        relatedModel: Image
      },
      {
        key: 'price',
        relatedModel: Price
      },
      { key: 'link' },
      { key: 'tags' },
      { key: 'enable' },
      { key: 'created_at' },
      { key: 'updated_at' },
      { key: 'deleted_at' }

      // {key: 'id'},
      // {key: 'redirect_url'},
      // {key: 'type'},
      // {key: 'category'},
      // {key: 'title'},
      // {key: 'is_free'},
      // {key: 'url'},
      // {key: 'photo'},
      // {key: 'attributes'},
      // {
      //     key: 'price',
      //     relatedModel: Price,
      // },
      // {key: 'favor_url'},
      // {key: 'unfavor_url'},
    ])

    this.loadImage()
    this.loadPrice()
  }

  getLink () {
    return '/product/' + this.name.split(' ').join('_')
  }

  loadImage () {
    if (!this.inputData || !this.inputData.image) {
      return
    }
    this.image = new Image({
      url: this.inputData.image.url
    })
  }

  loadPrice () {
    this.price = new Price({
      final: 80000,
      base: 100000,
      discount: 20000
    })
  }

  createFavorUrl (baseUrl, favored) {
    return baseUrl + '/product/' + this.id + '/' + ((favored) ? 'favored' : 'unfavored')
  }

  setFavor (url) {
    if (typeof url === 'undefined') {
      url = this.favor_url
    }
    // if (url === null) {
    //   console.error('url is null.')
    // }
    //
    // console.log('url', url)

    return this.crud.create(url)
  }

  setUnfavor (url) {
    if (typeof url === 'undefined') {
      url = this.unfavor_url
    }
    // if (url === null) {
    //   console.error('url is null.')
    // }
    return this.crud.create(url)
  }
}

class ProductList extends Collection {
  model () {
    return Product
  }
}

export { Product, ProductList }
