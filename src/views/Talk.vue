<template>
  <v-container fluid class="pa-0">
    <v-col class="fullscreen-video pa-0">
      <div id="videodiv">
        <video id="video" loop="loop" preload="preload" autoplay="autoplay" muted="muted" playsinline="playsinline" webkit-playsinline="webkit-playsinline">
          <source src="../assets/talk.mp4" type="video/mp4"/>
        </video>
      </div>
      <v-hover>
        <v-btn to="home" id="enter" x-large v-ripple class="ma-3" outlined color="red accent-4" :elevation="hover ? 24 : 16">PLAY LIKE A CHAMPION EVERYDAY</v-btn>
      </v-hover>
    </v-col>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Talk',
  components: {

  }
}
</script>

<style lang="stylus">
.fullscreen-video
  position relative
  width 100%
  margin 0
  padding 0
  box-sizing border-box
  overflow hidden
  #videodiv
    height 100vh
    width 100vw
    filter brightness(0.6)
    video
      position fixed
      min-width 100%
      min-height 100%
      left 50%
      top 50%
      transform translate(-50%,-50%)
  #enter
    position absolute
    top 50%
    left 50%
    transform translate(-50%,-50%)
    z-index 1
    text-decoration none
</style>
