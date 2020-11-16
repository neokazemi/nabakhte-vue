<template>
  <div :style="{ height: height }" class="pagination">
    <div v-for="(item, index) in getPages()" :key="index" class="each-page" :class="{ clickable: item !== '...', active: item === page }" @click="changePage(item)">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    length: {
      type: Number,
      required: false,
      default: 3
    },
    totalVisible: {
      type: Number,
      required: false,
      default: 0
    },
    height: {
      type: Number,
      required: false,
      default: 30
    }
  },
  data () {
    return {
      page: 1
    }
  },
  methods: {
    getPages () {
      const pages = []
      if (!this.totalVisible || this.totalVisible >= this.length) {
        for (let i = 1; i <= this.length; i++) {
          pages.push(i)
        }
      } else if (this.page <= 2) {
        for (let i = 1; i <= this.totalVisible - 1; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(this.length)
      } else if (this.page > this.length - 2) {
        pages.push(1)
        pages.push('...')
        for (let i = this.length - 2; i <= this.length; i++) {
          pages.push(i)
        }
      } else {
        pages.push(1)
        if (this.page - 2 !== 1) {
          pages.push('...')
        }
        for (let i = this.page - 1; i <= this.page + 1; i++) {
          pages.push(i)
        }
        if (this.page + 2 !== this.length) {
          pages.push('...')
        }
        pages.push(this.length)
      }
      return pages
    },
    changePage (newValue) {
      if (newValue !== '...') {
        this.page = newValue
        this.$emit('pageChanged', this.page)
      }
    }
  }
}
</script>

<style scoped>
  .pagination {
    display: flex;
    flex-direction: row;
    width: fit-content;
    padding: 0 10px;
    box-shadow: 0 1px 2px rgba(4, 5, 5, 0.25);
    border-radius: 2px;
    background-color: #fff;
  }

  .pagination .each-page {
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
  }

  .pagination .each-page.clickable {
    cursor: pointer;
  }

  .pagination .each-page.clickable:hover {
    color: #23a121;
  }

  .pagination .each-page.active {
    font-weight: bold;
    color: #23a121;
  }
</style>
