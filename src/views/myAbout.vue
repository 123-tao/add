<template>
  <div>
    <div class="box"></div>
    <!-- neir -->
    <div class="myabout-main">
      <div class="left">
        <img src="../image/logo.png" alt="" />
      </div>
      <!-- <div class="content" @click="btnChange">{{ msg }}</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'myAbout'
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 400px;
  background-color: red;
}
.myabout-main {
  width: 100%;
  height: 300px;
  display: flex;
  .left {
    width: 30%;
    height: 100%;
    background-color: pink;
  }
  .content {
    width: 50%;
    height: 100%;
    // bac-color:green;
    background-color: aquamarine;
  }
}
</style>
