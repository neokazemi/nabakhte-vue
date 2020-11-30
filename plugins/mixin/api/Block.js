import API_ADDRESS from '~/plugins/apiAddresses'

const mixinBlock = {
  methods: {
    api_block_home () {
      const url = API_ADDRESS.block.home

      return this.$axios.get(url)
    },
    api_block_shop () {
      const url = API_ADDRESS.block.shop

      return this.$axios.get(url)
    }
  }
}

export default mixinBlock
