<!--<template>-->
<!--  <div class="text-center">-->
<!--    <v-snackbar-->
<!--      v-model="snackbar.show"-->
<!--      :timeout="snackbar.timeout"-->
<!--      bottom-->
<!--      left-->
<!--      :color="snackbar.color"-->
<!--      :style="snackbar.style"-->
<!--    >-->
<!--      {{ snackbar.text }}-->
<!--    </v-snackbar>-->
<!--    <v-text-field v-model="text" />-->
<!--    <v-btn @click="showSnackbar(text, 'success')" />-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import mixinDetectDevice from '../../plugins/mixinDetectDevice'-->
<!--import mixinStore from '../../plugins/mixinStore'-->
<!--export default {-->
<!--  name: 'Index',-->
<!--  mixins: [mixinDetectDevice, mixinStore],-->
<!--  data () {-->
<!--    return {-->
<!--      text: ''-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<template>
  <v-container>
    <v-row>
      <v-col>
        <v-slide-group show-arrows>
          <v-slide-item v-for="(item, index) in products.list" :key="index">
            <div :style="{ width: 291 }">
              <ProductCard :type="1" :product="item">
                {{ item.name }}
              </ProductCard>
            </div>
          </v-slide-item>
        </v-slide-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductCard from '../../components/ProductCard/ProductCard'
import mixinDetectDevice from '~/plugins/mixinDetectDevice'
import mixinProduct from '~/plugins/mixinProduct'

export default {
  name: 'Index',
  components: { ProductCard },
  mixins: [mixinDetectDevice, mixinProduct],
  data () {
    return {}
  }
}
</script>
