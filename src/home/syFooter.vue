<template>
  <v-footer dark padless color="primary">
    <v-container style="padding: 0">
      <v-card flat tile class="indigo lighten-1 white--text text-center" color="primary">
        <!-- pc端 -->

        <v-card-text class="hidden-sm-and-down">
          <div class="footer-pc">
            <!-- 二维码 -->
            <div class="left-scan">
              <div class="scan"></div>
              <h4>扫描二维码加入我们OKOK</h4>
            </div>
            <!-- 联系我们 -->
            <div class="content-relation">
              <h2>联系我们</h2>
              <div class="contact">
                <div class="phone">
                  <div class="phone-tilt"><v-icon>mdi-phone</v-icon> <span>联系电话:</span></div>
                  <div class="phone-content">
                    <div class="p">社长: <span>+1 8599550385</span></div>
                    <div class="p">办公室: <span>349t43798495854</span></div>
                    <div class="p">宣传部部长: <span>34995854</span></div>
                  </div>
                </div>
                <div class="phone">
                  <!-- 邮箱 -->
                  <div class="phone-tilt"><v-icon>mdi-email</v-icon> <span>邮箱:</span></div>
                  <div class="phone-content">
                    <div class="p">社团邮箱: <span>1924324029@qq.com</span></div>
                  </div>
                </div>
              </div>
            </div>
            <!-- logo -->
            <div class="right-logo">
              <img src="../image/logo.png" alt="" />
              <h4>人工智能协会</h4>
            </div>
          </div>
        </v-card-text>

        <!-- 手机端 -->
        <v-card-text class="hidden-md-and-up">
          <div class="footer-app">
            <!-- 详情信息 -->
            <div class="footer-detail">
              <h4>联系我们</h4>
              <div class="p">会长: <span>+18576554245</span></div>
              <div class="p">办公室: <span>+18576554245</span></div>
              <div class="p">会长: <span>+18576554245</span></div>
            </div>
            <!-- logo -->
            <div class="footer-top">
              <div class="footer-scan">
                <div class="img"></div>
                <h6>扫码加入我们</h6>
              </div>
              <div class="footer-logo">
                <img src="../image/logo.png" alt="" />
                <h6>人工智能协会</h6>
              </div>
            </div>
          </div>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —
          <strong>版权所有@邵阳职院人工智能协会</strong>
        </v-card-text>
      </v-card>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'syFooter'
}
</script>

<style lang="scss">
// PC端样式
.footer-pc {
  width: 100%;
  height: 200px;
  display: flex;
  .left-scan {
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .scan {
      background-color: red;
      width: 120px;
      height: 120px;
    }
  }
  .content-relation {
    width: 60%;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    h2 {
      display: flex;
      justify-content: center;
      padding-bottom: 12px;
    }
    .contact {
      width: 100%;
      height: 100%;
      display: flex;
      .phone {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .phone-tilt {
          font-size: 18px;
          font-weight: 400;
          padding-bottom: 8px;
        }
        .phone-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          .p {
            text-indent: 30px;
            span {
              font-weight: 800;
            }
          }
        }
      }
    }
  }
  .right-logo {
    width: 20%;
    // background-color: bisque;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 100px;
      border-radius: 10px;
    }
    h4 {
      padding-top: 12px;
    }
  }
}

// 手机端的
.footer-app {
  width: 100%;
  display: flex;
  height: 180px;
  .footer-detail {
    width: 60%;
    h4 {
      font-weight: 800;
      padding-bottom: 10px;
    }
    .p {
      display: flex;
      align-items: flex-start;
      padding-bottom: 4px;
      span {
        font-weight: 600;
      }
    }
  }
  .footer-top {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40%;
    .footer-scan {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .img {
        width: 60px;
        height: 60px;
        border-radius: 8px;
        background-color: red;
      }
    }
    .footer-logo {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: 60px;
        height: 60px;
      }
    }
  }
}
</style>
