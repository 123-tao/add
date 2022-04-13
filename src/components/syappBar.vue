<template>
  <v-app-bar app flat color="primary" dark>
    <!-- src="https://picsum.photos/1920/1080?random" -->
    <v-container class="mx-auto py-0">
      <v-row class="align-center">
        <!-- logo -->
        <v-img
          :src="require('@/image/logo.png')"
          class="mr-5 foolishIn"
          contain
          height="48"
          width="48"
          max-width="48"
        />

        <!-- 标题 -->
        <v-toolbar-title>人工智能协会</v-toolbar-title>
        <v-spacer />

        <!-- nav模块 -->
        <v-btn-toggle
          v-model="toggleNavId"
          mandatory
          tile
          group
          class="hidden-sm-and-down"
        >
          <v-btn
            v-for="(item, index) in navList"
            :key="index"
            @click="toggleItem(item)"
            class="hvr-grow"
            >{{ item.title }}</v-btn
          >
        </v-btn-toggle>

        <!-- 移动端nav -->
        <v-menu left bottom transition="scale-transition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" class="hidden-md-and-up">
              <v-app-bar-nav-icon color="#fff" />
            </v-btn>
          </template>
          <v-list>
            <v-list-item-group v-model="toggleNavId" mandatory color="indigo">
              <v-list-item
                v-for="(item, i) in navList"
                :key="i"
                @click="toggleItem(item)"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import 'hover.css/css/hover.css'

export default {
  name: 'syappBar',
  data() {
    return {
      navList: [
        { id: 0, title: '首页', path: '/home' },
        { id: 1, title: '比赛动态', path: '/competition' },
        { id: 2, title: '关于我们', path: '/about' },
        { id: 3, title: '成品展示', path: '/finished' }
      ],
      toggleNavId: 0
    }
  },
  created() {
    // 重定向路由指定导航某个
    this.navList.map((item) => {
      if (this.$route.path === item.path) {
        this.toggleNavId = item.id
      }
      return item
    })
  },
  methods: {
    // 点击某个nav跳转
    toggleItem(item) {
      this.toggleNavId = item.id
      this.$router.push(item.path)
    }
  }
}
</script>
<style lang="scss" scoped></style>
