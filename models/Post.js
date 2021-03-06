import { Model, Collection } from 'js-abstract-model'
import { PostCategoryList } from './PostCategory'

class Post extends Model {
  constructor (data) {
    super(data, [
      {
        key: 'baseRoute',
        default: 'https://www.chibekhoonam.net/wp-json/wp/v2/posts?per_page=10&categories=929'
      },
      { key: 'id' },
      { key: 'date' },
      { key: 'modified' },
      { key: 'slug' },
      { key: 'status' },
      { key: 'type' },
      {
        key: 'title',
        value (itemVal) {
          return (itemVal && itemVal.rendered) ? itemVal.rendered : ''
        }
      },
      {
        key: 'featured_media_id',
        value (itemVal) {
          return (itemVal && itemVal.rendered) ? itemVal.rendered : ''
        }
      },
      {
        key: 'content',
        value (itemVal) {
          return (itemVal && itemVal.rendered) ? itemVal.rendered : ''
        }
      },
      {
        key: 'excerpt',
        value (itemVal) {
          return (itemVal && itemVal.rendered) ? itemVal.rendered : ''
        }
      },
      {
        key: 'categories',
        relatedModel: PostCategoryList
      }
    ])
  }
}

class PostList extends Collection {
  model () {
    return Post
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

export { Post, PostList }
