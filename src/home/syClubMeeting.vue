<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="d-flex justify-center">
          <div class="text-h5 font-weight-bold" style="padding-bottom: 10px">社团历程</div>
        </div>
      </v-col>
    </v-row>
    <!-- pc端 -->
    <v-timeline class="hidden-sm-and-down" :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item v-for="(item, index) in years" :key="index" style="padding-bottom: 40px">
        <span slot="opposite">{{ item.year }}</span>
        <v-card class="elevation-2">
          <v-card-title class="text-h6"> {{ item.title }} </v-card-title>
          <v-card-text>
            {{ item.content }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>

    <!-- 移动端 -->
    <v-card-text class="py-0 hidden-md-and-up">
      <div class="font-weight-bold ml-8 mb-2">Today</div>
      <v-timeline align-top dense>
        <v-timeline-item color="primary" small v-for="(item, index) in years" :key="index">
          <v-row class="pt-1">
            <v-col cols="4">
              <strong>{{ item.year }}</strong>
            </v-col>
            <v-col>
              <strong>{{ item.title }}</strong>
              <div class="text-caption">{{ item.content }}</div>
            </v-col>
          </v-row>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>

    <!-- fotoer -->
  </v-container>
</template>

<script>
export default {
  name: 'syClubMeeting',
  data() {
    return {
      years: [
        {
          color: 'primary',
          year: '2022.4.1',
          title: '邵阳职院人工智能社团第三次会议',
          content: '内容内容内容'
        },

        {
          color: 'primary',
          year: '2022.4.1',
          title: '邵阳职院人工智能社团第三次会议',
          content: '内容内容内容'
        },
        {
          color: 'green',
          year: '2022.3.15',
          title: '邵阳职院人工智能社团第二次会议',
          content: '内容内容内容'
        },
        {
          color: 'pink',
          year: '2022.3.15',
          title: '邵阳职院人工智能社团第一次会议',
          content: '内容内容内容'
        }
      ]
    }
  }
}
</script>

<style></style>
