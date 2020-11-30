import { Model, Collection } from 'js-abstract-model'

class Banner extends Model {
  constructor (data) {
    super(data, [
      { key: 'id' },
      { key: 'title' },
      { key: 'body' },
      { key: 'photo' },
      { key: 'link' },
      { key: 'order' },
      { key: 'ratio' }
    ])
  }
}

class BannerList extends Collection {
  model () {
    return Banner
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

export { Banner, BannerList }
