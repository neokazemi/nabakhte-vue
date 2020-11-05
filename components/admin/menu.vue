<template>
  <div>
    <div class="d-flex justify-end ml-5 mb-5">
      <v-btn
        color="#b2dfdb"
        @click.stop="drawer = !drawer"
      >
        منوی ادمین
      </v-btn>
    </div>
    <v-navigation-drawer
      v-model="drawer"
      style="height: 90%;"
      class="mt-3"
      absolute
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAKlBMVEXm5uampqajo6Pp6ena2trW1ta8vLzg4ODExMStra2wsLDIyMi2trbOzs7VYdZ0AAAEMElEQVR4nO2cyZaCMBBFCUEZxP//3SYItgIOkErVi+fdnTvvSWrIQIqCEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBAD/EBR1IH5xw8x6FTXpm+dKwPOtX1zrYpfsRzsLr0bxR4Iv/vLYGn996Lx9aVb2j1Ydpc6b0dfDaO3aXe3dH2Vr+Pg92L0nkcyV0dfdZ/1JskuQ0dfNF+M3/84NrnlHH9qv/cbHdtTVoq+2ec3Ojb5KPqi3y84KPa5zFRffagQLxVdHgnHnw7p3cghGP3p2ABOw4iv6KsYwUERfaLGCuIr1pF+gdpa4i1fN2pvBrGzlniDP8cLDopn2Hkal0YfFHETqohfwFrkBTJzNAA6T6Xm6KiIOU87MUHnEPOpv8oN4TCIV8BBbAUFnWutdVZIRmEALxK9ZBQGOjTD6I57SVlZKz0jVwvvhmg1UdgvYK30jHCeCZQna6lHjuwefjTE2l2UzqQBqL5GYmm/BmixL13ubyAVfX9JYngBMhSvhqMhUkVMkWiwUk0SQaSanyaVIiVT8bb7BlDzTcOjhjidaZKCT0NVGIf5G/5+Pfz9nkZ4N3gGaFfYH7oh9Imyx1lbpNimwdqokT2VuRsinc4kKRdAxaJIk2qAEk2abQyoTYwkgQgVhmm6GqCOpggVUVwQqBqOiC+ggJZON7ywoHNgQyi+7Y204T0jKgi1rpiQ7U2RetI7sgUDq1TckIxExCgMyDWnUC3pP/G32Gdgb7NLJRvINDMhcJEd/Cq7TD5FzKMzElcWkC4obBC/UARbFq6JzTbIWWYiTjEDwTjFLARj2jfUZm2FPx36TLbM4gvSG74+UPrLLq8nMnYHY9lY/+Wd7HxyILcHBwJ+z5Fb2Wf3Go+vm13ZpnRNVlHoq/OOZz8mx/KMuipc8d2zNFuOeTxU4+tjfpMj/Fzd9yzNliP4QzW7n6XZcESuG74Q+loddRgPv9qyUgR9xeX3d4RFj/LL3lpnia+jU8xCscWqG2Ih+KAIFYyDYApwFNN82AW0c5pKEEYxnSCIYqIYnAGIxVR3vGfsj2lEDtReY37UlubbyidF2yuKaT6PXSha9qhyJ/dvFS2zTZqvEJbY3cxIc0V/jd2JlMocHRWt7rTrzNGAzTzVyKMzNvm01hMcFA1am/S1/snQoO6rpZlJUT3Z6A6hxSAqD6H+IGoPof4gpl4VbqGaTjVr4YxuTZT/fuQbNA3V80xAM9fo55nRUDPXGPgF9AQT7pC+Q+9zNptJqjpN9RaGz6gtE00yaUArm6Z5X+ArQ6Vb7lZhqBiIVmGoFogWXfeMTvdtlmi0Uo1dotFKNVo73ZuGKrvfdqlUK5mKvy+/B5W36G1WvzMqBdHUUENQdTd/icruPg1piG9o2LQptW11aYlK611ZoiFICCGEEEIIIYQQQgghhBBCCCG58gf0kT01WC/S1QAAAABJRU5ErkJggg==" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>هلیا محمدی</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :href="item.link"
          link
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  data () {
    return {
      drawer: null,
      items: [
        { title: 'کاربران', icon: 'mdi-view-dashboard', link: '/admin/users-permissions-roles' },
        { title: 'سفارشات', icon: 'mdi-view-dashboard', link: '/admin/orders' },
        { title: 'محصولات / کپن ها / صفت ها', icon: 'mdi-view-dashboard', link: '/admin/products-coupons-attributes' },
        { title: 'محتوا', icon: 'mdi-view-dashboard', link: '/admin/content' },
        { title: 'منابع', icon: 'mdi-view-dashboard', link: '/admin/resources' }
      ]

    }
  }
}
</script>
<style scoped>
.drawer-height {
  height: 50%;
}
</style>
