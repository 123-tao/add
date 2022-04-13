<template>
  <v-container app flat>
    <!-- 移动端轮播图 -->
    <nut-swiper loop touchable direction="horizontal" canDragging paginationVisible :speed="500" :autoPlay="4000" width="100%" ref="demo3" class="hidden-md-and-up rounded">
      <div class="nut-swiper-slide gray" v-for="item in itemApp" :key="item.id">
        <img :src="item.src" style="width: 100%; height: 100%" />
      </div>
    </nut-swiper>

    <!-- pc端轮播图 -->
    <v-carousel height="100%" hide-delimiter-background show-arrows-on-hover class="rounded hidden-sm-and-down">
      <v-carousel-item v-for="item in itemsPc" :key="item.id" :src="item.src"> </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  name: 'sySwiper',
  data() {
    return {
      itemsPc: [
        {
          id: 0,
          src: require('../image/pc/banner2.png')
        },
        {
          id: 1,
          src: require('../image/pc/banner1.jpg')
        },
        {
          id: 2,
          src: require('../image/pc/banner2.png')
        },
        {
          id: 3,
          src: require('../image/pc/banner1.jpg')
        }
      ],
      itemApp: [
        {
          id: 0,
          src: require('../image/app/app_banner1.jpg')
        },
        {
          id: 1,
          src: require('../image/app/app_banner2.png')
        },
        {
          id: 2,
          src: require('../image/app/app_banner1.jpg')
        },
        {
          id: 3,
          src: require('../image/app/app_banner2.png')
        }
      ]
    }
  }
}
</script>

<style lang="scss"></style>
