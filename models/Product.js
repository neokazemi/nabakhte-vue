// import Model from 'js-abstract-model';
// import Collection from 'js-abstract-model';
// // import OrderStatsu from './OrderStatsu';
// // import PaymentStatsu from './PaymentStatsu';
// // import User from './User';
// import Price from './Price';
// import Image from './Image';
// // import {Set, SetList} from '../Model/Set';
//
// class Product extends Model {
//
//     constructor(data) {
//         super(data, [
//
//
//           {key: 'id'},
//           {key: 'UUID'},
//           {key: 'type'},
//           {key: 'name'},
//           {
//             key: 'image',
//             relatedModel: Image,
//           },
//           {key: 'link'},
//           {key: 'tags',
//             value: function (itemVal, inputData) {
//               return JSON.parse(itemVal);
//             }
//           },
//           {key: 'enable'},
//           {key: 'created_at'},
//           {key: 'updated_at'},
//           {key: 'deleted_at'}
//
//
//             // {key: 'id'},
//             // {key: 'redirect_url'},
//             // {key: 'type'},
//             // {key: 'category'},
//             // {key: 'title'},
//             // {key: 'is_free'},
//             // {key: 'url'},
//             // {key: 'photo'},
//             // {key: 'attributes'},
//             // {
//             //     key: 'price',
//             //     relatedModel: Price,
//             // },
//             // {key: 'favor_url'},
//             // {key: 'unfavor_url'},
//         ]);
//     }
//
//     createFavorUrl(baseUrl, favored) {
//         return baseUrl + '/product/' + this.id + '/' + ((favored) ? 'favored' : 'unfavored');
//     }
//
//     setFavor(url) {
//         if (typeof url === 'undefined') {
//             url = this.favor_url;
//         }
//         if (url === null) {
//             console.error('url is null.');
//         }
//
//         console.log('url', url);
//
//         return this.crud.create(url);
//     }
//
//     setUnfavor(url) {
//         if (typeof url === 'undefined') {
//             url = this.unfavor_url;
//         }
//         if (url === null) {
//             console.error('url is null.');
//         }
//         return this.crud.create(url);
//     }
//
// }
//
// class ProductList extends Collection {
//     model() {
//         return Product;
//     }
// }
//
// export {Product, ProductList};
