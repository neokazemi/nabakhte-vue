import { Model, Collection } from 'js-abstract-model'
import { ContentList } from '~/models/Content'
import { ProductList } from '~/models/Product'
import { BannerList } from '~/models/Banner'

class Block extends Model {
  constructor (data) {
    super(data, [
      {
        key: 'baseRoute',
        default: 'https://alaatv.com/api/v2/home'
      },
      { key: 'id' },
      { key: 'order' },
      { key: 'title' },
      { key: 'url' },
      {
        key: 'contents',
        relatedModel: ContentList
      },
      {
        key: 'products',
        relatedModel: ProductList
      },
      {
        key: 'banners',
        relatedModel: BannerList
      }
    ])
  }
}

class BlockList extends Collection {
  model () {
    return Block
  }

  sortByOrder () {
    this.list.sort(this.compare)
  }

  compare (first, second) {
    if (first.order < second.order) {
      return -1
    }
    if (first.order > second.order) {
      return 1
    }
    return 0
  }
}

export { Block, BlockList }
