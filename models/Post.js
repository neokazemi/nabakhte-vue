// // eslint-disable-next-line import/named
// // import { Model, Collection } from 'js-abstract-model'
// import Model from 'js-abstract-model'
//
// class Post extends Model {
//   constructor (data) {
//     super(data, [
//       { key: 'id' },
//       { key: 'date' },
//       { key: 'modified' },
//       { key: 'slug' },
//       { key: 'status' },
//       { key: 'type' },
//       { key: 'link' },
//       // {
//       //   key: 'title',
//       //   value (itemVal, inputData) {
//       //     return itemVal.rendered
//       //   }
//       // },
//       // {
//       //   key: 'featured_media_id',
//       //   value (itemVal, inputData) {
//       //     return itemVal.rendered
//       //   }
//       // },
//       // {
//       //   key: 'content',
//       //   value (itemVal, inputData) {
//       //     return itemVal.rendered
//       //   }
//       // },
//       // {
//       //   key: 'excerpt',
//       //   value (itemVal, inputData) {
//       //     return itemVal.rendered
//       //   }
//       // },
//       { key: 'categories' }
//     ])
//   }
// }
//
// // class PostList extends Collection {
// //   model () {
// //     return Post
// //   }
// //
// //   getType (type) {
// //     return this.list.filter(item => parseInt(item.type) === parseInt(type))
// //   }
// //
// //   sortByOrder (sort) {
// //     this.list.sort(function (a, b) {
// //       if (isNaN(a.order) || a.order === null || isNaN(b.order) || b.order === null) {
// //         return 1
// //       }
// //       if (sort === 'asc') {
// //         return a.order - b.order
// //       } else if (sort === 'des') {
// //         return b.order - a.order
// //       }
// //     })
// //   }
// //
// //   videos (sort) {
// //     if (typeof sort !== 'undefined') {
// //       this.sortByOrder(sort)
// //     }
// //     return this.getType(8)
// //   }
// //
// //   pamphlets (sort) {
// //     if (typeof sort !== 'undefined') {
// //       // this.sortByOrder(sort);
// //     }
// //     return this.getType(1)
// //   }
// // }
//
// // export { Post, PostList }
//
// export default Post
