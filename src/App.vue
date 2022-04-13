<template>
  <v-app>
    <!-- 头部导航模块 -->
    <syapp-bar></syapp-bar>
    <v-main>
      <router-view />
    </v-main>

    <!-- 意见按钮 -->
    <sy-opinino-btn />
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
    syappBar: () => import('./components/syappBar.vue'),
    syOpininoBtn: () => import('./components/syOpininoBtm.vue')
  },
  data: () => ({}),
  mounted() {
    console.log(this.htmlWebpackPlugin)
  }
}
</script>
<style lang="scss">
@import url('./style/theme.css');
#app {
  font-family: SimSun;
  background-color: #f9f9f9;
}
</style>
