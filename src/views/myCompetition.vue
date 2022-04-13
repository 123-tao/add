<template>
  <v-container>
    <div class="box">
      <img src="../image/pc/banner1.jpg" alt="" />
    </div>
    <time-line :list="course"></time-line>
  </v-container>
</template>

<script>
import TimeLine from '../competition/coTimeLine.vue'
export default {
  name: 'myCompetition',
  components: {
    TimeLine
  },
  data() {
    return {
      course: [
        { year: 2022, time: '02-20', text: '标题' },
        { year: 2022, time: '02-20', text: '标题' },
        { year: 2022, time: '02-20', text: '标题' },
        { year: 2022, time: '02-20', text: '标题' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  padding-bottom: 10px;
  img {
    width: 100%;
  }
}
</style>
