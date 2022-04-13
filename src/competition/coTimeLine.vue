<template>
  <div class="time-line " >
    <div class="box hidden-sm-and-down">
      <div class="xian"></div>
      <div class="item" v-for="(item, index) in list" :key="index">
        <div class="circle"></div>
        <div class="c_text">{{ item.text }}</div>
        <spen class="c_time">{{ item.time }}</spen>
        <spen class="c_year">{{ item.year }}</spen>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'coTimeline',
  props: {
    list: Array
  }
}
</script>
<style lang="scss" scoped>
.time-line {
  .box {
    width: 100%;
    background-color: #4b4c84;
  }
  .xian {
    background-color: #eee;
    height: 100%;
    left: 50%;
    margin-left: 1px;
    position: absolute;
    top: 25px;
    width: 1px;
    z-index: 0;
  }
  .item {
    font-weight: 900;
    width: 55%;
    height: 75px;
    color: #cfd1fb;
    line-height: 75px;
    position: relative;
    text-indent: 2em;
    .circle {
      width: 10px;
      height: 10px;
      border: 2px solid #cfd1fb;
      background: #cfd1fb;
      border-radius: 50%;
      position: absolute;
      top: -11px;
      bottom: 0;
      margin-top: auto;
      margin-bottom: auto;
    }
    .c_year {
      font-size: 26px;
      position: absolute;
    }
    .c_time {
      font-size: 12px;
      position: absolute;
    }
  }
  .item:hover {
    background-color: #cfd1fb;
    color: #4b4c84;
  }
  .item:hover .circle {
    background: #cfd1fb;
    border: 2px solid #4b4c84;
  }
  .item:nth-child(even) {
    padding-left: 10%;
  }
  .item:nth-child(even) .circle {
    top: -15px;
    right: 52px;
  }
  .item:nth-child(even) .c_year {
    right: 80px;
    top: -5px;
  }
  .item:nth-child(even) .c_time {
    right: 120px;
    bottom: -15px;
  }
  .item:nth-child(odd) {
    text-align: right;
    left: 45%;
    padding-right: 15%;
  }
  .item:nth-child(odd) .circle {
    left: 55px;
  }
  .item:nth-child(odd) .c_year {
    left: 60px;
    top: -5px;
  }
  .item:nth-child(odd) .c_time {
    left: 100px;
    bottom: -15px;
  }
}
</style>
