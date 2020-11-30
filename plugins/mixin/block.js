import { BlockList } from '~/models/Block'

const mixinBlock = {
  asyncData (context) {
    return (new BlockList()).fetch()
      .then((response) => {
        context.store.commit('block/updateBlocks', response.data.data)
      }).catch(function (e) {
        context.store.commit('block/updateBlocks', null)
      })
  },
  computed: {
    blocks () {
      return this.$store.getters['block/blocks']
    }
  }
}

export default mixinBlock
