<template>
  <div class="home-body">
    <!-- 轮播图模块 -->
    <sy-swiper />

    <!-- hot卡片模块 -->
    <sy-hot />
    <!-- 关于我们简历卡片-->
    <sy-introduce />

    <!-- 社团历程 -->
    <sy-club-meeting />

    <!-- footer模块 -->
    <sy-footer />
  </div>
</template>

<script>
export default {
  name: 'myHome',
  components: {
    sySwiper: () => import('../home/sySwiper.vue'),
    syHot: () => import('../home/syHot.vue'),
    syIntroduce: () => import('../home/syIntroduce.vue'),
    syClubMeeting: () => import('../home/syClubMeeting.vue'),
    syFooter: () => import('../home/syFooter.vue')
  },

  methods: {
    hostd() {
      console.log('okok')
    }
  }
}
</script>
<style lang="scss">
// @import url('../style/theme.css');
// .home-body {
//   background-color: var(--main);
// }
.v-image__image {
  transition: 0.3s linear;
}
.a {
  width: 80%;
  height: 0;
  border-bottom: 2px #8b0012 solid;
}
.box {
  position: relative;
  ::before {
    content: '';
  }
}
</style>
