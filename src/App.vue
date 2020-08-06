<template lang="pug">
  v-app
    Header(v-if="$route.name != 'Talk'")
    v-main
      router-view
    Footer(v-if="$route.name != 'Talk'")
    Alert
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Alert from './components/Alert.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Alert
  },
  data: () => ({
  }),
  computed: {
    errorType () {
      return this.$store.getters.errorType
    },
    errorMessage () {
      return this.$store.getters.errorMessage
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus">
#app
  // font-family 'Chewy', cursive
  // font-family 'Lato', sans-serif
  font-family 'Noto Sans TC', sans-serif
  background-color white
</style>
