<template>
  <v-container>
    <v-row>
      <v-col
        cols="3"
      >
        <sidebar>
          <Treeview :tree-view="treeviewItems" />
        </sidebar>
      </v-col>
      <v-col
        cols="9"
      >
        <v-row>
          <v-col>
            <breadcrumbs :items="breadcrumbsItems" />
          </v-col>
        </v-row>
        <PostItem v-for="(item, index) in posts.list" :key="index" :post="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PostItem from '../../../components/PostItem'
import Treeview from '../../../components/Treeview'
import Sidebar from '~/components/app/Sidebar'
import Breadcrumbs from '~/components/Breadcrumbs'
import { PostList } from '~/models/Post'
export default {
  name: 'Category',
  components: {
    Breadcrumbs,
    Sidebar,
    PostItem,
    Treeview
  },
  asyncData (context) {
    return (new PostList()).fetch()
      .then((response) => {
        context.store.commit('updatePosts', new PostList(response.data))
      })
  },
  data () {
    return {
      breadcrumbsItems: [
        {
          disabled: false,
          exact: false,
          href: '#',
          link: false,
          text: 'خانه',
          to: '#'
        },
        {
          disabled: true,
          exact: false,
          href: '#',
          link: false,
          text: 'مقالات',
          to: '#'
        }
      ],
      treeviewItems: [],
      arrayTree: [
        {
          id: 8598,
          count: 0,
          description: '',
          link: 'https://www.chibekhoonam.net/blog/category/uncat/',
          name: 'uncategorized',
          slug: 'uncat',
          taxonomy: 'category',
          parent: 0,
          meta: [

          ],
          _links: {
            self: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories/8598'
              }
            ],
            collection: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories'
              }
            ],
            about: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/taxonomies/category'
              }
            ],
            'wp:post_type': [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/posts?categories=8598'
              }
            ],
            curies: [
              {
                name: 'wp',
                href: 'https://api.w.org/{rel}',
                templated: true
              }
            ]
          }
        },
        {
          id: 9689,
          count: 6,
          description: 'آشنایی با دانشگاه ها',
          link: 'https://www.chibekhoonam.net/blog/category/maghalat/daneshgah/',
          name: 'آشنایی با دانشگاه ها',
          slug: 'daneshgah',
          taxonomy: 'category',
          parent: 929,
          meta: [

          ],
          _links: {
            self: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories/9689'
              }
            ],
            collection: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories'
              }
            ],
            about: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/taxonomies/category'
              }
            ],
            up: [
              {
                embeddable: true,
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories/929'
              }
            ],
            'wp:post_type': [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/posts?categories=9689'
              }
            ],
            curies: [
              {
                name: 'wp',
                href: 'https://api.w.org/{rel}',
                templated: true
              }
            ]
          }
        },
        {
          id: 30,
          count: 89,
          description: 'اخبار',
          link: 'https://www.chibekhoonam.net/blog/category/akhbar/',
          name: 'اخبار',
          slug: 'akhbar',
          taxonomy: 'category',
          parent: 0,
          meta: [

          ],
          _links: {
            self: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories/30'
              }
            ],
            collection: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories'
              }
            ],
            about: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/taxonomies/category'
              }
            ],
            'wp:post_type': [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/posts?categories=30'
              }
            ],
            curies: [
              {
                name: 'wp',
                href: 'https://api.w.org/{rel}',
                templated: true
              }
            ]
          }
        },
        {
          id: 9813,
          count: 8,
          description: '',
          link: 'https://www.chibekhoonam.net/blog/category/akhbar/nahaei/',
          name: 'امتحانات نهایی',
          slug: 'nahaei',
          taxonomy: 'category',
          parent: 30,
          meta: [

          ],
          _links: {
            self: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories/9813'
              }
            ],
            collection: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories'
              }
            ],
            about: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/taxonomies/category'
              }
            ],
            up: [
              {
                embeddable: true,
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories/30'
              }
            ],
            'wp:post_type': [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/posts?categories=9813'
              }
            ],
            curies: [
              {
                name: 'wp',
                href: 'https://api.w.org/{rel}',
                templated: true
              }
            ]
          }
        },
        {
          id: 9690,
          count: 7,
          description: 'انتخاب رشته',
          link: 'https://www.chibekhoonam.net/blog/category/maghalat/reshte/',
          name: 'انتخاب رشته',
          slug: 'reshte',
          taxonomy: 'category',
          parent: 929,
          meta: [

          ],
          _links: {
            self: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories/9690'
              }
            ],
            collection: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories'
              }
            ],
            about: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/taxonomies/category'
              }
            ],
            up: [
              {
                embeddable: true,
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories/929'
              }
            ],
            'wp:post_type': [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/posts?categories=9690'
              }
            ],
            curies: [
              {
                name: 'wp',
                href: 'https://api.w.org/{rel}',
                templated: true
              }
            ]
          }
        },
        {
          id: 9809,
          count: 18,
          description: '',
          link: 'https://www.chibekhoonam.net/blog/category/akhbar/enetekhab/',
          name: 'انتخاب رشته',
          slug: 'enetekhab',
          taxonomy: 'category',
          parent: 30,
          meta: [

          ],
          _links: {
            self: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories/9809'
              }
            ],
            collection: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories'
              }
            ],
            about: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/taxonomies/category'
              }
            ],
            up: [
              {
                embeddable: true,
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories/30'
              }
            ],
            'wp:post_type': [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/posts?categories=9809'
              }
            ],
            curies: [
              {
                name: 'wp',
                href: 'https://api.w.org/{rel}',
                templated: true
              }
            ]
          }
        },
        {
          id: 9692,
          count: 11,
          description: 'انواع کتاب ها',
          link: 'https://www.chibekhoonam.net/blog/category/maghalat/ketab/',
          name: 'انواع کتاب ها',
          slug: 'ketab',
          taxonomy: 'category',
          parent: 929,
          meta: [

          ],
          _links: {
            self: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories/9692'
              }
            ],
            collection: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories'
              }
            ],
            about: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/taxonomies/category'
              }
            ],
            up: [
              {
                embeddable: true,
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories/929'
              }
            ],
            'wp:post_type': [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/posts?categories=9692'
              }
            ],
            curies: [
              {
                name: 'wp',
                href: 'https://api.w.org/{rel}',
                templated: true
              }
            ]
          }
        },
        {
          id: 9691,
          count: 11,
          description: 'برنامه ریزی تحصیلی',
          link: 'https://www.chibekhoonam.net/blog/category/maghalat/barnamerizi/',
          name: 'برنامه ریزی تحصیلی',
          slug: 'barnamerizi',
          taxonomy: 'category',
          parent: 929,
          meta: [

          ],
          _links: {
            self: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories/9691'
              }
            ],
            collection: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories'
              }
            ],
            about: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/taxonomies/category'
              }
            ],
            up: [
              {
                embeddable: true,
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories/929'
              }
            ],
            'wp:post_type': [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/posts?categories=9691'
              }
            ],
            curies: [
              {
                name: 'wp',
                href: 'https://api.w.org/{rel}',
                templated: true
              }
            ]
          }
        },
        {
          id: 9693,
          count: 40,
          description: 'تحلیل و مشاوره',
          link: 'https://www.chibekhoonam.net/blog/category/maghalat/tahlil/',
          name: 'تحلیل و مشاوره',
          slug: 'tahlil',
          taxonomy: 'category',
          parent: 929,
          meta: [

          ],
          _links: {
            self: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories/9693'
              }
            ],
            collection: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories'
              }
            ],
            about: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/taxonomies/category'
              }
            ],
            up: [
              {
                embeddable: true,
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories/929'
              }
            ],
            'wp:post_type': [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/posts?categories=9693'
              }
            ],
            curies: [
              {
                name: 'wp',
                href: 'https://api.w.org/{rel}',
                templated: true
              }
            ]
          }
        },
        {
          id: 9807,
          count: 30,
          description: '',
          link: 'https://www.chibekhoonam.net/blog/category/akhbar/sabtenam/',
          name: 'ثبت نام کنکور',
          slug: 'sabtenam',
          taxonomy: 'category',
          parent: 30,
          meta: [

          ],
          _links: {
            self: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories/9807'
              }
            ],
            collection: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories'
              }
            ],
            about: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/taxonomies/category'
              }
            ],
            up: [
              {
                embeddable: true,
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories/30'
              }
            ],
            'wp:post_type': [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/posts?categories=9807'
              }
            ],
            curies: [
              {
                name: 'wp',
                href: 'https://api.w.org/{rel}',
                templated: true
              }
            ]
          }
        },
        {
          id: 1,
          count: 0,
          description: '',
          link: 'https://www.chibekhoonam.net/blog/category/bidaste/',
          name: 'دسته‌بندی نشده',
          slug: 'bidaste',
          taxonomy: 'category',
          parent: 0,
          meta: [

          ],
          _links: {
            self: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories/1'
              }
            ],
            collection: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories'
              }
            ],
            about: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/taxonomies/category'
              }
            ],
            'wp:post_type': [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/posts?categories=1'
              }
            ],
            curies: [
              {
                name: 'wp',
                href: 'https://api.w.org/{rel}',
                templated: true
              }
            ]
          }
        },
        {
          id: 9806,
          count: 4,
          description: '',
          link: 'https://www.chibekhoonam.net/blog/category/maghalat/sayer/',
          name: 'سایر',
          slug: 'sayer',
          taxonomy: 'category',
          parent: 929,
          meta: [

          ],
          _links: {
            self: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories/9806'
              }
            ],
            collection: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories'
              }
            ],
            about: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/taxonomies/category'
              }
            ],
            up: [
              {
                embeddable: true,
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories/929'
              }
            ],
            'wp:post_type': [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/posts?categories=9806'
              }
            ],
            curies: [
              {
                name: 'wp',
                href: 'https://api.w.org/{rel}',
                templated: true
              }
            ]
          }
        },
        {
          id: 9812,
          count: 22,
          description: '',
          link: 'https://www.chibekhoonam.net/blog/category/akhbar/sayerr/',
          name: 'سایر',
          slug: 'sayerr',
          taxonomy: 'category',
          parent: 30,
          meta: [

          ],
          _links: {
            self: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories/9812'
              }
            ],
            collection: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories'
              }
            ],
            about: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/taxonomies/category'
              }
            ],
            up: [
              {
                embeddable: true,
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories/30'
              }
            ],
            'wp:post_type': [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/posts?categories=9812'
              }
            ],
            curies: [
              {
                name: 'wp',
                href: 'https://api.w.org/{rel}',
                templated: true
              }
            ]
          }
        },
        {
          id: 9810,
          count: 8,
          description: '',
          link: 'https://www.chibekhoonam.net/blog/category/akhbar/cart/',
          name: 'کارت ورود به جلسه کنکور',
          slug: 'cart',
          taxonomy: 'category',
          parent: 30,
          meta: [

          ],
          _links: {
            self: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories/9810'
              }
            ],
            collection: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories'
              }
            ],
            about: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/taxonomies/category'
              }
            ],
            up: [
              {
                embeddable: true,
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories/30'
              }
            ],
            'wp:post_type': [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/posts?categories=9810'
              }
            ],
            curies: [
              {
                name: 'wp',
                href: 'https://api.w.org/{rel}',
                templated: true
              }
            ]
          }
        },
        {
          id: 9811,
          count: 2,
          description: '',
          link: 'https://www.chibekhoonam.net/blog/category/akhbar/mosahebe/',
          name: 'مصاحبه ها',
          slug: 'mosahebe',
          taxonomy: 'category',
          parent: 30,
          meta: [

          ],
          _links: {
            self: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories/9811'
              }
            ],
            collection: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories'
              }
            ],
            about: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/taxonomies/category'
              }
            ],
            up: [
              {
                embeddable: true,
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories/30'
              }
            ],
            'wp:post_type': [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/posts?categories=9811'
              }
            ],
            curies: [
              {
                name: 'wp',
                href: 'https://api.w.org/{rel}',
                templated: true
              }
            ]
          }
        },
        {
          id: 929,
          count: 85,
          description: 'مقالات',
          link: 'https://www.chibekhoonam.net/blog/category/maghalat/',
          name: 'مقالات',
          slug: 'maghalat',
          taxonomy: 'category',
          parent: 0,
          meta: [

          ],
          _links: {
            self: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories/929'
              }
            ],
            collection: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories'
              }
            ],
            about: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/taxonomies/category'
              }
            ],
            'wp:post_type': [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/posts?categories=929'
              }
            ],
            curies: [
              {
                name: 'wp',
                href: 'https://api.w.org/{rel}',
                templated: true
              }
            ]
          }
        },
        {
          id: 9808,
          count: 20,
          description: '',
          link: 'https://www.chibekhoonam.net/blog/category/akhbar/natayej/',
          name: 'نتایج کنکور',
          slug: 'natayej',
          taxonomy: 'category',
          parent: 30,
          meta: [

          ],
          _links: {
            self: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories/9808'
              }
            ],
            collection: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories'
              }
            ],
            about: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/taxonomies/category'
              }
            ],
            up: [
              {
                embeddable: true,
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories/30'
              }
            ],
            'wp:post_type': [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/posts?categories=9808'
              }
            ],
            curies: [
              {
                name: 'wp',
                href: 'https://api.w.org/{rel}',
                templated: true
              }
            ]
          }
        },
        {
          id: 9688,
          count: 20,
          description: 'نحوه مطالعه و تست زنی',
          link: 'https://www.chibekhoonam.net/blog/category/maghalat/motalee/',
          name: 'نحوه مطالعه و تست زنی',
          slug: 'motalee',
          taxonomy: 'category',
          parent: 929,
          meta: [

          ],
          _links: {
            self: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories/9688'
              }
            ],
            collection: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories'
              }
            ],
            about: [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/taxonomies/category'
              }
            ],
            up: [
              {
                embeddable: true,
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/categories/929'
              }
            ],
            'wp:post_type': [
              {
                href: 'https://www.chibekhoonam.net/wp-json/wp/v2/posts?categories=9688'
              }
            ],
            curies: [
              {
                name: 'wp',
                href: 'https://api.w.org/{rel}',
                templated: true
              }
            ]
          }
        }
      ]
    }
  },
  computed: {
    posts () {
      return this.$store.getters.posts
    }
  },
  created () {
    this.convertArrayForTreeview()
  },
  methods: {
    convertArrayForTreeview () {
      for (let i = 0; i < this.arrayTree.length; i++) {
        if (this.arrayTree[i].parent === 0 &&
          this.arrayTree[i].id !== 0 &&
          this.arrayTree[i].id !== 8598 &&
          this.arrayTree[i].id !== 1) {
          this.treeviewItems.push({
            id: this.arrayTree[i].id,
            name: this.arrayTree[i].name,
            children: [],
            slug: this.arrayTree[i].slug
          })
        } else if (this.arrayTree[i].id !== 0) {
          for (let j = 0; j < this.treeviewItems.length; j++) {
            if (this.treeviewItems[j].id === this.arrayTree[i].parent &&
              this.arrayTree[i].id !== 8598 &&
              this.arrayTree[i].id !== 1) {
              this.treeviewItems[j].children.push({
                id: this.arrayTree[i].id,
                name: this.arrayTree[i].name,
                slug: this.arrayTree[i].slug
              })
            }
          }
        }
      }
    }
  }
}
</script>
