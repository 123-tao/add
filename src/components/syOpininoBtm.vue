<template>
  <v-btn
    class="shake"
    fab
    dark
    color="primary"
    :style="styles"
    fixed
    rel="noopener"
    right
    top
    @click="opininoBtnPath"
  >
    <v-icon dark> mdi-archive </v-icon>
  </v-btn>
</template>

<script>
import 'csshake/dist/csshake.css'
export default {
  name: 'syOpininoBtn',
  computed: {
    styles() {
      return {
        marginTop: `${this.$vuetify.application.top}px`
      }
    }
  },
  methods: {
    opininoBtnPath() {
      this.$router.push({ name: 'opinino' })
    }
  }
}
</script>
