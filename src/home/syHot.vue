<template>
  <div>
    <v-container>
      <!-- 手机端 -->
      <v-row class="hidden-md-and-up">
        <v-col cols="12" sm="4" md="4" v-for="(item, index) in cartHotList" :key="index">
          <v-card class="mx-auto" max-width="344">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

            <v-card-title> {{ item.title }} </v-card-title>

            <v-card-subtitle> {{ item.name }} </v-card-subtitle>

            <v-card-actions>
              <v-btn color="primary lighten-2" text> 进入详情 </v-btn>

              <v-spacer></v-spacer>

              <v-btn icon @click="hotChange(item.id)">
                <v-icon>{{ item.hotShow ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="item.hotShow">
                <v-divider></v-divider>

                <v-card-text>
                  {{ item.content }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4" md="4">
          <v-card color="primary" dark>
            <div class="video-title">关于rrr我们<span></span></div>
            <video-player
              class="video-player vjs-custom-skin"
              ref="videoPlayer"
              :playsinline="true"
              :options="playerOptions"
              @play="onPlayerPlay($event)"
              @pause="onPlayerPause($event)"
              @ended="onPlayerEnded($event)"
              @waiting="onPlayerWaiting($event)"
              @playing="onPlayerPlaying($event)"
              @loadeddata="onPlayerLoadeddata($event)"
              @timeupdate="onPlayerTimeupdate($event)"
              @statechanged="playerStateChanged($event)"
              @ready="playerReadied"
            >
            </video-player>
          </v-card>
        </v-col>
      </v-row>

      <!-- 电脑端 -->
      <v-row class="hidden-sm-and-down" no-gutters>
        <v-col lg="12" md="12">
          <!-- 宣传模块  start-->
          <div class="publicity-main">
            <!-- 视频宣传区域  -->
            <div class="publicity-box">
              <div class="publicity-video">
                <!-- 视频插件 -->
                <!-- <video-player
                  class="video-player vjs-custom-skin"
                  ref="videoPlayer"
                  :playsinline="true"
                  :options="playerOptions"
                  @play="onPlayerPlay($event)"
                  @pause="onPlayerPause($event)"
                  @ended="onPlayerEnded($event)"
                  @waiting="onPlayerWaiting($event)"
                  @playing="onPlayerPlaying($event)"
                  @loadeddata="onPlayerLoadeddata($event)"
                  @timeupdate="onPlayerTimeupdate($event)"
                  @statechanged="playerStateChanged($event)"
                  @ready="playerReadied"
                >
                </video-player> -->
                <video ref="videoPlayer" class="video-js"></video>
              </div>
              <div class="publicity-info">
                <div class="right-menu">
                  <h2>关 于 我 们</h2>
                  <div class="right-menu-sync">
                    <p>GUANYUWOMEN</p>
                    <span></span>
                  </div>
                </div>
                <!-- 内容 -->
                <div class="right-content">
                  <p class="text-justify">在计算机科学中,人工智能(AI)有时被称为机器智能,是由机器展示的智能,与人类和动物展示的自然智能形成对比。通俗地说,“人工智能”一词用来描述模仿人类与其他人类思维相关联的“认知”功能的机器,如“学习”和“解决问题”。</p>
                  <!-- <p class="text-justify">
                    人工智能已成为当下热门研究课题,我们邵阳职业技术学院人工智能社团在此基础以及邵阳职业技术学院校团委指导,挂靠在信息技术与创意系下成立。以培养学生学习人工智能知识、人工智能编程以及从事人工智能科技活动为目的, 以成员的实际动手为途径, 培养成员对人工智能技能的学习和应用能力。
                  </p> -->
                </div>
                <div class="right-detail">
                  <v-btn color="#d6d7fb" dark elevation="2" raised large @click="btnChangeAbout">进入详情<v-icon>mdi-youtube </v-icon></v-btn>
                </div>
              </div>
            </div>

            <!-- 社团介绍 -->
            <div class="progress-main">
              <div class="progress-info">
                <div class="right-menu">
                  <h2>社 团 目 标</h2>
                  <div class="right-menu-sync">
                    <p>GUANYUWOMEN</p>
                    <span></span>
                  </div>
                </div>
                <!-- 内容 -->
                <div class="right-content">文本文本文本文本文本文本文本文本文本文本文本文本文本</div>
                <div class="right-detail">
                  <v-btn color="#d6d7fb" dark elevation="2" raised large>进入详情 </v-btn>
                </div>
              </div>
              <div class="progress-img">图 片</div>
            </div>
          </div>
          <!-- 宣传模块  end-->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
import videojs from 'video.js'
export default {
  name: 'syHot',
  components: { videoPlayer },
  data() {
    return {
      cartHotList: [
        {
          id: 1,
          title: '社团目标',
          name: '快来快来写下',
          content: '内容内容内容',
          hotShow: false,
          path: ''
        },
        {
          id: 2,
          title: '社团团员',
          name: '快来快来写下',
          content: '内容内容内容',
          hotShow: false,
          path: ''
        }
      ],
      playerOptions: {
        // playbackRates: [0.5, 1.0, 1.5, 2.0, 3.0], // 可选的播放速度
        autoplay: false, // 如果为true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 是否视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式,并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时,Video.js player将拥有流体大小。换句话说,它将按比例缩放以适应其容器。
        sources: [
          {
            type: 'video/mp4', // 类型
            // src: 'https://syai.top/media/1.1rb70ced.mp4' // url地址
            src: require('../media/1.mp4') // url地址
          }
        ],
        poster: require('../image/pc/banner1.jpg'), // 封面地址
        notSupportedMessage: '此视频暂无法播放,请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, // 当前时间和持续时间的分隔符
          durationDisplay: true, // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          fullscreenToggle: true // 是否显示全屏按钮
        }
      },
      player: null
    }
  },
  methods: {
    hotChange(id) {
      this.cartHotList.map((item) => {
        if (item.id === id) {
          item.hotShow = !item.hotShow
        }
        return item
      })
    },
    // 跳转到
    btnChangeAbout() {
      this.$router.push('/about')
    },
    // 播放回调
    onPlayerPlay(player) {
      console.log('player play!', player)
    },

    // 暂停回调
    onPlayerPause(player) {
      console.log('player pause!', player)
    },

    // 视频播完回调
    onPlayerEnded($event) {
      console.log($event)
    },

    // DOM元素上的readyState更改导致播放停止
    onPlayerWaiting($event) {
      console.log($event)
    },

    // 已开始播放回调
    onPlayerPlaying($event) {
      console.log($event)
    },

    // 当播放器在当前播放位置下载数据时触发
    onPlayerLoadeddata($event) {
      console.log($event)
    },

    // 当前播放位置发生变化时触发。
    onPlayerTimeupdate($event) {
      console.log($event)
    },
    // 播放状态改变回调
    playerStateChanged(playerCurrentState) {
      console.log('player current update state', playerCurrentState)
    },

    // 将侦听器绑定到组件的就绪状态。与事件监听器的不同之处在于，如果ready事件已经发生，它将立即触发该函数。。
    playerReadied(player) {
      console.log('example player 1 readied', player)
    }
  },
  mounted() {
    const options = {
      autoplay: true,
      controls: true,
      sources: [{ src: '../media/1.mp4', type: 'video/mp4' }]
    }
    // 视频
    this.player = videojs(this.$refs.videoPlayer, options, function onPlayerReady() {
      console.log('onPlayerReady', this)
    })
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose()
    }
  }
}
</script>

<style lang="scss">
// 视频video
.video-js .vjs-big-play-button {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.publicity-main {
  width: 100%;
  background-color: var(--light-bg);
  border-radius: 10px;
  overflow: hidden;
  // 宣传模块
  .publicity-box {
    width: 100%;
    // height: 300px;
    display: flex;
    cursor: pointer;
    .publicity-video {
      width: 50%;
      height: 100%;
    }
    .publicity-info {
      width: 50%;
      height: 100%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      .right-menu {
        width: 100%;
        display: flex;
        flex-direction: column;
        h2 {
          margin-bottom: 6px !important;
          font-weight: 400;
          color: var(--light-text);
        }
        .right-menu-sync {
          display: flex;
          align-items: center;
          color: var(--light-text);
          p {
            font-size: 10px;
            margin: 0;
          }
          span {
            margin-left: 4px;
            width: 60px;
            height: 2px;
            background-color: var(--light-border);
          }
        }
      }
      // 内容
      .right-content {
        padding-top: 20px;
        // height: 180px;
        font-family: 'Microsoft YaHei';
        color: var(--light-text);
        p {
          padding-bottom: 6px;
          text-indent: 20px;
        }
      }
      .right-detail {
        width: 120px;
        height: 40px;
      }
    }
  }

  // 社团介绍
  .progress-main {
    width: 100%;
    margin-top: 60px;
    height: 300px;
    display: flex;
    cursor: pointer;

    .progress-info {
      width: 50%;
      height: 100%;
      padding: 20px;
      display: flex;
      flex-direction: column;
      .right-menu {
        width: 100%;
        display: flex;
        flex-direction: column;
        h2 {
          margin-bottom: 6px !important;
          font-weight: 400;
          color: var(--light-text);
        }
        .right-menu-sync {
          display: flex;
          align-items: center;
          color: var(--light-text);
          p {
            font-size: 10px;
            margin: 0;
          }
          span {
            margin-left: 4px;
            width: 60px;
            height: 2px;
            background-color: var(--light-border);
          }
        }
      }
      //  内容
      .right-content {
        padding-top: 20px;
        height: 180px;
        color: var(--light-text);
      }
      .right-detail {
        width: 120px;
        height: 40px;
      }
    }
    .progress-img {
      width: 50%;
      height: 100%;
      background-color: var(--light-border);
      display: flex;
      justify-content: center;
      align-items: center;
      color: var(--light-text);
      font-size: 28px;
    }
  }
}
</style>
