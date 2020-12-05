import { Model, Collection } from 'js-abstract-model'
import { SetList } from './Set'
import Price from './Price'
import Image from './Image'
// import API_ADDRESS from '~/plugins/apiAddresses'

class Product extends Model {
  constructor (data) {
    super(data, [
      {
        key: 'baseRoute',
        // default: 'https://ads.alaatv.com/getAd?UUID=35b39d4b-517b-44bc-85c4-44f93242836f'
        default: 'https://alaatv.com/api/v2/product'
        // default: API_ADDRESS.product.base
      },
      {
        key: 'id',
        default: Date.now()
      },
      { key: 'redirect_url' },
      { key: 'type' },
      { key: 'category' },
      {
        key: 'title',
        value (itemVal, inputData) {
          if (typeof inputData.title !== 'undefined' && inputData.title !== null) {
            return inputData.title
          } else if (typeof inputData.name !== 'undefined' && inputData.name !== null) {
            return inputData.name
          }
        }
      },
      { key: 'name' }, // ToDo: must remove
      { key: 'is_free' },
      { key: 'url' },
      { key: 'photo' },
      { key: 'attributes' },
      {
        key: 'sets',
        relatedModel: SetList
      },
      { // ToDo: must remove
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
  }

  getLink () {
    return '/product/' + this.id
  }

  loadImage () {
    const array = [
      'https://media.chibekhoonam.net/2020/08/din-ensani-jaame-khsabz.jpg',
      'https://media.chibekhoonam.net/2020/08/din-jaame-ensani-moshaveran.jpg',
      'https://media.chibekhoonam.net/2019/10/chekide-din-o-zendegi-ensani-jibi.jpg',
      'https://media.chibekhoonam.net/2020/10/darsname-kamel-din-ensani-micro.jpg',
      'https://media.chibekhoonam.net/2020/09/din-jaame-ensani-micro.jpg',
      'https://media.chibekhoonam.net/2020/08/p-din-jaame-ensani-khsabz.jpg',
      'https://media.chibekhoonam.net/2020/11/9786000022068-1.jpg',
      'https://media.chibekhoonam.net/2020/10/payam-ayat-ensani-loqme.jpg',
      'https://media.chibekhoonam.net/2020/09/din-jaame-ensani-montsaheran.jpg',
      'https://media.chibekhoonam.net/2020/09/p-din-jaame-ensani-micro.jpg',
      'https://media.chibekhoonam.net/2020/11/9786000022068.jpg',
      'https://media.chibekhoonam.net/2017/02/porseman-eng9.jpg',
      'https://media.chibekhoonam.net/2016/08/zaban9-mobtakeran.jpg',
      'https://media.chibekhoonam.net/2018/08/eng-9-tiz-khsabz.jpg',
      'https://media.chibekhoonam.net/2020/11/9786000022051.jpg',
      'https://media.chibekhoonam.net/2020/11/51-min.jpg',
      'https://media.chibekhoonam.net/2017/08/englisi-9-reshadat-mobtakeran.jpg',
      'https://media.chibekhoonam.net/2018/10/golbarg-eng9.jpg',
      'https://media.chibekhoonam.net/2019/09/eng-9-loghme.jpg'
    ]
    this.photo = array[Math.floor(Math.random() * array.length)]
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
